function reloadCurrentSpotsData() {
  if (currentRankType === "black") {
    const blacklistSource = typeof ALL_BLACKLIST_SPOTS !== "undefined" 
      ? ALL_BLACKLIST_SPOTS 
      : (typeof LUOYANG_BLACKLIST_SPOTS !== "undefined" ? LUOYANG_BLACKLIST_SPOTS : []);
    allSpots = blacklistSource.filter(s => s.city === currentCity);
  } else {
    allSpots = ALL_FOOD_SPOTS.filter(s => s.city === currentCity && !s.isBlacklist);
  }
}


// 切换红榜与黑榜
function switchRankList(type) {
  if (currentRankType === type) return;
  currentRankType = type;

  const btnRed = document.getElementById("btnRedList");
  const btnBlack = document.getElementById("btnBlackList");
  if (btnRed && btnBlack) {
    if (type === "black") {
      btnBlack.className = "px-2 py-0.5 rounded-full text-[11px] font-extrabold transition cursor-pointer bg-gray-900 text-white shadow-2xs flex items-center space-x-0.5";
      btnRed.className = "px-2 py-0.5 rounded-full text-[11px] font-bold text-gray-500 hover:text-black transition cursor-pointer flex items-center space-x-0.5";
    } else {
      btnRed.className = "px-2 py-0.5 rounded-full text-[11px] font-extrabold transition cursor-pointer bg-[#d32323] text-white shadow-2xs flex items-center space-x-0.5";
      btnBlack.className = "px-2 py-0.5 rounded-full text-[11px] font-bold text-gray-500 hover:text-black transition cursor-pointer flex items-center space-x-0.5";
    }
  }

  // 更新搜索框 placeholder
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = "";
    if (type === "black") {
      searchInput.placeholder = currentCity === "luoyang" 
        ? "搜索避雷、踩雷店铺、水席刺客..." 
        : "搜索郑州避雷、踩雷老店、夜市刺客...";
    } else {
      searchInput.placeholder = currentCity === "luoyang" 
        ? "搜索牛肉汤、小街锅贴、水席..." 
        : "搜索胡辣汤、合记烩面、炒八掺...";
    }
  }

  // 重置筛选
  currentBloggerId = "all";
  currentCategory = "all";
  searchQuery = "";

  // 重新载入数据
  reloadCurrentSpotsData();

  // 刷新品类、博主与卡片
  expandCards();
  renderCategoryPills();
  renderBloggerPills();
  applyFilters(true);
}

// 美食探店地图 · 洛阳 & 郑州多城市版 · Yelp 经典数字 Pin 与黑色图钉避雷黑榜

let map;
let markersLayer;
let currentCity = "luoyang"; // 默认洛阳，可平滑切换郑州
let currentRankType = "red";  // 默认红榜 'red'，可切换黑榜 'black'
let allSpots = [];
let filteredSpots = [];
let activeSpotId = null;
let currentBloggerId = "all";
let currentCategory = "all";
let searchQuery = "";
let isSidebarCollapsed = false;
let scrollTimeout = null;

// 收藏店铺状态管理 (持久化至 localStorage)
let favoriteSpotIds = new Set(JSON.parse(localStorage.getItem("favorite_spots") || "[]"));

function isSpotFavorited(spotId) {
  return favoriteSpotIds.has(spotId);
}

// 轻量级原生微信风格 Toast 提示器
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "fixed top-14 left-1/2 -translate-x-1/2 z-[10000] bg-gray-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium shadow-xl transition-all duration-300 pointer-events-none opacity-0 translate-y-2 flex items-center space-x-1.5";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.remove("opacity-0", "translate-y-2");
  toast.classList.add("opacity-100", "translate-y-0");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-2");
  }, 1800);
}

function toggleFavoriteSpot(spotId, event) {
  if (event) event.stopPropagation();
  const spot = allSpots.find(s => s.id === spotId);
  const spotName = spot ? spot.name : "店铺";

  if (favoriteSpotIds.has(spotId)) {
    favoriteSpotIds.delete(spotId);
    showToast(`已取消收藏：${spotName}`);
  } else {
    favoriteSpotIds.add(spotId);
    showToast(`⭐ 已收藏：${spotName}`);
  }
  localStorage.setItem("favorite_spots", JSON.stringify(Array.from(favoriteSpotIds)));

  // 同步刷新页面上所有对应店铺的收藏图标
  document.querySelectorAll(`.favorite-icon-${spotId}`).forEach(icon => {
    if (favoriteSpotIds.has(spotId)) {
      icon.className = `favorite-icon-${spotId} ph-fill ph-star text-amber-500 text-lg leading-none transition-transform active:scale-125`;
    } else {
      icon.className = `favorite-icon-${spotId} ph ph-star text-gray-500 group-hover:text-amber-500 text-lg leading-none transition-transform active:scale-125`;
    }
  });

  // 同步更新顶部和品类胶囊中的收藏角标数字
  updateFavoriteBadgeCounts();

  // 若当前正处于【我的收藏】视图下，实时刷新列表与地图 Pin
  if (currentCategory === "favorites" || currentBloggerId === "favorites") {
    applyFilters();
  }
}

function updateFavoriteBadgeCounts() {
  const count = allSpots.filter(s => favoriteSpotIds.has(s.id)).length;
  document.querySelectorAll(".fav-badge-count").forEach(el => {
    el.textContent = count;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. 初始化当前城市的数据
  reloadCurrentSpotsData();
  
  // 2. 初始化地图
  initMap();

  // 3. 渲染二级品类与博主胶囊
  renderCategoryPills();
  renderBloggerPills();

  // 4. 应用筛选渲染店铺
  applyFilters();

  // 5. 监听下方卡片滑动
  setupSliderScrollListener();

  // 6. 全局点击关闭城市下拉菜单
  document.addEventListener("click", (e) => {
    const container = document.getElementById("cityDropdownContainer");
    const menu = document.getElementById("cityDropdownMenu");
    const caret = document.getElementById("cityCaretIcon");
    if (container && !container.contains(e.target) && menu && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      if (caret) caret.classList.remove("rotate-180");
    }
  });

  // 7. 优雅平滑关闭启动加载屏 (延时 300ms 保证地图底图与首批卡片渲染就绪)
  setTimeout(dismissSplashScreen, 300);
  // 保底安全网：1.5s 强制关闭
  setTimeout(dismissSplashScreen, 1500);
});

// 优雅关闭启动加载屏
function dismissSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash || splash._dismissed) return;
  splash._dismissed = true;
  splash.style.transition = "opacity 0.35s ease-out";
  splash.style.opacity = "0";
  splash.style.pointerEvents = "none";
  setTimeout(() => {
    if (splash.parentNode) splash.parentNode.removeChild(splash);
  }, 380);
}


// 底部卡片折叠沉浸态管理 (地图拖拽/缩放时下移收起，点击/拖动卡片或点击Pin时展开恢复)
let isCardsCollapsed = false;

function collapseCards() {
  if (isCardsCollapsed) return;
  isCardsCollapsed = true;
  const slider = document.getElementById("bottomCardSlider");
  if (slider) {
    slider.classList.add("is-collapsed");
  }
}

function expandCards() {
  if (!isCardsCollapsed) return;
  isCardsCollapsed = false;
  const slider = document.getElementById("bottomCardSlider");
  if (slider) {
    slider.classList.remove("is-collapsed");
  }
}

function setupCardInteractionListeners() {
  const slider = document.getElementById("bottomCardSlider");
  if (!slider || slider._hasCollapseListeners) return;
  slider._hasCollapseListeners = true;

  // 用户点击、触摸或鼠标按下底栏卡片时，立即恢复展开原样
  slider.addEventListener("click", () => {
    if (isCardsCollapsed) expandCards();
  });
  slider.addEventListener("touchstart", () => {
    if (isCardsCollapsed) expandCards();
  }, { passive: true });
  slider.addEventListener("mousedown", () => {
    if (isCardsCollapsed) expandCards();
  });
}

// 1. 初始化地图
function initMap() {
  const cityConf = CITIES[currentCity] || CITIES.luoyang;
  map = L.map("map", {
    center: cityConf.center,
    zoom: cityConf.zoom,
    zoomControl: false
  });

  if (window.innerWidth >= 768) {
    L.control.zoom({ position: "bottomright" }).addTo(map);
  }

  L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
    subdomains: ["1", "2", "3", "4"],
    minZoom: 10,
    maxZoom: 18,
    attribution: "© AutoNavi"
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);

  // 🌟 需求2：当用户缩放或拖动地图时，将卡片下移收起（只露出一小截），最大化显示地图面积 🌟
  map.on("dragstart", () => {
    collapseCards();
  });

  map.on("zoomstart", () => {
    if (!map._isProgrammaticFly) {
      collapseCards();
    }
  });

  setupCardInteractionListeners();
}

// 2. 城市切换控制与下拉菜单
function toggleCityDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById("cityDropdownMenu");
  const caret = document.getElementById("cityCaretIcon");
  if (!menu) return;
  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
    if (caret) caret.classList.add("rotate-180");
  } else {
    menu.classList.add("hidden");
    if (caret) caret.classList.remove("rotate-180");
  }
}

function switchCity(cityKey, event) {
  if (event) event.stopPropagation();
  if (currentCity === cityKey) {
    toggleCityDropdown();
    return;
  }

  currentCity = cityKey;
  const cityConf = CITIES[cityKey];

  // 更新下拉菜单勾选与标签
  const labelEl = document.getElementById("currentCityLabel");
  if (labelEl) labelEl.textContent = cityConf.name;

  const checkLuoyang = document.getElementById("check-luoyang");
  const checkZhengzhou = document.getElementById("check-zhengzhou");
  if (checkLuoyang && checkZhengzhou) {
    checkLuoyang.classList.toggle("hidden", cityKey !== "luoyang");
    checkZhengzhou.classList.toggle("hidden", cityKey !== "zhengzhou");
  }

  // 明确关闭下拉菜单
  const cityMenu = document.getElementById("cityDropdownMenu");
  const cityCaret = document.getElementById("cityCaretIcon");
  if (cityMenu) cityMenu.classList.add("hidden");
  if (cityCaret) cityCaret.classList.remove("rotate-180");

  // 更新搜索框占位文字
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = "";
    if (currentRankType === "black") {
      searchInput.placeholder = cityKey === "luoyang" 
        ? "搜索避雷、踩雷店铺、水席刺客..." 
        : "搜索郑州避雷、踩雷老店、夜市刺客...";
    } else {
      searchInput.placeholder = cityKey === "luoyang" 
        ? "搜索牛肉汤、小街锅贴、水席..." 
        : "搜索胡辣汤、合记烩面、炒八掺...";
    }
  }
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");

  // 重置筛选条件
  currentBloggerId = "all";
  currentCategory = "all";
  searchQuery = "";

  // 重新加载该城市点位
  reloadCurrentSpotsData();

  // 地图平滑飞跃到该城市
  if (map) {
    map.flyTo(cityConf.center, cityConf.zoom, { duration: 1.0 });
  }

  // 刷新品类、博主胶囊与卡片列表
  expandCards();
  renderCategoryPills();
  renderBloggerPills();
  applyFilters(true);
}

// 3. 动态渲染当前城市的二级品类胶囊
function renderCategoryPills() {
  const container = document.getElementById("categoryContainer");
  if (!container) return;

  const cityConf = CITIES[currentCity] || CITIES.luoyang;
  const categories = cityConf.categories || [
    { id: "all", name: "全部" }
  ];

  const cityFavCount = allSpots.filter(s => favoriteSpotIds.has(s.id)).length;
  const isFavActive = currentCategory === "favorites";
  const favPillHtml = `
    <button 
      onclick="filterCategory('favorites')" 
      class="cat-pill px-2.5 py-1 rounded-full text-xs font-semibold transition flex-shrink-0 cursor-pointer flex items-center space-x-1 ${isFavActive ? 'bg-amber-500 text-white shadow-xs ring-2 ring-amber-400/40' : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300/80'}" 
      data-cat="favorites"
      title="只看已收藏店铺"
    >
      <i class="ph-fill ph-star text-[11px] ${isFavActive ? 'text-white' : 'text-amber-500'}"></i>
      <span>我的收藏</span>
      <span class="fav-badge-count text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isFavActive ? 'bg-white/30 text-white' : 'bg-amber-200/70 text-amber-900'}">${cityFavCount}</span>
    </button>
  `;

  const catBtnsHtml = categories.map(cat => {
    const isActive = cat.id === currentCategory;
    const count = cat.id === "all" ? allSpots.length : allSpots.filter(s => s.category === cat.id).length;
    const activeClass = currentRankType === 'black' ? 'bg-gray-900 text-white shadow-2xs' : 'bg-[#d32323] text-white shadow-2xs';
    return `
      <button 
        onclick="filterCategory('${cat.id}')" 
        class="cat-pill px-2.5 py-1 rounded-full text-xs font-medium transition flex-shrink-0 cursor-pointer ${isActive ? activeClass : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}" 
        data-cat="${cat.id}"
      >
        ${cat.name} ${cat.id === 'all' ? `(<span id="totalCount">${count}</span>)` : ''}
      </button>
    `;
  }).join('');

  container.innerHTML = favPillHtml + catBtnsHtml;
}

// 4. 渲染顶部 UP 主筛选胶囊 (根据红黑榜与当前城市真实博主动态渲染，并在最前放置我的收藏)
function renderBloggerPills() {
  const container = document.getElementById("bloggerCardsContainer");
  if (!container) return;

  // 根据当前红黑榜状态，选用对应的博主元数据来源 (红榜与黑榜真实探店UP主严格区分)
  const sourceBloggers = currentRankType === "black"
    ? (typeof BLACK_FOOD_BLOGGERS !== "undefined" ? BLACK_FOOD_BLOGGERS : FOOD_BLOGGERS)
    : (typeof RED_FOOD_BLOGGERS !== "undefined" ? RED_FOOD_BLOGGERS : FOOD_BLOGGERS);

  // 找出在当前城市和当前榜单中真正有探店点位的博主 ID
  const cityBloggerIds = new Set(allSpots.map(s => s.bloggerId));

  const bloggersToShow = sourceBloggers.filter(b => {
    return b.id === "all" || cityBloggerIds.has(b.id);
  });

  // 如果当前选中的博主在当前列表中不存在且不是 favorites，自动重置为全部博主
  if (currentBloggerId !== "favorites" && !bloggersToShow.some(b => b.id === currentBloggerId)) {
    currentBloggerId = "all";
  }

  const cityFavCount = allSpots.filter(s => favoriteSpotIds.has(s.id)).length;
  const isFavActive = currentBloggerId === "favorites";

  // 全端可见的常驻【我的收藏】胶囊
  const favBtnHtml = `
    <button 
      onclick="selectBlogger('favorites')"
      class="blogger-btn ${isFavActive ? 'bg-amber-500 text-white border-amber-600 shadow-xs ring-2 ring-amber-400/30' : 'bg-amber-50/90 hover:bg-amber-100 text-amber-800 border-amber-300/80'} 
             flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold flex-shrink-0 transition outline-none cursor-pointer"
      title="只看已收藏店铺"
    >
      <i class="ph-fill ph-star text-xs ${isFavActive ? 'text-white' : 'text-amber-500'}"></i>
      <span class="tracking-tight">我的收藏</span>
      <span class="fav-badge-count text-[11px] px-1.5 py-0.2 rounded-full font-bold ${isFavActive ? 'bg-white/25 text-white' : 'bg-amber-200/80 text-amber-900'}">
        ${cityFavCount}
      </span>
    </button>
  `;

  const activeThemeClass = currentRankType === 'black' ? 'active is-black' : 'active is-red';

  const bloggersHtml = bloggersToShow.map(b => {
    const count = b.id === "all" ? allSpots.length : allSpots.filter(s => s.bloggerId === b.id).length;
    const isActive = b.id === currentBloggerId;

    return `
      <button 
        onclick="selectBlogger('${b.id}')"
        class="blogger-btn ${isActive ? activeThemeClass : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'} 
               flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold flex-shrink-0 transition outline-none cursor-pointer"
      >
        ${b.id !== 'all' ? `<img src="${b.avatar}" class="w-5 h-5 rounded-full object-cover flex-shrink-0 border border-white/40" />` : ''}
        <span class="tracking-tight">${b.name}</span>
        <span class="count-badge text-[11px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'}">
          ${count}
        </span>
      </button>
    `;
  }).join('');

  container.innerHTML = favBtnHtml + bloggersHtml;
}

// 5. 选择博主筛选 (支持收藏筛选与普通博主切换)
function selectBlogger(bloggerId) {
  expandCards();
  if (bloggerId === "favorites") {
    currentBloggerId = "favorites";
    currentCategory = "favorites";
  } else {
    currentBloggerId = bloggerId;
    if (currentCategory === "favorites") {
      currentCategory = "all";
    }
  }
  renderBloggerPills();
  renderCategoryPills();
  applyFilters(true);
}

// 6. 地图数字 Pin 渲染 (支持红榜数字、黑榜图钉与我的收藏金色星标)
function renderMarkers(spots) {
  markersLayer.clearLayers();
  const isFavoritesMode = currentCategory === "favorites" || currentBloggerId === "favorites";

  spots.forEach((spot, index) => {
    const num = index + 1;
    const isActive = spot.id === activeSpotId;
    
    let pinClass = currentRankType === 'black' ? 'yelp-black-pin' : 'yelp-num-pin';
    let iconHtml = `<span>${num}</span>`;

    // 若当前为【我的收藏】视图，显示专属金色星标 Pin
    if (isFavoritesMode) {
      pinClass = 'yelp-fav-pin';
      iconHtml = `<span>⭐${num}</span>`;
    }

    const customIcon = L.divIcon({
      className: `${pinClass} ${isActive ? 'active' : ''}`,
      html: iconHtml,
      iconSize: isActive ? [38, 38] : [28, 28],
      iconAnchor: isActive ? [19, 19] : [14, 14]
    });

    const marker = L.marker([spot.lat, spot.lng], { icon: customIcon });

    marker.on("click", (e) => {
      L.DomEvent.stopPropagation(e);
      selectSpot(spot.id, true);
    });

    markersLayer.addLayer(marker);
  });
}

// 7. 渲染地图下方横滑卡片 (矩形圆角菜品框 + 红色定位Pin + 三大地图到店导航)
function renderBottomCards(spots) {
  const track = document.getElementById("bottomCardsTrack");
  if (!track) return;

  if (spots.length === 0) {
    const isFav = currentCategory === 'favorites' || currentBloggerId === 'favorites';
    if (isFav) {
      track.innerHTML = `
        <div class="bg-white rounded-2xl p-5 text-center text-xs text-gray-500 w-full shadow-lg border border-amber-200/80">
          <div class="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-xl mb-1.5">
            <i class="ph-fill ph-star"></i>
          </div>
          <p class="font-bold text-gray-800 text-sm">当前暂无收藏店铺</p>
          <p class="text-gray-500 mt-1">浏览餐馆时，点击卡片左下角的 <span class="text-amber-600 font-semibold">[☆ 收藏]</span> 即可加入心愿单</p>
          <button onclick="clearFavoriteFilter()" class="mt-3 px-3.5 py-1.5 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-black transition cursor-pointer shadow-xs">
            浏览全部推荐
          </button>
        </div>
      `;
    } else {
      track.innerHTML = `
        <div class="bg-white rounded-2xl p-4 text-center text-xs text-gray-400 w-full shadow-lg border border-gray-200">
          当前分类下暂无探店推荐
        </div>
      `;
    }
    return;
  }

  track.innerHTML = spots.map((spot, index) => {
    const num = index + 1;
    const isActive = spot.id === activeSpotId;

    const cardStateClasses = isActive 
      ? (currentRankType === 'black' 
          ? 'scale-[1.03] md:scale-[1.05] z-20 border-2 border-gray-950 ring-4 ring-gray-950/20 shadow-2xl' 
          : 'scale-[1.03] md:scale-[1.05] z-20 border-2 border-[#d32323] ring-4 ring-[#d32323]/20 shadow-2xl') 
      : 'scale-100 z-10 border border-gray-200/90 shadow-md hover:border-gray-300 hover:shadow-lg';

    return `
      <div 
        id="bcard-${spot.id}"
        data-id="${spot.id}"
        data-index="${index}"
        onclick="selectSpot('${spot.id}', true)" 
        class="bottom-slider-item w-[78vw] sm:w-[320px] md:w-[335px] lg:w-[345px] flex-shrink-0 bg-white opacity-100 rounded-2xl p-3 cursor-pointer text-left ${cardStateClasses}"
      >
        <div class="flex space-x-3 items-center">
          <!-- 封面图 (纯净无遮挡) -->
          <div class="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 shadow-2xs">
            <img src="${spot.cover}" alt="${spot.name}" class="w-full h-full object-cover" />
          </div>

          <!-- 标题与评分 -->
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-gray-900 text-xs sm:text-sm truncate leading-tight">
              ${num}. ${spot.name}
            </h4>
            
            <div class="flex items-center space-x-1.5 mt-1">
              <span class="text-[#d32323] text-xs font-bold">★★★★★</span>
              <span class="text-xs font-semibold text-gray-800">${spot.rating}</span>
              <span class="text-[11px] text-gray-400">(${spot.reviewCount})</span>
            </div>

            <!-- 区域与人均价格：带位置图标，点击调起地图导航三选一 -->
            <div onclick="openNavigationModal('${spot.id}', event)" class="inline-flex items-center text-[11px] text-gray-500 hover:text-gray-900 mt-0.5 truncate cursor-pointer group/nav" title="点击选择地图导航到店">
              <i class="ph-bold ph-map-pin text-[#d32323] mr-1 flex-shrink-0 group-hover/nav:scale-125 transition-transform"></i>
              <span class="hover:underline underline-offset-2">${spot.district}</span>
              <span class="mx-1 text-gray-300">·</span>
              <b class="text-gray-900 font-medium">${spot.avgPrice}</b>
            </div>
          </div>
        </div>

        <!-- 🌟 Yelp 规范常驻完整评语与商户信息 🌟 -->
        <div class="mt-2 bg-gray-50/90 border border-gray-100/90 rounded-xl p-2.5 text-[11px] text-left">
          <!-- 完整博主评语 (直接展示，不截断) -->
          <p class="text-gray-700 italic leading-relaxed">
            <span class="not-italic font-semibold text-gray-900 mr-1">${spot.blogger}:</span>
            <span>${spot.quote}</span>
          </p>

          <!-- Yelp 核心商业信息栏 (营业时间 + 电话 + 详细地址) -->
          <div class="mt-2 pt-2 border-t border-gray-200/60 space-y-1.5 not-italic text-left">
            <!-- 1. 营业时间 (智能绿标营业中) -->
            <div class="flex items-center text-gray-700 text-[11px]">
              <i class="ph-bold ph-clock text-gray-400 mr-1.5 flex-shrink-0 text-xs"></i>
              <span class="font-medium text-gray-900 mr-1.5">营业时间:</span>
              <span class="text-gray-600 mr-2">${spot.hours || '10:00 - 22:00'}</span>
              <span class="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-200/80">
                ● 营业中
              </span>
            </div>

            <!-- 2. 联系电话 -->
            <div class="flex items-center text-gray-700 text-[11px]">
              <i class="ph-bold ph-phone text-gray-400 mr-1.5 flex-shrink-0 text-xs"></i>
              <span class="font-medium text-gray-900 mr-1.5">联系电话:</span>
              <a href="tel:${spot.phone || ''}" onclick="event.stopPropagation();" class="text-blue-600 hover:underline font-semibold">
                ${spot.phone || '暂无登记'}
              </a>
            </div>

            <!-- 3. 详细地址 (点击也可调起地图导航) -->
            <div onclick="openNavigationModal('${spot.id}', event)" class="flex items-start text-gray-700 text-[11px] cursor-pointer group/addr hover:text-gray-900" title="点击选择地图导航到店">
              <i class="ph-bold ph-map-pin text-[#d32323] mr-1.5 flex-shrink-0 text-xs mt-0.5 group-hover/addr:scale-125 transition-transform"></i>
              <div class="flex-1">
                <span class="font-medium text-gray-900 mr-1">详细地址:</span>
                <span class="text-gray-600 group-hover/addr:text-blue-600 group-hover/addr:underline underline-offset-2">${spot.fullAddress || spot.district}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 1. 推荐菜文字胶囊 (保留价格，单行横向丝滑滑动 + 拖拽 + 滚轮横移) -->
        <div class="dishes-scroll-wrapper relative group/dishes mt-2.5 pt-2 border-t border-gray-100/90">
          <div class="dishes-scroll-container flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5 select-none">
            ${(spot.dishes || []).slice(0, 5).map(d => `
              <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100/90 text-gray-800 text-xs font-medium flex-shrink-0 whitespace-nowrap border border-gray-200/60 pointer-events-none">
                ${d.name} <span class="text-gray-400 mx-1">·</span> <span class="text-[#d32323] font-semibold">${d.price}</span>
              </span>
            `).join('')}
          </div>
          <!-- 滚动右侧微渐变提示 -->
          <div class="dishes-scroll-hint pointer-events-none absolute right-0 top-2 bottom-0 w-8 bg-gradient-to-l from-white/95 to-transparent flex items-center justify-end pr-0.5 text-gray-400 opacity-0 transition-opacity">
            <i class="ph-bold ph-caret-right text-[10px] opacity-70"></i>
          </div>
        </div>

        <!-- 2. 底部精简操作栏 (优化呼吸间距: 收藏/反馈紧凑精致，探店视频/导航微缩padding，中间空隙拉开) -->
        <div class="mt-2.5 pt-2 border-t border-gray-100/90 flex items-center justify-between">
          <!-- 左侧轻量辅助图标 (间距微调至 space-x-2.5) -->
          <div class="flex items-center space-x-2.5 pl-0.5">
            <!-- 收藏 -->
            <button 
              type="button"
              onclick="toggleFavoriteSpot('${spot.id}', event)"
              class="flex flex-col items-center justify-center text-gray-500 hover:text-amber-500 transition group cursor-pointer"
              title="收藏该店铺"
            >
              <i class="favorite-icon-${spot.id} ${isSpotFavorited(spot.id) ? 'ph-fill ph-star text-amber-500' : 'ph ph-star text-gray-500 group-hover:text-amber-500'} text-base leading-none transition-transform active:scale-125"></i>
              <span class="text-[10px] mt-1 leading-none text-gray-500 group-hover:text-gray-700">收藏</span>
            </button>

            <!-- 反馈 -->
            <button 
              type="button"
              data-feedback-id="${spot.id}"
              onclick="openFeedbackModal('${spot.id}', event)"
              class="flex flex-col items-center justify-center text-gray-500 hover:text-[#d32323] transition group cursor-pointer"
              title="纠错反馈"
            >
              <i class="ph ph-flag text-base leading-none transition-transform active:scale-125 group-hover:text-[#d32323]"></i>
              <span class="text-[10px] mt-1 leading-none text-gray-500 group-hover:text-gray-700">反馈</span>
            </button>
          </div>

          <!-- 右侧核心行动按钮 (紧凑高质感，微缩小屏padding腾出中间呼吸位) -->
          <div class="flex items-center space-x-1.5 flex-shrink-0">
            <!-- [▶ 探店视频] -->
            <a 
              href="${spot.videoUrl}"
              target="_blank"
              onclick="event.stopPropagation();"
              class="inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-gray-100/90 hover:bg-gray-200 border border-gray-200/80 text-gray-800 text-[11px] font-medium transition active:scale-95 flex-shrink-0"
              title="播放探店视频"
            >
              <i class="ph-fill ph-play text-[9px] mr-1 text-gray-900"></i>
              <span>探店视频</span>
            </a>

            <!-- [▲ 导航前往] -->
            <button 
              type="button"
              onclick="openNavigationModal('${spot.id}', event)"
              class="inline-flex items-center justify-center px-3 py-1.5 rounded-full ${currentRankType === 'black' ? 'bg-gray-900 hover:bg-black text-white' : 'bg-[#d32323] hover:bg-[#b81d1d] text-white'} text-[11px] font-semibold transition shadow-xs active:scale-95 flex-shrink-0 cursor-pointer"
              title="一键导航到店"
            >
              <i class="ph-fill ph-navigation-arrow text-[9px] mr-1"></i>
              <span>导航前往</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 8. 渲染桌面侧边栏列表
function renderDesktopSpotsList(spots) {
  const container = document.getElementById("spotsList");
  if (!container) return;

  if (spots.length === 0) {
    const isFav = currentCategory === 'favorites' || currentBloggerId === 'favorites';
    if (isFav) {
      container.innerHTML = `
        <div class="py-12 px-4 text-center text-xs">
          <div class="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-xl mb-2">
            <i class="ph-fill ph-star"></i>
          </div>
          <p class="font-bold text-gray-800 text-sm">当前暂无收藏店铺</p>
          <p class="text-gray-500 mt-1">点击店铺卡片左下角的 [☆ 收藏] 即可加入心愿单</p>
          <button onclick="clearFavoriteFilter()" class="mt-3 px-3.5 py-1.5 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-black transition cursor-pointer shadow-xs">
            浏览全部推荐
          </button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="py-16 text-center text-gray-400 text-xs">
          <p>未找到匹配餐厅</p>
          <button onclick="clearSearch()" class="text-blue-600 mt-1 hover:underline">重置搜索</button>
        </div>
      `;
    }
    return;
  }

  container.innerHTML = spots.map((spot, index) => {
    const num = index + 1;
    const isActive = spot.id === activeSpotId;

    return `
      <div 
        id="card-${spot.id}"
        onclick="selectSpot('${spot.id}', true)" 
        class="p-3 rounded-xl transition cursor-pointer hover:bg-gray-50 border ${isActive ? (currentRankType === 'black' ? 'bg-gray-100/70 border-gray-900 ring-1 ring-gray-900' : 'bg-red-50/50 border-[#d32323] ring-1 ring-[#d32323]') : 'border-transparent'}"
      >
        <div class="flex space-x-3">
          <div class="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 shadow-2xs">
            <img src="${spot.cover}" alt="${spot.name}" class="w-full h-full object-cover" />
          </div>

          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-gray-900 text-xs sm:text-sm truncate">
              ${num}. ${spot.name}
            </h4>

            <div class="flex items-center space-x-1.5 mt-0.5">
              <span class="text-[#d32323] text-xs font-bold">★★★★★</span>
              <span class="text-xs font-semibold text-gray-800">${spot.rating}</span>
              <span class="text-[11px] text-gray-400">(${spot.reviewCount})</span>
            </div>

            <!-- 点击地址弹出地图导航 -->
            <div onclick="openNavigationModal('${spot.id}', event)" class="inline-flex items-center text-[11px] text-gray-500 hover:text-gray-900 mt-0.5 truncate cursor-pointer group/nav" title="点击选择地图导航到店">
              <i class="ph-bold ph-map-pin text-[#d32323] mr-1 flex-shrink-0 group-hover/nav:scale-125 transition-transform"></i>
              <span class="hover:underline underline-offset-2">${spot.district}</span>
              <span class="mx-1 text-gray-300">·</span>
              <b class="text-gray-900 font-medium">${spot.avgPrice}</b>
            </div>
          </div>
        </div>

        <!-- 🌟 Yelp 规范常驻完整评语与商户信息 🌟 -->
        <div class="mt-2 bg-gray-50/90 border border-gray-100/90 rounded-xl p-2.5 text-[11px] text-left">
          <!-- 完整博主评语 (直接展示，不截断) -->
          <p class="text-gray-700 italic leading-relaxed">
            <span class="not-italic font-semibold text-gray-900 mr-1">${spot.blogger}:</span>
            <span>${spot.quote}</span>
          </p>

          <!-- Yelp 核心商业信息栏 (营业时间 + 电话 + 详细地址) -->
          <div class="mt-2 pt-2 border-t border-gray-200/60 space-y-1.5 not-italic text-left">
            <!-- 1. 营业时间 (智能绿标营业中) -->
            <div class="flex items-center text-gray-700 text-[11px]">
              <i class="ph-bold ph-clock text-gray-400 mr-1.5 flex-shrink-0 text-xs"></i>
              <span class="font-medium text-gray-900 mr-1.5">营业时间:</span>
              <span class="text-gray-600 mr-2">${spot.hours || '10:00 - 22:00'}</span>
              <span class="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-200/80">
                ● 营业中
              </span>
            </div>

            <!-- 2. 联系电话 -->
            <div class="flex items-center text-gray-700 text-[11px]">
              <i class="ph-bold ph-phone text-gray-400 mr-1.5 flex-shrink-0 text-xs"></i>
              <span class="font-medium text-gray-900 mr-1.5">联系电话:</span>
              <a href="tel:${spot.phone || ''}" onclick="event.stopPropagation();" class="text-blue-600 hover:underline font-semibold">
                ${spot.phone || '暂无登记'}
              </a>
            </div>

            <!-- 3. 详细地址 (点击也可调起地图导航) -->
            <div onclick="openNavigationModal('${spot.id}', event)" class="flex items-start text-gray-700 text-[11px] cursor-pointer group/addr hover:text-gray-900" title="点击选择地图导航到店">
              <i class="ph-bold ph-map-pin text-[#d32323] mr-1.5 flex-shrink-0 text-xs mt-0.5 group-hover/addr:scale-125 transition-transform"></i>
              <div class="flex-1">
                <span class="font-medium text-gray-900 mr-1">详细地址:</span>
                <span class="text-gray-600 group-hover/addr:text-blue-600 group-hover/addr:underline underline-offset-2">${spot.fullAddress || spot.district}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 1. 推荐菜文字胶囊 (保留价格，单行横向丝滑滑动 + 拖拽 + 滚轮横移) -->
        <div class="dishes-scroll-wrapper relative group/dishes mt-2.5 pt-2 border-t border-gray-100/90">
          <div class="dishes-scroll-container flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5 select-none">
            ${(spot.dishes || []).slice(0, 5).map(d => `
              <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100/90 text-gray-800 text-[11px] font-medium flex-shrink-0 whitespace-nowrap border border-gray-200/60 pointer-events-none">
                ${d.name} <span class="text-gray-400 mx-1">·</span> <span class="text-[#d32323] font-semibold">${d.price}</span>
              </span>
            `).join('')}
          </div>
          <!-- 滚动右侧微渐变提示 -->
          <div class="dishes-scroll-hint pointer-events-none absolute right-0 top-2 bottom-0 w-7 bg-gradient-to-l from-white/95 to-transparent flex items-center justify-end pr-0.5 text-gray-400 opacity-0 transition-opacity">
            <i class="ph-bold ph-caret-right text-[9px] opacity-70"></i>
          </div>
        </div>

        <!-- 2. 底部精简操作栏 (参照规范: 左侧[收藏]+[反馈], 右侧[▶ 探店视频]+[▲ 导航前往]) -->
        <div class="mt-2.5 pt-2 border-t border-gray-100/90 flex items-center justify-between">
          <!-- 左侧轻量辅助图标 -->
          <div class="flex items-center space-x-3.5 pl-0.5">
            <!-- 收藏 -->
            <button 
              type="button"
              onclick="toggleFavoriteSpot('${spot.id}', event)"
              class="flex flex-col items-center justify-center text-gray-500 hover:text-amber-500 transition group cursor-pointer"
              title="收藏该店铺"
            >
              <i class="favorite-icon-${spot.id} ${isSpotFavorited(spot.id) ? 'ph-fill ph-star text-amber-500' : 'ph ph-star text-gray-500 group-hover:text-amber-500'} text-base leading-none transition-transform active:scale-125"></i>
              <span class="text-[10px] mt-1 leading-none text-gray-500 group-hover:text-gray-700">收藏</span>
            </button>

            <!-- 反馈 -->
            <button 
              type="button"
              data-feedback-id="${spot.id}"
              onclick="openFeedbackModal('${spot.id}', event)"
              class="flex flex-col items-center justify-center text-gray-500 hover:text-[#d32323] transition group cursor-pointer"
              title="纠错反馈"
            >
              <i class="ph ph-flag text-base leading-none transition-transform active:scale-125 group-hover:text-[#d32323]"></i>
              <span class="text-[10px] mt-1 leading-none text-gray-500 group-hover:text-gray-700">反馈</span>
            </button>
          </div>

          <!-- 右侧核心行动按钮 -->
          <div class="flex items-center space-x-1.5">
            <!-- [▶ 探店视频]（胶囊边框样式） -->
            <a 
              href="${spot.videoUrl}"
              target="_blank"
              onclick="event.stopPropagation();"
              class="inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-gray-100/90 hover:bg-gray-200 border border-gray-200/80 text-gray-800 text-[11px] font-medium transition active:scale-95 flex-shrink-0"
              title="播放探店视频"
            >
              <i class="ph-fill ph-play text-[9px] mr-1 text-gray-900"></i>
              <span>探店视频</span>
            </a>

            <!-- [▲ 导航前往]（高亮主按钮） -->
            <button 
              type="button"
              onclick="openNavigationModal('${spot.id}', event)"
              class="inline-flex items-center justify-center px-3 py-1.5 rounded-full ${currentRankType === 'black' ? 'bg-gray-900 hover:bg-black text-white' : 'bg-[#d32323] hover:bg-[#b81d1d] text-white'} text-[11px] font-semibold transition shadow-xs active:scale-95 flex-shrink-0 cursor-pointer"
              title="一键导航到店"
            >
              <i class="ph-fill ph-navigation-arrow text-[9px] mr-1"></i>
              <span>导航前往</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 9. 选中某个店铺 (双向高亮 Pin 与卡片，并保持 Pin 在卡片正上方居中)
function selectSpot(spotId, shouldFly = false) {
  // 点击或选中时若处于折叠状态，恢复展开
  expandCards();

  activeSpotId = spotId;
  const spot = allSpots.find(s => s.id === spotId);
  if (!spot) return;

  // 1. 高亮侧边栏
  document.querySelectorAll("#spotsList > div").forEach(card => {
    card.classList.remove("bg-red-50/50", "border-[#d32323]", "ring-1", "ring-[#d32323]");
    card.classList.add("border-transparent");
  });
  const activeDesktopCard = document.getElementById(`card-${spotId}`);
  if (activeDesktopCard) {
    activeDesktopCard.classList.add("bg-red-50/50", "border-[#d32323]", "ring-1", "ring-[#d32323]");
    activeDesktopCard.classList.remove("border-transparent");
  }

  // 2. 高亮底部横滑卡片并自动平滑滚入视野 (当前卡片稍微放大一点点 + 粗边框光晕突出显示)
  document.querySelectorAll(".bottom-slider-item").forEach(card => {
    card.classList.remove(
      "scale-[1.03]", "md:scale-[1.05]", "z-20", "shadow-2xl", "border-2",
      "border-gray-950", "ring-4", "ring-gray-950/20", "border-[#d32323]", "ring-[#d32323]/20"
    );
    card.classList.add("scale-100", "z-10", "border", "border-gray-200/90", "shadow-md");
  });
  const activeBottomCard = document.getElementById(`bcard-${spotId}`);
  if (activeBottomCard) {
    activeBottomCard.classList.remove("scale-100", "z-10", "border-gray-200/90", "shadow-md");
    activeBottomCard.classList.add("scale-[1.03]", "md:scale-[1.05]", "z-20", "shadow-2xl", "border-2");
    if (currentRankType === 'black') {
      activeBottomCard.classList.add("border-gray-950", "ring-4", "ring-gray-950/20");
    } else {
      activeBottomCard.classList.add("border-[#d32323]", "ring-4", "ring-[#d32323]/20");
    }
    activeBottomCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  // 3. 刷新地图上的数字 Pin 状态
  renderMarkers(filteredSpots);

  // 4. 平滑飞渡定位：保持地图图标正好在卡片正上方显示 (图2效果)
  if (shouldFly && map) {
    flyToSpotAboveCard(spot.lat, spot.lng, 15);
  }
}

// 🌟 需求 1B：保持选中的地图图标正好在卡片上方开阔视野居中显示（图2效果） 🌟
function flyToSpotAboveCard(lat, lng, zoomLevel = 15) {
  if (!map) return;
  const currentZoom = zoomLevel || map.getZoom() || 15;
  const isDesktop = window.innerWidth >= 768;
  const mapSize = map.getSize();
  
  // 底部卡片占据高度（展开态约 285px 移动端 / 250px 桌面端；折叠收起态约 70px）
  const cardHeight = isCardsCollapsed ? 70 : (isDesktop ? 250 : 285);
  
  // 垂直方向：将 Marker 向上提，使其恰好居中悬停在卡片正上方的可视开阔区域（图2效果）
  const availableHeight = mapSize.y - cardHeight;
  const targetYInView = Math.max(70, availableHeight * 0.36);
  const offsetY = (mapSize.y / 2) - targetYInView;
  
  // 水平方向：桌面端若有左侧边栏，偏向右侧开阔区
  const sidebarWidth = (isDesktop && !isSidebarCollapsed) ? 360 : 0;
  const offsetX = sidebarWidth / 2;

  const targetPoint = map.project([lat, lng], currentZoom);
  const newPoint = new L.Point(targetPoint.x - offsetX, targetPoint.y + offsetY);
  const newLatLng = map.unproject(newPoint, currentZoom);

  map._isProgrammaticFly = true;
  map.flyTo(newLatLng, currentZoom, { duration: 0.55 });
  setTimeout(() => { map._isProgrammaticFly = false; }, 650);
}

// 🌟 需求 1A：初次加载或筛选时，自适应视口将所有餐馆显示在卡片上方的未遮挡区域（图1效果） 🌟
function fitBoundsWithCardPadding(spots) {
  if (!spots || spots.length === 0 || !map) return;
  if (spots.length === 1) {
    flyToSpotAboveCard(spots[0].lat, spots[0].lng, 15);
    return;
  }
  const latLngs = spots.map(s => [s.lat, s.lng]);
  const bounds = L.latLngBounds(latLngs);
  
  const isDesktop = window.innerWidth >= 768;
  const sidebarWidth = (isDesktop && !isSidebarCollapsed) ? 360 : 0;
  
  // 底部预留卡片高度与呼吸空隙，让出未遮挡开阔区域
  const bottomPadding = isCardsCollapsed ? 80 : (isDesktop ? 240 : 280);
  const topPadding = isDesktop ? 40 : 25;
  const leftPadding = sidebarWidth + (isDesktop ? 30 : 20);
  const rightPadding = isDesktop ? 30 : 20;

  map._isProgrammaticFly = true;
  map.fitBounds(bounds, {
    paddingTopLeft: [leftPadding, topPadding],
    paddingBottomRight: [rightPadding, bottomPadding],
    maxZoom: 15,
    animate: true,
    duration: 0.65
  });
  setTimeout(() => { map._isProgrammaticFly = false; }, 750);
}

// 10. 监听下方卡片横滑
function setupSliderScrollListener() {
  const track = document.getElementById("bottomCardsTrack");
  if (!track) return;

  track.addEventListener("scroll", () => {
    // 横滑移动卡片时先恢复展开态
    expandCards();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      let closestCard = null;
      let minDistance = Infinity;

      track.querySelectorAll(".bottom-slider-item").forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(trackCenter - cardCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestCard = card;
        }
      });

      if (closestCard) {
        const spotId = closestCard.dataset.id;
        if (spotId && spotId !== activeSpotId) {
          // 用户左右移动了卡片，联动地图并保持地图图标正好在卡片上方显示
          selectSpot(spotId, true);
        }
      }
    }, 150);
  });
}

function slideCards(direction) {
  const track = document.getElementById("bottomCardsTrack");
  if (!track) return;
  const cards = Array.from(track.querySelectorAll(".bottom-slider-item"));
  if (cards.length === 0) return;

  // 优先联动选中上一家/下一家餐馆，同时驱动地图定位与居中突出
  const currentIndex = cards.findIndex(c => c.dataset.id === activeSpotId);
  if (currentIndex !== -1) {
    const nextIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
    const targetSpotId = cards[nextIndex]?.dataset.id;
    if (targetSpotId && targetSpotId !== activeSpotId) {
      selectSpot(targetSpotId, true);
      return;
    }
  }

  // 降级使用平滑滚动
  const cardWidth = cards[0]?.offsetWidth || 340;
  track.scrollBy({ left: direction * (cardWidth + 20), behavior: "smooth" });
}

// 11. 过滤与搜索 (集成收藏模式、品类、博主与关键词)
function applyFilters(shouldFitBounds = true) {
  const isFavoritesMode = currentBloggerId === "favorites" || currentCategory === "favorites";

  filteredSpots = allSpots.filter(spot => {
    // 收藏模式过滤
    if (isFavoritesMode && !favoriteSpotIds.has(spot.id)) {
      return false;
    }

    const matchBlogger = (currentBloggerId === "all" || currentBloggerId === "favorites") || spot.bloggerId === currentBloggerId;
    const matchCategory = (currentCategory === "all" || currentCategory === "favorites") || spot.category === currentCategory;
    const matchQuery = !searchQuery ||
      spot.name.toLowerCase().includes(searchQuery) ||
      spot.district.toLowerCase().includes(searchQuery) ||
      (spot.dishes || []).some(d => d.name.toLowerCase().includes(searchQuery)) ||
      (spot.quote || "").toLowerCase().includes(searchQuery);

    return matchBlogger && matchCategory && matchQuery;
  });

  if (filteredSpots.length > 0) {
    activeSpotId = filteredSpots[0].id;
  } else {
    activeSpotId = null;
  }

  renderDesktopSpotsList(filteredSpots);
  renderBottomCards(filteredSpots);
  renderMarkers(filteredSpots);
  updateCounts();
  attachDishesScrollHandlers();

  // 🌟 需求 1A：地图加载或筛选时，自适应视口将筛选出的餐馆全部显示在卡片未遮挡区域 🌟
  if (shouldFitBounds && filteredSpots.length > 0 && map) {
    fitBoundsWithCardPadding(filteredSpots);
  }
}

function filterCategory(cat) {
  expandCards();
  if (cat === "favorites") {
    currentCategory = "favorites";
    currentBloggerId = "favorites";
  } else {
    currentCategory = cat;
    if (currentBloggerId === "favorites") {
      currentBloggerId = "all";
    }
  }
  renderCategoryPills();
  renderBloggerPills();
  applyFilters(true);
}

// 一键解除收藏模式并恢复全部
function clearFavoriteFilter() {
  expandCards();
  currentCategory = "all";
  currentBloggerId = "all";
  renderCategoryPills();
  renderBloggerPills();
  applyFilters(true);
}

// 菜品单行左右丝滑滑动监听：支持 PC 鼠标滚轮横移、鼠标拖拽左右滑动、移动端防卡片切换冒泡
function attachDishesScrollHandlers() {
  document.querySelectorAll('.dishes-scroll-container').forEach(container => {
    if (container._hasScrollHandlers) return;
    container._hasScrollHandlers = true;

    // 1. PC 端鼠标滚轮上下滚动转换为水平平滑滚动
    container.addEventListener('wheel', (e) => {
      if (container.scrollWidth > container.clientWidth) {
        if (Math.abs(e.deltaY) > 0) {
          e.preventDefault();
          e.stopPropagation();
          container.scrollLeft += (e.deltaY * 0.85);
          updateScrollHint(container);
        }
      }
    }, { passive: false });

    // 2. PC 端鼠标拖拽水平滑动 (Drag to scroll)
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    container.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      isDown = true;
      container.classList.add('cursor-grabbing');
      container.classList.remove('cursor-grab');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      e.stopPropagation();
    });

    const stopDragging = (e) => {
      if (!isDown) return;
      isDown = false;
      container.classList.remove('cursor-grabbing');
      container.classList.add('cursor-grab');
      if (e) e.stopPropagation();
    };

    container.addEventListener('mouseleave', stopDragging);
    container.addEventListener('mouseup', stopDragging);

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      e.stopPropagation();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
      updateScrollHint(container);
    });

    // 3. 移动端触摸防冒泡（避免滑动菜品时切走整个底栏卡片）
    container.addEventListener('touchstart', (e) => {
      e.stopPropagation();
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      e.stopPropagation();
      updateScrollHint(container);
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      e.stopPropagation();
    }, { passive: true });

    // 4. 监听 scroll 事件刷新渐变遮罩提示
    container.addEventListener('scroll', () => {
      updateScrollHint(container);
    }, { passive: true });

    // 初始化提示器状态
    setTimeout(() => updateScrollHint(container), 50);
  });
}

function updateScrollHint(container) {
  const wrapper = container.closest('.dishes-scroll-wrapper');
  if (!wrapper) return;
  const hint = wrapper.querySelector('.dishes-scroll-hint');
  if (!hint) return;

  const canScrollRight = (container.scrollWidth - container.clientWidth - container.scrollLeft) > 6;
  hint.style.opacity = canScrollRight ? '1' : '0';
}

function handleSearch(val) {
  expandCards();
  searchQuery = val.trim().toLowerCase();
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.toggle("hidden", searchQuery.length === 0);
  applyFilters(true);
}

function clearSearch() {
  expandCards();
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  handleSearch("");
}

function updateCounts() {
  const visibleCountEl = document.getElementById("visibleCount");
  const totalCountEl = document.getElementById("totalCount");
  if (visibleCountEl) visibleCountEl.innerText = filteredSpots.length;
  if (totalCountEl) totalCountEl.innerText = allSpots.length;
}

function toggleSidebarView() {
  const sidebar = document.getElementById("sidebar");
  const toggleText = document.getElementById("sidebarToggleText");
  isSidebarCollapsed = !isSidebarCollapsed;

  if (isSidebarCollapsed) {
    sidebar.classList.add("hidden");
    if (toggleText) toggleText.innerText = "展开列表";
  } else {
    sidebar.classList.remove("hidden");
    if (toggleText) toggleText.innerText = "折叠列表";
  }
  setTimeout(() => map && map.invalidateSize(), 250);
}

// 12. 打开地图导航选择模态框 (高德、腾讯、百度三选一)
function openNavigationModal(spotId, event) {
  if (event) {
    event.stopPropagation();
  }
  const spot = allSpots.find(s => s.id === spotId);
  if (!spot) return;

  const nameEl = document.getElementById("navSpotName");
  const districtEl = document.getElementById("navSpotDistrict");
  const fullAddr = spot.fullAddress || spot.district;
  if (nameEl) nameEl.textContent = `导航至：${spot.name}`;
  if (districtEl) districtEl.textContent = `${fullAddr} · 人均 ${spot.avgPrice}`;

  const lat = spot.lat;
  const lng = spot.lng;
  const name = encodeURIComponent(spot.name);
  const addressEncoded = encodeURIComponent(fullAddr);

  // 1. 高德地图 (GCJ-02 坐标)
  const amapUrl = `https://uri.amap.com/marker?position=${lng},${lat}&name=${name}&src=food_map&coordinate=gaode&callnative=1`;
  const amapLink = document.getElementById("navAmapLink");
  if (amapLink) amapLink.href = amapUrl;

  // 2. 腾讯地图 (GCJ-02 坐标，微信生态兼容最佳)
  const tencentUrl = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${lat},${lng};title:${name};addr:${addressEncoded}&referer=food_map`;
  const tencentLink = document.getElementById("navTencentLink");
  if (tencentLink) tencentLink.href = tencentUrl;

  // 3. 百度地图 (火星坐标 GCJ-02 转 百度 BD-09 坐标)
  const x_pi = 3.14159265358979324 * 3000.0 / 180.0;
  const z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_pi);
  const theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_pi);
  const bd_lng = (z * Math.cos(theta) + 0.0065).toFixed(6);
  const bd_lat = (z * Math.sin(theta) + 0.006).toFixed(6);
  const baiduUrl = `https://api.map.baidu.com/marker?location=${bd_lat},${bd_lng}&title=${name}&content=${addressEncoded}&output=html&src=webapp.baidu.openAPIdemo`;
  const baiduLink = document.getElementById("navBaiduLink");
  if (baiduLink) baiduLink.href = baiduUrl;

  const modal = document.getElementById("navModal");
  if (modal) modal.classList.remove("hidden");
}

function closeNavModal() {
  const modal = document.getElementById("navModal");
  if (modal) modal.classList.add("hidden");
}

// 13. 打开店铺信息与视频纠错反馈模态框
function openFeedbackModal(spotId, event) {
  if (event) {
    event.stopPropagation();
  }
  const spot = allSpots.find(s => s.id === spotId);
  if (!spot) return;

  const modal = document.getElementById("feedbackModal");
  const spotIdInput = document.getElementById("feedbackSpotId");
  const spotNameInput = document.getElementById("feedbackSpotName");
  const display = document.getElementById("feedbackSpotNameDisplay");
  const contentInput = document.getElementById("feedbackContent");
  const contactInput = document.getElementById("feedbackContact");

  if (spotIdInput) spotIdInput.value = spot.id;
  if (spotNameInput) spotNameInput.value = spot.name;
  if (display) display.innerHTML = `正在反馈：<span class="font-bold text-gray-800">【${spot.name}】</span>`;
  if (contentInput) {
    contentInput.value = "";
    contentInput.placeholder = `请详细说明【${spot.name}】有误的内容，例如正确的抖音视频链接、最新门牌地址等...`;
  }
  if (contactInput) contactInput.value = "";

  // 默认重置为第一个反馈类型
  const firstBtn = document.querySelector(".fb-type-btn");
  if (firstBtn) {
    setFeedbackType(firstBtn, "视频链接有误");
  }

  if (modal) modal.classList.remove("hidden");
}

function closeFeedbackModal() {
  const modal = document.getElementById("feedbackModal");
  if (modal) modal.classList.add("hidden");
}

// 切换反馈类型高亮
function setFeedbackType(btn, typeName) {
  const typeInput = document.getElementById("feedbackType");
  if (typeInput) typeInput.value = typeName;

  document.querySelectorAll(".fb-type-btn").forEach(b => {
    b.className = "fb-type-btn px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-700 text-left flex items-center space-x-1.5 transition cursor-pointer hover:bg-gray-50";
  });

  btn.className = "fb-type-btn active px-2.5 py-1.5 rounded-lg border text-left flex items-center space-x-1.5 transition cursor-pointer bg-red-50 text-[#d32323] border-red-200 font-bold";
}

// 提交纠错反馈
function handleFeedbackSubmit(event) {
  event.preventDefault();

  const spotId = document.getElementById("feedbackSpotId")?.value || "";
  const spotName = document.getElementById("feedbackSpotName")?.value || "";
  const type = document.getElementById("feedbackType")?.value || "信息有误";
  const content = document.getElementById("feedbackContent")?.value || "";
  const contact = document.getElementById("feedbackContact")?.value || "";

  if (!content.trim()) {
    alert("请填写具体的反馈说明");
    return;
  }

  const feedbackRecord = {
    id: "fb-" + Date.now(),
    spotId,
    spotName,
    type,
    content: content.trim(),
    contact: contact.trim(),
    createdAt: new Date().toISOString(),
    status: "pending"
  };

  // 存储至本地 localStorage 供后台管理导出查看
  try {
    const existing = JSON.parse(localStorage.getItem("user_food_feedbacks") || "[]");
    existing.unshift(feedbackRecord);
    localStorage.setItem("user_food_feedbacks", JSON.stringify(existing));
    console.log("✅ 收到用户反馈并已持久化:", feedbackRecord);
  } catch (e) {
    console.error("存储反馈失败:", e);
  }

  closeFeedbackModal();
  showFeedbackToast(`已成功收到关于【${spotName}】的反馈，感谢您的纠错！`);
}

// 弹出全局 Toast 提示条
function showFeedbackToast(msg) {
  const toast = document.getElementById("feedbackToast");
  const toastMsg = document.getElementById("feedbackToastMsg");
  if (!toast) return;

  if (toastMsg) toastMsg.innerText = msg;

  toast.classList.remove("opacity-0", "pointer-events-none", "-translate-y-2");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "pointer-events-none", "-translate-y-2");
  }, 2800);
}

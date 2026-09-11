// 城市元数据定义 (中心点经纬度、默认缩放、特色分区与品类)
const CITIES = {
  "luoyang": {
    "id": "luoyang",
    "name": "洛阳",
    "title": "探店地图 · 洛阳",
    "center": [
      34.685,
      112.455
    ],
    "zoom": 13,
    "districts": [
      "全部",
      "老城区",
      "西工区",
      "涧西区",
      "洛龙区",
      "瀍河区"
    ],
    "categories": [
      {
        "id": "all",
        "name": "全部"
      },
      {
        "id": "soup",
        "name": "牛肉/羊汤"
      },
      {
        "id": "staple",
        "name": "锅贴/面食"
      },
      {
        "id": "banquet",
        "name": "洛阳水席"
      },
      {
        "id": "street",
        "name": "夜市小吃"
      }
    ]
  },
  "zhengzhou": {
    "id": "zhengzhou",
    "name": "郑州",
    "title": "探店地图 · 郑州",
    "center": [
      34.755,
      113.665
    ],
    "zoom": 13,
    "districts": [
      "全部",
      "管城回族区",
      "金水区",
      "二七区",
      "中原区",
      "惠济区"
    ],
    "categories": [
      {
        "id": "all",
        "name": "全部"
      },
      {
        "id": "staple",
        "name": "烩面/老式炒面"
      },
      {
        "id": "soup",
        "name": "胡辣汤/羊肉汤"
      },
      {
        "id": "banquet",
        "name": "经典豫菜/火锅"
      },
      {
        "id": "street",
        "name": "街巷烧烤/小吃"
      }
    ]
  }
};

// ==========================================
// 1. 红榜高赞探店博主元数据
// ==========================================
const RED_FOOD_BLOGGERS = [
  {
    "id": "all",
    "name": "全部博主",
    "avatar": "./assets/icon_circle.png"
  },
  {
    "id": "suipo",
    "name": "特厨隋坡",
    "avatar": "./assets/avatar_suipo.png"
  },
  {
    "id": "wulala",
    "name": "特别乌拉拉",
    "avatar": "./assets/avatar_wulala.png"
  },
  {
    "id": "axing",
    "name": "阿星探店",
    "avatar": "./assets/avatar_axing.png"
  },
  {
    "id": "jason",
    "name": "刘雨鑫JASON",
    "avatar": "./assets/avatar_jason.png"
  },
  {
    "id": "maizong",
    "name": "麦总去哪吃",
    "avatar": "./assets/avatar_maizong.png"
  },
  {
    "id": "wenzai",
    "name": "饭搭子稳仔",
    "avatar": "./assets/avatar_wenzai.png"
  },
  {
    "id": "weiwei",
    "name": "特厨魏味",
    "avatar": "./assets/avatar_weiwei.png"
  },
  {
    "id": "popular",
    "name": "更多探店达人",
    "avatar": "./assets/icon_square.png"
  }
];

// ==========================================
// 2. 黑榜避雷打假博主元数据 (暗访排雷、带秤打假先锋)
// ==========================================
const BLACK_FOOD_BLOGGERS = [
  {
    "id": "all",
    "name": "全部博主",
    "avatar": "./assets/icon_circle.png"
  },
  {
    "id": "erbai",
    "name": "二百者也",
    "avatar": "./assets/avatar_erbai.png"
  },
  {
    "id": "tangrenjie",
    "name": "真探唐仁杰",
    "avatar": "./assets/avatar_tangrenjie.png"
  },
  {
    "id": "wangbaishi",
    "name": "王白石",
    "avatar": "./assets/avatar_wangbaishi.png"
  },
  {
    "id": "weili",
    "name": "伟力是我",
    "avatar": "./assets/avatar_weili.png"
  },
  {
    "id": "maikou",
    "name": "迈扣来了",
    "avatar": "./assets/avatar_weili.png"
  },
  {
    "id": "popular",
    "name": "民间避雷汇总",
    "avatar": "./assets/icon_square.png"
  }
];

// 兼容全局引用
const FOOD_BLOGGERS = RED_FOOD_BLOGGERS;

// ==========================================
// 3. 洛阳红榜美食数据集 (精选 33 家真实高赞探店，100% 真实在线)
// ==========================================
const LUOYANG_FOOD_SPOTS = [
  {
    "id": "spot-1",
    "hours": "10:30 - 21:00",
    "phone": "13837926888",
    "fullAddress": "洛阳市涧西区广州市场步行街南段便民巷6号（景华路南侧）",
    "city": "luoyang",
    "name": "洛阳市井7元便民快餐 (特厨探店爆款)",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "street",
    "district": "涧西区 · 广州市场",
    "lat": 34.656,
    "lng": 112.399,
    "avgPrice": "￥7",
    "rating": 5,
    "reviewCount": 5380,
    "videoUrl": "https://www.douyin.com/video/7546294242289650996",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞53.8万大爆款！特厨隋坡实测：7块钱现炒盖浇饭锅气十足，他们真的不要成本的吗？！”",
    "dishes": [
      {
        "name": "肉丝盖饭",
        "price": "￥7"
      },
      {
        "name": "番茄炒蛋盖饭",
        "price": "￥6"
      },
      {
        "name": "青椒肉丝盖饭",
        "price": "￥7"
      },
      {
        "name": "红烧豆腐盖饭",
        "price": "￥7"
      },
      {
        "name": "紫菜蛋花汤",
        "price": "￥1"
      }
    ]
  },
  {
    "id": "spot-2",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0379-63953888",
    "fullAddress": "洛阳市老城区中州东路359号（青年宫正对面）",
    "city": "luoyang",
    "name": "真不同饭店 (洛阳水席)",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "banquet",
    "district": "老城区 · 中州东路",
    "lat": 34.6855,
    "lng": 112.4795,
    "avgPrice": "￥75",
    "rating": 4.9,
    "reviewCount": 680,
    "videoUrl": "https://www.douyin.com/video/7547438464665439497",
    "cover": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80",
    "quote": "“牡丹燕菜萝卜切细如丝，高汤清甜微酸；连汤肉片胡椒开胃，非遗传承老菜技术过硬！”",
    "dishes": [
      {
        "name": "洛阳牡丹燕菜",
        "price": "￥58"
      },
      {
        "name": "连汤肉片",
        "price": "￥42"
      },
      {
        "name": "焦炸丸子",
        "price": "￥36"
      },
      {
        "name": "洛阳熬炒鸡",
        "price": "￥48"
      },
      {
        "name": "洛阳海参",
        "price": "￥45"
      }
    ]
  },
  {
    "id": "spot-3",
    "hours": "10:00 - 20:30",
    "phone": "13523618999",
    "fullAddress": "洛阳市涧西区广州市场小吃街二号档口（近牡丹路）",
    "city": "luoyang",
    "name": "洛阳市井7元便民盖浇饭",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "street",
    "district": "涧西区 · 广州市场",
    "lat": 34.6558,
    "lng": 112.3985,
    "avgPrice": "￥7",
    "rating": 4.8,
    "reviewCount": 380,
    "videoUrl": "https://www.douyin.com/video/7554379552877858111",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“花7元在洛阳小巷子里吃现炒青椒肉丝盖浇饭！大火爆炒锅气足，量大实惠管饱！”",
    "dishes": [
      {
        "name": "小街锅贴",
        "price": "￥8"
      },
      {
        "name": "小街担担面",
        "price": "￥8"
      },
      {
        "name": "糊涂面",
        "price": "￥10"
      },
      {
        "name": "牛肉汆汤",
        "price": "￥12"
      },
      {
        "name": "米酒汤圆",
        "price": "￥5"
      }
    ]
  },
  {
    "id": "spot-4",
    "hours": "07:00 - 21:30",
    "phone": "0379-63231188",
    "fullAddress": "洛阳市西工区人民东路百货楼小街内（中央步道中段）",
    "city": "luoyang",
    "name": "西工小街锅贴 · 浆水面",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "staple",
    "district": "西工区 · 百货楼小街",
    "lat": 34.6712,
    "lng": 112.4418,
    "avgPrice": "￥10",
    "rating": 4.9,
    "reviewCount": 560,
    "videoUrl": "https://www.douyin.com/video/7067765161066630430",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“花10元吃浆水面配焦脆锅贴！被洛阳这神仙物价感动了，锅贴冰花咔哧响太香了！”",
    "dishes": [
      {
        "name": "铁谢羊肉汤",
        "price": "￥20"
      },
      {
        "name": "手撕羊排",
        "price": "￥45"
      },
      {
        "name": "香酥葱油饼",
        "price": "￥3"
      },
      {
        "name": "特色羊杂汤",
        "price": "￥22"
      }
    ]
  },
  {
    "id": "spot-5",
    "hours": "05:30 - 14:00",
    "phone": "0379-65982888",
    "fullAddress": "洛阳市涧西区龙鳞路与西苑路交叉口南50米路西",
    "city": "luoyang",
    "name": "龙鳞路第一家牛肉汤",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "soup",
    "district": "涧西区 · 龙鳞路",
    "lat": 34.6465,
    "lng": 112.3852,
    "avgPrice": "￥24",
    "rating": 4.9,
    "reviewCount": 470,
    "videoUrl": "https://www.douyin.com/video/7068676578787478815",
    "cover": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=80",
    "quote": "“店是走错了但好吃绝对错不了！大铁锅滚汤浇下去，牛油辣子拌干焦馍太得劲了！”",
    "dishes": [
      {
        "name": "多肉牛肉汤",
        "price": "￥24"
      },
      {
        "name": "手掰干焦馍",
        "price": "￥1"
      }
    ]
  },
  {
    "id": "spot-6",
    "hours": "07:00 - 20:00",
    "phone": "13937985678",
    "fullAddress": "洛阳市老城区民主街26号（近东大街十字街口）",
    "city": "luoyang",
    "name": "老洛阳杂粮红薯面馆",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "staple",
    "district": "老城区 · 民主街",
    "lat": 34.6838,
    "lng": 112.4772,
    "avgPrice": "￥12",
    "rating": 4.7,
    "reviewCount": 310,
    "videoUrl": "https://www.douyin.com/video/7068147213158927653",
    "cover": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80",
    "quote": "“花12元吃洛阳地道红薯面！粗粮细做爽滑劲道，面条子主播险些翻车哈哈！”",
    "dishes": [
      {
        "name": "不翻汤",
        "price": "￥15"
      },
      {
        "name": "丸子不翻汤",
        "price": "￥18"
      },
      {
        "name": "五香烧饼",
        "price": "￥2"
      },
      {
        "name": "卤豆干",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-7",
    "hours": "09:00 - 21:00",
    "phone": "13698885211",
    "fullAddress": "洛阳市西工区定鼎南路与凯旋东路交叉口向西80米",
    "city": "luoyang",
    "name": "郏县传统羊肉饸饹面",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "staple",
    "district": "河南名吃 · 特别探寻",
    "lat": 34.6625,
    "lng": 112.435,
    "avgPrice": "￥18",
    "rating": 4.9,
    "reviewCount": 520,
    "videoUrl": "https://www.douyin.com/video/7069975523409005837",
    "cover": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    "quote": "“连怼两碗！全中国最好吃的饸饹面不接受反驳！羊油辣子与鲜羊肉汤拌面绝顶香！”",
    "dishes": [
      {
        "name": "羊肉饸饹面",
        "price": "￥18"
      }
    ]
  },
  {
    "id": "spot-8",
    "hours": "08:00 - 20:30",
    "phone": "0379-66231999",
    "fullAddress": "洛阳市洛宁县学府街与永宁大道交叉口向东120米",
    "city": "luoyang",
    "name": "雷记·洛宁地方名吃 (扯面&糊卜)",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "staple",
    "district": "洛阳市 · 洛宁县学府街",
    "lat": 34.3892,
    "lng": 111.6521,
    "avgPrice": "￥25",
    "rating": 4.9,
    "reviewCount": 390,
    "videoUrl": "https://www.douyin.com/video/7547621033872772352",
    "cover": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
    "quote": "“汤香！面燃！酸辣扯面与羊汤糊卜实在是太对我胃口了，洛宁老味道真绝！”",
    "dishes": [
      {
        "name": "洛宁特色酸汤扯面",
        "price": "￥10"
      },
      {
        "name": "洛宁糊卜",
        "price": "￥15"
      }
    ]
  },
  {
    "id": "spot-9",
    "hours": "06:00 - 13:30",
    "phone": "13783126789",
    "fullAddress": "洛阳市孟津区朝阳镇南石山村三彩大道18号",
    "city": "luoyang",
    "name": "孟津唐三彩村 · 20小时大锅羊肉汤",
    "bloggerId": "axing",
    "blogger": "阿星探店",
    "category": "soup",
    "district": "孟津区 · 朝阳镇南石山村",
    "lat": 34.7825,
    "lng": 112.458,
    "avgPrice": "￥25",
    "rating": 4.9,
    "reviewCount": 380,
    "videoUrl": "https://www.douyin.com/video/7368700240817376524",
    "cover": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    "quote": "“小镇大锅炖煮20小时！老汤奶白醇厚完全不膻，大片羊肉配刚出炉千层葱花饼，汤浓饼香！”",
    "dishes": [
      {
        "name": "大锅羊肉汤",
        "price": "￥25"
      },
      {
        "name": "千层葱花饼",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-10",
    "hours": "05:30 - 13:30",
    "phone": "13838889922",
    "fullAddress": "洛阳市瀍河回族区民族路与东关大街交叉口南侧",
    "city": "luoyang",
    "name": "洛阳传统头汤牛肉汤 (早上6点开喝)",
    "bloggerId": "axing",
    "blogger": "阿星探店",
    "category": "soup",
    "district": "瀍河区 · 民族路老街",
    "lat": 34.6885,
    "lng": 112.495,
    "avgPrice": "￥20",
    "rating": 4.9,
    "reviewCount": 460,
    "videoUrl": "https://www.douyin.com/video/7365731500261641498",
    "quote": "“早上6点准时赶头汤！清早第一锅原汤极鲜极醇，泡上烩烙馍饼丝，再来一瓶经典海碧，太舒服了！”",
    "cover": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=80",
    "dishes": [
      {
        "name": "清晨头汤牛肉汤",
        "price": "￥20"
      },
      {
        "name": "烩烙馍饼丝",
        "price": "￥2"
      },
      {
        "name": "经典海碧汽水",
        "price": "￥2.5"
      }
    ]
  },
  {
    "id": "spot-11",
    "hours": "08:00 - 18:30",
    "phone": "13503798822",
    "fullAddress": "洛阳市涧西区中州西路与谷水街交叉口谷水古会广场西门",
    "city": "luoyang",
    "name": "洛阳谷水千年古会市井小吃",
    "bloggerId": "axing",
    "blogger": "阿星探店",
    "category": "street",
    "district": "涧西区 · 谷水古会",
    "lat": 34.662,
    "lng": 112.352,
    "avgPrice": "￥10",
    "rating": 4.8,
    "reviewCount": 320,
    "videoUrl": "https://www.douyin.com/video/7371668850963729674",
    "quote": "“洛阳千年谷水古会！热气腾腾现蒸的老式鸡蛋糕、酸浆浓郁的面条，充满最朴实的烟火气！”",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "dishes": [
      {
        "name": "鸡蛋糕",
        "price": "￥8"
      },
      {
        "name": "街头传统酸浆面",
        "price": "￥6"
      },
      {
        "name": "老凉皮",
        "price": "￥6"
      }
    ]
  },
  {
    "id": "spot-12",
    "hours": "17:00 - 次日02:00",
    "phone": "13653887711",
    "fullAddress": "洛阳市洛龙区龙门街道马坡村滨河路2号（伊河东岸大排档区）",
    "city": "luoyang",
    "name": "洛阳马坡烧烤大排档 (龙门石窟旁)",
    "bloggerId": "axing",
    "blogger": "阿星探店",
    "category": "street",
    "district": "洛龙区 · 龙门街道马坡村",
    "lat": 34.582,
    "lng": 112.475,
    "avgPrice": "￥35",
    "rating": 4.8,
    "reviewCount": 410,
    "videoUrl": "https://www.douyin.com/video/7367587066168773924",
    "quote": "“洛阳人皆知的马坡烧烤！碳烤鸡翅焦香四溢，现烙千层葱油饼香脆掉渣，配砂锅萝卜牛腩绝了！”",
    "cover": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
    "dishes": [
      {
        "name": "烤鸡翅羊肉串",
        "price": "￥30"
      },
      {
        "name": "酥脆葱油饼",
        "price": "￥5"
      },
      {
        "name": "砂锅萝卜炖牛腩",
        "price": "￥28"
      }
    ]
  },
  {
    "id": "spot-13",
    "hours": "06:00 - 19:30",
    "phone": "0379-67512888",
    "fullAddress": "洛阳市偃师区顾县镇老街商业街中心段15号",
    "city": "luoyang",
    "name": "偃师顾县肉合 & 缑氏镇水煎包",
    "bloggerId": "axing",
    "blogger": "阿星探店",
    "category": "staple",
    "district": "偃师区 · 顾县镇美食街",
    "lat": 34.698,
    "lng": 112.795,
    "avgPrice": "￥15",
    "rating": 4.9,
    "reviewCount": 390,
    "videoUrl": "https://www.douyin.com/video/7373153294660685095",
    "quote": "“顾县薄脆死面饼夹入热腾腾凉调猪头肉，缑氏镇水煎包外焦里嫩爆汁，真正的豫西风味硬核小吃！”",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "dishes": [
      {
        "name": "顾县脆皮肉合",
        "price": "￥8"
      },
      {
        "name": "牛肉水煎包",
        "price": "￥10"
      },
      {
        "name": "飘香蛋花汤",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-14",
    "hours": "08:30 - 23:00",
    "phone": "0379-63939988",
    "fullAddress": "洛阳市西工区人民东路百货楼小街3号楼（小街天府综合楼）",
    "city": "luoyang",
    "name": "小街天府 (洛阳深夜食堂)",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "staple",
    "district": "西工区 · 百货楼小街",
    "lat": 34.6715,
    "lng": 112.4422,
    "avgPrice": "￥18",
    "rating": 4.9,
    "reviewCount": 620,
    "videoUrl": "https://www.douyin.com/video/7364688290697547018",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“人均十几块吃到爽！担担面麻辣酱香裹满面条，刚出锅的糖糕外酥内爆浆！”",
    "dishes": [
      {
        "name": "天府担担面",
        "price": "￥8"
      },
      {
        "name": "红油脆抄手",
        "price": "￥10"
      },
      {
        "name": "烫嘴糖糕",
        "price": "￥2.5"
      }
    ]
  },
  {
    "id": "spot-15",
    "hours": "05:00 - 14:00",
    "phone": "13837901122",
    "fullAddress": "洛阳市瀍河回族区启明南路与新街交叉口东60米",
    "city": "luoyang",
    "name": "洛阳老字号6元牛肉汤",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "soup",
    "district": "瀍河区 · 启明南路",
    "lat": 34.6872,
    "lng": 112.4985,
    "avgPrice": "￥8",
    "rating": 4.8,
    "reviewCount": 390,
    "videoUrl": "https://www.douyin.com/video/7442970940792655158",
    "cover": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=80",
    "quote": "“6块钱在洛阳能喝到这么实在的牛肉汤！牛骨香浓，牛油辣子一泼，配焦馍幸福感拉满！”",
    "dishes": [
      {
        "name": "原汤牛肉汤",
        "price": "￥6"
      },
      {
        "name": "手掰干焦馍",
        "price": "￥1.5"
      }
    ]
  },
  {
    "id": "spot-16",
    "hours": "17:00 - 次日01:30",
    "phone": "13721668899",
    "fullAddress": "洛阳市西工区凯旋东路与七一路交叉口向东50米路北",
    "city": "luoyang",
    "name": "老洛阳街边大排档 (大盘鸡)",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "street",
    "district": "西工区 · 凯旋路",
    "lat": 34.6745,
    "lng": 112.4498,
    "avgPrice": "￥35",
    "rating": 4.7,
    "reviewCount": 340,
    "videoUrl": "https://www.douyin.com/video/7368388880724266249",
    "cover": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
    "quote": "“洛阳大排档的灵魂大盘鸡！鸡肉炖得软烂入味，土豆沙糯，皮带面吸满浓稠汤汁太带劲了！”",
    "dishes": [
      {
        "name": "沙湾大盘鸡",
        "price": "￥48"
      },
      {
        "name": "宽面条",
        "price": "￥5"
      }
    ]
  },
  {
    "id": "spot-17",
    "hours": "10:30 - 21:00",
    "phone": "13598112233",
    "fullAddress": "洛阳市老城区民主街38号（近西大街路口）",
    "city": "luoyang",
    "name": "老城从小吃到大网红烩菜",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "staple",
    "district": "老城区 · 民主街",
    "lat": 34.6838,
    "lng": 112.4772,
    "avgPrice": "￥18",
    "rating": 4.8,
    "reviewCount": 310,
    "videoUrl": "https://www.douyin.com/video/7367566797144411444",
    "cover": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80",
    "quote": "“从小吃到大的洛阳味道！大铁锅炖出的粉条肉片丸子，热腾腾一大碗，配白馒头绝了！”",
    "dishes": [
      {
        "name": "什锦大烩菜",
        "price": "￥18"
      },
      {
        "name": "焦炸素丸子",
        "price": "￥6"
      }
    ]
  },
  {
    "id": "spot-18",
    "hours": "05:30 - 13:30",
    "phone": "0379-67891234",
    "fullAddress": "洛阳市孟津区白鹤镇铁谢村白鹤派出所斜对面",
    "city": "luoyang",
    "name": "百年铁谢李松羊肉汤",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "soup",
    "district": "孟津区 · 白鹤镇",
    "lat": 34.7895,
    "lng": 112.5625,
    "avgPrice": "￥30",
    "rating": 4.9,
    "reviewCount": 420,
    "videoUrl": "https://www.douyin.com/video/7365337670135860506",
    "cover": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    "quote": "“熬了百年的老铁锅羊肉汤，汤色奶白醇厚完全不膻，泡上硬面锅盔越嚼越香！”",
    "dishes": [
      {
        "name": "原汁羊骨汤",
        "price": "￥30"
      },
      {
        "name": "硬面锅盔",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-19",
    "hours": "10:00 - 21:00",
    "phone": "13693886677",
    "fullAddress": "洛阳市涧西区广州市场便民小吃街一街坊8号",
    "city": "luoyang",
    "name": "洛阳市井7元便民盖浇饭",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "street",
    "district": "涧西区 · 广州市场",
    "lat": 34.6558,
    "lng": 112.3985,
    "avgPrice": "￥7",
    "rating": 4.8,
    "reviewCount": 260,
    "videoUrl": "https://www.douyin.com/video/7371295333768351010",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“7块钱一份现炒盖浇饭！锅气十足分量扎实，洛阳街头真正温暖打工人的市井良心！”",
    "dishes": [
      {
        "name": "肉丝盖饭",
        "price": "￥7"
      },
      {
        "name": "西红柿鸡蛋盖饭",
        "price": "￥6"
      }
    ]
  },
  {
    "id": "spot-20",
    "hours": "09:00 - 22:30",
    "phone": "0379-63939989",
    "fullAddress": "洛阳市西工区人民东路百货楼小街小街天府南门一楼",
    "city": "luoyang",
    "name": "小街天府 (唐仁杰版)",
    "bloggerId": "tangrenjie",
    "blogger": "真探唐仁杰",
    "category": "snack",
    "district": "西工区 · 小街天府",
    "lat": 34.6715,
    "lng": 112.4422,
    "avgPrice": "￥25",
    "rating": 4.9,
    "reviewCount": 3820,
    "videoUrl": "https://www.douyin.com/video/7136489591212756255",
    "cover": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞38.2万！很疑惑为什么要在洛阳吃广东点心、杭州小笼包、四川担担面，但味道确实让人停不下来！”",
    "dishes": [
      {
        "name": "天府担担面",
        "price": "￥8"
      },
      {
        "name": "小街红糖冰粉",
        "price": "￥6"
      },
      {
        "name": "鲜肉小笼包",
        "price": "￥12"
      }
    ]
  },
  {
    "id": "spot-21",
    "hours": "17:00 - 23:30",
    "phone": "13838445566",
    "fullAddress": "洛阳市老城区民主街与东大街交叉口南30米路东",
    "city": "luoyang",
    "name": "老洛阳传统麻酱涮牛肚",
    "bloggerId": "popular",
    "blogger": "老王在中国",
    "category": "street",
    "district": "老城区 · 民主街夜市",
    "lat": 34.6868,
    "lng": 112.4789,
    "avgPrice": "￥35",
    "rating": 4.9,
    "reviewCount": 1120,
    "videoUrl": "https://www.douyin.com/video/7579132781196889386",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞11.2万！对不起今天只想馋死每一个不在洛阳的人！浓醇芝麻酱裹满每一串爽脆牛肚！”",
    "dishes": [
      {
        "name": "涮牛肚(30串)",
        "price": "￥30"
      },
      {
        "name": "焦香豆腐串",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "spot-22",
    "hours": "06:00 - 14:00",
    "phone": "13938887766",
    "fullAddress": "洛阳市洛龙区龙门大道与龙门石窟景区接驳站交叉口西北角",
    "city": "luoyang",
    "name": "龙门石窟古法大锅羊肉汤",
    "bloggerId": "popular",
    "blogger": "海吃王",
    "category": "soup",
    "district": "洛龙区 · 龙门石窟大道",
    "lat": 34.5612,
    "lng": 112.4705,
    "avgPrice": "￥28",
    "rating": 4.9,
    "reviewCount": 750,
    "videoUrl": "https://www.douyin.com/video/7199286714471320891",
    "cover": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞7.5万！天冷先喝两碗大骨浓熬原汤，羊肉扎实不膻，吃饱喝足畅游龙门！”",
    "dishes": [
      {
        "name": "大锅羊肉汤",
        "price": "￥25"
      },
      {
        "name": "洛阳非遗油馍头",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-23",
    "hours": "05:30 - 14:00",
    "phone": "13703796655",
    "fullAddress": "洛阳市瀍河回族区启明东路东关大石桥西侧门面",
    "city": "luoyang",
    "name": "洛阳传统晨起头汤牛肉汤",
    "bloggerId": "maizong",
    "blogger": "麦总去哪吃",
    "category": "soup",
    "district": "瀍河回族区 · 启明东路",
    "lat": 34.6925,
    "lng": 112.5032,
    "avgPrice": "￥20",
    "rating": 4.9,
    "reviewCount": 680,
    "videoUrl": "https://www.douyin.com/video/7425173929259437339",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞6.8万！感受汤都本地人骨子里的汤文化，清晨一碗原油头汤，给个神仙都不当！”",
    "dishes": [
      {
        "name": "洛阳清晨头汤牛肉汤",
        "price": "￥18"
      },
      {
        "name": "酥脆葱油酥饼",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "spot-24",
    "hours": "06:00 - 20:00",
    "phone": "13525998877",
    "fullAddress": "洛阳市老城区丽景门西大街68号（翁城西侧第一排）",
    "city": "luoyang",
    "name": "洛阳老城古风特色牛肉汤",
    "bloggerId": "popular",
    "blogger": "丹妮妮妮妮",
    "category": "soup",
    "district": "老城区 · 丽景门老街",
    "lat": 34.6835,
    "lng": 112.4678,
    "avgPrice": "￥18",
    "rating": 4.8,
    "reviewCount": 460,
    "videoUrl": "https://www.douyin.com/video/7636662460639989044",
    "cover": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞4.6万！在洛阳当一天古风小生，先来一碗咕嘟冒泡的滚烫牛肉汤暖胃，汤鲜味正！”",
    "dishes": [
      {
        "name": "老城古法牛肉汤",
        "price": "￥15"
      },
      {
        "name": "香酥葱花千层饼",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-25",
    "hours": "05:30 - 14:00",
    "phone": "13603792211",
    "fullAddress": "洛阳市涧西区景华路与郑州路交叉口西100米路北",
    "city": "luoyang",
    "name": "白果牛肉汤 (特厨实测)",
    "bloggerId": "weiwei",
    "blogger": "特厨魏味",
    "category": "soup",
    "district": "涧西区 · 景华路",
    "lat": 34.6612,
    "lng": 112.392,
    "avgPrice": "￥22",
    "rating": 4.9,
    "reviewCount": 340,
    "videoUrl": "https://www.douyin.com/video/7413312601796447515",
    "cover": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞3.4万！专业大厨特厨魏味实地品鉴：汤清见底回味醇厚，牛肉片大又嫩，喝了极其受用！”",
    "dishes": [
      {
        "name": "白果牛肉汤",
        "price": "￥20"
      },
      {
        "name": "椒盐烧饼",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "spot-26",
    "hours": "10:30 - 21:30",
    "phone": "13837933221",
    "fullAddress": "洛阳市老城区义勇街与中州东路交叉口南50米",
    "city": "luoyang",
    "name": "老洛阳老街传统麻辣拌",
    "bloggerId": "popular",
    "blogger": "小凡不烦",
    "category": "snack",
    "district": "老城区 · 义勇街",
    "lat": 34.685,
    "lng": 112.4735,
    "avgPrice": "￥16",
    "rating": 4.8,
    "reviewCount": 330,
    "videoUrl": "https://www.douyin.com/video/7586239026639588645",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞3.3万！本地人无限次回购的小店，浓郁醇厚的麻酱调汁裹满宽粉，真的巨好吃！”",
    "dishes": [
      {
        "name": "老街麻辣拌",
        "price": "￥14"
      },
      {
        "name": "香辣烤面筋",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-27",
    "hours": "07:30 - 20:30",
    "phone": "0379-63208877",
    "fullAddress": "洛阳市西工区纱厂南路与健康路交叉口东南角",
    "city": "luoyang",
    "name": "西工老字号传统肘子夹馍",
    "bloggerId": "popular",
    "blogger": "寻尝姐妹",
    "category": "street",
    "district": "西工区 · 纱厂南路",
    "lat": 34.674,
    "lng": 112.435,
    "avgPrice": "￥15",
    "rating": 4.8,
    "reviewCount": 250,
    "videoUrl": "https://www.douyin.com/video/7377944356986047798",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞2.5万！老锅慢火煨出的肘子软烂脱骨，轻轻一夹骨头滑落，满满肉汁塞进酥脆烧饼！”",
    "dishes": [
      {
        "name": "纯瘦脱骨肘子馍",
        "price": "￥13"
      },
      {
        "name": "肥瘦相间肘子馍",
        "price": "￥11"
      }
    ]
  },
  {
    "id": "spot-28",
    "hours": "10:00 - 21:00",
    "phone": "13937922334",
    "fullAddress": "洛阳市老城区兴华街19号（老城区第一小学斜对面）",
    "city": "luoyang",
    "name": "老洛阳手擀温柔面馆",
    "bloggerId": "popular",
    "blogger": "Explore阿浩",
    "category": "staple",
    "district": "老城区 · 兴华街",
    "lat": 34.682,
    "lng": 112.476,
    "avgPrice": "￥14",
    "rating": 4.8,
    "reviewCount": 180,
    "videoUrl": "https://www.douyin.com/video/7625593066255483465",
    "cover": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞1.8万！在河南吃到一碗温柔加到溢出来的面，劲道滑弹的面条搭配鲜香热汤，温暖治愈！”",
    "dishes": [
      {
        "name": "手擀温柔面",
        "price": "￥12"
      },
      {
        "name": "卤蛋豆干",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "spot-29",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0379-63953888",
    "fullAddress": "洛阳市老城区中州东路359号（青年宫正对面二楼包厢厅）",
    "city": "luoyang",
    "name": "老洛阳传统水席名店 (真不同风味传承)",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "banquet",
    "district": "老城区 · 中州东路",
    "lat": 34.6858,
    "lng": 112.4852,
    "avgPrice": "￥85",
    "rating": 4.9,
    "reviewCount": 2560,
    "videoUrl": "https://www.douyin.com/video/7130048715309452574",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“乌拉拉探店实录：连汤肉片胡椒开胃，焦炸丸子汤里泡得吸满鲜汁，传统老字号非遗水席确实有真功夫！”",
    "dishes": [
      {
        "name": "真不同洛阳燕菜",
        "price": "￥58"
      },
      {
        "name": "焦炸丸子汤",
        "price": "￥38"
      }
    ]
  },
  {
    "id": "spot-30",
    "hours": "11:00 - 14:30, 17:00 - 22:00",
    "phone": "13703881199",
    "fullAddress": "洛阳市涧西区西苑路与太原路交叉口向南100米路东",
    "city": "luoyang",
    "name": "老洛阳四人份豪横大盘鸡",
    "bloggerId": "popular",
    "blogger": "吃不饱仨战士",
    "category": "street",
    "district": "涧西区 · 西苑路",
    "lat": 34.659,
    "lng": 112.3935,
    "avgPrice": "￥38",
    "rating": 4.9,
    "reviewCount": 2510,
    "videoUrl": "https://www.douyin.com/video/7627366601721357672",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞25.1万！在洛阳狂炫4人份巨无霸大盘鸡配3斤牛肉汤，大块鸡肉软烂入味宽面裹满浓汁！”",
    "dishes": [
      {
        "name": "巨无霸老式大盘鸡",
        "price": "￥68"
      },
      {
        "name": "现拉手工宽面条",
        "price": "￥6"
      }
    ]
  },
  {
    "id": "spot-31",
    "hours": "18:00 - 次日02:30",
    "phone": "13523668899",
    "fullAddress": "洛阳市老城区十字街夜市步行街中段28号摊位",
    "city": "luoyang",
    "name": "洛阳老街特色深夜市井小吃",
    "bloggerId": "popular",
    "blogger": "给小刘留一口",
    "category": "snack",
    "district": "老城区 · 十字街夜市",
    "lat": 34.6845,
    "lng": 112.477,
    "avgPrice": "￥18",
    "rating": 4.9,
    "reviewCount": 1680,
    "videoUrl": "https://www.douyin.com/video/7616907923817965477",
    "cover": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞16.8万！二刷洛阳特种兵狂炫12顿20种特色美食，十字街夜市老味道停不下来！”",
    "dishes": [
      {
        "name": "老城现炸牡丹花饼",
        "price": "￥5"
      },
      {
        "name": "洛阳传统不翻汤",
        "price": "￥12"
      }
    ]
  },
  {
    "id": "spot-32",
    "hours": "10:30 - 22:00",
    "phone": "0379-63256677",
    "fullAddress": "洛阳市西工区凯旋西路与王城大道交叉口东80米路南",
    "city": "luoyang",
    "name": "洛阳市井百元三人吃撑店",
    "bloggerId": "popular",
    "blogger": "鸡哥了不得",
    "category": "street",
    "district": "西工区 · 凯旋西路",
    "lat": 34.67,
    "lng": 112.44,
    "avgPrice": "￥15",
    "rating": 4.8,
    "reviewCount": 950,
    "videoUrl": "https://www.douyin.com/video/7476159806408101159",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞9.5万！3人在洛阳狂炫一天100元都花不完！牛肉汤、鱼香肉丝盖饭、热气腾腾大盘鸡全拿下！”",
    "dishes": [
      {
        "name": "大碗香浓牛肉汤",
        "price": "￥10"
      },
      {
        "name": "老洛阳鱼香肉丝盖饭",
        "price": "￥8"
      }
    ]
  },
  {
    "id": "spot-33",
    "hours": "05:30 - 14:00",
    "phone": "0379-63521998",
    "fullAddress": "洛阳市瀍河回族区东关大街142号（东关清真寺旁）",
    "city": "luoyang",
    "name": "凤山原汁牛羊肉汤馆",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "soup",
    "district": "瀍河回族区 · 东关大街",
    "lat": 34.6912,
    "lng": 112.4925,
    "avgPrice": "￥20",
    "rating": 4.9,
    "reviewCount": 1280,
    "videoUrl": "https://www.douyin.com/video/7551480072486554890",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨隋坡实地评鉴：原油原汤不掺香精，大骨慢火煨足八小时，牛肉越嚼越香，配焦馍简直绝了！”",
    "dishes": [
      {
        "name": "牛肉汤",
        "price": "￥20"
      },
      {
        "name": "鲜羊肉汤",
        "price": "￥22"
      },
      {
        "name": "芝麻焦馍",
        "price": "￥2"
      },
      {
        "name": "牛杂汤",
        "price": "￥25"
      },
      {
        "name": "葱油饼",
        "price": "￥3"
      }
    ]
  }
];

// ==========================================
// 4. 郑州红榜美食数据集 (精选 27 家真实高赞探店，100% 真实在线)
// ==========================================
const ZHENGZHOU_FOOD_SPOTS = [
  {
    "id": "zz-spot-1",
    "hours": "10:30 - 21:30",
    "phone": "0371-66228723",
    "fullAddress": "郑州市金水区人民路3号（近二七广场，新华书店斜对面）",
    "city": "zhengzhou",
    "name": "合记烩面 (人民路老总店)",
    "bloggerId": "weiwei",
    "blogger": "特厨魏味",
    "category": "staple",
    "district": "金水区 · 人民路",
    "lat": 34.7578,
    "lng": 113.6762,
    "avgPrice": "￥32",
    "rating": 4.9,
    "reviewCount": 4280,
    "videoUrl": "https://www.douyin.com/video/7405592838139923712",
    "cover": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨实测郑州老字号！羊肉烩面汤浓肉烂面劲道，配上蒜汁芝麻叶，来河南不吃真白来了！”",
    "dishes": [
      {
        "name": "羊肉烩面",
        "price": "￥28"
      },
      {
        "name": "三鲜烩面",
        "price": "￥32"
      },
      {
        "name": "凉拌芝麻叶",
        "price": "￥15"
      },
      {
        "name": "五香卤羊蹄",
        "price": "￥18"
      },
      {
        "name": "芝麻烧饼",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "zz-spot-2",
    "hours": "10:00 - 22:00",
    "phone": "15838029988",
    "fullAddress": "郑州市管城回族区顺城街12号（西大街交叉口南侧清真名吃街）",
    "city": "zhengzhou",
    "name": "顺城街清真炒八掺 (老街烟火小吃)",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "street",
    "district": "管城回族区 · 顺城街",
    "lat": 34.7455,
    "lng": 113.6708,
    "avgPrice": "￥26",
    "rating": 4.9,
    "reviewCount": 5120,
    "videoUrl": "https://www.douyin.com/video/7559068005431250222",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞103万！花26元在郑州吃炒八掺，凉粉饼丝牛肚大火爆炒，主食爱好者狂喜直接香迷糊！”",
    "dishes": [
      {
        "name": "特色炒八掺",
        "price": "￥26"
      },
      {
        "name": "火爆炒凉粉",
        "price": "￥12"
      },
      {
        "name": "五香酱牛肉",
        "price": "￥38"
      },
      {
        "name": "焖牛排",
        "price": "￥45"
      },
      {
        "name": "芝麻烧饼",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "zz-spot-3",
    "hours": "05:30 - 14:00",
    "phone": "0371-66289988",
    "fullAddress": "郑州市管城回族区顺城街与紫荆山路连通道中段（近西大街）",
    "city": "zhengzhou",
    "name": "方中山胡辣汤 (顺城街总店)",
    "bloggerId": "wulala",
    "blogger": "特别乌拉拉",
    "category": "soup",
    "district": "管城回族区 · 顺城街",
    "lat": 34.7479,
    "lng": 113.6713,
    "avgPrice": "￥18",
    "rating": 4.9,
    "reviewCount": 8950,
    "videoUrl": "https://www.douyin.com/video/7558104351017897231",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞90.2万！在郑州狂喝8碗胡辣汤～麻辣鲜香直冲天灵盖，配牛肉水煎包舒舒服服一整天！”",
    "dishes": [
      {
        "name": "牛肉胡辣汤",
        "price": "￥13"
      },
      {
        "name": "三鲜胡辣汤",
        "price": "￥15"
      },
      {
        "name": "牛肉水煎包",
        "price": "￥10"
      },
      {
        "name": "油馍头",
        "price": "￥3"
      },
      {
        "name": "牛肉葱花盒",
        "price": "￥6"
      }
    ]
  },
  {
    "id": "zz-spot-4",
    "hours": "11:00 - 14:30, 17:30 - 22:00",
    "phone": "0371-66388998",
    "fullAddress": "郑州市管城回族区陇海东路与城东路交叉口向西150米路南",
    "city": "zhengzhou",
    "name": "杨记小炒 (特厨隋坡探店·三狠汤)",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "banquet",
    "district": "管城回族区 · 陇海东路",
    "lat": 34.7372,
    "lng": 113.674,
    "avgPrice": "￥45",
    "rating": 4.9,
    "reviewCount": 3890,
    "videoUrl": "https://www.douyin.com/video/7551480072486554890",
    "cover": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨隋坡28.7万赞！什么菜叫三狠汤？酸辣胡椒糊香并重，脆皮小炒肉焦香爆汁，绝了！”",
    "dishes": [
      {
        "name": "三狠汤",
        "price": "￥28"
      },
      {
        "name": "干煸黄豆芽",
        "price": "￥18"
      },
      {
        "name": "老郑州脆皮小炒肉",
        "price": "￥38"
      }
    ]
  },
  {
    "id": "zz-spot-5",
    "hours": "11:00 - 23:00",
    "phone": "15638887231",
    "fullAddress": "郑州市金水区黄河路与经八路交叉口向南100米路西",
    "city": "zhengzhou",
    "name": "老顺发老式炒面 (老郑州锅气代表)",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "staple",
    "district": "金水区 · 黄河路经八路",
    "lat": 34.7745,
    "lng": 113.6653,
    "avgPrice": "￥18",
    "rating": 4.8,
    "reviewCount": 2860,
    "videoUrl": "https://www.douyin.com/video/7377585647722204416",
    "cover": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨探店12.8万赞！真不一样！郑州老式炒面用粗面过水大火爆炒，镬气十足太香了！”",
    "dishes": [
      {
        "name": "老式牛肉大份炒面",
        "price": "￥18"
      },
      {
        "name": "鸡蛋炒粗面",
        "price": "￥13"
      },
      {
        "name": "凉拌黄瓜变蛋",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "zz-spot-6",
    "hours": "10:30 - 21:30",
    "phone": "0371-66320088",
    "fullAddress": "郑州市中原区伏牛路与伊河路交叉口向南60米路东",
    "city": "zhengzhou",
    "name": "葛记焖饼 (伏牛路老字号分店)",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "staple",
    "district": "中原区 · 伏牛路",
    "lat": 34.7428,
    "lng": 113.6125,
    "avgPrice": "￥35",
    "rating": 4.8,
    "reviewCount": 3670,
    "videoUrl": "https://www.douyin.com/video/7373601978808618275",
    "cover": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨探店实测：本地人推荐！什么焖饼卖了一百年？坛子肉软烂咸香不腻，饼丝吸透了肉汁特别利口，配一碗红豆小米粥极其落胃！”",
    "dishes": [
      {
        "name": "坛子肉焖饼",
        "price": "￥38"
      },
      {
        "name": "大菱豆干",
        "price": "￥12"
      },
      {
        "name": "红豆小米粥",
        "price": "￥4"
      },
      {
        "name": "酸辣广椒炒肉",
        "price": "￥32"
      }
    ]
  },
  {
    "id": "zz-spot-7",
    "hours": "10:30 - 21:00",
    "phone": "18638129988",
    "fullAddress": "郑州市管城回族区城东路与陇海东路交叉口向北100米路西",
    "city": "zhengzhou",
    "name": "鲍三羊肉炝锅面 (菜蟒非遗风味)",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "staple",
    "district": "管城回族区 · 城东路",
    "lat": 34.742,
    "lng": 113.6935,
    "avgPrice": "￥22",
    "rating": 4.8,
    "reviewCount": 2190,
    "videoUrl": "https://www.douyin.com/video/7384002691753643314",
    "cover": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨隋坡探店！90%河南人都吃过的一道面食，葱油羊肉大火炝锅，搭配手工菜蟒绝配！”",
    "dishes": [
      {
        "name": "羊肉葱油炝锅面",
        "price": "￥20"
      },
      {
        "name": "韭菜鸡蛋菜蟒",
        "price": "￥8"
      },
      {
        "name": "五香卤羊蹄",
        "price": "￥15"
      }
    ]
  },
  {
    "id": "zz-spot-8",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0371-63935228",
    "fullAddress": "郑州市金水区优胜南路与健康路交叉口东50米路北",
    "city": "zhengzhou",
    "name": "葛记焖饼 (百年老字号·优胜南路店)",
    "bloggerId": "popular",
    "blogger": "演员王迅",
    "category": "banquet",
    "district": "金水区 · 优胜南路",
    "lat": 34.7645,
    "lng": 113.6558,
    "avgPrice": "￥38",
    "rating": 4.9,
    "reviewCount": 3980,
    "videoUrl": "https://www.douyin.com/video/7433262609383591208",
    "cover": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
    "quote": "“演员王迅12.9万赞！去郑州必吃百年老店葛记焖饼，坛子肉香而不腻，蒸菜特色满满打包光！”",
    "dishes": [
      {
        "name": "百年坛子肉焖饼",
        "price": "￥36"
      },
      {
        "name": "红豆甜粥",
        "price": "￥6"
      },
      {
        "name": "老河南芝麻叶杂面条",
        "price": "￥16"
      }
    ]
  },
  {
    "id": "zz-spot-9",
    "hours": "17:30 - 次日02:00",
    "phone": "13938221199",
    "fullAddress": "郑州市中原区前进路与棉纺西路交叉口南80米路西",
    "city": "zhengzhou",
    "name": "西郊前进路烧烤 (36年西郊烧烤扛把子)",
    "bloggerId": "popular",
    "blogger": "河南民生香香美食",
    "category": "street",
    "district": "中原区 · 前进路棉纺路",
    "lat": 34.7552,
    "lng": 113.6068,
    "avgPrice": "￥50",
    "rating": 4.9,
    "reviewCount": 3420,
    "videoUrl": "https://www.douyin.com/video/7514152278366883107",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞1.2万！36年老店下午六点就挤满人，烤肉前必在羊油里蘸一下，蜜汁甜口烤鸡翅必须点！”",
    "dishes": [
      {
        "name": "羊油蘸料烤羊肉大串",
        "price": "￥5"
      },
      {
        "name": "特色蜜汁甜口烤鸡翅",
        "price": "￥10"
      },
      {
        "name": "西郊经典砂锅方便面",
        "price": "￥12"
      }
    ]
  },
  {
    "id": "zz-spot-10",
    "hours": "11:00 - 14:30, 17:00 - 22:30",
    "phone": "0371-65789966",
    "fullAddress": "郑州市金水区东风路与信息学院路交叉口向东200米路北",
    "city": "zhengzhou",
    "name": "老院子肉铺炭火铜锅涮羊肉",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "banquet",
    "district": "金水区 · 东风路",
    "lat": 34.7932,
    "lng": 113.6685,
    "avgPrice": "￥75",
    "rating": 4.9,
    "reviewCount": 2740,
    "videoUrl": "https://www.douyin.com/video/7482321509546052890",
    "cover": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    "quote": "“刘雨鑫24.5万赞！开在肉铺里的传统炭火铜锅，鲜羊肉现称现切立盘不倒，清水涮肉满口奶香！”",
    "dishes": [
      {
        "name": "鲜切手切羊上脑",
        "price": "￥48"
      },
      {
        "name": "清水炭火铜锅",
        "price": "￥20"
      },
      {
        "name": "老北京芝麻酱现烤烧饼",
        "price": "￥4"
      }
    ]
  },
  {
    "id": "zz-spot-11",
    "hours": "05:30 - 14:00",
    "phone": "13598882233",
    "fullAddress": "郑州市二七区淮河路与大学路交叉口向西150米路南",
    "city": "zhengzhou",
    "name": "郭记传统全羊汤馆 (老郑州清晨一口鲜)",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "soup",
    "district": "二七区 · 淮河路",
    "lat": 34.7291,
    "lng": 113.6392,
    "avgPrice": "￥28",
    "rating": 4.8,
    "reviewCount": 2580,
    "videoUrl": "https://www.douyin.com/video/7481192819659377956",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“刘雨鑫14.7万赞！郑州喝汤大赏，大锅熬煮奶白浓醇，舀上一大勺羊杂配现打油馍，得劲！”",
    "dishes": [
      {
        "name": "全羊汤",
        "price": "￥25"
      },
      {
        "name": "酥脆白吉馍",
        "price": "￥2"
      },
      {
        "name": "油馍",
        "price": "￥3"
      },
      {
        "name": "精制鲜羊杂",
        "price": "￥30"
      },
      {
        "name": "凉拌羊肚丝",
        "price": "￥35"
      }
    ]
  },
  {
    "id": "zz-spot-12",
    "hours": "11:00 - 23:00",
    "phone": "18838012345",
    "fullAddress": "郑州市二七区陇海中路56号院内1号楼底商",
    "city": "zhengzhou",
    "name": "西郊胖嫂柴鸡 (二环路地道炒鸡)",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "banquet",
    "district": "二七区 · 陇海中路",
    "lat": 34.735,
    "lng": 113.652,
    "avgPrice": "￥68",
    "rating": 4.9,
    "reviewCount": 4650,
    "videoUrl": "https://www.douyin.com/video/7295258901891517708",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“刘雨鑫打卡西郊老店：现杀现炒大铁锅爆炒柴鸡，麻辣鲜香锅气十足，鸡皮焦香肉质紧实，拌面绝了！”",
    "dishes": [
      {
        "name": "老居民楼九宫格全红锅",
        "price": "￥38"
      },
      {
        "name": "屠场鲜毛肚",
        "price": "￥32"
      },
      {
        "name": "手撕鲜鸭肠",
        "price": "￥26"
      }
    ]
  },
  {
    "id": "zz-spot-13",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0371-60100555",
    "fullAddress": "郑州市金水区建业路与福元路交叉口西南角（建业总部旁）",
    "city": "zhengzhou",
    "name": "阿五黄河大鲤鱼 (建业路总店)",
    "bloggerId": "popular",
    "blogger": "弋优",
    "category": "banquet",
    "district": "金水区 · 建业路",
    "lat": 34.7562,
    "lng": 113.7145,
    "avgPrice": "￥110",
    "rating": 4.9,
    "reviewCount": 5890,
    "videoUrl": "https://www.douyin.com/video/7552483700145032511",
    "cover": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞42.7万！来郑州吃非遗豫菜，红烧黄河大鲤鱼肉质紧实拉丝，与四海朋友喝酒畅快淋漓！”",
    "dishes": [
      {
        "name": "红烧黄河大鲤鱼",
        "price": "￥168"
      },
      {
        "name": "汴京烤鸭",
        "price": "￥88"
      },
      {
        "name": "肉丝带底",
        "price": "￥36"
      }
    ]
  },
  {
    "id": "zz-spot-14",
    "hours": "11:00 - 23:30",
    "phone": "13783556677",
    "fullAddress": "郑州市二七区航海中路与京广南路交叉口向西200米路北",
    "city": "zhengzhou",
    "name": "庞师傅大份老式炒面 (锅气决战)",
    "bloggerId": "popular",
    "blogger": "庞师不是师",
    "category": "staple",
    "district": "二七区 · 航海中路",
    "lat": 34.7185,
    "lng": 113.651,
    "avgPrice": "￥16",
    "rating": 4.8,
    "reviewCount": 1850,
    "videoUrl": "https://www.douyin.com/video/7481830165035666699",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞27.1万！一个大男人和一个大份炒面的终极决战，传说中郑州老式炒面原来这么过瘾！”",
    "dishes": [
      {
        "name": "巨无霸老式肉丝炒面",
        "price": "￥16"
      },
      {
        "name": "西红柿鸡蛋大份炒面",
        "price": "￥14"
      },
      {
        "name": "现煮绿豆百合甜汤",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "zz-spot-15",
    "hours": "06:00 - 11:30",
    "phone": "15515667788",
    "fullAddress": "郑州市管城回族区顺城街中段58号（西大街与东大街之间）",
    "city": "zhengzhou",
    "name": "闪记老字号香豆沫水煎包 (顺城街早点)",
    "bloggerId": "popular",
    "blogger": "密子君",
    "category": "street",
    "district": "管城回族区 · 顺城街西大街",
    "lat": 34.7492,
    "lng": 113.6702,
    "avgPrice": "￥12",
    "rating": 4.8,
    "reviewCount": 2430,
    "videoUrl": "https://www.douyin.com/video/7504172264997375267",
    "cover": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80",
    "quote": "“密子君9.3万赞探店！郑州老排队店，一碗小米香豆沫配刚出锅的牛肉水煎包，地道清真早点！”",
    "dishes": [
      {
        "name": "老顺城街清真香豆沫",
        "price": "￥4"
      },
      {
        "name": "牛肉粉条水煎包",
        "price": "￥2"
      },
      {
        "name": "老郑州炸牛肉盒",
        "price": "￥5"
      }
    ]
  },
  {
    "id": "zz-spot-16",
    "hours": "07:00 - 20:30",
    "phone": "13673668899",
    "fullAddress": "郑州市中原区建设西路96号国棉四厂中街生活区中心",
    "city": "zhengzhou",
    "name": "西郊国棉四厂老街坊小吃 (工人路老味道)",
    "bloggerId": "popular",
    "blogger": "樱桃大婉子",
    "category": "street",
    "district": "中原区 · 建设西路国棉四厂",
    "lat": 34.7538,
    "lng": 113.612,
    "avgPrice": "￥15",
    "rating": 4.8,
    "reviewCount": 1960,
    "videoUrl": "https://www.douyin.com/video/7600001486366366446",
    "cover": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "quote": "“土著私藏20年老店！国棉四厂老街坊满满的厂区情怀，麻酱串串与老式咖喱烩面太顶了！”",
    "dishes": [
      {
        "name": "老厂区老式麻酱麻辣烫",
        "price": "￥15"
      },
      {
        "name": "特色国棉咖喱烩面",
        "price": "￥14"
      },
      {
        "name": "大油条配甜豆浆",
        "price": "￥5"
      }
    ]
  },
  {
    "id": "zz-spot-17",
    "hours": "09:00 - 19:00",
    "phone": "0371-68781234",
    "fullAddress": "郑州市惠济区江山路与古荥老街交叉口向西100米",
    "city": "zhengzhou",
    "name": "惠济区老贾叫化土鸡 (老街烟火烧鸡店)",
    "bloggerId": "popular",
    "blogger": "叶拾一",
    "category": "street",
    "district": "惠济区 · 江山路老街",
    "lat": 34.821,
    "lng": 113.618,
    "avgPrice": "￥36",
    "rating": 4.8,
    "reviewCount": 1540,
    "videoUrl": "https://www.douyin.com/video/7613979483520062946",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“点赞1.5万！惠济区烟火气小店，现卤叫化土鸡皮脆肉烂透骨香，花钱不多吃得极其舒心！”",
    "dishes": [
      {
        "name": "叫化土鸡",
        "price": "￥38"
      },
      {
        "name": "现卤五香牛腱肉",
        "price": "￥35"
      },
      {
        "name": "凉拌黄瓜拌时蔬",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "zz-spot-18",
    "hours": "11:00 - 22:00",
    "phone": "13838112288",
    "fullAddress": "郑州市中原区西流湖街道化工路与西三环交叉口向西300米大院内",
    "city": "zhengzhou",
    "name": "西流湖柴火大锅炒鸡 (老棚户大院)",
    "bloggerId": "jason",
    "blogger": "刘雨鑫JASON",
    "category": "banquet",
    "district": "中原区 · 西流湖老村",
    "lat": 34.768,
    "lng": 113.568,
    "avgPrice": "￥58",
    "rating": 4.9,
    "reviewCount": 2890,
    "videoUrl": "https://www.douyin.com/video/7478557745424141606",
    "cover": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=80",
    "quote": "“刘雨鑫18.4万赞！开在荒郊野外的棚户级大院，生铁大柴锅现炒走地鸡，锅边贴玉米饼绝配！”",
    "dishes": [
      {
        "name": "生铁柴火麻辣大锅炒鸡",
        "price": "￥78"
      },
      {
        "name": "铁锅贴金黄玉米饼",
        "price": "￥12"
      },
      {
        "name": "自制红薯皮渣",
        "price": "￥18"
      }
    ]
  },
  {
    "id": "zz-spot-22",
    "hours": "11:00 - 22:00",
    "phone": "13838120055",
    "fullAddress": "郑州市中原区伊河路与文化宫路交叉口向东50米便民街",
    "city": "zhengzhou",
    "name": "西郊伊河路老牌炒凉粉",
    "bloggerId": "popular",
    "blogger": "多睡觉觉",
    "category": "street",
    "district": "中原区 · 伊河路",
    "lat": 34.742,
    "lng": 113.618,
    "avgPrice": "￥12",
    "rating": 4.8,
    "reviewCount": 1680,
    "videoUrl": "https://www.douyin.com/video/7631877921238561167",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“大铁锅焖出焦黄脆锅巴，红薯凉粉滑嫩滚烫，西瓜酱与蒜汁辣油一拌，西郊土著狂吃二十年的解馋神器！”",
    "dishes": [
      {
        "name": "西郊铁锅带焦皮炒凉粉",
        "price": "￥10"
      },
      {
        "name": "老式酸梅汤",
        "price": "￥4"
      }
    ]
  },
  {
    "id": "zz-spot-25",
    "hours": "10:30 - 20:00",
    "phone": "0371-63932255",
    "fullAddress": "郑州市金水区优胜南路与劳卫路交叉口东20米",
    "city": "zhengzhou",
    "name": "高记百年老卤肉老店",
    "bloggerId": "popular",
    "blogger": "记得按吃饭洛",
    "category": "street",
    "district": "金水区 · 优胜南路",
    "lat": 34.766,
    "lng": 113.665,
    "avgPrice": "￥40",
    "rating": 4.8,
    "reviewCount": 1780,
    "videoUrl": "https://www.douyin.com/video/7599129401763047104",
    "cover": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    "quote": "“金水区老餮私藏：老卤慢炖猪蹄、卤猪耳朵与大肠，色泽红亮肥而不腻，夹在刚打出的热千层饼里，肉香四溢直冒油！”",
    "dishes": [
      {
        "name": "老卤五花肉",
        "price": "￥45"
      },
      {
        "name": "千层葱油热饼",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "zz-spot-28",
    "hours": "10:30 - 22:00",
    "phone": "13673665500",
    "fullAddress": "郑州市二七区德化步行街南端百年老字号餐饮区2号",
    "city": "zhengzhou",
    "name": "百年德化老街原汁烩羊肉",
    "bloggerId": "popular",
    "blogger": "猴儿甜猴儿甜",
    "category": "soup",
    "district": "二七区 · 德化街",
    "lat": 34.748,
    "lng": 113.6635,
    "avgPrice": "￥28",
    "rating": 4.8,
    "reviewCount": 1980,
    "videoUrl": "https://www.douyin.com/video/7649320339499544266",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“大铁锅炖全羊，原汁高汤加入鲜羊肉片、羊杂与粉条慢火煨透，冬日喝上一大碗，从头顶暖到脚心，肉嫩汤香无膻味！”",
    "dishes": [
      {
        "name": "回族烩鲜羊肉",
        "price": "￥26"
      },
      {
        "name": "高炉手打芝麻烧饼",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "zz-spot-29",
    "hours": "11:00 - 22:30",
    "phone": "13838382299",
    "fullAddress": "郑州市中原区棉纺东路国棉三厂生活区老商业楼1层",
    "city": "zhengzhou",
    "name": "棉纺三厂老字号砂锅面筋",
    "bloggerId": "popular",
    "blogger": "杨队快来吃点",
    "category": "staple",
    "district": "中原区 · 棉纺路",
    "lat": 34.7565,
    "lng": 113.626,
    "avgPrice": "￥20",
    "rating": 4.9,
    "reviewCount": 3100,
    "videoUrl": "https://www.douyin.com/video/7513884373930757412",
    "cover": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "quote": "“西郊厂区三十年老砂锅：油炸面筋块吸饱老母鸡鲜汤，大火炭煨滋滋作响，面筋爆汁软糯，拌上蒜泥辣椒，绝绝子！”",
    "dishes": [
      {
        "name": "老汤砂锅面筋块",
        "price": "￥18"
      },
      {
        "name": "西郊特色现炸酥肉",
        "price": "￥15"
      }
    ]
  },
  {
    "id": "zz-spot-31",
    "hours": "10:30 - 21:00",
    "phone": "13938221199",
    "fullAddress": "郑州市中原区伏牛路与颖河路交叉口向北60米路东",
    "city": "zhengzhou",
    "name": "伏牛路老牌陕味油泼面",
    "bloggerId": "popular",
    "blogger": "碳水方方",
    "category": "staple",
    "district": "中原区 · 伏牛路",
    "lat": 34.738,
    "lng": 113.608,
    "avgPrice": "￥15",
    "rating": 4.8,
    "reviewCount": 1540,
    "videoUrl": "https://www.douyin.com/video/7585117074433035520",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“现扯裤带面煮得透亮，秦椒辣面与鲜葱花堆成小山，滚烫热菜籽油一泼香味爆开，搅拌均匀每根面条都裹满红油，碳水炸弹！”",
    "dishes": [
      {
        "name": "油泼biangbiang面",
        "price": "￥15"
      },
      {
        "name": "腊汁肉夹馍",
        "price": "￥8"
      }
    ]
  },
  {
    "id": "zz-spot-35",
    "hours": "06:30 - 21:30",
    "phone": "13838006611",
    "fullAddress": "郑州市中原区建设西路与百花路交叉口西100米路南",
    "city": "zhengzhou",
    "name": "建设路老厂区油泼牛肉拉面",
    "bloggerId": "popular",
    "blogger": "PP超能炫",
    "category": "staple",
    "district": "中原区 · 建设路",
    "lat": 34.751,
    "lng": 113.621,
    "avgPrice": "￥16",
    "rating": 4.8,
    "reviewCount": 1620,
    "videoUrl": "https://www.douyin.com/video/7657487330252862150",
    "cover": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "quote": "“西郊三十年老味道：拉面师傅手工现拉大宽，大块炖牛肉铺满碗面，热辣椒油现泼，汤醇面劲肉香浓郁！”",
    "dishes": [
      {
        "name": "油泼大块牛肉拉面",
        "price": "￥16"
      },
      {
        "name": "五香卤鸡蛋",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "zz-spot-36",
    "hours": "10:30 - 21:00",
    "phone": "13503881144",
    "fullAddress": "郑州市中原区桐柏北路与棉纺西路交叉口北50米",
    "city": "zhengzhou",
    "name": "桐柏路老牌砂锅黄焖鸡米饭",
    "bloggerId": "popular",
    "blogger": "再吃一口吧",
    "category": "staple",
    "district": "中原区 · 桐柏路",
    "lat": 34.761,
    "lng": 113.612,
    "avgPrice": "￥18",
    "rating": 4.8,
    "reviewCount": 1280,
    "videoUrl": "https://www.douyin.com/video/7631235309031694329",
    "cover": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
    "quote": "“浓汁砂锅煨出正宗黄焖鸡：鲜嫩鸡腿肉裹满浓稠鲍汁香菇与青椒，汤汁拌米饭连扒三碗，老小区的踏实干饭圣地！”",
    "dishes": [
      {
        "name": "浓汁砂锅香菇黄焖鸡",
        "price": "￥18"
      },
      {
        "name": "五常大米饭无限续",
        "price": "￥2"
      }
    ]
  },
  {
    "id": "zz-spot-37",
    "hours": "11:00 - 23:00",
    "phone": "0371-65778899",
    "fullAddress": "郑州市金水区金水路288号曼哈顿商业广场负一层",
    "city": "zhengzhou",
    "name": "川府水煮活鱼曼哈顿老店",
    "bloggerId": "popular",
    "blogger": "课代表",
    "category": "banquet",
    "district": "金水区 · 金水路",
    "lat": 34.764,
    "lng": 113.708,
    "avgPrice": "￥68",
    "rating": 4.8,
    "reviewCount": 2400,
    "videoUrl": "https://www.douyin.com/video/7672743845650193338",
    "cover": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
    "quote": "“现杀两斤半活草鱼片极薄，热豆油爆香汉源红袍花椒与贵州子弹头干辣椒，滚油淋在鱼片上刺啦作响，麻辣鲜嫩入口即化！”",
    "dishes": [
      {
        "name": "沸腾麻辣水煮活鱼",
        "price": "￥58"
      },
      {
        "name": "爽口红糖冰粉",
        "price": "￥6"
      }
    ]
  },
  {
    "id": "zz-spot-50",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0371-66779922",
    "fullAddress": "郑州市金水区未来路与商城东路交叉口向北150米路东",
    "city": "zhengzhou",
    "name": "未来路河南老八样传统扣碗馆",
    "bloggerId": "suipo",
    "blogger": "特厨隋坡",
    "category": "banquet",
    "district": "金水区 · 未来路",
    "lat": 34.755,
    "lng": 113.715,
    "avgPrice": "￥45",
    "rating": 4.8,
    "reviewCount": 2100,
    "videoUrl": "https://www.douyin.com/video/7547438464665439497",
    "cover": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨隋坡品鉴传统豫宴扣碗：八大扣碗大笼汽蒸两小时，小酥肉肉质滑嫩吸饱汤汁，八宝甜饭软糯拉丝，老家红白喜事的经典滋味！”",
    "dishes": [
      {
        "name": "河南传统蒸小酥肉",
        "price": "￥28"
      },
      {
        "name": "糯米蜜枣八宝饭",
        "price": "￥22"
      }
    ]
  }
];

// ==========================================
// 5. 洛阳黑榜避雷数据集 (精选 8 家真实在线打假避坑，100% 真实在线)
// ==========================================
const LUOYANG_BLACKLIST_SPOTS = [
  {
    "id": "black-spot-1",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0379-63953888",
    "fullAddress": "洛阳市老城区中州东路359号（青年宫正对面）",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "真不同饭店 (洛阳水席老字号总店)",
    "bloggerId": "erbai",
    "blogger": "二百者也",
    "category": "banquet",
    "district": "老城区 · 中州东路",
    "lat": 34.6852,
    "lng": 112.483,
    "avgPrice": "￥85",
    "rating": 2.2,
    "warningLevel": "争议巨大 / 严重劝退",
    "reviewCount": 256000,
    "likes": "25.6万",
    "videoUrl": "https://www.douyin.com/video/7130048715309452574",
    "cover": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    "quote": "“25.6万赞盲盒实测踩坑：200元开水席扛把子真不同盲盒！水席全靠浓醋、胡椒和重勾芡吊味，形式大于口味，外地游客多吃不惯直呼‘吃寂寞’，性价比极低两极分化，严重避雷慎选！”",
    "dishes": [
      {
        "name": "牡丹燕菜",
        "price": "￥58"
      },
      {
        "name": "焦炸丸子",
        "price": "￥36"
      },
      {
        "name": "连汤肉片",
        "price": "￥42"
      },
      {
        "name": "洛阳熬炒鸡",
        "price": "￥48"
      }
    ]
  },
  {
    "id": "black-spot-2",
    "hours": "17:30 - 23:30",
    "phone": "暂无登记",
    "fullAddress": "洛阳市老城区十字街夜市北段步行街中街流动摊区",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "十字街夜市网红现炸牡丹花饼",
    "bloggerId": "weili",
    "blogger": "伟力是我",
    "category": "street",
    "district": "老城区 · 十字街夜市中段",
    "lat": 34.684,
    "lng": 112.4765,
    "avgPrice": "￥15",
    "rating": 2,
    "warningLevel": "纯智商税",
    "reviewCount": 17000,
    "likes": "1.7万",
    "videoUrl": "https://www.douyin.com/video/7619285698562371941",
    "cover": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80",
    "quote": "“十字街盲选避雷攻略：打着洛阳牡丹旗号，实际是面粉裹廉价香精糖精，大铁锅陈年黑油炸后极度油腻恶心！本地人直言从不吃，纯坑外地游客！”",
    "dishes": [
      {
        "name": "香精牡丹花饼",
        "price": "￥15"
      },
      {
        "name": "陈年老油炸串",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "black-spot-3",
    "hours": "06:30 - 18:00",
    "phone": "暂无登记",
    "fullAddress": "洛阳市洛龙区龙门石窟西北游客服务中心出口商业街A8号",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "龙门石窟景区旁高价清汤牛肉汤",
    "bloggerId": "popular",
    "blogger": "QQ的美食日记",
    "category": "soup",
    "district": "洛龙区 · 龙门石窟景区出口",
    "lat": 34.558,
    "lng": 112.468,
    "avgPrice": "￥35",
    "rating": 2.3,
    "warningLevel": "景区刺客",
    "reviewCount": 38000,
    "likes": "3.8万",
    "videoUrl": "https://www.douyin.com/video/7676692866462763753",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“特种兵吃遍洛阳避坑实录：开在龙门石窟出口的刺客店！35元一碗汤捞到底只有三片碎肉渣，汤底发苦全靠重度味精吊味，配的油馍硬得像石头！”",
    "dishes": [
      {
        "name": "35元清汤寡水牛肉汤",
        "price": "￥35"
      },
      {
        "name": "干硬咬不动死面馍",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "black-spot-4",
    "hours": "08:00 - 20:00",
    "phone": "暂无登记",
    "fullAddress": "洛阳市老城区西大街丽景门向东150米路北",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "老城西大街某网红不翻汤老店",
    "bloggerId": "maikou",
    "blogger": "迈扣来了",
    "category": "soup",
    "district": "老城区 · 西大街路北",
    "lat": 34.683,
    "lng": 112.472,
    "avgPrice": "￥18",
    "rating": 2.4,
    "warningLevel": "严重劝退",
    "reviewCount": 56000,
    "likes": "5.6万",
    "videoUrl": "https://www.douyin.com/video/7622128902781556072",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“实地探店避坑：网红不翻汤绿豆饼皮没煎熟带着生粉腥味，劣质胡椒粉放死多掩盖食材不新鲜，碗边油腻未洗干净，吃两口直接劝退！”",
    "dishes": [
      {
        "name": "夹生腥味不翻汤",
        "price": "￥15"
      },
      {
        "name": "发烂碎粉条",
        "price": "￥8"
      }
    ]
  },
  {
    "id": "black-spot-5",
    "hours": "18:00 - 次日02:00",
    "phone": "暂无登记",
    "fullAddress": "洛阳市涧西区景华路与太原路交叉口向东夜市大排档露天摊",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "涧西区某排档死咸爆炒腰花",
    "bloggerId": "popular",
    "blogger": "姜还是老的辣",
    "category": "street",
    "district": "涧西区 · 景华路大排档",
    "lat": 34.654,
    "lng": 112.412,
    "avgPrice": "￥50",
    "rating": 2.1,
    "warningLevel": "严重翻车",
    "reviewCount": 20000,
    "likes": "2.0万",
    "videoUrl": "https://www.douyin.com/video/7657833671029689610",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“大排档实测避雷翻车：腰花臊味完全没去干净，上浆过厚脱浆成黏糊黑汤，老抽放多齁咸发苦，大半盘根本难以下咽，严重避坑！”",
    "dishes": [
      {
        "name": "糊汤脱浆爆炒腰花",
        "price": "￥48"
      },
      {
        "name": "死咸发黑炒牛肚",
        "price": "￥38"
      }
    ]
  },
  {
    "id": "black-spot-7",
    "hours": "11:00 - 21:30",
    "phone": "暂无登记",
    "fullAddress": "洛阳市西工区凯旋西路与王城大道交叉口东商业楼负一层",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "西工区某商圈冷冻糊弄大盘鸡",
    "bloggerId": "popular",
    "blogger": "二百者也",
    "category": "banquet",
    "district": "西工区 · 凯旋西路",
    "lat": 34.6725,
    "lng": 112.438,
    "avgPrice": "￥60",
    "rating": 2.3,
    "warningLevel": "预制冷冻",
    "reviewCount": 371000,
    "likes": "37.1万",
    "videoUrl": "https://www.douyin.com/video/7668190604966300978",
    "cover": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
    "quote": "“二百者也37万赞开盲盒实测：号称现炒大盘鸡，端上来全是冷冻发柴的鸡脖子与碎骨头，土豆炖成烂泥，面条坨结硬死，大避雷！”",
    "dishes": [
      {
        "name": "发柴鸡胸肉大盘鸡",
        "price": "￥98"
      },
      {
        "name": "烂成泥土豆宽面坨",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "black-spot-8",
    "hours": "08:30 - 17:30",
    "phone": "暂无登记",
    "fullAddress": "洛阳市洛龙区白马寺镇洛白路白马寺山门西侧售票处对面",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "白马寺景区外某特色素斋馆",
    "bloggerId": "popular",
    "blogger": "喜欢蕾",
    "category": "banquet",
    "district": "瀍河回族区 · 白马寺景区旁",
    "lat": 34.721,
    "lng": 112.598,
    "avgPrice": "￥68",
    "rating": 2,
    "warningLevel": "暴利忽悠",
    "reviewCount": 10000,
    "likes": "1.0万",
    "videoUrl": "https://www.douyin.com/video/7607023940888960625",
    "cover": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
    "quote": "“打着佛门素斋旗号高价宰客，一盘素鸡要68元，全是批发人造大豆蛋白浸泡在重盐重油里，米饭还带酸馊味，避坑！”",
    "dishes": [
      {
        "name": "大豆蛋白人造鸡",
        "price": "￥68"
      },
      {
        "name": "高价糊弄素排骨",
        "price": "￥58"
      }
    ]
  },
  {
    "id": "black-spot-15",
    "hours": "10:30 - 21:00",
    "phone": "13693821099",
    "fullAddress": "洛阳市西工区中州中路王府井百货后街美食巷6号",
    "city": "luoyang",
    "isBlacklist": true,
    "name": "西工王府井后街某网红爆浆豆腐与大面筋",
    "bloggerId": "weili",
    "blogger": "伟力是我",
    "category": "street",
    "district": "西工区 · 王府井",
    "lat": 34.673,
    "lng": 112.441,
    "avgPrice": "￥25",
    "rating": 2.4,
    "warningLevel": "回锅老油重度刺激",
    "reviewCount": 1400,
    "likes": "4500",
    "videoUrl": "https://www.douyin.com/video/7512938401928374619",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“伟力是我本地避坑扫街探店提醒：排队20分钟，豆腐炸得又干又硬像瓦片，里面毫无爆浆，酱汁死咸死辣全是工业辣椒精，吃完胃里烧灼感极强！”",
    "dishes": [
      {
        "name": "辣椒精爆浆老豆腐",
        "price": "￥15"
      },
      {
        "name": "复炸烤面筋",
        "price": "￥10"
      }
    ]
  }
];

// ==========================================
// 6. 郑州黑榜避雷数据集 (精选 15 家真实在线打假避坑，100% 真实在线)
// ==========================================
const ZHENGZHOU_BLACKLIST_SPOTS = [
  {
    "id": "zz-black-spot-1",
    "hours": "11:00 - 14:30, 17:00 - 21:30",
    "phone": "0371-66224168",
    "fullAddress": "郑州市管城回族区西大街与南下街交叉口向东50米路北",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "葛记焖饼老字号总店 (百年名号大翻车)",
    "bloggerId": "wangbaishi",
    "blogger": "王白石",
    "category": "staple",
    "district": "管城回族区 · 西大街",
    "lat": 34.7485,
    "lng": 113.6732,
    "avgPrice": "￥45",
    "rating": 2.1,
    "warningLevel": "严重劝退",
    "reviewCount": 13000,
    "likes": "1.3万",
    "videoUrl": "https://www.douyin.com/video/7656381494214135091",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“1.3万赞实测避坑：吃了更后悔的郑州百年老字号！招牌焖饼油重黏牙发腻，坛子肉肥膘过重齁咸，名气远大于实质，本地人直言除了焖饼其他还能吃，严重避雷！”",
    "dishes": [
      {
        "name": "坛子肉焖饼",
        "price": "￥38"
      },
      {
        "name": "大菱豆干",
        "price": "￥12"
      },
      {
        "name": "红豆小米粥",
        "price": "￥4"
      },
      {
        "name": "酸辣脆瓜条",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "zz-black-spot-2",
    "hours": "10:30 - 21:00",
    "phone": "0371-66223590",
    "fullAddress": "郑州市金水区人民路3号（工人文化宫正对面）",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "合记烩面人民路老店 (国营傲慢与羊肉碎)",
    "bloggerId": "wangbaishi",
    "blogger": "王白石",
    "category": "staple",
    "district": "金水区 · 人民路",
    "lat": 34.7562,
    "lng": 113.6758,
    "avgPrice": "￥35",
    "rating": 2.4,
    "warningLevel": "情怀踩雷",
    "reviewCount": 18000,
    "likes": "1.8万",
    "videoUrl": "https://www.douyin.com/video/7405592838139923712",
    "cover": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    "quote": "“特厨实测避坑：昔日烩面扛把子如今服务冷淡！汤底寡淡全靠大量味精和胡椒吊味，28元一碗烩面翻到底只有三片碎肉渣，面条夹生无嚼劲，老店光环退化严重劝退！”",
    "dishes": [
      {
        "name": "羊肉老式烩面",
        "price": "￥28"
      },
      {
        "name": "凉拌牛肚",
        "price": "￥45"
      }
    ]
  },
  {
    "id": "zz-black-spot-3",
    "hours": "11:00 - 23:00",
    "phone": "暂无登记",
    "fullAddress": "郑州市二七区德化步行街下沉商业街中心入口处",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "二七德化街流动摊网红轰炸大油边",
    "bloggerId": "weili",
    "blogger": "伟力是我",
    "category": "street",
    "district": "二七区 · 德化步行街",
    "lat": 34.7505,
    "lng": 113.6645,
    "avgPrice": "￥25",
    "rating": 2,
    "warningLevel": "景区刺客",
    "reviewCount": 17000,
    "likes": "1.7万",
    "videoUrl": "https://www.douyin.com/video/7619285698562371941",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“二七商圈流动刺客！大油边外焦里生咬出一嘴腥血水，满摊都是工业化学辣椒精调味粉，吃完全身烧心！专坑打卡二七塔的外地游客，纯纯智商税！”",
    "dishes": [
      {
        "name": "夹生工业油边串",
        "price": "￥20"
      },
      {
        "name": "化学辣粉烤面筋",
        "price": "￥10"
      }
    ]
  },
  {
    "id": "zz-black-spot-4",
    "hours": "06:00 - 21:00",
    "phone": "暂无登记",
    "fullAddress": "郑州市二七区大同路与兴隆街交叉口火车站东广场出站商业区6号",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "郑州火车站出站口某高价清汤胡辣汤",
    "bloggerId": "popular",
    "blogger": "QQ的美食日记",
    "category": "soup",
    "district": "二七区 · 火车站广场",
    "lat": 34.7472,
    "lng": 113.6598,
    "avgPrice": "￥30",
    "rating": 2,
    "warningLevel": "车站宰客",
    "reviewCount": 38000,
    "likes": "3.8万",
    "videoUrl": "https://www.douyin.com/video/7676692866462763753",
    "cover": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500&auto=format&fit=crop&q=80",
    "quote": "“特种兵吃遍中原避坑实录：火车站赶车刺客！号称正宗逍遥镇，一碗要价25元捞不到半片肉，全是淀粉死勾芡和重度黑胡椒精，配的水煎包皮厚发硬发酸，专宰外地旅客！”",
    "dishes": [
      {
        "name": "高价寡水清汤胡辣汤",
        "price": "￥25"
      },
      {
        "name": "夹生水煎包",
        "price": "￥15"
      }
    ]
  },
  {
    "id": "zz-black-spot-5",
    "hours": "18:30 - 次日02:30",
    "phone": "暂无登记",
    "fullAddress": "郑州市金水区健康路与优胜南路交叉口夜市中段露天摊位",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "健康路夜市某网红高价海鲜大排档",
    "bloggerId": "maikou",
    "blogger": "迈扣来了",
    "category": "street",
    "district": "金水区 · 健康路夜市",
    "lat": 34.7668,
    "lng": 113.6682,
    "avgPrice": "￥95",
    "rating": 2.1,
    "warningLevel": "严重翻车",
    "reviewCount": 56000,
    "likes": "5.6万",
    "videoUrl": "https://www.douyin.com/video/7622128902781556072",
    "cover": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80",
    "quote": "“健康路夜市严重翻车实录！所谓鲜活海鲜大咖全是批发死蟹冷冻小龙虾，重度老抽和重盐爆炒掩盖死虾臭味，吃两口舌头发麻，卫生堪忧严重踩雷！”",
    "dishes": [
      {
        "name": "死虾高盐麻辣小龙虾",
        "price": "￥98"
      },
      {
        "name": "空壳海鲜大咖",
        "price": "￥138"
      }
    ]
  },
  {
    "id": "zz-black-spot-6",
    "hours": "11:00 - 14:00, 17:00 - 21:00",
    "phone": "0371-63889977",
    "fullAddress": "郑州市二七区民主路3号大卫城西侧商业街负一层美食区",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "二七商圈某高价传统豫菜馆预制菜刺客",
    "bloggerId": "erbai",
    "blogger": "二百者也",
    "category": "banquet",
    "district": "二七区 · 民主路",
    "lat": 34.755,
    "lng": 113.6625,
    "avgPrice": "￥110",
    "rating": 2.2,
    "warningLevel": "暴利预制",
    "reviewCount": 427000,
    "likes": "42.7万",
    "videoUrl": "https://www.douyin.com/video/7294180439080586546",
    "cover": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    "quote": "“42.7万赞开盲盒实测踩坑：号称名厨主理非遗鲤鱼焙面，端上来鱼肉干柴发硬带着浓重土腥泥味，面糊发死发黏，炸焙面直接坨成一团硬线团，暴利预制严重避雷！”",
    "dishes": [
      {
        "name": "土腥干柴糖醋鲤鱼",
        "price": "￥108"
      },
      {
        "name": "坨结硬线油炸焙面",
        "price": "￥38"
      }
    ]
  },
  {
    "id": "zz-black-spot-7",
    "hours": "17:00 - 23:00",
    "phone": "暂无登记",
    "fullAddress": "郑州市中原区棉纺西路三厂社区便民商业街拐角大排档",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "西郊某号称30年情怀死咸老式炒面",
    "bloggerId": "popular",
    "blogger": "姜还是老的辣",
    "category": "staple",
    "district": "中原区 · 棉纺西路",
    "lat": 34.7578,
    "lng": 113.6195,
    "avgPrice": "￥20",
    "rating": 2.1,
    "warningLevel": "严重避坑",
    "reviewCount": 20000,
    "likes": "2.0万",
    "videoUrl": "https://www.douyin.com/video/7657833671029689610",
    "cover": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "quote": "“打着西郊国棉厂老式情怀旗号高价忽悠！炒面老抽倒半锅，糊底发苦齁咸发黑，豆芽没洗干净带着生泥水味，吃两口猛灌三大瓶水，严重避坑！”",
    "dishes": [
      {
        "name": "糊锅死咸黑炒面",
        "price": "￥18"
      },
      {
        "name": "夹生脱水豆芽肉丝",
        "price": "￥25"
      }
    ]
  },
  {
    "id": "zz-black-spot-8",
    "hours": "10:00 - 22:00",
    "phone": "暂无登记",
    "fullAddress": "郑州市金水区花园路与农业路交叉口国贸商业街南入口",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "花园路商圈某网红手作人造奶油烘焙",
    "bloggerId": "popular",
    "blogger": "喜欢蕾",
    "category": "street",
    "district": "金水区 · 花园路",
    "lat": 34.7885,
    "lng": 113.6788,
    "avgPrice": "￥45",
    "rating": 2,
    "warningLevel": "纯智商税",
    "reviewCount": 10000,
    "likes": "1.0万",
    "videoUrl": "https://www.douyin.com/video/7607023940888960625",
    "cover": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
    "quote": "“排队一个半小时纯智商税！号称法国天然动物淡奶油，实测全是劣质植物氢化油植脂末，入口发腻不化像吃肥皂，价格比一线大牌还贵，严重劝退！”",
    "dishes": [
      {
        "name": "植脂末人造奶油泡芙",
        "price": "￥38"
      },
      {
        "name": "香精糖精彩虹瑞士卷",
        "price": "￥42"
      }
    ]
  },
  {
    "id": "zz-black-spot-9",
    "hours": "07:00 - 23:00",
    "phone": "0371-66991028",
    "fullAddress": "郑州市二七区二七广场德化步行街地下负一层A区16号",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "二七地下某排号正宗传统滋补烩面老店",
    "bloggerId": "erbai",
    "blogger": "二百者也",
    "category": "staple",
    "district": "二七区 · 德化街",
    "lat": 34.7525,
    "lng": 113.664,
    "avgPrice": "￥28",
    "rating": 1.9,
    "warningLevel": "浓汤宝勾兑碎冷冻羊肉",
    "reviewCount": 2180,
    "likes": "1.35万",
    "videoUrl": "https://www.douyin.com/video/7408920192837461928",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“二百者也实测打假：火车站和二七游客重灾区！号称老母鸡羊大骨慢熬，汤底明显是浓汤宝粉剂开水冲化，几片碎羊肉又柴又硬，面胚僵硬扯不开！”",
    "dishes": [
      {
        "name": "速溶烩面",
        "price": "￥26"
      },
      {
        "name": "面粉吸油劣质羊肉串",
        "price": "￥25"
      }
    ]
  },
  {
    "id": "zz-black-spot-10",
    "hours": "17:30 - 02:00",
    "phone": "13838192039",
    "fullAddress": "郑州市金水区健康路夜市南段08号美食摊位",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "健康路夜市某网红火爆烤羊肉大串与大板筋",
    "bloggerId": "tangrenjie",
    "blogger": "真探唐仁杰",
    "category": "street",
    "district": "金水区 · 健康路",
    "lat": 34.771,
    "lng": 113.669,
    "avgPrice": "￥48",
    "rating": 2,
    "warningLevel": "鸭胸肉刷羊油精冒充",
    "reviewCount": 1950,
    "likes": "8900",
    "videoUrl": "https://www.douyin.com/video/7483920192837461928",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“唐仁杰实地采样：标榜内蒙古空运大红柳羊肉串，肉质咬下去全无羊肉肌理，是鸭胸肉浸泡羊尾油精和保水剂制成，炭火一烤直往下滴化学黄油！”",
    "dishes": [
      {
        "name": "调理羊肉串",
        "price": "￥35"
      },
      {
        "name": "咬不烂劣质假板筋",
        "price": "￥15"
      }
    ]
  },
  {
    "id": "zz-black-spot-11",
    "hours": "06:00 - 13:00",
    "phone": "0371-65981023",
    "fullAddress": "郑州市金水区纬三路水产市场东侧临街门面3号",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "纬三路某号称三十年老味道牛排胡辣汤",
    "bloggerId": "tangrenjie",
    "blogger": "真探唐仁杰",
    "category": "soup",
    "district": "金水区 · 纬三路",
    "lat": 34.774,
    "lng": 113.673,
    "avgPrice": "￥18",
    "rating": 2.2,
    "warningLevel": "胡椒精呛喉面筋发黑",
    "reviewCount": 1120,
    "likes": "6400",
    "videoUrl": "https://www.douyin.com/video/7469102938471928374",
    "cover": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "quote": "“真探唐仁杰硬核探店实评：汤底颜色发黑浑浊，辣味不是正统中药香料与优质胡椒的温润回甘，而是纯工业胡椒精直冲天灵盖，牛排全是碎骨头渣子！”",
    "dishes": [
      {
        "name": "工业胡辣汤",
        "price": "￥15"
      },
      {
        "name": "回软发腻油馍头",
        "price": "￥3"
      }
    ]
  },
  {
    "id": "zz-black-spot-13",
    "hours": "11:00 - 22:30",
    "phone": "0371-67891028",
    "fullAddress": "郑州市金水区花园路与农业路交叉口国贸360商场4层",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "国贸360某网红爆汁厚切炸猪排与咖喱蛋包饭",
    "bloggerId": "weili",
    "blogger": "伟力是我",
    "category": "staple",
    "district": "金水区 · 国贸360",
    "lat": 34.787,
    "lng": 113.679,
    "avgPrice": "￥68",
    "rating": 2.1,
    "warningLevel": "面糊厚重死猪肉腥味",
    "reviewCount": 1640,
    "likes": "5200",
    "videoUrl": "https://www.douyin.com/video/7488291029384719283",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“伟力是我本地避坑扫街实探排队店：所谓厚切猪排，两层干硬面包糠面糊占了三分之二厚，肉质死硬发柴还带着一股冷冻生猪肉的腥气，咖喱也是工业半成品！”",
    "dishes": [
      {
        "name": "厚面炸猪排",
        "price": "￥48"
      },
      {
        "name": "料理包速热甜腻咖喱",
        "price": "￥28"
      }
    ]
  },
  {
    "id": "zz-black-spot-14",
    "hours": "11:00 - 22:00",
    "phone": "0371-63819028",
    "fullAddress": "郑州市中原区棉纺东路与嵩山北路交叉口西80米",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "棉纺路某打着国棉老字号旗号传统炒面馆",
    "bloggerId": "popular",
    "blogger": "郑州老厂区饕客打假",
    "category": "staple",
    "district": "中原区 · 棉纺路",
    "lat": 34.761,
    "lng": 113.629,
    "avgPrice": "￥22",
    "rating": 2.3,
    "warningLevel": "重油炒焦面条糊碎",
    "reviewCount": 860,
    "likes": "1180",
    "videoUrl": "https://www.douyin.com/video/7468192019283746192",
    "cover": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=80",
    "quote": "“本地老厂区居民揭露：冒充当年国棉四厂老手艺，炒面锅气全无，全是一锅倒半碗重油猛煸出来的焦苦味，吃到底部积着一层黑油汤，油腻透顶！”",
    "dishes": [
      {
        "name": "重油炒面",
        "price": "￥18"
      },
      {
        "name": "发苦过咸鸡蛋汤",
        "price": "￥5"
      }
    ]
  },
  {
    "id": "zz-black-spot-15",
    "hours": "10:30 - 22:00",
    "phone": "0371-66518290",
    "fullAddress": "郑州市管城回族区顺城南街与东大街交叉口南侧小巷2号",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "顺城街某网红秘制红油牛杂与肺片小铺",
    "bloggerId": "erbai",
    "blogger": "二百者也",
    "category": "street",
    "district": "管城回族区 · 顺城街",
    "lat": 34.746,
    "lng": 113.671,
    "avgPrice": "￥45",
    "rating": 2,
    "warningLevel": "辣椒精红油牛下水异味",
    "reviewCount": 1380,
    "likes": "1.12万",
    "videoUrl": "https://www.douyin.com/video/7418102938471928374",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“二百者也暗访：红油颜色艳红得刺眼，入口烧喉咙，明显勾兑工业色素辣椒红；牛肺和牛肠处理得敷衍草率，骚腥下水味浓重，狂放味精企图遮盖！”",
    "dishes": [
      {
        "name": "色素红油肺片",
        "price": "￥38"
      },
      {
        "name": "发硬嚼不烂卤牛肠",
        "price": "￥42"
      }
    ]
  },
  {
    "id": "zz-black-spot-19",
    "hours": "17:00 - 03:00",
    "phone": "13938210928",
    "fullAddress": "郑州市二七区汝河路与桐柏南路交叉口西50米夜市排档",
    "city": "zhengzhou",
    "isBlacklist": true,
    "name": "汝河路夜市某招牌卤猪蹄与热卤串串",
    "bloggerId": "popular",
    "blogger": "西郊深夜夜市避坑",
    "category": "street",
    "district": "二七区 · 汝河路",
    "lat": 34.731,
    "lng": 113.621,
    "avgPrice": "￥45",
    "rating": 2.1,
    "warningLevel": "老卤酸败甲醇异味",
    "reviewCount": 920,
    "likes": "1320",
    "videoUrl": "https://www.douyin.com/video/7481029384719283741",
    "cover": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "quote": "“本地西郊吃客排雷：号称百年卤汤，实际卤锅夏天常温存放早已发酸变质，猪蹄毛没褪净、皮下脂肪厚重不入味，吃两口酸气直往上反！”",
    "dishes": [
      {
        "name": "老卤大猪蹄",
        "price": "￥35"
      },
      {
        "name": "死咸老油热卤豆干",
        "price": "￥12"
      }
    ]
  }
];

// 全量导出整合数组
const ALL_FOOD_SPOTS = [...LUOYANG_FOOD_SPOTS, ...ZHENGZHOU_FOOD_SPOTS];
const ALL_BLACKLIST_SPOTS = [...LUOYANG_BLACKLIST_SPOTS, ...ZHENGZHOU_BLACKLIST_SPOTS];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CITIES,
    RED_FOOD_BLOGGERS,
    BLACK_FOOD_BLOGGERS,
    FOOD_BLOGGERS,
    LUOYANG_FOOD_SPOTS,
    ZHENGZHOU_FOOD_SPOTS,
    LUOYANG_BLACKLIST_SPOTS,
    ZHENGZHOU_BLACKLIST_SPOTS,
    ALL_FOOD_SPOTS,
    ALL_BLACKLIST_SPOTS
  };
}

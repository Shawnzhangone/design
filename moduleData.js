/**
 * Created by admin on 2018/10/22.
 */

const state = {
alldatal:{
  "pid":"3",
    "pname":"惠州自由人",
    "top_nav":{"navigationBarBackgroundColor":"#30c8a2","navigationBarTextStyle":"white"},
  "bottom_nav":{"backgroundColor":"#ffffff","color":"#717171","selectedColor":"#30c8a2","layout":"v__navb1","list":[{"pagePath": "1",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/travel/grey43.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/travel/green43.png",
    "text": "首页"},{
    "pagePath": "2",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/travel/grey41.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/travel/green41.png",
    "text": "目的地"
  },{
    "pagePath": "3",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/travel/grey42.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/travel/green42.png",
    "text": "发现"
  },{
    "pagePath": "4",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/travel/grey44.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/travel/green44.png",
    "text": "我的"
  }]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"惠州自由人",
      "name":"首页",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'1'
        },
        {"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum":"4",
          "widget":{"ti":true},
          "style":{"line__height":"16","font__size":"14","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"},
          "ind":'1'
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":"目的地推荐 | 精选好玩的景点、城市",
          "style":{"background__color":"#ffffff","color":"#000000","font__size":"13","text__align":"left","height":"26","line__height":"30"},
          "incident":"1"
        },
        {"type":"vImgTextList",
          "mname":"图文集",
          "layout":"vImgTextList__3",
          "style":{"border__radius":"0","line__height":"16","font__size":"12","color":"#666666","padding":"0","padding__top":"0","padding__bottom":"0"},
          "ind":'1'
        },
        {"type":"vImgTextList",
          "mname":"图文集",
          "layout":"vImgTextList__3",
          "style":{"border__radius":"0","line__height":"16","font__size":"12","color":"#666666","padding":"0","padding__top":"0","padding__bottom":"0"},
          "ind":'1'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"1","margin__left":"0","margin__right":"0"},
          "incident":"1",
          "ind":'1'
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":"【自由人】博罗观背油画村-怡情谷温泉一天自由行",
          "style":{"background__color":"#ffffff","color":"#30c8a2","font__size":"13","text__align":"center","height":"38","line__height":"26"},
          "incident":"1"
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"1","margin__left":"0","margin__right":"0"},
          "incident":"1",
          "ind":'1'
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":"【自由人】博罗观背油画村-怡情谷温泉一天自由行",
          "style":{"background__color":"#ffffff","color":"#30c8a2","font__size":"13","text__align":"center","height":"38","line__height":"26"},
          "incident":"1"
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"1","margin__left":"0","margin__right":"0"},
          "incident":"1",
          "ind":'1'
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":"【自由人】博罗观背油画村-怡情谷温泉一天自由行",
          "style":{"background__color":"#ffffff","color":"#30c8a2","font__size":"13","text__align":"center","height":"38","line__height":"26"},
          "incident":"1"
        },
        {"type":"vLine",
          "mname":"分割线",
          "style":{"padding":"4","padding__left":"0","padding__right":"0","background__color":"#f0f0f0","border__style":"solid","border__bottom__width":"0","border__color":"#000000"},
          "layout":"vLine__1"
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":"更多精彩",
          "style":{"background__color":"#ffffff","color":"#30c8a2","font__size":"15","text__align":"center","height":"34","line__height":"34"},
          "incident":"1"
        },
        {"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__3",
          "widget":{"sa":true,"st":true,"op":true,"ca":true},
          "style":{"margin__bottom":"4","height":"88","width":"40","line__height":"20","font__size":"14","color":"#000000","padding":"0"},
          "ind":'1'
        },
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"目的地",
      "name":"目的地",
      "module":[
        {"type":"vTravelAddr",
          "mname":"目的地",
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":"———周边热门城市———",
          "style":{"background__color":"#ffffff","color":"#666666","font__size":"14","text__align":"center","height":"32","line__height":"42"},
          "incident":"1"
        },
        {"type":"vTravelAddrCity",
          "mname":"目的地",
        },
      ]
    },
    {
      "page_id":"3",
      "navigationBarTitleText":"发现",
      "name":"发现",
      "module":[
        {
          "type":"vClassify",
          "mname":"分类列表",
          "layout":"vClassify__3",
          "widget":{"sa":false,"st":false,"op":false,"ca":false},
          "style":{"margin__bottom":"4","background__color":"#30c8a2","color":'#ffffff',"choosecolor":"#30c8a2","font__size":"14", "line__height":"20","tfont__size":"14","tcolor":"#000000","padding":"0"},
          "ind":"1"
        },
      ]
    },
    {
      "page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"我的",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":true},
          "ind":'1'
        }
      ]
    },
    {
      "page_id":"5",
      "navigationBarTitleText":"分类",
      "name":"分类",
      "module":[
        {"type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"margin__bottom":"4","background__color":"#f0f0f0","color":'#333333',"font__size":'14'},
          "ind":"1"
        }
      ]
    },

  ]//pages
},
alldatajd:{
  "pid":"4",
    "pname":"家电",
    "top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white"},
  "bottom_nav":{"backgroundColor":"#ffffff","color":"#7f8699","selectedColor":"#ff728b","layout":"","list":[{"pagePath": "1",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey33.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red33.png",
    "text": "首页"},{
    "pagePath": "2",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey4.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red4.png",
    "text": "分类"
  },{
    "pagePath": "3",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey20.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red20.png",
    "text": "购物车"
  },{
    "pagePath": "4",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey36.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red36.png",
    "text": "我的"
  }]
  },
  "pages":[{
    "page_id":"1",
    "navigationBarTitleText":"家电",
    "name":"首页",
    "module":[
      {"type":"vSlider",
        "mname":"轮播组件",
        "time":"5",
        "ind":'2'
      },{"type":"vSearch",
        "mname":"搜索组件",
        "style": {"background__color":"#edeced","border__radius":"5","height":"25"},
        "layout":"vSearch__2"
      },
      {"type":"vQuickNav",
        "mname":"快速导航",
        "rowNum":"4",
        "widget":{"ti":"true"},
        "style":{"line__height":"16","font__size":"14","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"},
        "ind":'2'
      },
      {"type":"vQuickNav",
        "mname":"快速导航",
        "rowNum":"4",
        "widget":{"ti":"true"},
        "style":{"line__height":"16","font__size":"14","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"},
        "ind":'3'
      },
      {"type":"vImage",
        "mname":"图片组件",
        "layout":"vImage__1",
        "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"1","margin__left":"0","margin__right":"0"},
        "ind":'4'
      },
      {"type":"vRecommend",
        "mname":"推荐位",
        "layout":"vRecommend__1",
        "widget":{"sa":true,"st":true,"op":true,"ca":true},
        "style":{"margin__bottom":"4"},
        "ind":'1'
      },{"type":"vImage",
        "mname":"图片组件",
        "layout":"vImage__1",
        "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"1","margin__left":"0","margin__right":"0"},
        "ind":'5'
      },
      {"type":"vRecommend",
        "mname":"推荐位",
        "layout":"vRecommend__1",
        "widget":{"sa":true,"st":true,"op":true,"ca":true},
        "style":{"margin__bottom":"4"},
        "ind":'2'
      }
    ]
  },
    {
      "page_id":"2",
      "navigationBarTitleText":"商品分类",
      "name":"商品分类",
      "module":[
        {"type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"margin__bottom":"4","background__color":"#f0f3f6","color":'#333333',"font__size":'14'},
          "ind":"2"
        }
      ]},{
      "page_id":"3",
      "navigationBarTitleText":"购物车",
      "name":"购物车",
      "module":[
        {
          "type":"vCart",
          "mname":"购物车",
          "ind":'1'
        }
      ]},{
      "page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"个人中心",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":false},
        }
      ]}
  ]
},
alldatajy:{
  "pid":"5",
    "pname":"教育",
    "top_nav":{"navigationBarBackgroundColor":"#58b6fe","navigationBarTextStyle":"white"},
  "bottom_nav":{"backgroundColor":"#ffffff","color":"#7f8699","selectedColor":"#58b6fe","layout":"",
    "list":[{"pagePath": "1",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey33.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red33.png",
    "text": "首页"
  },{
    "pagePath": "2",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey7.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red7.png",
    "text": "课程"
  },{
    "pagePath": "3",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey34.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red34.png",
    "text": "地图"
  },{
    "pagePath": "4",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/grey/grey35.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/red/red35.png",
    "text": "我的"
  }]
  },
  "pages":[{
    "page_id":"1",
    "navigationBarTitleText":"教育",
    "name":"首页",
    "module":[
      {"type":"vSlider",
        "mname":"轮播组件",
        "time":"5",
        "ind":'3'
      },
      {"type":"vQuickNav",
        "mname":"快速导航",
        "rowNum":"4",
        "widget":{"ti":"true"},
        "style":{"line__height":"16","font__size":"14","color":"#000000","padding":"15","padding__top":"0","padding__bottom":"0"},
        "ind":'4'
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"课程推荐",
        "style":{"background__color":"#ffffff","color":"#333333","font__size":"18","text__align":"center","height":"30","line__height":"30"},
        "incident":"1"
      },
      {"type":"vImgTextList",
        "mname":"图文集",
        "layout":"vImgTextList__2",
        "style":{"border__radius":"10","line__height":"18","font__size":"14","color":"#000000","padding":"0","padding__top":"0","padding__bottom":"0"},
        "ind":"2"
      },
      {"type":"vImgTextList",
        "mname":"图文集",
        "layout":"vImgTextList__2",
        "style":{"border__radius":"10","line__height":"18","font__size":"14","color":"#000000","padding":"0","padding__top":"0","padding__bottom":"0"},
        "ind":"3"
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"课外阅读",
        "style":{"background__color":"#ffffff","color":"#333333","font__size":"18","text__align":"center","height":"30","line__height":"32"},
        "incident":"1"
      },
      {"type":"vQuickNav",
        "mname":"快速导航",
        "rowNum":"4",
        "widget":{"ti":false},
        "style":{"line__height":"16","font__size":"14","color":"#000000","padding":"0","padding__top":"0","padding__bottom":"0"},
        "ind":'5'
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"新闻资讯",
        "style":{"background__color":"#ffffff","color":"#333333","font__size":"18","text__align":"center","height":"34","line__height":"40"},
        "incident":"1"
      },
      {"type":"vRecommend",
        "mname":"推荐位",
        "layout":"vRecommend__3",
        "widget":{"sa":true,"st":true,"op":true,"ca":true},
        "style":{"margin__bottom":"4","line__height":"20","font__size":"13","color":"#000000","padding":"0"},
        "ind":'2'
      }
    ]},

    {"page_id":"2",
      "navigationBarTitleText":"课程",
      "name":"课程",
      "module":[
        {
          "type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"margin__bottom":"4","background__color":"#f0f0f0","color":'#333333',"font__size":'14'},
          "ind":'3'
        },
      ]},
    {"page_id":"3",
      "navigationBarTitleText":"地图",
      "name":"地图",
      "module":[
        {
          "type":"vMap",
          "mname":"地图",
          "address":"成都市高新区世纪城路198附184号",
          "coordinate":""
        },
        {"type":"vText",
          "mname":"文本组件",
          "text":" 联系电话:028-8888888",
          "style":{"background__color":"#ffffff","color":"#333333","font__size":"14","text__align":"left","height":"20","line__height":"20"},
          "incident":"1"
        },
      ]},
    {"page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"我的",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":false},
        }
      ]},
    {"page_id":"5",
      "navigationBarTitleText":"商品列表",
      "name":"商品列表",
      "module":[
        {"type":"vProductList",
          "mname":"商品列表",
          "widget":{"sa":true,"st":true,"op":true,"ca":true},
          "style":{"margin__bottom":"4"},
          "layout":"vProductList__2"
        },
      ]},


  ]},
alldatajz:{
  "pid":"6",
    "pname":"家政",
    "top_nav":{"navigationBarBackgroundColor":"#58b6fe","navigationBarTextStyle":"#ffffff"},
  "bottom_nav":{"backgroundColor":"#ffffff","color":"#80879a","selectedColor":"#58b6fe","layout":"","list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},{
    "pagePath": "2",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/2.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue2.png",
    "text": "分类"
  },{
    "pagePath": "3",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/3.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue3.png",
    "text": "介绍"
  },{
    "pagePath": "4",
    "iconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/4.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue4.png",
    "text": "我的"
  }
  ]
  },
  "pages":[{
    "page_id":"1",
    "navigationBarTitleText":"家政",
    "name":"首页",
    "module":[
      {"type":"vSlider",
        "mname":"轮播组件",
        "time":"6",
        "ind":'4'
      },
      {"type":"vQuickNav",
        "mname":"快速导航",
        "rowNum":"4",
        "widget":{"ti":true},
        "style":{"line__height":"15","font__size":"13","color":"#000000","padding":"12","padding__top":"0","padding__bottom":"0"},
        "ind":'6'
      },
      {"type":"vQuickNav",
        "mname":"快速导航",
        "rowNum":"4",
        "widget":{"ti":true},
        "style":{"line__height":"15","font__size":"13","color":"#000000","padding":"12","padding__top":"0","padding__bottom":"0"},
        "ind":'7'
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"月嫂推荐",
        "style":{"background__color":"#ffffff","color":"#000000","font__size":"16","text__align":"left","height":"30","line__height":"34"},
        "incident":"1"
      },
      {"type":"vImage",
        "mname":"图片组件",
        "layout":"vImage__1",
        "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"0","margin__left":"0","margin__right":"0"},
        "ind":'6'
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"家政推荐",
        "style":{"background__color":"#ffffff","color":"#000000","font__size":"16","text__align":"left","height":"30","line__height":"34"},
        "incident":"1"
      },
      {"type":"vImage",
        "mname":"图片组件",
        "layout":"vImage__1",
        "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"0","margin__left":"0","margin__right":"0"},
        "ind":'7'
      },{"type":"vText",
        "mname":"文本组件",
        "text":"保姆推荐",
        "style":{"background__color":"#ffffff","color":"#000000","font__size":"16","text__align":"left","height":"30","line__height":"34"},
        "incident":"1"
      },
      {"type":"vImage",
        "mname":"图片组件",
        "layout":"vImage__1",
        "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"0","margin__left":"0","margin__right":"0"},
        "ind":'8'
      },
    ]
  },{
    "page_id":"2",
    "navigationBarTitleText":"分类",
    "name":"分类",
    "module":[
      {
        "type":"vClassify",
        "mname":"分类列表",
        "layout":"vClassify__2",
        "widget":{"sa":true,"st":false,"op":false,"ca":false},
        "style":{"margin__bottom":"4","background__color":"#f0f0f0","color":'#333333',"width":"34","choosecolor":"#fd7a42","font__size":"14", "line__height":"20","tfont__size":"14","tcolor":"#000000","padding":"0"},
        "ind":"2"
      },
    ]},{
    "page_id":"3",
    "navigationBarTitleText":"介绍",
    "name":"介绍",
    "module":[
      {
        "type":"vMap",
        "mname":"地图",
        "address":"成都市高新区世纪城路198附184号",
        "coordinate":""
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"公司电话: 028-12345678",
        "style":{"background__color":"#ffffff","color":"#000000","font__size":"14","text__align":"left","height":"30","line__height":"34"},
        "incident":"1"
      },
      {"type":"vText",
        "mname":"文本组件",
        "text":"营业时间：08:00 - 22:00",
        "style":{"background__color":"#ffffff","color":"#000000","font__size":"14","text__align":"left","height":"30","line__height":"34"},
        "incident":"1"
      },
    ]},{
    "page_id":"4",
    "navigationBarTitleText":"我的",
    "name":"个人中心",
    "module":[
      {"type":"vUserCenter",
        "mname":"个人中心",
        "widget":{"hy":true,"sc":true,"kqb":true,"jf":false},
      }
    ]},
  ]
},
alldataktv:{
  "pid":"31",
    "pname":"KTV",
    "top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"#white"},
  "bottom_nav":{"backgroundColor": "#ffffff", "color": "#666666", "selectedColor": "#404040", "layout": "",
    "list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},{
    "pagePath": "2",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey25.png",
    "selectedIconPath": "hhttps://mps.essocial.com.cn/public/static/icon/grey/grey31.png",
    "text": "预约"
  },{
    "pagePath": "3",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey36.png",
    "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey35.png",
    "text": "我的"
  }
  ]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"首页",
      "name":"首页",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'5'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'9'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__2",
          "style":{"border__radius":"3","margin":"3",},
          "ind":'10'
        },{"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__2",
          "style":{"border__radius":"3","margin":"3","margin__left":"0","margin__right":"0"},
          "ind":'11'
        },{"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__2",
          "style":{"border__radius":"3","margin":"3","margin__left":"0","margin__right":"0"},
          "ind":'12'
        }
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"预约",
      "name":"预约",
      "module":[
        {
          "type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"background__color":"#f0f0f0","color":'#333333',"font__size":"12"},
          "ind":"4"
        },
      ]},
    {
      "page_id":"3",
      "navigationBarTitleText":"我的",
      "name":"个人中心",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":false},
        }
      ]},
    {
      "page_id":"4",
      "navigationBarTitleText":"文章列表",
      "name":"文章列表",
      "module":[
        {
          "type":"vNewsList",
          "mname":"新闻列表",
          "style":{"line__height": "20", "font__size": "12", "color": "#000000"}
        }
      ]},
    {
      "page_id":"5",
      "navigationBarTitleText":"",
      "name":"1",
      "module":[
        {
        }
      ]},
  ]
},
alldatamotherAndBaby:{
  "pid":"25",
    "pname":"母婴",
    "top_nav":{"navigationBarBackgroundColor":"#ff5858","navigationBarTextStyle":"#white"},
  "bottom_nav":{"backgroundColor": "#ffffff", "color": "#6b6b6b", "selectedColor": "#ff5858", "layout": "",
    "list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},
    {
      "pagePath": "2",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey5.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/red/red6.png",
      "text": "分类"
    },
    {
      "pagePath": "3",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey20.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/red/red20.png",
      "text": "购物车"
    },{
      "pagePath": "4",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey36.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/red/red36.png",
      "text": "我的"
    },
  ]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"首页",
      "name":"首页",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'6'
        },
        {"type":"vSearch",
          "mname":"搜索组件",
          "layout":"vSearch__1",
          "style":{"background__color": "#ebebeb", "border__radius": "4", "height": "26"},
          "ind":'0'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'14'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'15'
        },
        {"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__1",
          "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": "true", "st": "true", "op": "true", "ca": "true"},
          "ind":'3'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__2",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'13'
        },
        {"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__1",
          "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": true, "st": true, "op": true, "ca": true},
          "ind":'4'
        },
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"分类",
      "name":"分类",
      "module":[
        {
          "type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"background__color":"#f0f0f0","color":'#333333',"font__size":"12"},
          "ind":"5"
        },
      ]},
    {
      "page_id":"3",
      "navigationBarTitleText":"购物车",
      "name":"购物车",
      "module":[
        {
          "type":"vCart",
          "mname":"购物车",
        }
      ]},
    {
      "page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"个人中心",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":true},
        }
      ]},
  ]
},
alldatajs:{
  "pid":"24",
    "pname":"健身",
    "top_nav":{"navigationBarBackgroundColor":"#703f46","navigationBarTextStyle":"#white"},
  "bottom_nav":{"backgroundColor": "#ffffff", "color": "#666666", "selectedColor": "#fd7a42", "layout": "",
    "list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},
    {
      "pagePath": "2",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey5.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey6.png",
      "text": "健康"
    },
    {
      "pagePath": "3",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey39.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey38.png",
      "text": "发现"
    },{
      "pagePath": "4",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey27.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey26.png",
      "text": "我的"
    },
  ]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"首页",
      "name":"首页",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'7'
        },
        {"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum": "4",
          "widget": {"ti": true},
          "style":{"line__height": "26", "font__size": "12", "color": "#000000", "padding": "10", "padding__top": "0","padding__bottom": "0",},
          "ind":'8'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'16'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__3",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'17'
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{"padding": "2", "padding__left": "0", "padding__right": "0", "background__color": "#ffffff","border__bottom__width": "9","border__color": "#efeff4"},
          "ind":'0'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'20'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'18'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'19'
        },
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"健康",
      "name":"健康",
      "module":[
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"大家都在看",
          "style":{"background__color": "#ffffff",
            "color": "#333333",
            "font__size": "16",
            "height": "32",
            "line__height": "29",
            "text__align": "left"},
          "ind":"0"
        },
        {
          "type":"vImgTextList",
          "mname":"图文集组件",
          "layout":"vImgTextList__3",
          "style":{"border__radius":"5",
            "color": "#000000",
            "font__size": "12",
            "line__height": "16",
            "padding": "8",
            "padding__bottom": "0",
            "padding__top": "0",
            "wcolor": "#333333"},
          "ind":"4"
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{"padding": "2", "padding__left": "0", "padding__right": "0", "background__color": "#ffffff","border__bottom__width": "9","border__color": "#efeff4"},
          "ind":'0'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"美味午餐便当",
          "style":{"background__color": "#ffffff",
            "color": "#333333",
            "font__size": "16",
            "height": "32",
            "line__height": "29",
            "text__align": "left"},
          "ind":"0"
        },
        {
          "type":"vImgTextList",
          "mname":"图文集组件",
          "layout":"vImgTextList__3",
          "style":{"border__radius":"5",
            "color": "#000000",
            "font__size": "12",
            "line__height": "16",
            "padding": "8",
            "padding__bottom": "0",
            "padding__top": "0",
            "wcolor": "#333333"},
          "ind":"5"
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{"padding": "2", "padding__left": "0", "padding__right": "0", "background__color": "#ffffff","border__bottom__width": "9","border__color": "#efeff4"},
          "ind":'0'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"更多健康资讯",
          "style":{"background__color": "#ffffff",
            "color": "#333333",
            "font__size": "16",
            "height": "32",
            "line__height": "29",
            "text__align": "left"},
          "ind":"0"
        },
        {"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__3",
          "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": "true", "st": "true", "op": "true", "ca": "true"},
          "ind":'3'
        },


      ]},
    {
      "page_id":"3",
      "navigationBarTitleText":"发现",
      "name":"发现",
      "module":[
        {
          "type":"vNewsList",
          "mname":"新闻列表",
          "style": {"line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": "true", "st": "true", "op": "true", "ca": "true"},
          "ind":'3'
        }
      ]},
    {
      "page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"我的",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":false},
        }
      ]},
    {
      "page_id":"2",
      "navigationBarTitleText":"分类",
      "name":"分类",
      "module":[
        {
          "type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"background__color":"#f0f0f0","color":'#333333',"font__size":"12"},
          "ind":"0"
        },
      ]},
  ]
},
alldatasz:{
  "pid":"32",
    "pname":"摄影",
    "top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"#white"},
  "bottom_nav":{"backgroundColor": "#ffffff", "color": "#666666", "selectedColor": "#fd7a42", "layout": "",
    "list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},
    {
      "pagePath": "2",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey13.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/org/org13.png",
      "text": "摄影"
    },
    {
      "pagePath": "3",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey27.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/org/org27.png",
      "text": "我的"
    },
  ]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"首页",
      "name":"首页",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'8'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__2",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'21'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__2",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'22'
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{
            "background__color": "#f0f0f0",
            "border__bottom__width": "4",
            "border__color": "#dadada",
            "border__style": "solid",
            "padding__left": "0",
            "padding__right": "0"
          }, "ind":'0'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"私人定制",
          "style":{
            "background__color": "#f0f0f0",
            "color": "#333333",
            "font__size": "16",
            "height": "36",
            "line__height": "36",
            "text__align": "left"},
          "ind":"0"
        },
        {
          "type":"vImgTextList",
          "mname":"图文集组件",
          "layout":"vImgTextList__3",
          "style":{"border__radius":"5",
            "color": "#000000",
            "font__size": "12",
            "line__height": "16",
            "padding": "8",
            "padding__bottom": "0",
            "padding__top": "0",
            "wcolor": "#333333"},
          "ind":"6"
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{
            "background__color": "#f0f0f0",
            "border__bottom__width": "4",
            "border__color": "#dadada",
            "border__style": "solid",
            "padding__left": "0",
            "padding__right": "0"
          },"ind":'0'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"样片展示",
          "style":{
            "background__color": "#f0f0f0",
            "color": "#333333",
            "font__size": "16",
            "height": "36",
            "line__height": "36",
            "text__align": "left"},
          "ind":"0"
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'23'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'24'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'25'
        },
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"摄影",
      "name":"摄影",
      "module":[
        {
          "type":"vMulticlass",
          "mname":"多级分类",
          "layout": "vMulticlass__1",
          "style":{"background__color": "#f0f0f0",
            "color": "#333333",
            "font__size": "12",},
          "ind":"6"
        },
      ]},
    {
      "page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"我的",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":true},
        }
      ]},
    {
      "page_id":"5",
      "navigationBarTitleText":"商品列表",
      "name":"商品列表",
      "module":[
        {
          "type":"vProductList",
          "mname":"商品列表",
          "widget": {"sa": true, "st": true, "op": true, "ca": true},
          "layout":"vProductList__1",
          "style":{"margin__bottom": "4"},
          "ind":"0"
        },
      ]},
    {
      "page_id":"3",
      "navigationBarTitleText":"文章列表",
      "name":"文章列表",
      "module":[
        {
          "type":"vNewsList",
          "mname":"新闻列表",
          "style": {"line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": "true", "st": "true", "op": "true", "ca": "true"},
          "ind":'0'
        }
      ]},

  ]
},
alldatancp:{
  "pid":"34",
    "pname":"农产品",
    "top_nav":{"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"#black"},
  "bottom_nav":{"backgroundColor": "#ffffff", "color": "#666666", "selectedColor": "#fd7a42", "layout": "",
    "list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},
    {
      "pagePath": "3",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey20.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/org/org20.png",
      "text": "购物车"
    },
    {
      "pagePath": "4",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey36.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/org/org36.png",
      "text": "我的"
    },
  ]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"首页",
      "name":"首页",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'9'
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{
            "background__color": "#ffffff",
            "border__bottom__width": "5",
            "border__color": "#ffffff",
            "border__style": "solid",
            "padding": "2",
            "padding__left": "0",
            "padding__right": "0",
          },
          "ind":'0'
        },
        {"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum": "4",
          "widget": {"ti": true},
          "style":{"line__height": "26", "font__size": "12", "color": "#000000", "padding": "10", "padding__top": "0","padding__bottom": "0",},
          "ind":'9'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"现时折扣",
          "style":{
            "background__color": "#f0f0f0",
            "color": "#333333",
            "font__size": "16",
            "height": "36",
            "line__height": "36",
            "text__align": "left"},
          "ind":"0"
        },
        // {"type":"vRecommend",
        //   "mname":"推荐位",
        //   "layout":"vRecommend__1",
        //   "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
        //   "widget": {"sa": true, "st": true, "op": true, "ca": true},
        //   "ind":'4'
        // },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'26'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'27'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"热销推荐",
          "style":{
            "background__color": "#f0f0f0",
            "color": "#333333",
            "font__size": "16",
            "height": "36",
            "line__height": "36",
            "text__align": "left"},
          "ind":"0"
        },
        {"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__1",
          "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": true, "st": true, "op": true, "ca": true},
          "ind":'5'
        },
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"分类",
      "name":"分类",
      "module":[
        {
          "type":"vClassify",
          "mname":"分类列表",
          "widget": {"sa": true, "st": true, "op": true, "ca": true},
          "layout":"vClassify__1",
          "style":{"background__color": "#f0f0f0",
            "color": "#333333",
            "font__size": "12"},
          "ind":"0"
        },
      ]},
    {
      "page_id":"3",
      "navigationBarTitleText":"购物车",
      "name":"购物车",
      "module":[
        {
          "type":"vCart",
          "mname":"购物车",
        },
      ]},
    {
      "page_id":"4",
      "navigationBarTitleText":"健康",
      "name":"我的",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":true},
        }
      ]},

  ]
},
//美容
alldatamr:{
  "pid":"14",
    "pname":"美容小程序",
    "top_nav":{"navigationBarBackgroundColor":"#ff7991","navigationBarTextStyle":"#white"},
  "bottom_nav":{"backgroundColor": "#ffffff", "color": "#666666", "selectedColor": "#ff282e", "layout": "",
    "list":[{"pagePath": "1",
    "iconPath": "https://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "selectedIconPath": "http://mps.essocial.com.cn/public/static/icon/housekeeping/blue1.png",
    "text": "首页"},
    {
      "pagePath": "2",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey22.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/red/red21.png",
      "text": "分类"
    },
    {
      "pagePath": "3",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey20.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/red/red19.png",
      "text": "购物车"
    },
    {
      "pagePath": "4",
      "iconPath": "https://mps.essocial.com.cn/public/static/icon/grey/grey36.png",
      "selectedIconPath": "https://mps.essocial.com.cn/public/static/icon/red/red35.png",
      "text": "我的"
    },
  ]
  },
  "pages":[
    {
      "page_id":"1",
      "navigationBarTitleText":"首页",
      "name":"首页",
      "module":[
        {"type":"vSearch",
          "mname":"搜索组件",
          "layout": "vSearch__1",
          "ind":'0',
          "style":{"background__color": "#efefef", "border__radius": "3", "height": "28"}
        },
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'10'
        },
        {"type":"vLine",
          "mname":"分割线",
          "layout":"vLine__1",
          "style":{
            "background__color": "#ffffff",
            "border__bottom__width": "10",
            "border__color": "#ffffff",
            "border__style": "solid",
            "padding": "2",
            "padding__left": "0",
            "padding__right": "0"
          },
          "ind":'0'
        },
        {"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum": "3",
          "widget": {"ti": true},
          "style":{"line__height": "28", "font__size": "12", "color": "#000000", "padding": "22", "padding__top": "0","padding__bottom": "0",},
          "ind":'10'
        },
        {
          "type":"vText",
          "mname":"文本组件",
          "text":"通知：全场7.5折",
          "style":{"background__color": "#faf5df",
            "color": "#333333",
            "font__size": "12",
            "height": "32",
            "line__height": "32",
            "text__align": "left"},
          "ind":"0"
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'28'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'29'
        },{"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'30'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'31'
        },{"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'32'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'33'
        },{"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"4","margin__left":"0","margin__right":"0"},
          "ind":'34'
        },
        {"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__1",
          "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": true, "st": true, "op": true, "ca": true},
          "ind":'6'
        },{"type":"vRecommend",
          "mname":"推荐位",
          "layout":"vRecommend__1",
          "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
          "widget": {"sa": true, "st": true, "op": true, "ca": true},
          "ind":'7'
        },
      ]
    },
    {
      "page_id":"2",
      "navigationBarTitleText":"分类",
      "name":"分类",
      "module":[
        {"type":"vSlider",
          "mname":"轮播组件",
          "time":"6",
          "ind":'11'
        },
        {"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum": "4",
          "widget": {"ti": true},
          "style":{"line__height": "28", "font__size": "12", "color": "#000000", "padding": "10", "padding__top": "0","padding__bottom": "0",},
          "ind":'11'
        },{"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum": "4",
          "widget": {"ti": true},
          "style":{"line__height": "28", "font__size": "12", "color": "#000000", "padding": "10", "padding__top": "0","padding__bottom": "0",},
          "ind":'12'
        },{"type":"vQuickNav",
          "mname":"快速导航",
          "rowNum": "4",
          "widget": {"ti": true},
          "style":{"line__height": "28", "font__size": "12", "color": "#000000", "padding": "10", "padding__top": "0","padding__bottom": "0",},
          "ind":'13'
        },
      ]},
    {
      "page_id":"3",
      "navigationBarTitleText":"购物车",
      "name":"购物车",
      "module":[
        {
          "type":"vCart",
          "mname":"购物车",
        },
      ]},
    {
      "page_id":"4",
      "navigationBarTitleText":"我的",
      "name":"我的",
      "module":[
        {"type":"vUserCenter",
          "mname":"个人中心",
          "widget":{"hy":true,"sc":true,"kqb":true,"jf":true},
        }
      ]},
    {
      "page_id":"5",
      "navigationBarTitleText":"在线预约",
      "name":"在线预约",
      "module":[
        {"type":"vForm",
          "mname":"表单组件",
          "btnText": "提交",
          "layout": "vForm__2",
          "pageText": "已收到您的预约信息，稍后工作人员会与您核实预约时间，感谢您的配合！",
          "style":{"background__color": "#ffffff", "border__radius": "4", "border__color": "#c9c9c9", "btn__color": "#e43251"}
        }
      ]},
    {
      "page_id":"6",
      "navigationBarTitleText":"多级分类",
      "name":"多级分类",
      "module":[
        {
          "type":"vMulticlass",
          "mname":"多级分类",
          "layout":"vMulticlass__1",
          "style":{"margin__bottom":"4","background__color":"#f0f0f0","color":'#333333',"font__size":'14'},
          "ind":'0'
        },
      ]},
    {
      "page_id":"7",
      "navigationBarTitleText":"超值套餐",
      "name":"超值套餐",
      "module":[
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'35'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'36'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'37'
        },
        {"type":"vImage",
          "mname":"图片组件",
          "layout":"vImage__1",
          "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
          "ind":'38'
        },
      ]},
    {
      "page_id":"8",
      "navigationBarTitleText":"文章列表",
      "name":"文章列表",
      "module":[
        {"type":"vNewsList",
          "mname":"新闻列表",
          "style":{"line__height":"20","font__size":"14","color":"#000000"}
        },
      ]},
  ]
},

}

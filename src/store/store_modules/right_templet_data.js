/**
 * Created by shawn on 2018/7/23 0023.
 */
export default {
  state: {//组件默认数据
    navItem:["全部","常用","首页","列表页","图片页","分类页","关于我们","展示页","预约页"],
    module: [ //模板库数据
      {item:[ //全部
        {
          type: 'vTemtravel',
          image: '/design/images/default/travelHome.png',
          title: "旅游首页",
        },
        // {
        //   type: 'vTemtravelAddr',
        //   image: '/design/images/default/travelAddr.png',
        //   title: "旅游目的地",
        // },
        {
          type: 'vTemtravelUser',
          image: '/design/images/default/travelUser.png',
          title: "旅游个人中心",
        },
        // {
        //   type: 'vTemtravelFind',
        //   image: '/design/images/default/travelFind.png',
        //   title: "旅游发现",
        // },
        {
          type: 'vTemElcticHome',
          image: '/design/images/default/eleHome.png',
          title: "电器首页",
        },
        {
          type: 'vTemEduHome',
          image: '/design/images/default/eduHome.png',
          title: "教育首页",
        } ,{
          type: 'vTemMap',
          image: '/design/images/default/eduHome.png',
          title: "地图页面",
        },{
          type: 'vTemAboutUs',
          image: '/design/images/default/eduHome.png',
          title: "关于我们",
        },
        {
          type: 'vTemHouseKeeping',
          image: '/design/images/default/housekhome.png',
          title: "家政首页"
        },{
          type: 'vTemKTVHome',
          image: '/design/images/default/ktvhome.png',
          title: "KTV首页",
        },
          {
          type: 'vTemKTVOrder',
          image: '/design/images/default/ktv2.png',
          title: "KTV预约",
        },
          {
          type: 'vTemPhoto',
          image: '/design/images/default/syhome.png',
          title: "摄影首页",
        },{
          type: 'vTemPhotoPage',
          image: '/design/images/default/sy2.png',
          title: "摄影展示",
        },{
          type: 'vTemMuY',
          image: '/design/images/default/muyinhone.png',
          title: "母婴首页",
        },{
          type: 'vTemBodyBuilding',
          image: '/design/images/default/jianshen.png',
          title: "健身首页",
        },{
          type: 'vTemBodyP',
          image: '/design/images/default/jianshen2.png',
          title: "健身宣传",
        },{
          type: 'vTemBeautify',
          image: '/design/images/default/meirong1.png',
          title: "美容首页",
        },{
          type: 'vTemBeautiType',
          image: '/design/images/default/meirong2.png',
          title: "美容分类",
        },{
          type: 'vTemOrder',
          image: '/design/images/default/meirong3.png',
          title: "在线预约",
        },{
          type: 'vTemPlan',
          image: '/design/images/default/meirong3.png',
          title: "护理计划",
        },
          {
          type: 'vTemFarm',
          image: '/design/images/default/farmHome.png',
          title: "农产品首页",
        },
      ]
      },
      {
        item:[ //常用
          {
            type: 'vTemElcticHome',
            image: '/design/images/default/eleHome.png',
            title: "电器首页",
          },
          {
            type: 'vTemtravel',
            image: '/design/images/default/travelHome.png',
            title: "旅游首页",
          },
          {
            type: 'vTemtravelUser',
            image: '/design/images/default/travelUser.png',
            title: "旅游个人中心",
          },{
            type: 'vTemMap',
            image: '/design/images/default/eduHome.png',
            title: "地图页面",
          },{
            type: 'vTemAboutUs',
            image: '/design/images/default/eduHome.png',
            title: "关于我们",
          },{
            type: 'vTemBodyP',
            image: '/design/images/default/jianshen2.png',
            title: "宣传资讯",
          },
        ]
      },
      {item:[ //首页
          {
            type: 'vTemtravel',
            image: '/design/images/default/travelHome.png',
            title: "旅游首页",
          },
          {
            type: 'vTemElcticHome',
            image: '/design/images/default/eleHome.png',
            title: "电器首页",
          },
          {
            type: 'vTemEduHome',
            image: '/design/images/default/eduHome.png',
            title: "教育首页",
          },
          {
            type: 'vTemHouseKeeping',
            image: '/design/images/default/housekhome.png',
            title: "家政首页"
          },{
            type: 'vTemKTVHome',
            image: '/design/images/default/ktvhome.png',
            title: "KTV首页",
          },
          {
            type: 'vTemPhoto',
            image: '/design/images/default/syhome.png',
            title: "摄影首页",
          },{
            type: 'vTemMuY',
            image: '/design/images/default/muyinhone.png',
            title: "母婴首页",
          },{
            type: 'vTemBodyBuilding',
            image: '/design/images/default/jianshen.png',
            title: "健身首页",
          },{
            type: 'vTemBeautify',
            image: '/design/images/default/meirong1.png',
            title: "美容首页",
          },
          {
            type: 'vTemFarm',
            image: '/design/images/default/farmHome.png',
            title: "农产品首页",
          },
        ]
      },{
        item:[ //列表页
          // {
          //   type: 'vTemtravelAddr',
          //   image: '/design/images/default/travelAddr.png',
          //   title: "旅游目的地",
          // },
          // {
          //   type: 'vTemtravelFind',
          //   image: '/design/images/default/travelFind.png',
          //   title: "旅游发现",
          // }
          {
            type: 'vTemPhotoPage',
            image: '/design/images/default/sy2.png',
            title: "摄影展示",
          }
        ]
      },{
        item:[ //图片页
          // {
          //   type: 'vTemtravelFind',
          //   image: '/design/images/default/travelFind.png',
          //   title: "旅游发现",
          // },
          {
            type: 'vTemKTVHome',
            image: '/design/images/default/ktvhome.png',
            title: "KTV首页",
          },
        ]
      },{
        item:[ //分类页
          {
            type: 'vTemPhotoPage',
            image: '/design/images/default/sy2.png',
            title: "摄影展示",
          },{
            type: 'vTemBeautiType',
            image: '/design/images/default/meirong2.png',
            title: "美容分类",
          }
        ]
      },{item:[//关于我们
          {
            type: 'vTemAboutUs',
            image: '/design/images/default/eduHome.png',
            title: "关于我们",
          },
        ]
      },{item:[//展示页
          {
            type: 'vTemBodyP',
            image: '/design/images/default/jianshen2.png',
            title: "健身宣传",
          }
        ]
      },{item:[//预约页
          {
            type: 'vTemKTVOrder',
            image: '/design/images/default/ktv2.png',
            title: "KTV预约",
          },{
            type: 'vTemOrder',
            image: '/design/images/default/meirong4.png',
            title: "在线预约",
          }
        ]
      }
    ],

    myTemData:[], //我的模板数据
  }
}

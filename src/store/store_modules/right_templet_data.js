/**
 * Created by shawn on 2018/7/23 0023.
 */
export default {
  state: {//组件默认数据
    navItem:["全部","常用","首页","列表页","图片页"],
    module: [ //模板库数据
      {item:[
        {
          type: 'vTemtravel',
          image: '/design/images/default/travelHome.png',
          title: "旅游首页",
        },
        {
          type: 'vTemtravelAddr',
          image: '/design/images/default/travelAddr.png',
          title: "旅游目的地",
        },
        {
          type: 'vTemtravelUser',
          image: '/design/images/default/travelUser.png',
          title: "旅游个人中心",
        },
        {
          type: 'vTemtravelFind',
          image: '/design/images/default/travelFind.png',
          title: "旅游发现",
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
        } ,{
          type: 'vTemHouseKeeping',
          image: '/design/images/default/housekhome.png',
          title: "教育首页",
        }
      ]
      },{
        item:[
          {
            type: 'vTemtravel',
            image: '/design/images/default/travelHome.png',
            title: "旅游首页",
          },
        ]
      },{
        item:[
          {
            type: 'vTemtravel',
            image: '/design/images/default/travelHome.png',
            title: "旅游首页",
          },
          {
            type: 'vTemElcticHome',
            image: '/design/images/default/travelFind.png',
            title: "电器首页",
          },
          {
            type: 'vTemEduHome',
            image: '/design/images/default/eduHome.png',
            title: "教育首页",
          } ,{
            type: 'vTemHouseKeeping',
            image: '/design/images/default/housekhome.png',
            title: "教育首页",
          }
        ]
      },{
        item:[
          {
            type: 'vTemtravelAddr',
            image: '/design/images/default/travelAddr.png',
            title: "旅游目的地",
          },
          {
            type: 'vTemtravelFind',
            image: '/design/images/default/travelFind.png',
            title: "旅游发现",
          }
        ]
      },{
        item:[
          {
            type: 'vTemtravelFind',
            image: '/design/images/default/travelFind.png',
            title: "旅游发现",
          }
        ]
      },
    ],

    myTemData:[], //我的模板数据
  }
}

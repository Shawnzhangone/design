<template>
  <div class="scrollbar-hide">
      <div id="containment" @dragenter="DragEnter($event)" @drop="Drop($event)" @dragover="DragOver($event)" @dragleave="DragLeave($event)">
        <div class="p-component dragarea" v-for="(item,index) in alldata.pages[nowPageIndex].module"  :data-moduleindex="index"  draggable="true" @dragstart="dragStart($event)"  @drag="Drag($event)" @dragend="DragEnd($event)" >
          <div  class="p-item-box" :data-indexcom="index+1" style="position: absolute; width: 99%; height: 100%; z-index: 111; top: 0; left: 0;" :class="{nowcomponent: index == $store.state.chooseBox.selectItem }" @click="nowComponent(index,item.type)">
            <div class="com-tools">
              <!--<span class="com-name">{{item.mname}}</span>-->
              <button class="com-del " @click="delCom(index,item)">X</button></div>
          </div>
          <component :is="item.type" :p-data="item" class="componentitem"></component>
          <span class="dragaddarea-under">放这里</span>
        </div>
      </div>
    <div id="dilogBox" style="display:block;">
      <v-dialog :style="{display:dilogDisplay}" :dialog-option="dialogOption" ref="dialog"></v-dialog>
    </div>
  </div>

</template>
<script>
  import vSearch from './search'
  import vSlider from './slider'
  import vImgTextList from './imgTextList'
  import vText from './text'
  import vLine from './line'
  import vProductList from './productList'
  import vImage from './image'
  import vQuickNav from './quickNav'
  import vNewsList from './newsList'
  import vRecommend from './recommend'
  import vUserCenter from './userCenter'
  import vDistributorCenter from './distributorCenter'
  import vClassify from './classify'
  import vMulticlass from './multiclass'
  import vCart from './cart'
  import vMap from './map'
  import vVideo from './video'
  import vVideoList from './videoList'
  import vForm from './form'
  import vCoupon from './coupon'
  import vSecKill from './seckill'
  import vCollage from './collage'
  import vTurntable from './turntable'
  import vGoldenEgg from './goldenEgg'

//  import vTravelFind from '../templetComponents/travelFind'
  import vTravelAddr from '../templetComponents/travelAddr'
  import vTravelAddrCity from '../templetComponents/travelAddrCity'

  import DialogM from '../DialogM'
  import Vue from 'vue'
  import {mapState,mapActions} from 'vuex'

  export default{
    name:'containment',

      data(){
              return{
                dilogDisplay:'none',
                dialogOption: {
                  title: '',
                  text: '你确定要删除该组件吗?',
                  cancelButtonText: '取消',
                  confirmButtonText: '确定'
                },
                module:[ //拖拽组件默认样式
                  {"type":"vSearch",
                    "mname":"搜索组件",
                    "style": {"background__color":"#FFF3D9","border__radius":"8","height":"20"},
                    "layout":"vSearch__1"
                  },
                  {"type":"vQuickNav",
                    "mname":"快速导航",
                    "rowNum":"4",
                    "widget":{"ti":true},
                    "style":{"line__height":"16","font__size":"12","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"}
                  },
                  {"type":"vSlider",
                    "mname":"轮播组件",
                    "time":"6"
                  },
                  {"type":"vText",
                    "mname":"文本组件",
                    "text":"文本示例",
                    "style":{"background__color":"#f0f0f0","color":"#333333","font__size":"12","text__align":"left","height":"20","line__height":"18"},
                    "incident":"1"
                  },
                  {"type":"vLine",
                    "mname":"分割线",
                    "style":{"padding":"2","padding__left":"0","padding__right":"0","background__color":"#f0f0f0","border__style":"solid","border__bottom__width":"1","border__color":"#000000"},
                    "layout":"vLine__1"
                  },
                  {"type":"vImage",
                    "mname":"图片组件",
                    "layout":"vImage__1",
                    "style":{"border__radius":"3","margin":"0","margin__left":"0","margin__right":"0"},
                    "incident":"1"
                  },
                  {"type":"vRecommend",
                    "mname":"推荐位",
                    "layout":"vRecommend__1",
                    "widget":{"sa":true,"st":true,"op":true,"ca":true},
                    "style":{"margin__bottom":"4","line__height":"20","font__size":"12","color":"#000000"}
                  },
                  {"type":"vProductList",
                    "mname":"商品列表",
                    "widget":{"sa":true,"st":true,"op":true,"ca":true},
                    "style":{"margin__bottom":"4"},
                    "layout":"vProductList__1"
                  },
                  {"type":"vImgTextList",
                    "mname":"图文集",
                    "layout":"vImgTextList__2",
                    "style":{"border__radius":"5","line__height":"16","font__size":"12","color":"#000000","wcolor":"#333333","padding":"8","padding__top":"0","padding__bottom":"0"},
                    "incident":"1"
                  },
                  {"type":"vNewsList",
                    "mname":"文章列表",
                    "style":{"line__height":"20","font__size":"12","color":"#000000"}
                  },
                  {
                    "type":"vClassify",
                    "mname":"分类列表",
                    "layout":"vClassify__1",
                    "widget":{"sa":true,"st":true,"op":true,"ca":true},
                    "style":{"background__color":"#f0f0f0","color":'#333333',"font__size":"12"},
                  },
                  {
                    "type":"vMulticlass",
                    "mname":"多级分类",
                    "layout":"vMulticlass__1",
                    "style":{"background__color":"#f0f0f0","color":'#333333',"font__size":'12'},
                  },
                  {
                    "type":"vCart",
                    "mname":"购物车",
                  },{
                    "type":"vMap",
                    "mname":"地图",
                    "address":"成都市高新区世纪城路198附184号",
                    "coordinate":""
                  },{
                    "type":"vVideo",
                    "mname":"视频",
                    "layout":"vVideo__1",
                    "style":{"margin":"1","margin__left":"0","margin__right":"0","line__height":"16","font__size":"12","color":"#000000"},
                  },{
                    "type":"vVideoList",
                    "mname":"视频列表",
                    "layout":"vVideoList__1",
                    "widget":{"sa":true,"st":true,"op":true,"ca":true},
                    "style":{"margin":"4"}
                  },
                  {"type":"vUserCenter",
                    "mname":"个人中心",
                    "widget":{"hy":true,"sc":true,"kqb":true,"jf":false},
                  },
                  {"type":"vDistributorCenter",
                    "mname":"分销系统中心",
                    "widget":{"hy":true,"sc":false,"kqb":false,"jf":false},
                  },
                  {"type":"vForm",
                    "mname":"表单组件",
                    "btnText":"下一步",
                    "pageText":"已收到您的信息，我们会尽快审核，谢谢您的配合！",
                    "style": {"background__color":"#ffffff","border__radius":"8","border__color":"#c9c9c9","btn__color":'#B56D61'},
                    "layout":"vForm__1"
                  },
                  {
                    "type":"vCoupon",
                    "mname":"卡券中心",
                  },{
                    "type":"vSecKill",
                    "style":{"margin__bottom":"4"},
                    "mname":"秒杀",
                  },{
                    "type":"vCollage",
                    "style":{"margin__bottom":"4"},
                    "mname":"拼团",
                  },{
                    "type":"vTurntable",
                    "style":{},
                    "mname":"大转盘",
                  },{
                    "type":"vGoldenEgg",
                    "style":{},
                    "mname":"砸金蛋",
                  },
                ],
                templet:[
                  {
                      "type":"vTemtravel",
                      "Tem":[
                        {"type":"vSlider",
                          "mname":"轮播组件",
                          "time":"6",
                          "ind":'1'
                        },
                        {"type":"vQuickNav",
                          "mname":"快速导航",
                          "rowNum":"4",
                          "widget":{"ti":true},
                          "style":{"line__height":"16","font__size":"12","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"},
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
                          "incident":"1",
                          "ind":'1'
                          },
                        {"type":"vImgTextList",
                          "mname":"图文集",
                          "layout":"vImgTextList__3",
                          "style":{"border__radius":"0","line__height":"16","font__size":"12","color":"#666666","padding":"0","padding__top":"0","padding__bottom":"0"},
                          "incident":"1",
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
                          "style":{"margin__bottom":"4"}, //,"height":"88","width":"40","line__height":"20","font__size":"14","color":"#000000","padding":"0"
                          "ind":'1',
                        },
                      ]
                  },
                  {
                    "type":"vTemtravelAddr",
                    "Tem":[
                      {"type":"vTravelAddr",
                        "mname":"目的地",
                      },
                      {"type":"vText",
                        "mname":"文本组件",
                        "text":"———周边热门城市———",
                        "style":{"background__color":"#ffffff","color":"#666666","font__size":"12","text__align":"center","height":"32","line__height":"42"},
                        "incident":"1"
                      },
                      {"type":"vTravelAddrCity",
                        "mname":"目的地",
                      },
                    ]
                  },
                  {"type":"vTemtravelUser",
                    "Tem":[
                      {"type":"vUserCenter",
                        "mname":"个人中心",
                        "widget":{"hy":true,"sc":true,"kqb":true,"jf":true},
                        "ind":'1'
                      }]
                  },
                  {"type":"vTemtravelFind",
                    "Tem":[
                      {
                        "type":"vClassify",
                        "mname":"分类列表",
                        "layout":"vClassify__3",
                        "widget":{"sa":false,"st":false,"op":false,"ca":false},
                        "style":{"margin__bottom":"4","background__color":"#30c8a2","color":'#ffffff',"choosecolor":"#30c8a2","font__size":"12", "line__height":"20","tfont__size":"14","tcolor":"#000000","padding":"0"},
                        "ind":"1"
                      }
                      ]
                  },
                  {"type":"vTemElcticHome",
                    "Tem":[
                      {"type":"vSlider",
                        "mname":"轮播组件",
                        "time":"5",
                        "ind":'2'
                      },{"type":"vSearch",
                        "mname":"搜索组件",
                        "style": {"background__color":"#f0eff5","border__radius":"2","height":"20"},
                        "layout":"vSearch__2"
                      },
                      {"type":"vQuickNav",
                        "mname":"快速导航",
                        "rowNum":"4",
                        "widget":{"ti":"true"},
                        "style":{"line__height":"16","font__size":"12","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"},
                        "ind":'2'
                      },
                      {"type":"vQuickNav",
                        "mname":"快速导航",
                        "rowNum":"4",
                        "widget":{"ti":"true"},
                        "style":{"line__height":"16","font__size":"12","color":"#000000","padding":"10","padding__top":"0","padding__bottom":"0"},
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
                        "layout":"vRecommend__2",
                        "widget":{"sa":true,"st":true,"op":true,"ca":true},
                        "style":{"margin__bottom":"4","height":"88","width":"40","line__height":"20","font__size":"12","color":"#000000","padding":"0"},
                        "ind":'1'
                      },{"type":"vImage",
                        "mname":"图片组件",
                        "layout":"vImage__1",
                        "style":{"border__radius":"0","padding":"1","padding__top":"0","padding__bottom":"0","margin":"1","margin__left":"0","margin__right":"0"},
                        "ind":'5'
                      },
                      {"type":"vRecommend",
                        "mname":"推荐位",
                        "layout":"vRecommend__2",
                        "widget":{"sa":true,"st":true,"op":true,"ca":true},
                        "style":{"margin__bottom":"4","height":"88","width":"40","line__height":"20","font__size":"12","color":"#000000","padding":"0"},
                        "ind":'2'
                      }
                    ]
                  },
                  {"type":"vTemEduHome",
                    "Tem":[
                      {"type":"vSlider",
                        "mname":"轮播组件",
                        "time":"5",
                        "ind":'3'
                      },
                      {"type":"vQuickNav",
                        "mname":"快速导航",
                        "rowNum":"4",
                        "widget":{"ti":"true"},
                        "style":{"line__height":"16","font__size":"12","color":"#000000","padding":"15","padding__top":"0","padding__bottom":"0"},
                        "ind":'4'
                      },
                      {"type":"vText",
                        "mname":"文本组件",
                        "text":"课程推荐",
                        "style":{"background__color":"#ffffff","color":"#333333","font__size":"14","text__align":"center","height":"30","line__height":"30"},
                        "incident":"1"
                      },
                      {"type":"vImgTextList",
                        "mname":"图文集",
                        "layout":"vImgTextList__2",
                        "style":{"border__radius":"10","line__height":"18","font__size":"12","color":"#000000","padding":"0","padding__top":"0","padding__bottom":"0"},
                        "ind":"2",
                        "incident":"1"
                      },
                      {"type":"vImgTextList",
                        "mname":"图文集",
                        "layout":"vImgTextList__2",
                        "style":{"border__radius":"10","line__height":"18","font__size":"12","color":"#000000","padding":"0","padding__top":"0","padding__bottom":"0"},
                        "ind":"3",
                        "incident":"1"
                      },
                      {"type":"vText",
                        "mname":"文本组件",
                        "text":"课外阅读",
                        "style":{"background__color":"#ffffff","color":"#333333","font__size":"14","text__align":"center","height":"30","line__height":"32"},
                        "incident":"1"
                      },
                      {"type":"vQuickNav",
                        "mname":"快速导航",
                        "rowNum":"4",
                        "widget":{"ti":false},
                        "style":{"line__height":"16","font__size":"12","color":"#000000","padding":"0","padding__top":"0","padding__bottom":"0"},
                        "ind":'5'
                      },
                      {"type":"vText",
                        "mname":"文本组件",
                        "text":"新闻资讯",
                        "style":{"background__color":"#ffffff","color":"#333333","font__size":"14","text__align":"center","height":"34","line__height":"40"},
                        "incident":"1"
                      },
                      {"type":"vRecommend",
                        "mname":"推荐位",
                        "layout":"vRecommend__3",
                        "widget":{"sa":true,"st":true,"op":true,"ca":true},
                        "style":{"margin__bottom":"4","line__height":"20","font__size":"12","color":"#000000","padding":"0"},
                        "ind":'2'
                      }
                    ]},
                  {"type":"vTemMap",
                    "Tem":[
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
                      ]
                  },
                  {"type":"vTemAboutUs",
                    "Tem":[
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
                      {"type":"vText",
                        "mname":"文本组件",
                        "text":"公司介绍",
                        "style":{"background__color":"#ffffff","color":"#000000","font__size":"14","text__align":"left","height":"28","line__height":"34"},
                        "incident":"1"
                      },{"type":"vText",
                        "mname":"文本组件",
                        "text":"成都翼升科技有限公司现主要运营小程序业务。可视化拖拽制作，无需代码，轻松生成。",
                        "style":{"background__color":"#ffffff","color":"#000000","font__size":"13","text__align":"left","height":"44","line__height":"20"},
                        "incident":"1"
                      },
                    ]
                  },

                  {"type":"vTemHouseKeeping",
                    "Tem":[
                      {"type":"vSlider",
                        "mname":"轮播组件",
                        "time":"6",
                        "ind":'4'
                      },
                      {"type":"vQuickNav",
                        "mname":"快速导航",
                        "rowNum":"4",
                        "widget":{"ti":true},
                        "style":{"line__height":"15","font__size":"12","color":"#000000","padding":"12","padding__top":"0","padding__bottom":"0"},
                        "ind":'6'
                      },
                      {"type":"vQuickNav",
                        "mname":"快速导航",
                        "rowNum":"4",
                        "widget":{"ti":true},
                        "style":{"line__height":"15","font__size":"12","color":"#000000","padding":"12","padding__top":"0","padding__bottom":"0"},
                        "ind":'7'
                      },
                      {"type":"vText",
                        "mname":"文本组件",
                        "text":"月嫂推荐",
                        "style":{"background__color":"#ffffff","color":"#000000","font__size":"14","text__align":"left","height":"30","line__height":"34"},
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
                        "style":{"background__color":"#ffffff","color":"#000000","font__size":"14","text__align":"left","height":"30","line__height":"34"},
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
                      }
                    ]
                  },

                  {"type": "vTemKTVHome",
                    "Tem":[
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
                  {"type":"vTemKTVOrder",
                    "Tem":[
                      {
                        "type":"vMulticlass",
                        "mname":"多级分类",
                        "layout":"vMulticlass__1",
                        "style":{"background__color":"#f0f0f0","color":'#333333',"font__size":"12"},
                        "ind":"4"
                      },
                    ]},

                  {"type":"vTemPhoto",
                   "Tem":[
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
                   ]},
                  {"type": "vTemPhotoPage",
                    "Tem":[
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

                  {"type": "vTemMuY",
                    "Tem":[
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
                    ]},

                  {"type": "vTemBodyBuilding",
                    "Tem": [
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
                    ]},
                  {"type": "vTemBodyP",
                    "Tem": [
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

                  {"type": "vTemBeautify",
                    "Tem": [
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
                    ]},
                  {"type": "vTemBeautiType",
                    "Tem": [
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
                  {"type": "vTemOrder",
                    "Tem":[
                      {"type":"vForm",
                        "mname":"表单组件",
                        "btnText": "提交",
                        "layout": "vForm__2",
                        "pageText": "已收到您的预约信息，稍后工作人员会与您核实预约时间，感谢您的配合！",
                        "style":{"background__color": "#ffffff", "border__radius": "4", "border__color": "#c9c9c9", "btn__color": "#e43251"}
                      }
                    ]},
                  {"type": "vTemPlan",
                    "Tem": [
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

                  {"type": "vTemFarm",
                    "Tem": [
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
                       {"type":"vRecommend",
                         "mname":"推荐位",
                         "layout":"vRecommend__1",
                         "style":{"margin__bottom": "4", "line__height": "20", "font__size": "12", "color": "#000000"},
                         "widget": {"sa": true, "st": true, "op": true, "ca": true},
                         "ind":'4'
                       },
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
                    ]},



                ],
              }
      },
    components:{
      vSearch,
      vSlider,
      vImgTextList,
      vText,
      vLine,
      vProductList,
      vImage,
      vQuickNav,
      vNewsList,
      vUserCenter,
      vClassify,
      vMulticlass,
      vRecommend,
      vCart,
      vMap,
      vVideo,
      vVideoList,
      vDistributorCenter,
      vForm,
      vCoupon,
      vSecKill,
      vCollage,
      vTurntable,
      vGoldenEgg,
//      vTravelFind,
      vTravelAddr,
      vTravelAddrCity,
      'v-dialog':DialogM,

    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex
      })
    },
    methods:{
      cloneObjectFn (obj){ // 对象复制
        return JSON.parse(JSON.stringify(obj))
      },
      dragStart(event){ //拖拽开始时在被拖拽元素上触发此事件,监听器需要设置拖拽所需数据
//        console.log(event);
        event.target.style.opacity = .5;
        var moduleindex = $(event.target).attr('data-moduleindex');
        //firefox 必须添加
        event.dataTransfer.setData("text",moduleindex);
        event.stopPropagation();

      },
      Drag(event){ //拖拽期间在被拖拽元素上连续触发

      },
      DragEnd(event){ //鼠标在拖放目标上释放时,在拖拽元素上触发.
        event.target.style.opacity = 1;
      },
      DragEnter(event){  //拖拽鼠标进入元素时在该元素上触发,用于给拖放元素设置视觉反馈,如高亮
//        console.log($(event.target),this.showDialog);
        var dataIndex = $(event.target).attr('data-indexcom');
        if (event.target.className === "com-tools") {
          event.target.parentNode.parentNode.lastChild.style.display='block';
        }else if (event.target.className === "com-name") {
          event.target.parentNode.parentNode.parentNode.lastChild.style.display='block';
        }
        else {
          event.target.parentNode.lastChild.style.display='block';
        }
      },
      DragOver(event){ //拖拽时鼠标在目标元素上移动时触发.监听器通过阻止浏览器默认行为设置元素为可拖放元素.
        event.preventDefault();
      },
      DragLeave(event){ //拖拽时鼠标移出目标元素时在目标元素上触发.此时监听器可以取消掉前面设置的视觉效果.
//        event.target.parentNode.lastChild.style.display='none';
        if (event.target.className === "com-tools") {
          event.target.parentNode.parentNode.lastChild.style.display='none';
        }else if (event.target.className === "com-name") {
          event.target.parentNode.parentNode.parentNode.lastChild.style.display='none';
        }
        else {
          event.target.parentNode.lastChild.style.display='none';
        }
      },
      Drop(event){ //鼠标在拖放目标上释放时,在拖放目标上触发.此时监听器需要收集数据并且执行所需操作.
        var text = event.dataTransfer.getData("text");//拖拽携带的数据
        var flag = true,warn = '';
        var dType = '';//判断拖拽类型
        var  ptext= parseInt(text);
//        console.log(dataIndex,ptext,text,typeof(text),flag);
        var dataIndex = $(event.target).attr('data-indexcom'); //目标的位置
        var tempData = this.alldata.pages[this.nowPageIndex].module;
        if (event.target.className === "com-tools") {  //防止拖拽目标位置到html内层
          event.target.parentNode.parentNode.lastChild.style.display='none';
        }else if (event.target.className === "com-name") {
          event.target.parentNode.parentNode.parentNode.lastChild.style.display='none';
        }
        else {
          event.target.parentNode.lastChild.style.display='none';
        }
        this.$store.state.mine.oalldata = this.cloneObjectFn(this.alldata);//上一步数据
        //添加拖拽元素的类型
        if(text.match(/\d+/g)){  //判断拖拽的是上下位置
          var tempItem = tempData[text];
//          console.log(this.alldata.pages[this.nowPageIndex].module,this.alldata.pages);
          this.alldata.pages[this.nowPageIndex].module.splice(text,1);
//          if(text > dataIndex){ //判断上下
//            this.alldata.pages[this.nowPageIndex].module.splice(dataIndex-1,0,tempItem);
//          }else{
          this.alldata.pages[this.nowPageIndex].module.splice(dataIndex,0,tempItem);  //在拖拽目标位置组件后面添加数据
//          }
        }else if( text.substring(0, 4) == "vTem"){ //拖拽的为模板
          if(this.alldata.pages[this.nowPageIndex].module.length > 0 && flag ){
            alert( '模板只能在空白页显示');
            return;
          }else{
             for(let i = 0;i < this.templet.length;i++){
                 if(this.templet[i].type == text){ //匹配拖拽的模板
                   this.alldata.pages[this.nowPageIndex].module = this.templet[i].Tem.slice(0); //拖拽的模板数据，  数组
                   for(let j = 0; j < this.$store.state.rightTemplet.myTemData.length; j++){//更新我的模板数据
                       if(this.$store.state.rightTemplet.myTemData[j].type == text){
                         this.$store.state.rightTemplet.myTemData.splice(j,1);
                       }
                   }
                   this.$store.state.rightTemplet.myTemData.unshift(this.$store.state.rightTemplet.module[0].item[i]);//我的模板数据,全部模板和templet顺序保持一致
                 }
             }
          }
        }else{ //左边拖拽添加
          if(text == "vSearch"){ //一个页面只能有一个
            var modules = this.alldata.pages[this.nowPageIndex].module
            for( var i = 0;i < modules.length; i++ ){
              if( modules[i].type == "vSearch"){
                alert('搜索框一个页面只能有一个！')
                return;
              }
            }
          }
          switch (text){
            case 'vUserCenter':  //拖拽个人中心  只能在空白页添加
              warn = '个人中心';break;
            case 'vClassify' :
              warn = '分类';break;
            case 'vProductList' :
              warn = '商品列表';break;
            case 'vNewsList' :
              warn = '文章列表';break;
            case 'vMulticlass' :
              warn = '多级分类';break;
            case 'vCart' :
              warn = '购物车';break;
            case 'vDistributorCenter' :
              warn = '分销系统中心';break;
            case 'vForm' :
              warn = '表单组件';break;
            case 'vCoupon' :
              warn = '卡券中心';break;
            case 'vSecKill' :
              warn = '秒杀';break;
            case 'vCollage' :
              warn = '拼团';break;
            case 'vVideoList' :
              warn = '视频列表';break;
            case 'vGoldenEgg' :
              warn = '砸金蛋';break;
            case 'vTurntable' :
              warn = '大转盘';break;
            default:
              flag = false;
          };
          if(this.alldata.pages[this.nowPageIndex].module.length > 0 && flag ){
            alert( warn + '只能在空白页显示');
            return;
          }else{
            for(var i = 0;i < this.module.length;i++){
              if(this.module[i].type == text){
                let moduleArray = Object.assign({}, JSON.parse(JSON.stringify(this.module[i]))); //深度复制
                this.alldata.pages[this.nowPageIndex].module.splice(dataIndex,0,moduleArray);
                this.$store.state.chooseBox.chooseBoxName = moduleArray.type;
              }
            }
          }

        }
        event.preventDefault();
        event.stopPropagation();
      },
      allowDrop:function(event){
        event.preventDefault();
      },
      delCom(i,item){ //删除组件
//          console.log(item);
//        console.log(this.$store.state.chooseBox.chooseBoxName);
        this.$store.state.mine.oalldata = this.cloneObjectFn(this.alldata); //保存上一步操作
        this.dilogDisplay = 'block'; //弹窗
        this.$refs.dialog.confirm().then(() => {
          this.dilogDisplay = "none";
          this.alldata.pages[this.nowPageIndex].module.splice(i,1); //删除该组件数据
        }).catch(() => {
          this.dilogDisplay = 'none';
        })
      },
      nowComponent(index,name){ //选中当前组件
        this.$store.commit('choose_box',3) //选中的是中间组件还是顶部nav底部nav
        this.$store.state.mine.showModule = false;
        this.$store.state.mine.showTemplet = false;
        this.$store.state.mine.showStylePicker = false;
         if(this.$store.state.chooseBox.activeName == 3){
           this.$store.state.chooseBox.selectItem = index
           this.$store.state.chooseBox.chooseBoxName = name
         }
      }
    }
  }

</script>
<style>
  .scrollbar-hide{
    position: absolute;
    left: 0;
    height: 505px;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  #containment{
    width: 100%;
    position: relative;
    min-height:505px;
    width:320px;
    background-color: #f6f7f8;

  }
  .p-component{
    position: relative;
  }
  .nowcomponent{
    border:1px dashed #fd7a42;

  }
  .nowcomponent + .componentitem{
    margin:6px 0;
  }
  .dragaddarea-under{
    width: 100%;
    height: 26px;
    background-color: #fd7a42;
    border:1px dashed red;
    display: none;
    line-height:26px;
    font-size: 16px;
    text-align: center;
  }
  .com-name{
    /*padding:2px 4px;*/
    font-size:12px;
    background-color: #fd7a42;
    color:#fff;
  }
  .icon-guanbijiantou{

    color:#fd7a42;
  }
  .com-del{
    position: absolute;
    top: -5px;
    right: -3px;
    background-color: #fff;
    color: #fd7a42;
    border: 1px solid #fd7a42;
    padding: 0 1px;
    display: block;
    height: 12px;
    font-size: 12px;
    line-height: 12px;
  }
  .com-tools{
    display: none;
    position:relative;
  }
  .nowcomponent .com-tools{
    display: block;
  }
  #dilogBox{
    display: block !important;
  }

</style>

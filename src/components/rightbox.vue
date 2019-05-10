<!--//对应制作页面右边布局样式-->
<template>
  <div id="right-box">
    <div class="rightbox-header">
      <ul class="header-ul">
        <li @click="showPage()" class="page-button" :class="{'active':!$store.state.chooseBox.isShow}">
          布局
        </li>
        <li @click="showWidget()" class="widget-button" :class="{'active':$store.state.chooseBox.isShow}">
          样式
        </li>
      </ul>
    </div>
    <!--//选中的组件所对应的布局样式（layoutComponents）-->
    <component :is="$store.state.chooseBox.chooseBoxName"></component>
  </div>
</template>
<script>
  import vPageTitle from './layoutComponents/pageTitle'
  import vSearch from './layoutComponents/search'
  import vSlider from './layoutComponents/slider'
  import vImgTextList from './layoutComponents/imgTextList'
  import vText from './layoutComponents/text'
  import vLine from './layoutComponents/line'
  import vProductList from './layoutComponents/productList'
    import vImage from './layoutComponents/image'
    import vNavBottom from './layoutComponents/navBottom'
    import vQuickNav from './layoutComponents/quickNav'
    import vNewsList from './layoutComponents/NewsList'
    import vRecommend from './layoutComponents/recommend'
    import vClassify from './layoutComponents/classify'
    import vMulticlass from './layoutComponents/multiclass'
    import vCart from './layoutComponents/cart'
    import vMap from './layoutComponents/map'
    import vOrderFood from './layoutComponents/orderFood'
    import vVideo from './layoutComponents/video'
    import vVideoList from './layoutComponents/videoList'
    import vUserCenter from './layoutComponents/userCenter'
    import vDistributorCenter from './layoutComponents/distributorCenter'
    import vForm from './layoutComponents/form'
    import vCoupon from './layoutComponents/coupon'
    import vSecKill from './layoutComponents/seckill'
    import vCollage from './layoutComponents/collage'
    import vTurntable from './layoutComponents/turntable'
    import vGoldenEgg from './layoutComponents/goldenEgg'

    import vTravelFind from './layoutComponents/travelFind'

  export default {
    name: 'edit-leftbox',
      data(){

      return {
//        isShow: false,
        arrPages: [

        ],
      }
    },
    methods:{
      showPage:function(){
        this.$store.state.chooseBox.isShow = false;
      },
      showWidget(){
        this.$store.state.chooseBox.isShow = true;
      }
    },

    components:{
      vPageTitle,
      vSearch,
      vSlider,
      vImgTextList,
      vText,
      vLine,
      vProductList,
      vImage,
      vNavBottom,
      vQuickNav,
      vNewsList,
      vRecommend,
      vClassify,
      vMulticlass,
      vCart,
      vMap,
      vOrderFood,
      vVideo,
      vVideoList,
      vUserCenter,
      vDistributorCenter,
      vForm,
      vCoupon,
      vSecKill,
      vCollage,
      vTravelFind,
      vTurntable,
      vGoldenEgg
    }



  }
</script>
<style lang="scss" scoped="" type="text/css">
  $bordercolor:#d4d2d3;
  $selectedcolor:#fd7a42;
  #right-box{
    float: right;
    background-color: #f4f4f4;
    width:320px;
    border-left:1px solid $bordercolor;
    height:calc(100% - 1px);
    overflow-y: scroll;
    position:relative;
    .rightbox-header{
      width:100%;
      height:50px;
      background-color: #d3d1d2;
      .header-ul {li{
                font-size:18px;
                float: left;
                color:#515567;
                margin-left:10%;
                margin-top:11px;
                text-align: center;
                line-height:28px;
                border-radius:3px;
                width:96px;
               }
              }
            }
  .leftbox-widget{
    height:800px;
  }

   }
</style>

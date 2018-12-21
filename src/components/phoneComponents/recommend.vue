<template>
  <div>
    <div class="vQuickNav vRecommend__3" v-if="pData.layout == 'vRecommend__3'">
      <ul class="quicknav clearfloat newsUl">
        <li class="quicknavitem" v-for="item in $store.state.defaultData.vNewsList[imgdata]" :key="item.id"><div class="grid-content clearfloat" ><img class="itlImg" :src="item.imgUrl" alt="" ><div class="title"  ><h4 :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.title}}</h4> <p class="pra">{{item.text}}</p> <p class="date">{{item.date}}</p></div></div></li>
      </ul>
    </div>
    <div class="productlist clearfloat" v-else-if="pData.layout == 'vSecKillRe'">
      <div class="productitem clearfloat vSeckill" v-for="item in recommendData" :style="{marginBottom:pData.style.margin__bottom+'px'}">
        <div class="imgbox skillicon">
          <img :src="item.img_url" :alt="item.title" class="productimg">
          <div class="ribbon-skillicon-green" ><div class="ribbon-green">秒杀</div></div>
        </div>
        <div class="infobox clearfloat"  >
          <div class="title">{{item.title}}</div>
          <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice">￥{{item.old_price}}</span></div>
          <div class="quantity "><span class="sales">已售70%</span><div class="sbar"><span class="rbar"></span></div><span class="bybtn">去抢购</span></div>
        </div>
      </div>
    </div>
    <div class="productlist clearfloat" v-else-if="pData.layout == 'vCollageRe'">
      <div class="productitem clearfloat vSeckill" v-for="item in recommendData" :style="{marginBottom:pData.style.margin__bottom+'px'}">
        <div class="imgbox skillicon">
          <img :src="item.img_url" :alt="item.title" class="productimg">
          <div class="ribbon-skillicon-green" ><div class="ribbon-green">拼团</div></div>
        </div>
        <div class="infobox clearfloat"  >
          <div class="title">{{item.title}}</div>
          <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice">￥{{item.old_price}}</span></div>
          <div class="quantity "><span class="sales">5人团</span><span class="bybtn">去拼团</span></div>
        </div>
      </div>
    </div>
    <div class="productlist clearfloat" v-else>
      <div class="productitem clearfloat" :class="pData.layout"  v-for="item in recommendData" :style="{marginBottom:pData.style.margin__bottom+'px'}">
        <img :src="item.img_url" :alt="item.title" class="productimg"  >
        <div class="infobox clearfloat"  >
          <div class="title">{{item.title}}</div>
          <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
          <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script >
  export default{
    props:['pData'],
    computed: {
      imgdata(){
          return this.pData.ind ? this.pData.ind : 0;
      },
      recommendData(){//商品和视频推荐位数据
         if (this.pData.layout == 'vVideoRecommend__1' || this.pData.layout == 'vVideoRecommend__2') {
          return this.$store.state.defaultData.vVideoList[this.imgdata]
        }else{
          return this.$store.state.defaultData.vProductList[this.imgdata]
        }
      }
    }
  }
</script>
<style lang="scss" scoped="" type="text/scss">
  .productlist{
    margin:5px 0;
  }
  .newsUl{
    background-color: #f0f0f0;
  }
  .productitem{
    position: relative;
    background-color: #fff;
  }
  .productitem .productimg {
    /*margin-bottom:8px;*/
  }
  .infobox{
    /*position: relative;*/
    padding-top:4px;
    height: 100%;
  }
  .infobox .title{
    font-size:14px;
    color:#6d6d6d;
  }
  .infobox .price{
    font-size:14px;
    margin:6px 0 ;
  }
  .infobox .price .newprice
  {
    margin-right:8px;
    color:#ff0000;
  }
  .infobox .price .oldprice{
    color:#a5a5a5;
    text-decoration: line-through;
  }
  .infobox .quantity{
    font-size: 12px;
    color:#a5a5a5;
    /*position: relative;*/
  }
  .infobox .quantity .sales{
    margin-right:8px;
  }
  .infobox .quantity .stock{
    margin-right:30px;
  }
  .infobox .quantity .iconfont{
    font-size:19px;
    color:#ff0000;
    float: right;
  }
  .vRecommend__1,.vVideoRecommend__1{
    width:100%;
  }
  .vRecommend__1 .productimg,.vVideoRecommend__1 .productimg{
    float: left;margin-right: 6px;width: 35%;
  }
  .vRecommend__1 .infobox,.vVideoRecommend__1 .infobox{
    float:left;width: 62%;
  }
  .vRecommend__1 .quantity,.vVideoRecommend__1 .quantity{
    position: absolute;
    bottom:0px;
  }
  .vRecommend__2,.vVideoRecommend__2{
    width:44%;float:left;padding:1% 2.5%;
  }
  .vRecommend__2:nth-child(2n+1),.vVideoRecommend__2:nth-child(2n+1){
    margin-right:2%;
  }
  .vRecommend__2 .productimg,.vVideoRecommend__2 .productimg{
    width:100%;
  }
  .vRecommend__2 .infobox .icon-gouwuche02{
    position:absolute;bottom:16px;right:8px;
  }
  .vVideoRecommend__2 .icon{
    position:absolute;bottom:16px;right:8px;
  }

  .grid-content {
    padding:5px;
  }
  .vRecommend__3 .quicknav .quicknavitem{
    width:100%;
    background-color: #fff;
    margin-bottom:4px;
  }
  .vRecommend__3 .quicknav .quicknavitem .itlImg{
    width: 30%;
    float: left;
  }
  .vRecommend__3 .quicknav .quicknavitem .title{
    width: 67%;
    float: left;
    height:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom:16px;
    position: relative;
  }
  .vRecommend__3 .quicknav .quicknavitem .title .date{
    position: absolute;
    bottom:0;
    left:0;
    color:#888;
  }
  .vRecommend__3 .quicknavitem .title{
    margin-left:3%;
  }
  .vRecommend__3 .quicknavitem{
    margin-bottom:2px;
  }
  .vSeckill{
    width:100%;
  }
  .vSeckill .productimg{
    float: left;margin-right: 6px;width: 35%;
  }
  .vSeckill .infobox{
    float:left;width: 62%;
  }
  .vSeckill .quantity{
    position: absolute;
    bottom:1px;
  }
  .vSeckill .infobox .quantity .sales{
    margin-right:1px;
    color:#ff0103;
  }
  .vSeckill .quantity .sbar{
    display: inline-block;
    width: 42px;
    height: 6px;
    border-radius: 3px;
    border:1px solid #FF0108;
    position: relative;
  }
  .vSeckill .quantity .rbar{
    display: inline-block;
    width: 34px;
    height: 6px;
    border-radius: 3px;
    background-color: #FF0108;
    position: absolute;
    top:0;
    left:-1px;
  }
  .bybtn{
    display: inline-block;
    height: 24px;
    width: 62px;
    line-height:24px;
    text-align: center;
    background-color: #FF0108;
    color:#fff;
    border-radius: 5px;
    position: absolute;
    top:-30px;
    left:120px;
  }
  .skillicon {
    position: relative;
    z-index: 90;
  }
  .skillicon .ribbon-skillicon-green {
    width: 50px;
    height: 52px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .skillicon .ribbon-green {
    font:13px Sans-Serif;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    position: relative;
    left: -24px;
    top: 7px;
    width: 84px;
    background-color: #FF0108;
    color: #fff;
  }
</style>

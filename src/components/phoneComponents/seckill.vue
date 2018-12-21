<template>
  <div class="productlist clearfloat" id="pro">
    <div class="filterbox">
      <ul>
        <li class="nownavitem">默认</li>
        <li>排序1</li>
        <li>排序2</li>
        <li>排序3</li>
        <li>排序4</li>
      </ul>
    </div>
    <div class="productitem clearfloat vSeckill"  v-for="item in $store.state.defaultData.vProductList[imgdata]" :style="{marginBottom:pData.style.margin__bottom+'px'}" >
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
</template>
<script>
  export default{
    props:['pData'],
    computed:{
      imgdata(){
        return this.pData.ind ? this.pData.ind : 0;
      },}
  }
</script>
<style scoped="">
  .productlist{
  }
  .filterbox ul{
    height:40px;
    line-height:36px;
  }
  .filterbox ul li{
    width: 20%;
    text-align: center;
    float: left;
  }

  .productitem{
    position: relative;
    background-color: #fff;
    margin-bottom:5px;
  }
  .productitem .productimg {
    /*margin-bottom:8px;*/
  }
  .infobox{
    /*position: relative;*/
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
    position: relative;
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

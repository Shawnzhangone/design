<template>
  <div>
    <div class="productlist clearfloat" v-if="pData.layout != 'vRecommend__3'">
      <div class="productitem clearfloat" :class="pData.layout" v-for="item in $store.state.defaultData.vProductList[imgdata]" :style="{marginBottom:pData.style.margin__bottom+'px'}">
        <img :src="item.img_url" :alt="item.title" class="productimg"  >
        <div class="infobox clearfloat"  >
          <div class="title">{{item.title}}</div>
          <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
          <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
        </div>
      </div>
    </div>
    <div class="vQuickNav vRecommend__3" v-if="pData.layout == 'vRecommend__3'">
      <ul class="quicknav clearfloat newsUl">
        <li class="quicknavitem" v-for="item in $store.state.defaultData.vNewsList[imgdata]" :key="item.id"><div class="grid-content clearfloat" ><img class="itlImg" :src="item.imgUrl" alt="" ><div class="title"  ><h4 :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.title}}</h4> <p class="pra">{{item.text}}</p> <p class="date">{{item.date}}</p></div></div></li>
      </ul>
    </div>
  </div>
</template>
<script >
  export default{
    props:['pData'],
    computed:{
      imgdata(){
        if(this.pData.ind){
          return this.pData.ind;
        }else {
          return 0;
        }
      },}
  }
</script>
<style scoped="">
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
  .vRecommend__1{
    width:100%;
  }
  .vRecommend__1 .productimg{
    float: left;margin-right: 6px;width: 35%;
  }
  .vRecommend__1 .infobox{
    float:left;width: 62%;
  }
  .vRecommend__1 .quantity{
    position: absolute;
    bottom:0px;
  }
  .vRecommend__2{
    width:44%;float:left;padding:1% 2.5%;
  }
  .vRecommend__2:nth-child(2n+1){
    margin-right:2%;
  }
  .vRecommend__2 .productimg{
    width:100%;
  }
  .vRecommend__2 .icon{
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
</style>

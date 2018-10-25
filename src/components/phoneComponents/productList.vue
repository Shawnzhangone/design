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
    <div class="productitem clearfloat" :class="pData.layout" v-for="item in $store.state.defaultData.vProductList[imgdata]" >
      <img :src="item.img_url" :alt="item.title" class="productimg"  >
      <div class="infobox clearfloat"  >
        <div class="title">{{item.title}}</div>
        <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
        <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
      </div>
    </div>
    <div class="productitem clearfloat" :class="pData.layout" v-for="item in $store.state.defaultData.vProductList[imgdata]" >
      <img :src="item.img_url" :alt="item.title" class="productimg"  >
      <div class="infobox clearfloat"  >
        <div class="title">{{item.title}}</div>
        <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
        <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
      </div>
    </div>
    <div class="productitem clearfloat" :class="pData.layout" v-for="item in $store.state.defaultData.vProductList[imgdata]" >
          <img :src="item.img_url" :alt="item.title" class="productimg"  >
          <div class="infobox clearfloat"  >
            <div class="title">{{item.title}}</div>
            <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
            <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
          </div>
        </div>
  </div>
</template>
<script>
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
 .vProductList__1{
    width:100%;
  }
 .vProductList__1 .productimg{
    float: left;margin-right: 6px;width: 35%;
  }
 .vProductList__1 .infobox{
    float:left;width: 62%;
  }
 .vProductList__1 .quantity{
    position: absolute;
    bottom:0px;
  }
 .vProductList__2{
    width:44%;float:left;padding:1% 2.5%;
  }
 .vProductList__2:nth-child(2n){
    margin-right:2%;
  }
.vProductList__2 .productimg{
    width:100%;
  }
.vProductList__2 .icon{
    position:absolute;bottom:16px;right:8px;
  }
</style>

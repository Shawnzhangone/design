<template>
  <div>
      <div class="productlist clearfloat classify " :class="pData.layout" >
        <!--v-if="pData.layout != 'vClassify__3'" -->
        <!--:class="pData.layout"-->
        <div class="navbox" :style="{backgroundColor:pData.style.background__color}">
          <ul :style="{color:pData.style.color,fontSize:pData.style.font__size+'px'}"><li class="navitem" :class="{nownavitem:nowClassify == index}" v-for="(item,index) in $store.state.defaultData.vClassify[imgdata].proData">{{item.title}}</li></ul>
        </div>
        <div class="productItembox clearfloat">
          <div class="productitem clearfloat Productscl"  v-for="item in $store.state.defaultData.vClassify[imgdata].proData[nowClassify].product">
            <img :src="item.img_url" :alt="item.title" class="productimg"  >
            <div class="infobox clearfloat"  >
              <div class="title">{{item.title}}</div>
              <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
              <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
            </div>
          </div>
        </div>
      </div>

    <!--<div class="vQuickNav vClassify__3" v-if="pData.layout == 'vClassify__3'">-->
      <!--<div class="navbox" :style="{backgroundColor:pData.style.background__color}">-->
        <!--<ul :style="{color:pData.style.color,fontSize:pData.style.font__size+'px'}"><li class="navitem" :class="{nownavitem:nowClassify == index}" v-for="(item,index) in proData" @click="tabSwitch(index)">{{item.title}}</li></ul>-->
      <!--</div>-->
      <!--<ul class="quicknav clearfloat">-->
        <!--<li class="quicknavitem" v-for="item in $store.state.defaultData.vNewsList" :key="item.id"><div class="grid-content clearfloat" :style="{paddingLeft:pData.style.padding+'px',paddingRight:pData.style.padding+'px'}"><img class="itlImg" :src="item.imgUrl" alt="" :style="{width:pData.style.width + '%'}"><div class="title"  :style="{width:97-pData.style.width+'%'}"><h4 :style="{lineHeight:pData.style.line__height+'px',color:pData.style.tcolor,fontSize:pData.style.tfont__size+'px'}">{{item.title}}</h4> <p class="pra">{{item.text}}</p></div></div></li>-->
      <!--</ul>-->
    <!--</div>-->

  </div>
</template>
<script>
  export default{
    props:['pData'],
    data(){
        return{
            nowClassify:0,
            nowStyle: {
              color: "#fd7a42",
              borderBottom: "3px solid #fd7a42",
            },
//    :style="{nowStyle:nowClassify == index}"
        }
    },
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
<style lang="scss">
  .classify .productitem{
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
    margin-top:4px;
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
  .Productscl .productimg{
    width:100%;
  }
   .nownavitem{
     color: #fd7a42;
     border-bottom: 3px solid #fd7a42;
   }
   .navbox {
     width: 100%;
     height: 38px;
     line-height:35px;
   }
   .navbox ul{
     overflow-x: auto;
   }
   .classify .navbox ul li{
     width: 72px;
     margin:0 4px;
     float: left;
     line-height:28px;
     padding-bottom:5px;
     text-align: center;
   }
  .vClassify__2{
   .Productscl{
     width:44%;float:left;padding:1% 2.5%;
     margin-bottom:5px;
   }
   .Productscl:nth-child(odd){
     margin-right:2%;
   }

   .Productscl .icon{
     position:absolute;bottom:16px;right:8px;
   }
 }
 .vClassify__1{
   .Productscl{
     width:100%;
   }
   .Productscl .productimg{
     float: left;margin-right: 6px;width: 35%;
   }
   .Productscl .infobox{
     float:left;width: 62%;
   }
   .Productscl .quantity{
     position: absolute;
     bottom:0px;
   }
 }
 .vClassify__3{
   .infobox{
     display: none;
   }
   .productitem{
     position: relative;
     border:0;
   }
   .Productscl .productimg{
     width:100%;
     margin-top:6px;
   }
   .navbox {
     width: 100%;
     height: 36px;
     line-height:35px;
   }
   .navbox ul{
     overflow-x: auto;
   }
   .navbox ul li{
     width: 60px;
     margin:6px 10px;
     float: left;
     line-height:24px;
     text-align: center;
     -webkit-border-radius: 6px;
     -moz-border-radius: 6px;
     border-radius: 6px;
     background-color: #52dfbf;
     padding:0;
   }
   .navbox ul .nownavitem{
     color: #1dd6ac;
     background-color: #fff;
     border:0;
   }
 }
  .grid-content {
    padding:5px;
  }
 .classify .quicknav .quicknavitem{
    width:100%;
    background-color: #fff;
    margin-bottom:4px;
  }

</style>

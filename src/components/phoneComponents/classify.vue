<template>
  <div>
      <div class="productlist clearfloat classify " :class="pData.layout" >
        <div class="navbox" :style="{backgroundColor:pData.style.background__color}">
          <ul :style="{color:pData.style.color,fontSize:pData.style.font__size+'px'}"><li class="navitem" :class="{nownavitem:nowClassify == index}" v-for="(item,index) in classifyData.proData">{{item.title}}</li></ul>
        </div>
        <div class="productItembox clearfloat">
          <div class="productitem clearfloat Productscl"  v-for="item in classifyData.proData[nowClassify].product">
            <img :src="item.img_url" :alt="item.title" class="productimg"  >
            <div class="infobox clearfloat"  >
              <div class="title">{{item.title}}</div>
              <div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>
              <div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>
            </div>
          </div>
        </div>
      </div>


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
    computed: {
      imgdata(){
        return this.pData.ind ? this.pData.ind : 0 ;
      },
      classifyData(){
        if (this.pData.layout == 'vClassify__2' || this.pData.layout == 'vClassify__1') {
          return this.$store.state.defaultData.vClassify[this.imgdata]
        } else if (this.pData.layout == 'vProVideoClassify__1' || this.pData.layout == 'vProVideoClassify__2') {
          return this.$store.state.defaultData.vVideoClassify[this.imgdata]
        } else if (this.pData.layout == 'vShowVideoClassify__1' || this.pData.layout == 'vShowVideoClassify__2'||this.pData.layout == 'vShowVideoClassify__3') {
          return this.$store.state.defaultData.vVideoClassify[this.imgdata]
        }
      }
    }
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
  .vClassify__2,.vProVideoClassify__2,.vShowVideoClassify__2{
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
 .vClassify__1,.vProVideoClassify__1{
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
  .vShowVideoClassify__1{
    .Productscl{
      width:100%;
    }
    .Productscl .productimg{
      height:150px;
      width: 100%;
    }
    .Productscl .infobox{
      width: 100%;
    }
    .title{
      padding-left:8px;
    }
  }
 .vShowVideoClassify__3{
   .Productscl{
     width:31%;float:left;padding:0.5%;
     margin-bottom:5px;
     margin-right:2%;
   }
   .Productscl:nth-child(3n){
     margin-right:0;
   }
   .title{
     text-align: center;
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
  .vShowVideoClassify__1,.vShowVideoClassify__2,.vShowVideoClassify__3{
    .quantity,.price{
      display: none;
    }
  }
</style>

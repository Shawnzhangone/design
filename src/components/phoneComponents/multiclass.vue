<template>
  <div class="productlist clearfloat " >
    <!--商品多级分类-->
    <div v-if="pData.layout == 'vMulticlass__1'|| pData.layout =='vProVideoClassify__1'|| pData.layout == 'vShowVideoClassify__1'" class="vMulticlass__1">
      <div class="navbox" >
        <ul :style="{color:pData.style.color,fontSize:pData.style.font__size+'px',backgroundColor:pData.style.background__color}"><li class="navitem" :class="{nownavitem:nowClassify == index}" v-for="(item,index) in $store.state.defaultData.vMulticlass[imgdata].proData">{{item.title}}</li></ul>
      </div>
      <div class="productItembox clearfloat">
        <div class="productitem clearfloat Productscl"  v-for="item in MulticlassData.proData[nowClassify].product"  :style="{marginBottom:pData.style.margin__bottom+'px'}">
          <img :src="item.img_url" :alt="item.title"class="productimg"  >
          <div class="infobox clearfloat"  >
            <div class="title">{{item.title}}</div>
           </div>
        </div>
      </div>
    </div>
    <div v-if="pData.layout == 'vMulticlass__2'|| pData.layout =='vProVideoClassify__2'|| pData.layout =='vShowVideoClassify__2' " class="vMulticlass__2">
      <div class="navbox" :style="{backgroundColor:pData.style.background__color}">
        <el-dropdown trigger="click" v-for="(item,index) in MulticlassData.proData" :key="index" :class="{nownavitem:nowClassify == index}" class="eldrop" >
          <span class="el-dropdown-link" :style="{color:pData.style.color,fontSize:pData.style.font__size+'px'}">
            {{item.title}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item v-for="(goods,idx) in MulticlassData.proData[nowClassify].product" :key="idx">{{goods.title}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <div class="productItembox clearfloat">
        <div class="productitem clearfloat Productscl"  v-for="item in MulticlassData.proData[nowClassify].product"  >  <!--:style="{marginBottom:pData.style.margin__bottom+'px'}"-->
          <img :src="item.img_url" :alt="item.title" class="productimg"  >
          <div class="infobox clearfloat"  >
            <div class="title">{{item.name}}</div>
            <!--<div class="price"><span class="newprice">￥{{item.new_price}}</span><span class="oldprice" v-show="pData.widget.op">￥{{item.old_price}}</span></div>-->
            <!--<div class="quantity "><span class="sales" v-show="pData.widget.sa">销量:{{item.sales}}</span>  <span class="stock" v-show="pData.widget.st">库存:{{item.stock}}</span> <i class="icon iconfont icon-gouwuche02 " v-show="pData.widget.ca"></i></div>-->
          </div>
        </div>
      </div>
    </div>
        <!--视频多级分类-->
  </div>
</template>
<script>
  export default{
    props:['pData'],
    data(){
      return{
        activeIndex: '1',
        activeIndex2: '1',
        nowClassify:0,
        nowStyle: {
          color: "#fd7a42",
          borderBottom: "3px solid #fd7a42",
        },
//    :style="{nowStyle:nowClassify == index}"

      }
    },
    methods:{
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
      },
      tabSwitch(index){
        this.nowClassify = index;
      }
    },
    computed:{
      imgdata(){
        if(this.pData.ind){
          return this.pData.ind;
        }else {
          return 0;
        }
      },
      MulticlassData(){
        if(this.pData.layout == 'vMulticlass__1' ||this.pData.layout == 'vMulticlass__2' ){
            return this.$store.state.defaultData.vMulticlass[this.imgdata]
        }else if(this.pData.layout == 'vProVideoClassify__1' ||this.pData.layout == 'vProVideoClassify__2'){
          return this.$store.state.defaultData.vVideoMulticlass[this.imgdata]
        }else if(this.pData.layout == 'vShowVideoClassify__1' ||this.pData.layout == 'vShowVideoClassify__2'){
          return this.$store.state.defaultData.vVideoMulticlass[this.imgdata]
        }
      },
      }
  }
</script>
<style lang="scss">

  .productitem{
    position: relative;
    background-color: #fff;
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
  .Productscl .productimg{
    width:100%;
  }
  .vMulticlass__1{
    .nownavitem{
      color: #fd7a42;
      background-color: #fff;
    }
    display: flex;
    .navbox{
      width: 18%;
      text-align: center;
      ul{
        overflow-x: hidden;
        height:505px;
      }
      li {
        height: 36px;
        width: 58px;
        line-height: 40px;
        overflow: hidden;
      }
    }
    .productItembox{
      width: 100%;
      .productitem{
        width: 30%;
        float: left;
        margin-bottom:5px;
        padding: 1% 1%;
      .title{
        text-align: center;
        font-size:12px;
        margin-top:4px;
        }
      }
      .productitem:nth-child(3n+2){
        margin-left:1.5%;
        margin-right:1.5%;
      }

    }
  }
  .vMulticlass__2{
    .productItembox{
      .productitem{
        width: 44%;
        float: left;
        margin-bottom:5px;
        padding: 1% 2.5%;
        .title{
          text-align: center;
        }
      }
      .productitem:nth-child(2n+1){
        margin-right:2%;
      }
    }
    .el-dropdown{
      width: 25%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;

    }
    .eldrop{
      border:1px solid #aaa;
      border-left:0;
    }
    .eldrop:first-child{
      border-left:1px solid #aaa;
    }
    .Productscl .icon{
      position: absolute;
      bottom: 16px;
      right: 8px;
    }


  }

</style>

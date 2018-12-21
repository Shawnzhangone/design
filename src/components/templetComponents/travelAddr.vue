<template>
    <div class="traveladdr clearfloat "  >
      <div class="bgtop">
        <p class="addr tac">惠州</p>
        <div class="search">
          <input type="text" placeholder="搜索目的地、酒店、景点等。">
          <div class="navbox">
            <ul>
              <li v-for="(item,index) in items" :class="{nownavitem:nowClassify == index}">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="addrcontent">
        <div class="title">
          <hr/> 周边热门景区 <hr/>
        </div>
        <ul class="contentul"><li class="fl" v-for="item in imgs"><img :src="item" alt=""></li></ul>
      </div>
    </div>
</template>
<script>
  export default{
    props:['pData'],
    data(){
      return{
        nowClassify:0,
        items:["热门","上海","深圳","香港","澳门","台湾"],
        imgs:["/design/images/travel/hot1.png","/design/images/travel/hot2.png","/design/images/travel/hot3.png","/design/images/travel/hot4.png"]

      }
    },
    methods:{
      tabSwitch(index){
        this.nowClassify = index;
        console.log(this.imgdata);
      }
    },
    computed:{
      imgdata(){
        return this.pData.ind ? this.pData.ind : 0;
      },}
  }
</script>
<style lang="scss" >
  .traveladdr{
    .bgtop{
      background-image: url("/design/images/travel/addrbg.png");
      background-size: cover;  text-align: center; width: 100%; height: 10rem; position: relative; z-index: 1;
    }
    .addr{
      line-height:56px;
      color:#fff;
      font-size:14px;
    }
    .search{
      width: 100%;
      position: relative;
      input{
        width: 68%;
        height: 24px;
        padding-left:8px;
        margin:5px auto 42px;
        background-color: #d9e7ec;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
      }
      input[placeholder]{
        font-size:12px;
        color: #fff;
      }
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
      width: 37px;
      margin: 4px 8px;
      float: left;
      line-height:24px;
      text-align: center;
      color: #e0e0e0;
      padding:0;
    }
    .navbox ul .nownavitem{
      color: #1dd6ac;
      border-bottom:1px solid #1dd6ac;
    }
    .addrcontent{
      .title{
        text-align: center;
        margin:auto;
        margin-top:5px;
        line-height:38px;
      }
      hr{
        display: inline-block;
        width: 58px;
        margin:auto;
        height:1px;border:none;border-top:2px solid #888;
      }
      .contentul{
        width: 100%;
        li{
          width: 48%;
          margin:5px 1%;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>

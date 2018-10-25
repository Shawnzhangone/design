<template>
  <div class="dialogsd">
    <div class="mask"></div>
    <div class="dialog-content">
      <div class="title"><span class="nowset">设置开发设置</span>···<span class="nowset1">生成</span>···<span class="nowset2">代码包下载</span></div>
      <div class="guide">请在“微信公众平台-小程序-设置-开发设置”，填写以下信息</div>
      <div class="inputBox">
        <p class="text">APP ID：<input class="grey inname" type="text" placeholder="请输入APP ID" v-model="appInfo.appid" @blur="$store.state.mine.focusState =  false" v-focus="$store.state.mine.focusState"><a
          href=""> 怎么获取APP ID？</a></p>
        <p class="text text1">APP 密钥：<input class="grey inname" type="text" placeholder="请输入APP 密钥" v-model="appInfo.appsecret" ><a
          href=""> 怎么获取APP密钥？</a></p>
        <p class=" tip">如小程序涉及商品交易则必须填写商户ID和商户密钥</p>
        <p class="text text2" v-show="$store.state.mine.sid">商户ID：<input class="grey inname" type="text" placeholder="请输入商户ID" v-model="appInfo.storeid" ><a
          href=""> 怎么获取商户ID？</a></p>
        <p class="text" v-show="$store.state.mine.sid">商户密钥：<input class="grey inname" type="text" placeholder="请输入商户密钥" v-model="appInfo.storesecret" ><a
          href=""> 怎么获取商户密钥？</a></p>
      </div>
      <p class="guide"><a href="">还没有注册微信小程序？现在去注册</a></p>
      <div class="btn-group">
        <div class="btn" @click="$store.state.mine.showSetDialog = false;$store.state.mine.showBasicSet = true">返回</div>
        <div class="btn btn2" @click="submit">确定</div>
      </div>
      <div class="del" @click="$store.state.mine.showSetDialog = false;">
        <i class="iconfont">X</i>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'dialogsd',
    data() {
      return {
        focusState:false,
        value:'',
        resolve: '',
        reject: '',
        promise: '', // 保存promise对象
        appInfo:{appid:'',appsecret:'',storeid:'',storesecret:''},
        limitData:['搜索组件','轮播组件','快速导航']
      }
    },
    computed: {
      modal: function() {
        return {
        }
      }
    },
    methods: {
      //确定,将promise断定为完成态
      submit() {
          if(this.appInfo.appid == ''){
              alert("请输入APP ID!");
          }else if(this.appInfo.appsecret == ''){
            alert("请输入APP密钥!");
          }else if(this.$store.state.mine.sid){
//            if(this.appInfo.storeid == ''){
//              alert("请输入商户 ID!");
//            }else if(this.appInfo.storesecret == ''){
//              alert("请输入商户密钥!");
//            }else{
                      this.postApp(this.appInfo);
              this.$store.state.mine.showSetDialog = false;
              this.$store.state.mine.showSetDialog2 = true;
//            }
          }else{
                    this.postApp(this.appInfo);
            this.$store.state.mine.showSetDialog = false;
            this.$store.state.mine.showSetDialog2 = true;
          }

      },
//      for(let i = 0;i <= this.$store.state.mine.getMineBaseMsg.alldata.pages.length;i ++ ){
//          for(let j = 0; j <= this.$store.state.mine.getMineBaseMsg.alldata.pages[i].module.length;j ++){
//              for(let a=0;a <= this.limitData.length;a ++){
//                if(this.$store.state.mine.getMineBaseMsg.alldata.pages[i].module[j].mname == this.limitData[a] ){
//                  console.log(this.limitData[a]);
//                }
//              }
//          }
//      }
      // 取消,将promise断定为reject状态
//      cancel() {
//        this.$store.state.mine.showBasicSet = true;
//        this.$store.state.mine.showSetDialog = false;
//      },
      //显示confirm弹出,并创建promise对象，给父组件调用
      confirm() {
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        });
        return this.promise; //返回promise对象,给父级组件调用
      },
      ...mapActions(['postApp'])
    },
    directives:{
      focus:{
        update:function(el,{value}){
          if(value){
            el.focus()
          }
        }
      }
    },
  }
</script>

<style lang="scss">
  .dialogsd {
    position: relative;
    a{
      color:#333;
    }
    .nowset{
      color:#fd7a42;
    }
    .dialog-content {
      position: fixed;
      box-sizing: border-box;
      text-align: center;
      width: 1000px;
      height: 660px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      background: #fff;
      z-index: 50002;
      .guide{
        font-size:18px;
        line-height:80px;
      }
      .title {
        font-size: 18px;
        font-weight: 600;
        line-height: 66px;
        color:#000;
        border-bottom:2px solid #e0e0e0;
      }
      .text {
        font-size: 18px;
        line-height: 30px;
        margin:30px auto;
        .inname{
          border:1px solid #a0a0a0;
          height: 27px;
          width: 200px;
          padding-left:6px;
          font-size:14px;
          margin-right:10px;
        }
      }
      .text1{
        margin-bottom:10px;
      }
      .text2{
        margin-top: 0;
      }
      .tip{
        font-size: 14px;
        line-height: 30px;
        color:#ff4200;
      }
      .del {
        position: absolute;
        top:10px ;
        right:15px;
      }
      .btn-group {
        display: flex;
        position: absolute;
        left:50%;
        margin-left: -125px;
        bottom: 100px;
        .btn {
          padding: 8px 0;
          font-size: 16px;
          width:100px;
          text-align: center;
          color:#000;
          background-color: #fff;
          -webkit-border-radius:5px;
          -moz-border-radius:5px;
          border-radius:5px;
          border:1px solid #E0e0e0;
          /*&:last-child {*/
            /*color: #fff;*/
            /*background-color: #fd7a42;*/
          /*}*/
        }
        .btn2,.btn3{
          color: #fff;
          background-color: #fd7a42;
          width: 100px;
          margin-left:50px;
        }
        .btn3{
          margin-left:0;
          width: 200px;
          a{
            color:#fff;
          }
        }
      }
      .btn-group2{
        margin-left:-50px;
      } .btn-group3{
        margin-left:-100px;
      }
    }
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 50001;
      background: rgba(0,0,0,.5);
    }
  }
</style>

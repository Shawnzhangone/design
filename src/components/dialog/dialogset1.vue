<template>
  <div class="dialogs">
    <div class="mask"></div>
    <div class="dialog-content">
      <div class="title">温馨提示</div>
      <p class="text">组件 <span v-for="item in $store.state.mine.VIPCom" class="org">{{item}}、</span>为VIP组件</p>
      <div class="btn-group">
        <div class="btn" @click="cancel">取消</div>
        <div class="btn" @click="confireSet">去升级</div>
      </div>
      <div class="del" @click="$store.state.mine.showIsVIP = false;$store.state.mine.VIPCom = []">
        <i class="iconfont">X</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialogs',
    data() {
      return {
        focusState:false,
        resolve: '',
        reject: '',
        promise: '', // 保存promise对象
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
      confireSet() {
        this.$store.state.mine.showIsVIP = false
        window.open("/home/product.html?in=2#pro");
        this.$store.state.mine.VIPCom = []
      },
      // 取消,将promise断定为reject状态
      cancel() {
        this.$store.state.mine.showIsVIP = false
        this.$store.state.mine.VIPCom = []
      },
    },
    directives:{
      focus:{
        update:function(el,{value}){
          value && el.focus()
        }
      }
    },
  }
</script>

<style lang="scss">
  .dialogs {
    position: relative;
    .dialog-content {
      position: fixed;
      box-sizing: border-box;
      text-align: center;
      width: 492px;
      height: 320px;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      background: #fff;
      z-index: 50002;
      .title {
        font-size: 18px;
        font-weight: 600;
        line-height: 46px;
        color:#000;
        border-bottom:2px solid #e0e0e0;
      }
      .text {
        font-size: 18px;
        line-height: 30px;
        margin:50px auto;
        .inname{
          border:1px solid #a0a0a0;
          height: 27px;
          width: 200px;
          padding-left:6px;
          font-size:14px;
        }
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
        margin-left: -119px;
        bottom: 50px;
        .btn {
          padding: 8px 30px;
          font-size: 16px;
          color:#000;
          background-color: #fff;
          -webkit-border-radius:5px;
          -moz-border-radius:5px;
          border-radius:5px;
          border:1px solid #E0e0e0;
          &:last-child {
            color: #fff;
            background-color: #fd7a42;
            margin-left:50px;
          }
        }
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

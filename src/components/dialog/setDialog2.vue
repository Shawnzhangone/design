<template>
  <div class="dialogsd">
    <div class="mask"></div>
    <div class="dialog-content">
      <div class="title"><span >设置开发设置</span>···<span class="nowset">生成</span>···<span>代码包下载</span></div>
         <div class="loading">
           <div class="csshub-page">
             <div class="csshub-circle-loader">
               <div class="csshub-circle-line">
                 <div class="csshub-circle csshub-circle-blue"></div>
                 <div class="csshub-circle csshub-circle-blue"></div>
                 <div class="csshub-circle csshub-circle-blue"></div>
               </div>
               <div class="csshub-circle-line">
                 <div class="csshub-circle csshub-circle-yellow"></div>
                 <div class="csshub-circle csshub-circle-yellow"></div>
                 <div class="csshub-circle csshub-circle-yellow"></div>
               </div>
               <div class="csshub-circle-line">
                 <div class="csshub-circle csshub-circle-red"></div>
                 <div class="csshub-circle csshub-circle-red"></div>
                 <div class="csshub-circle csshub-circle-red"></div>
               </div>
               <div class="csshub-circle-line">
                 <div class="csshub-circle csshub-circle-green"></div>
                 <div class="csshub-circle csshub-circle-green"></div>
                 <div class="csshub-circle csshub-circle-green"></div>
               </div>
             </div>
           </div>
         </div>
        <p class="psss">代码生成中，请等待。。。</p>
      <div class="btn-group btn-group2 ">
        <div class="btn " @click="cancel">返回</div>
        <!--<div class="btn " @click="submit">下一步</div>-->
        <!--<div class="btn" id="btn1" @click="$store.state.mine.showSetDialog2 = false;">取消</div>-->
      </div>
      <div class="del" @click="$store.state.mine.showSetDialog2 = false;">
        <i class="iconfont">X</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialogsd',
    data() {
      return {
      }
    },
    methods: {
      //确定,将promise断定为完成态
      submit() {
        this.$store.state.mine.showSetDialog2 = false;
        this.$store.state.mine.showSetDialog3 = true;
      },
      // 取消,将promise断定为reject状态
      cancel() {
        this.$store.state.mine.showSetDialog = true;
        this.$store.state.mine.showSetDialog2 = false;
      },
      //显示confirm弹出,并创建promise对象，给父组件调用
    },
  }
</script>
<style>
  #btn1{
    background-color: #fff;
    color:#000;
  }
  .psss{
    text-align: center;
    font-size:16px;
    padding-left:30px;
  }
  .loading {
    padding: 143px 493px;
  }
  .csshub-circle-loader {
    display: block;
    width: 64px;
    height: 64px;
    -webkit-transform-origin: 16px 16px;
    transform-origin: 16px 16px;
    -webkit-animation: csshub-rotate-animation 5s infinite;
    animation: csshub-rotate-animation 5s infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  .csshub-circle-loader .csshub-circle {
    -webkit-animation: move-animation 2.5s infinite;
    animation: move-animation 2.5s infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .csshub-circle-loader .csshub-circle-line {
    width: 64px;
    height: 24px;
    position: absolute;
    top: 4px;
    left: 0;
    -webkit-transform-origin: 4px 4px;
    transform-origin: 4px 4px;
  }
  .csshub-circle-loader .csshub-circle-line:nth-child(0) {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .csshub-circle-loader .csshub-circle-line:nth-child(1) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .csshub-circle-loader .csshub-circle-line:nth-child(2) {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .csshub-circle-loader .csshub-circle-line:nth-child(3) {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  .csshub-circle-loader .csshub-circle-line .csshub-circle:nth-child(1) {
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    margin-top: -4px;
    margin-left: -4px;
    border-radius: 4px;
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  .csshub-circle-loader .csshub-circle-line .csshub-circle:nth-child(2) {
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    margin-top: -8px;
    margin-left: -8px;
    border-radius: 8px;
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  .csshub-circle-loader .csshub-circle-line .csshub-circle:nth-child(3) {
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
    border-radius: 12px;
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .csshub-circle-loader .csshub-circle-blue {
    background-color: #1f4e5a;
  }
  .csshub-circle-loader .csshub-circle-red {
    background-color: #ff5955;
  }
  .csshub-circle-loader .csshub-circle-yellow {
    background-color: #ffb265;
  }
  .csshub-circle-loader .csshub-circle-green {
    background-color: #00a691;
  }
  @-webkit-keyframes csshub-rotate-animation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes csshub-rotate-animation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes move-animation {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    25% {
      -webkit-transform: translate(-64px, 0);
      transform: translate(-64px, 0);
    }
    75% {
      -webkit-transform: translate(32px, 0);
      transform: translate(32px, 0);
    }
    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
  @keyframes move-animation {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    25% {
      -webkit-transform: translate(-64px, 0);
      transform: translate(-64px, 0);
    }
    75% {
      -webkit-transform: translate(32px, 0);
      transform: translate(32px, 0);
    }
    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
</style>

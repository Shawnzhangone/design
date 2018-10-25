<template>
  <div class="dialogsd">
    <div class="mask"></div>
    <div class="dialog-content">
      <div class="title"><span >设置开发设置</span>···<span >生成</span>···<span class="nowset">代码包下载</span></div>
      <div class="pimgbox"><img class="pimg" src="/design/default/rarpic.jpg" alt="">
        <p>{{$store.state.mine.getMineBaseMsg.alldata.pname}}.zip</p>
      </div>
      <p class="text">生成成功!</p>
      <div class="btn-group btn-group3">
        <!--<div class="btn" @click="cancel">返回</div>-->
        <div class="btn btn3"><a :href="$store.state.mine.download.path" :download="$store.state.mine.getMineBaseMsg.alldata.pname">下载{{$store.state.mine.download.size}}</a></div>
      </div>
      <div class="del" @click="$store.state.mine.showSetDialog3 = false;">
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
//        this.$store.state.mine.showSetDialog3 = false;
      },
      // 取消,将promise断定为reject状态
      cancel() {
        this.$store.state.mine.showSetDialog2 = true;
        this.$store.state.mine.showSetDialog3 = false;
      },
    }
  }
</script>
<style>
  .pimgbox{
    margin:80px auto 20px;
  }
  .pimg{
    width: 120px;
    height: 120px;
    margin-bottom:20px;
    background-color: #222;
  }
  .btn3 a {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

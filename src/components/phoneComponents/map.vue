<template>
  <div class="map">
    <img src="/design/default/mapimg.jpg" alt="">
    <div class="gothere">公司地址：{{pData.address}}</div>
    <div class="gothere">去这里：<i class="iconfont icon-dibiao"></i></div>
  </div>
</template>
<script>
  export default  {
    props:['pData'],
  }
</script>
<style>
  .map img {
    width:98%;
    margin:auto;
  }
  .map .gothere{
    margin-top:6px;
    line-height:18px;
    font-size:14px;
    padding:6px 8px;
    background-color: #fff;
  }
</style>

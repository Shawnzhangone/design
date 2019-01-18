<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="rightlayout pagetitle">
        <div class="chooselaout_title">地图组件无布局</div>
        <!--<div class="instruction">公司地址：<input type="text" v-model="alldata.pages[nowPageIndex].module[seleIndex].address"></input></div>-->
        <!--<div class="instruction">输入坐标：<input type="text" v-model="alldata.pages[nowPageIndex].module[seleIndex].coordinate"></input></div>-->
        <!--<a class="getpoint" target="_blank" href="http://lbs.qq.com/tool/getpoint/">点击查找获取坐标，核查复制填入。</a>-->
      </div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
//        nowPageIndex: state => state.mine.nowPageIndex,
//        seleIndex: state => state.chooseBox.selectItem
      })
    },
  }
</script>
<style>
  .rightlayout>div{
    margin-bottom:8px;
  }
  .instruction textarea{
    height: 20px;
  }
  .getpoint{
    font-size:14px;
  }
</style>

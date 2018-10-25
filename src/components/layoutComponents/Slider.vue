<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="rightlayout pagetitle">
        <div class="instruction">轮播无布局</div>
      </div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setbg">间隔时间：<input class='number'type="number" step="1" min="0" max="60" v-model="alldata.pages[nowPageIndex].module[seleIndex].time">秒</div>
      <div class="worning">注：轮播图高度按上传图片尺寸高度而定。</div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        seleIndex: state => state.chooseBox.selectItem
      })
    },
  }
</script>
<style>
  .rightlayout>div{
    margin-bottom:8px;
  }

</style>

<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <ul class="chooselayout">
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vSearch__1'}"><img src="/design/default/search1.png" alt="" @click="$store.commit('choose_layout','vSearch__1')"></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vSearch__2'}"><img src="/design/default/search2.png" @click="$store.commit('choose_layout','vSearch__2')" alt=""></li>
      </ul>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setbg">背景颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></div>
      <div class="setbg">高度：<input type="number" class="number" step="1" min="14" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.height"></div>
      <div class="setbg">圆角：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__radius"></div>

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

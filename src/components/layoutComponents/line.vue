<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <ul class="chooselayout">
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].style.border__style == 'solid'}" @click="$store.commit('choose_border','solid')" class="lineboxL"> <div class="lineL"></div></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].style.border__style == 'dashed'}" @click="$store.commit('choose_border','dashed')" class="lineboxL"> <div class="lineL dash"></div></li>
      </ul>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set">
        <li>背景颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></li>
        <li>分割线颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__color"></li>
        <li>分割线高度：<input type="number" class="number" min="1" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__bottom__width"></li>
        <li>上下间距：<input type="number" class="number" min="1" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.padding"></li>

      </ul>
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
  .lineboxL{
    height: 30px;
    background-color: #fff;
    border:1px solid #f0f0f0;
  }
    .lineL{
      margin:14px auto;
      width:94%;
      border-bottom:2px solid #000;
      height:2px;
    }
    .lineboxL .dash{
      border-style:dashed;
    }
</style>

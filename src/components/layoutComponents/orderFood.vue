<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">点餐组件无布局</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set">
        <li>按钮颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></li>
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

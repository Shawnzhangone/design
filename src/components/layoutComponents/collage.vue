<template>
  <div class="leftbox-widget">
    <div class="rightlayout page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">拼团无布局</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set">
        <li>上下间距：<input type="number" class="number" min="0" max="30" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin__bottom"></li>
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

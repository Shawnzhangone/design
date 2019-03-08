<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="instruction">文章列表无布局</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setcolor">字体颜色：<input type="color" name="color" id="color" value="#2D9900" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
      <div class="setfz">字体大小：<input type="number" class="number" step="1" min="12" max="16" @change="mlh()" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
      <div class="seth">文字行高：<input type="number" class="number" step="1" :min="minlh" max="28" @change="mlh()" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>
      <!--<div>上下间距：<input type="number" class="number" min="0" max="30" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin__bottom"></div>-->
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'

  export default {
    methods:{
      mlh(){ //行高必须比字体大1
        let lh = this.alldata.pages[this.nowPageIndex].module[this.seleIndex].style.line__height,fz = this.alldata.pages[this.nowPageIndex].module[this.seleIndex].style.font__size;
        this.alldata.pages[this.nowPageIndex].module[this.seleIndex].style.line__height = lh <= fz ? parseInt(fz) + 1 : lh;
      }
    },
    computed:{
      minlh(){//最小行高必须比字体大1
        return   parseInt(this.alldata.pages[this.nowPageIndex].module[this.seleIndex].style.font__size) + 1;
      },
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        seleIndex: state => state.chooseBox.selectItem,
      })
    },
  }
</script>
<style>
  .rightlayout>div{
    margin-bottom:8px;
  }
  .rightlayout .imagela li{
    float: left;
    width: 46%;
    margin-right: 4%;
    cursor: pointer;
    margin-bottom:15px;
  }
</style>

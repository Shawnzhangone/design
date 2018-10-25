<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择视频布局：</div>
      <ul class="chooselayout imagela clearfloat">
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideo__1'}"><img src="/design/images/default/imagetext1.png" @click="$store.commit('choose_layout','vVideo__1')"></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideo__2'}"><img src="/design/images/default/imagetext2.png" @click="$store.commit('choose_layout','vVideo__2')" ></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideo__3'}"><img src="/design/images/default/imagetext3.png" @click="$store.commit('choose_layout','vVideo__3')" ></li>
      </ul>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setbg">上下间距：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin"></div>
      <div class="setcolor">字体颜色：<input type="color" name="color" id="color" value="#000000" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
      <div class="setfz">字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
      <div class="seth">文本行高：<input type="number" class="number" step="1" min="12" max="28" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>

    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    methods:{
      indexSelect(){
        console.log(this.alldata.pages[this.nowPageIndex].module[this.seleIndex].incident);//在这里可以正确输出每个下拉框对应的下标值，当然输出值都是可以的
      }
    },
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
  .choice{
    height: 26px;
    width:120px;
  }
  .rightlayout .imagela li{
    float: left;
    width: 46%;
    margin-right: 4%;
    cursor: pointer;
    margin-bottom:15px;
  }
  .pnum{
    margin-top:6px;
    font-size:14PX;
  }
</style>

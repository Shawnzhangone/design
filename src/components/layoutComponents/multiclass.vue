<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <p>商品多级分类</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vMulticlass__1'}" @click="$store.commit('choose_layout','vMulticlass__1')" ><img src="/design/images/default/muclass1.png" alt=""> </li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vMulticlass__2'}" @click="$store.commit('choose_layout','vMulticlass__2')"> <img src="/design/images/default/muclass2.png" alt=""></li>
      </ul>
      <p>商品类视频多级分类</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vProVideoMulticlass__1'}" @click="$store.commit('choose_layout','vProVideoMulticlass__1')" ><img src="/design/images/default/muclass1.png" alt=""> </li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vProVideoMulticlass__2'}" @click="$store.commit('choose_layout','vProVideoMulticlass__2')"> <img src="/design/images/default/muclass2.png" alt=""></li>
      </ul>
      <!--<p>展示类视频多级分类</p>  展示类视频无列表页，暂取消多级分类-->
      <!--<ul class="chooselayout chooseProList clearfloat" >-->
        <!--<li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vShowVideoClassify__1'}" @click="$store.commit('choose_layout','vShowVideoClassify__1')" ><img src="/design/images/default/muclass1.png" alt=""> </li>-->
        <!--<li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vShowVideoClassify__2'}" @click="$store.commit('choose_layout','vShowVideoClassify__2')"> <img src="/design/images/default/muclass2.png" alt=""></li>-->
      <!--</ul>-->
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set">
        <li>分类栏背景颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></li>
        <li>分类栏文字颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></li>
        <li>分类栏字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></li>
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
  .chooseProList li{
    float: left;
    width: 47%;
    margin-right:8px;
  }
  .chooseprolistwidget{
    margin-top:20px;
  }
  .chooseishide{
    margin-bottom:16px;
    font-size:18px;
  }
</style>

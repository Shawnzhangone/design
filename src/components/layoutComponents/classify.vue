<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <p>商品分类列表</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vClassify__1'}" @click="$store.commit('choose_layout','vClassify__1')" ><img src="/design/images/default/prolist1.png" alt=""> </li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vClassify__2'}" @click="$store.commit('choose_layout','vClassify__2')"> <img src="/design/images/default/prolist2.png" alt=""></li>
      </ul>
      <p>商品类视频分类列表</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li class="vipicon" :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vProVideoClassify__1'}" @click="$store.commit('choose_layout','vProVideoClassify__1')" ><img src="/design/images/default/provideo1.png" alt=""> <div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div></li>
        <li class="vipicon" :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vProVideoClassify__2'}" @click="$store.commit('choose_layout','vProVideoClassify__2')"> <img src="/design/images/default/provideo2.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div></li>
      </ul>
      <p>展示类视频分类列表</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li class="vipicon" :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vShowVideoClassify__1'}" @click="$store.commit('choose_layout','vShowVideoClassify__1')" ><img src="/design/images/default/lavideo.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div> </li>
        <li class="vipicon" :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vShowVideoClassify__2'}" @click="$store.commit('choose_layout','vShowVideoClassify__2')"> <img src="/design/images/default/lavideo1.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div></li>
        <li class="vipicon" :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vShowVideoClassify__3'}" @click="$store.commit('choose_layout','vShowVideoClassify__3')"> <img src="/design/images/default/lavideo2.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div></li>
      </ul>

      <!--<p>新闻推荐列表</p>-->
      <!--<ul class="chooselayout chooseProList clearfloat" >-->
        <!--<li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vClassify__3'}" @click="$store.commit('choose_layout','vClassify__3')" ><img src="/design/images/static/images/prolist1.png" alt=""> </li>-->
      <!--</ul>-->
      <div class="chooseprolistwidget" :class="alldata.pages[nowPageIndex].module[seleIndex].layout">
        <div class="chooseishide">选择要添加的组件：</div>
        <ul>
          <li>
            <input type="checkbox" id="salesc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.sa">
            <label for="salesc">销量</label>
          </li>
          <li>
            <input type="checkbox" id="stockc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.st">
            <label for="stockc">库存</label>
          </li>
          <li>
            <input type="checkbox" id="opricec" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.op">
            <label for="opricec">虚拟价格</label>
          </li>
          <li>
            <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.ca">
            <label for="cartc">购物车按钮</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set" >
        <li>分类栏背景颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></li>
        <li>分类栏文字颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></li>
        <!--<li>分类栏选中颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.choosecolor"></li>-->
        <li>分类栏字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></li>
        <!--<li>上下间距：<input type="number" class="number" min="0" max="30" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin__bottom"></li>-->
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
  .chooseprolistwidget.vShowVideoClassify__2,.chooseprolistwidget.vShowVideoClassify__1,.chooseprolistwidget.vShowVideoClassify__3{
    display: none;
  }
</style>

<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideoList__1'}" @click="$store.commit('choose_layout','vVideoList__1')" ><img src="/design/default/prolist1.png" alt=""> </li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideoList__2'}" @click="$store.commit('choose_layout','vVideoList__2')"> <img src="/design/default/prolist2.png" alt=""></li>
      </ul>
      <div class="chooseprolistwidget">
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
      <ul class="set">
        <li>上下间距：<input type="number" class="number" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin"></li>
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

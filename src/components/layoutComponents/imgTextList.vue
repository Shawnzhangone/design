<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <ul class="chooselayout imagela clearfloat">
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImgTextList__1'}"><img src="/design/images/default/imagetext1.png" @click="$store.commit('choose_layout','vImgTextList__1')"></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImgTextList__2'}"><img src="/design/images/default/imagetext2.png" @click="$store.commit('choose_layout','vImgTextList__2')" ></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImgTextList__3'}"><img src="/design/images/default/imagetext3.png" @click="$store.commit('choose_layout','vImgTextList__3')" ></li>
      </ul>
      <div class="select">功能：<select class="choice" v-on:change="indexSelect" v-model="alldata.pages[nowPageIndex].module[seleIndex].incident">
        　　　　<option v-for="item in funcItem" v-bind:value="item.indexId">{{item.name}}</option>
        　　</select>
      </div>
      <!--<div class="pnum" v-show="alldata.pages[nowPageIndex].module[seleIndex].incident == '2'"> 电话号码后台填写</div>-->

      <div class="worning">注：页面链接地址和电话号码后台填写</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="box"v-if="alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImgTextList__1'">
        <div class="setcolor">标题字体颜色：<input type="color" name="color" id="color" value="#000000" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
        <div class="setcolor">文字字体颜色：<input type="color" name="color" id="color" value="#333333" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.wcolor"></div>
        <div class="setfz">标题字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
        <div class="seth">文本行高：<input type="number" class="number" step="1" min="12" max="28" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>
        <div class="setbg">圆角：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__radius"></div>
        <div class="seth">图片模块大小：<input type="number" class="number" step="1" min="0" max="30" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.padding"/></div>
      </div>
      <div v-else class="box">
        <div class="setcolor">字体颜色：<input type="color" name="color" id="color" value="#000000" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
        <!--<div class="setcolor">文字字体颜色：<input type="color" name="color" id="color" value="#333333" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.wcolor"></div>-->
        <div class="setfz">字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
        <div class="seth">文本行高：<input type="number" class="number" step="1" min="12" max="28" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>
        <div class="setbg">圆角：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__radius"></div>
        <div class="seth">图片模块大小：<input type="number" class="number" step="1" min="0" max="30" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.padding"/></div>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data(){return{
      funcItem: [{
        "indexId":1,
        "name": "页面跳转"
      }, {
        "indexId":2,
        "name": "拨打电话"
      }]
    }},
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        seleIndex: state => state.chooseBox.selectItem,
      })
    },
  }
</script>
<style>
  .rightlayout .box>div{
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

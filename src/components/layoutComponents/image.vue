<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择图片布局：</div>
      <ul class="chooselayout imagela clearfloat">
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImage__1'}"><img src="/design/default/imagela1.png" @click="$store.commit('choose_layout','vImage__1')"></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImage__2'}"><img src="/design/default/imagela2.png" @click="$store.commit('choose_layout','vImage__2')" ></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vImage__3'}"><img src="/design/default/imagela3.png" @click="$store.commit('choose_layout','vImage__3')" ></li>
      </ul>
      <div class="select">功能：<select class="choice" v-on:change="indexSelect" v-model="alldata.pages[nowPageIndex].module[seleIndex].incident">
        　　　　<option v-for="item in funcItem" v-bind:value="item.indexId">{{item.name}}</option>
        　　</select>
      </div>
      <!--<div class="pnum" v-show="alldata.pages[nowPageIndex].module[seleIndex].incident == '2'"> 电话号码后台填写</div>-->

      <div class="worning">注：页面链接地址和电话号码后台填写</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setbg">上下间距：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin"></div>
      <!--<div class="setbg">左右间距：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.padding"></div>-->
      <div class="setbg">圆角：<input type="number" class="number" step="1" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__radius"></div>

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
    methods:{
      indexSelect(){
        console.log(this.alldata.pages[this.nowPageIndex].module[this.seleIndex].incident);//在这里可以正确输出每个下拉框对应的下标值
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

<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="rightlayout pagetitle">
        <div class="instruction">文本无布局</div>
        <div>
          <ul><li style="position:relative;padding-left:83px;" ><p class="puttext ">文本文字：</p><textarea v-model="alldata.pages[nowPageIndex].module[seleIndex].text" class="wtext"></textarea></li></ul>
        </div>
        <div class="select">功能：<select class="choice" v-model="alldata.pages[nowPageIndex].module[seleIndex].incident">
          　　　　<option v-for="item in funcItem" v-bind:value="item.indexId">{{item.name}}</option>
          　　</select>
        </div>

        <div class="worning">注：页面链接地址和电话号码后台填写</div>
      </div>

    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setbg">背景颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></div>
      <div class="setcolor">字体颜色：<input type="color" name="color" id="color" value="#2D9900" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
      <div class="setfz">字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
      <div class="seth">文本高度：<input type="number" class="number" step="1" min="12"  v-model="alldata.pages[nowPageIndex].module[seleIndex].style.height"/></div>
      <div class="seth">文字行高：<input type="number" class="number" step="1" min="12" max="60" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>
      <div class="setta">位置：
        <ul class="taul">
         <li v-for="item in setta" :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].style.text__align == item.text__align}" @click="changeTa(item.text__align)">{{item.sleta}}</li>
        </ul></div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        setta:[{sleta:'置左',text__align:'left'},{sleta:'居中',text__align:'center'},{sleta:'置右',text__align:'right'}],
        funcItem: [{"indexId":1, "name": "页面跳转"}, {"indexId":2, "name": "拨打电话"}]
      }
    },
 methods:{
   changeTa(text__align){
     this.alldata.pages[this.nowPageIndex].module[this.seleIndex].style.text__align = text__align;
   },
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
  .pagetitle .cfunction input{
    width: 140px;
    height:20px;
    border:1px solid #888;
    background-color: #fff;
  }
  .setta{
    position: relative;
  }
  .taul{
    width: 180px;
    position: absolute;
    top:0;
    left:50px;
  }
.taul .nowChoose{
  border:1px solid #fd7a42;
}
  .taul li{
    float: left;
    height: 20px;
    width: 46px;
    margin-right:13px;
    background-color: #fff;
    text-align: center;
    line-height:20px;

  }
  .rightlayout>div{
    margin-bottom:8px;
  }
  .puttext{
    position: absolute;
    top: 0;
    left:0;
    display: inline-block;
  }
  .wtext{
    height: 60px;
    width: 180px;
  }
 .cfuntion{
   margin-top:24px;
 }
  .choice{
    height: 26px;
    width:120px;
  }

</style>

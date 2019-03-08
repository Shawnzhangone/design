<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择图片布局：</div>
      <ul class="chooselayout imagela clearfloat">
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vForm__1'}"><img src="/design/images/default/form1.png" @click="$store.commit('choose_layout','vForm__1')"></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vForm__2'}"><img src="/design/images/default/form2.png" @click="$store.commit('choose_layout','vForm__2')" ></li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vForm__3'}"><img src="/design/images/default/form3.png" @click="$store.commit('choose_layout','vForm__3')" ></li>
      </ul>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set">
        <li><div class="setbg">圆角：<input type="number" class="number" step="1" min="0"  max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__radius"></div></li>
      <li>背景颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.background__color"></li>
      <li>描边颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.border__color"></li>
      <li>按钮颜色：<input type="color" name="color" id="color" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.btn__color"></li>
      <li>按钮名称：<input type="text" v-model="alldata.pages[nowPageIndex].module[seleIndex].btnText" class="btntext"></input></li>
      <li><p>按钮跳转提示语：</p><textarea maxlength="256" v-model="alldata.pages[nowPageIndex].module[seleIndex].pageText" class="pagetext"></textarea></li>
      </ul>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){return{

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
  .btntext{
    height: 24px;
    width: 166px;
    border:1px solid #c0c0c0;
  }
  .pagetext{
    margin-top:6px;
    width: 240px;
    height: 60px;
  }
</style>

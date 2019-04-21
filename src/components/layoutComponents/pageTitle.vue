<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="rightlayout pagetitle">头部标题：<input type="text" v-model="alldata.pages[nowPageIndex].navigationBarTitleText" maxlength="20"></div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
        <div class="setbg">背景颜色：<input type="color" name="color" id="color" v-model="alldata.top_nav.navigationBarBackgroundColor"></div>
      <div class="setcolor">字体颜色：<span class="whiteblock" @click="topColor('white')"></span> <span class="blackblock" @click="topColor('black')"></span></div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
      data(){
          return{
              value:'',
            color:'',
          }
      },
    methods:{
      topColor(color){
        this.alldata.top_nav.navigationBarTextStyle = color
        console.log(color,this.alldata.top_nav.navigationBarTextStyle,this.alldata.pages[this.nowPageIndex].name)
      }
    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex
      })
    },

  }
</script>
<style>
  .pagetitle >input{
    width: 140px;
    height:20px;
    border:1px solid #888;
    background-color: #fff;
  }
  .rightlayout>div{
    margin-bottom:8px;
  }
  .setcolor span{
    padding:3px 14px;
  }
  .whiteblock{
    background-color: #fff;
  }
  .blackblock{
    background-color: #000;
  }
</style>

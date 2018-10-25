<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="rightlayout pagetitle">
        <ul class="cfuntion">
          <li>分类模块数量：
            <button class="cp" @click="lessItem()">减少</button>
            <button class="cp" @click="addItem()">添加</button></li>
          <li><input type="checkbox" id="ntitle" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.ti">
            <label for="ntitle">是否需要分类标题</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="setcolor">字体颜色：<input type="color" name="color" id="color" value="#2D9900" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
      <div class="setfz">字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
      <div class="seth">文字行高：<input type="number" class="number" step="1" min="12" max="28"  v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>
      <div class="seth">分类模块大小：<input type="number" class="number" step="1" min="0" max="26" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.padding"/></div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'

  export default {
    methods:{
      lessItem(){
        if(this.alldata.pages[this.nowPageIndex].module[this.seleIndex].rowNum == 2){
          alert("分类模块至少2个！")
        }else {
          this.alldata.pages[this.nowPageIndex].module[this.seleIndex].rowNum -= 1;
        }
      },
      addItem(){
        if(this.alldata.pages[this.nowPageIndex].module[this.seleIndex].rowNum >= 5){
//          this.alldata.pages[this.nowPageIndex].module[this.seleIndex].rowNum = 5
          alert("导航栏最多5个！")
        }else{
          this.alldata.pages[this.nowPageIndex].module[this.seleIndex].rowNum  = this.alldata.pages[this.nowPageIndex].module[this.seleIndex].rowNum*1+1
        }
      }
    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        seleIndex: state => state.chooseBox.selectItem,
        quickNav: state => state.defaultData.vQuickNav

      })
    },
  }
</script>
<style>
  .cfuntion li button{
    background-color: #fff;
  }
  .rightlayout>div{
    margin-bottom:8px;
  }
</style>

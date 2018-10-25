<template>
  <div class="vQuickNav" id="qNav">
    <ul class="quicknav clearfloat">
      <li class="quicknavitem" :style="{width:100/pData.rowNum+'%'}" v-for="item in vQuickNavData" :key="item.id"><div class="gridcontent" :style="{paddingLeft:pData.style.padding+'px',paddingRight:pData.style.padding+'px'}"><img class="itlImg" :src="item.imgUrl" alt=""><p v-show="pData.widget.ti" class="title" :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.text}}</p></div></li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    props:['pData'],
    computed:{
      vQuickNavData(){
          if(this.pData.ind){
            return this.quickNav[this.pData.ind].slice(0,this.pData.rowNum);
          }else{
            return this.quickNav[0].slice(0,this.pData.rowNum);
          }

      },
      ...mapState({
        quickNav: state => state.defaultData.vQuickNav
      })
    },
  }
</script>
<style>
  #qNav{
    margin-bottom:4px;
  }
  .quicknav .quicknavitem{
    float: left;
    background-color: #fff;
  }
  #qNav .gridcontent {
    border-radius: 4px;
    min-height: 36px;
    padding: 5px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .gridcontent .itlImg{
    width: 100%;
  }
  .gridcontent .title{
    margin-top:3px;
    text-align: center;
    font-size:11px;
    padding-bottom:3px;
  }
</style>

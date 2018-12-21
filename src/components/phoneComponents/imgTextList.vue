<template>
  <div class="vQuickNav imgTxt" :class="pData.layout">
    <ul class="quicknav clearfloat">
      <li class="quicknavitem" v-for="item in $store.state.defaultData.vImageTextList[imgdata]" :key="item.id"><div class="grid-content clearfloat" :style="{paddingLeft:pData.style.padding+'px',paddingRight:pData.style.padding+'px'}"><img class="itlImg" :src="item.imgUrl" alt="" :style="{borderRadius:pData.style.border__radius+'px'}"><div class="imgtitle" :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.text}} <div class="content" :style="{color:pData.style.wcolor}">{{item.content}}</div> </div></div></li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:['pData'],
    computed:{
      imgdata(){
        return this.pData.ind ? this.pData.ind : 0 ;
      },}
  }
</script>
<style>
  .vQuickNav{
    background-color: #fff;
  }
  .imgTxt .quicknav .quicknavitem{
    float: left;
    background-color: #fff;
  }
  .imgTxt .gridcontent {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .imgTxt .gridcontent .itlImg{
    width: 100%;
  }
  .imgTxt .grid-content .imgtitle{
    margin-top:5px;
    font-size:12px;
  }
  .imgTxt .grid-content {
    padding:5px;
  }
  .quicknavitem .content{
    display: none;
    font-size:12px;
    margin-top:8px;
  }
  .vImgTextList__1  .quicknavitem .content{
    display: block;
  }
  .vImgTextList__1 .quicknav .quicknavitem{
    width:100%;
    display: none;
  }
  .vImgTextList__1 .grid-content .imgtitle{
    float: left;
    width: 58%;
    padding-left:6px;
  }

  .vImgTextList__1 .quicknav li:first-child{
    display: block;
  }
  .vImgTextList__1 .quicknav .quicknavitem .itlImg,
  .vImgTextList__1 .quicknav .quicknavitem .title{
    width: 38%;
    float: left;
  }
  .vImgTextList__1 .quicknav .quicknavitem .title{
    margin-left:10px;
  }
  .quicknavitem{
    background-color: #fff;
  }
  .vImgTextList__2 .quicknav .quicknavitem{
    width:50%;
  }
  .vImgTextList__2 .quicknav .quicknavitem:last-child{
    display:none;
  }
  .vImgTextList__2 .quicknav .quicknavitem .itlImg{
    width: 100%;
  }
  .vImgTextList__3 .quicknav .quicknavitem{
    width:33.33%;
  }
  .vImgTextList__3 .quicknav .quicknavitem .itlImg{
    width: 100%;
  }
  .vImgTextList__3 .grid-content .imgtitle,.vImgTextList__2 .grid-content .imgtitle{
    text-align: center;
  }

</style>

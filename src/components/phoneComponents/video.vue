<template>
  <div class="vQuickNav video" :class="pData.layout">
    <ul class="quicknav clearfloat">
      <li class="quicknavitem" v-for="item in $store.state.defaultData.vVideo[imgdata]" ><div class="grid-content clearfloat" :style="{marginTop:pData.style.margin+'px',marginBottom:pData.style.margin+'px'}"><img class="itlImg" :src="item.imgUrl" alt="" ><div class="imgtitle" :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.text}}</div></div></li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:['pData'],
    computed:{
      imgdata(){
        return this.pData.ind ? this.pData.ind : 0;
      },}
  }
</script>
<style>
  .vQuickNav{
    background-color: #fff;
  }
  .video .quicknav .quicknavitem{
    float: left;
    background-color: #fff;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .video .grid-content .imgtitle{
    font-size:12px;
  }
  .video .grid-content {
    padding:0;
  }
  .vVideo__1 .quicknav .quicknavitem{
    width:100%;
    display: none;
  }
  .vVideo__1 .grid-content .itlImg{
    height:150px;
    width: 100%;
  }
  .vVideo__1 .grid-content .imgtitle{
    width: 100%;
    padding-left:6px;
  }

  .vVideo__1 .quicknav li:first-child{
    display: block;
  }
  .vVideo__1 .quicknav .quicknavitem .title{
    margin-left:10px;
  }
  .quicknavitem{
    background-color: #fff;
  }
  .vVideo__2 .quicknav .quicknavitem{
    width:50%;
  }
  .vVideo__2 .quicknav .quicknavitem:last-child{
    display:none;
  }
  .vVideo__2 .quicknav .quicknavitem .itlImg{
    width: 100%;
  }
  .vVideo__3 .quicknav .quicknavitem{
    width:33.33%;
  }
  .vVideo__3 .quicknav .quicknavitem .itlImg{
    width: 100%;
  }
  .vVideo__2 .grid-content .imgtitle,.vVideo__3 .grid-content .imgtitle{
    text-align: center;

  }

</style>

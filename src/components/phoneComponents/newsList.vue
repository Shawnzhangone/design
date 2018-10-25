<template>
  <div class="vQuickNav vNewsList" >
    <ul class="quicknav clearfloat newsUl">
      <li class="quicknavitem" v-for="item in $store.state.defaultData.vNewsList[imgdata]" :key="item.id"><div class="grid-content clearfloat" ><img class="itlImg" :src="item.imgUrl" alt=""><div class="title"><h4 :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.title}}</h4> <p class="pra">{{item.text}}</p> <p class="date">{{item.date}}</p></div></div></li>
      <li class="quicknavitem" v-for="item in $store.state.defaultData.vNewsList[imgdata]" :key="item.id"><div class="grid-content clearfloat" ><img class="itlImg" :src="item.imgUrl" alt=""><div class="title"><h4 :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.title}}</h4> <p class="pra">{{item.text}}</p> <p class="date">{{item.date}}</p></div></div></li>
      <li class="quicknavitem" v-for="item in $store.state.defaultData.vNewsList[imgdata]" :key="item.id"><div class="grid-content clearfloat" ><img class="itlImg" :src="item.imgUrl" alt=""><div class="title"><h4 :style="{lineHeight:pData.style.line__height+'px',color:pData.style.color,fontSize:pData.style.font__size+'px'}">{{item.title}}</h4> <p class="pra">{{item.text}}</p> <p class="date">{{item.date}}</p></div></div></li>
    </ul>
  </div>
</template>
<script>
  export default{
    props:['pData'],
    computed:{
      imgdata(){
        if(this.pData.ind){
          return this.pData.ind;
        }else {
          return 0;
        }
      },}
  }
</script>
<style>
  .grid-content {
    padding:5px;
  }
  .newsUl{
    background-color: #f0f0f0;
  }
 .vNewsList .quicknav .quicknavitem{
    width:100%;
    background-color: #fff;
    margin-bottom:4px;
  }
  .vNewsList .quicknav .quicknavitem .itlImg{
    width: 30%;
    float: left;
  }
  .vNewsList .quicknav .quicknavitem .title{
    width: 67%;
    float: left;
    height:100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*padding-bottom:16px;*/
    position: relative;
  }
  .vRecommend__3 .quicknav .quicknavitem .title .date{
    position: absolute;
    bottom:0;
    left:0;
    color:#888;
  }
  .vNewsList .quicknavitem{
    margin-bottom:2px;
  }

  .vNewsList .quicknavitem .title{
    margin-left:3%;
  }
</style>

<template>
  <div class="ptext">
    <div class="textp" v-for="item in $store.state.defaultData.vText" :style="{backgroundColor:pData.style.background__color,color:pData.style.color,fontSize:pData.style.font__size+'px',textAlign:pData.style.text__align,height:pData.style.height+'px',lineHeight:pData.style.line__height+'px'}">{{pData.text}}</div>
  </div>
</template>
<script>
  export default{
    props:['pData'],
  }
</script>
<style>
  .textp {
    padding:0 8px;
    text-align: center;
    background-color: #fd7a42;
    overflow: hidden;
  }
</style>

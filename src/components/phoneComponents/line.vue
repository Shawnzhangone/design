<template>
  <div class="line" >
    <div class="pline" :style="{borderBottomWidth:pData.style.border__bottom__width+'px',borderStyle:pData.style.border__style,borderColor:pData.style.border__color,paddingTop:pData.style.padding+'px',backgroundColor:pData.style.background__color}"></div>
    <div class="plineb" :style="{paddingTop:pData.style.padding+'px',backgroundColor:pData.style.background__color}"></div>
  </div>

</template>
<script>
  export default  {
      props:['pData'],
  }
</script>
<style>
  .pline,.plineb{
    width: 100%;
    padding:2px 0;
    background-color: #aaa;
    margin:auto;
  }
  .pline{
    border:0;
    border-bottom:1px solid #000;
    border-style:solid;
  }

</style>

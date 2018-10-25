<template>
  <div id="search" :class="pData.layout" :style="{backgroundColor:pData.style.background__color}">
    <i class="icon iconfont icon-sousuo"></i>
    <input type="text" :style="{borderRadius:pData.style.border__radius+'px',height:pData.style.height+'px'}" :placeholder="$store.state.defaultData.vSearch[imgdata]">
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
<style scoped>
  #search{
    width: 100%;
    text-align: center;
    background-color: #FFF3D9;
    padding:5px 0;
  }
  .icon{
    position: absolute;
    top:7px;
    color:#aaa;
  }
  input{
    width:80%;
    height: 20px;
    padding-right:20px;
    padding-left:4px;
  }
  .vSearch__1 .icon{
    right:16px;
    font-size:20px;
  }
  .vSearch__1 input{
    text-align: left;
  }
  .vSearch__2 .icon{
    left:96px;
  }
  .vSearch__2 input{
    text-align: center;
    padding:0;
  }
</style>

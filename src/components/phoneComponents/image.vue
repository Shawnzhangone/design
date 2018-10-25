<template>
  <div class="pimage">
    <div :class="pData.layout" >
      <ul class="imageul clearfloat">
        <li v-for="item in $store.state.defaultData.vImage[imgdata]" >
          <div class="imgbox" :style="{marginTop:pData.style.margin+'px',marginBottom:pData.style.margin+'px'}"><img :src="item.image" :style="{borderRadius:pData.style.border__radius+'px'}"></div>
        </li>
      </ul>
      </div>
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
  .imagep{
    overflow: auto;
  }
  .imageul{
    width: 100%;
  }
  .imageul li {
    display: none;
    background-color: #fff;
  }
  .imageul li img{
    width: 100%;
  }
  /*样式1*/
  .vImage__1 li:first-child{
    display: block;
  }
  .vImage__2 .imageul li{
    float: left;
    width: 49.5%;
    display: block;
  }
  .vImage__2 .imageul li:first-child{
    margin-right:1%;
  }
  .vImage__2 .imageul li:last-child{
    display: none;
  }
  .vImage__3 .imageul li{
    float: left;
    width: 32.66666%;
    display: block;
    margin-left:1%;
  }
  .vImage__3 .imageul li:first-child{
    margin-left:0;
  }
  .vImage__2 .imageul li img {
    height: auto !important;
  }
</style>

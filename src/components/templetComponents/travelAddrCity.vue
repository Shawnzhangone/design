<template>
  <div class="travelCity">
    <ul class="clearfloat">
      <li v-for="item in citys">{{item}}</li>
    </ul>
  </div>

</template>
<script>
  export default{
      data(){
          return{
              citys:["成都","重庆","西安","拉萨","桂林","杭州","大理","西昌","安顺","银川"]
          }
      }
  }
</script>
<style lang="scss">
  .travelCity{
    width:100%;
    background-color: #fff;
    padding:2px 0;
    img{
      width: 100%;
    }
    ul li{
        width:54px;
        margin: 4px 4px;
        float: left;
        line-height:24px;
        text-align: center;
        color: #555;
        border:1px solid #555;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
      }
    }


</style>

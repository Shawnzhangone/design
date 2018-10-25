<template>
  <div>
    <div class="travelfind clearfloat "  >
      <div class="navbox" :style="{backgroundColor:pData.style.background__color}">
        <ul ><li class="navitem" :class="{nownavitem:nowClassify == index}" v-for="(item,index) in $store.state.defaultData.travelFind[0].proData" @click="tabSwitch(index)">{{item.title}}</li></ul>
      </div>
      <div class="productItembox clearfloat">
        <div class="productitem clearfloat Productscl"  v-for="item in $store.state.defaultData.travelFind[0].proData[nowClassify].product">
          <img :src="item.img_url" class="productimg"  >
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    props:['pData'],
    data(){
      return{
        nowClassify:0,
        nowStyle: {
          color: "#fd7a42",
          borderBottom: "3px solid #fd7a42",
        },
//    :style="{nowStyle:nowClassify == index}"

      }
    },
    methods:{
      tabSwitch(index){
        this.nowClassify = index;
        console.log(this.imgdata);
      }
    },
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
<style lang="scss" >
.travelfind{
  .productitem{
    position: relative;
    border:0;
  }
  .Productscl .productimg{
    width:100%;
    margin-top:6px;
  }
  .navbox {
    width: 100%;
    height: 36px;
    line-height:35px;
  }
  .navbox ul{
    overflow-x: auto;
  }
  .navbox ul li{
    width: 60px;
    margin:6px 10px;
    float: left;
    line-height:24px;
    text-align: center;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    color: #fff;
    background-color: #52dfbf;
    padding:0;
  }
  .navbox ul .nownavitem{
    color: #1dd6ac;
    background-color: #fff;
    border:0;
  }
}
</style>

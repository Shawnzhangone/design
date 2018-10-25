<template>
  <div class="tform">
    <div class="formhead">
      <img :src="$store.state.defaultData.vForm[imgdata].imgUrl" alt="">
      <p class="formtitle">{{$store.state.defaultData.vForm[imgdata].text}}</p>
    </div>
    <div :class="pData.layout" >
      <div class="formItem">
        <span class="formItemtitle">姓名</span>
        <i class="icon iconfont icon-my_fill_light"></i>
        <input type="text" placeholder="请输入真实姓名" class="initem" :style="{backgroundColor:pData.style.background__color,borderRadius:pData.style.border__radius+'px',borderColor:pData.style.border__color}">
      </div>
      <div class="formItem">
        <span class="formItemtitle">证件号</span>
        <i class="icon iconfont icon-news"></i>
        <input type="text" placeholder="请输入真实身份证号码" class="initem" :style="{backgroundColor:pData.style.background__color,borderRadius:pData.style.border__radius+'px',borderColor:pData.style.border__color}">
      </div>
      <div class="formItem">
        <span class="formItemtitle">号码</span>
          <i class="icon iconfont icon-dianhua1"></i>
          <input type="text" placeholder="请输入真实电话号码" class="initem" :style="{backgroundColor:pData.style.background__color,borderRadius:pData.style.border__radius+'px',borderColor:pData.style.border__color}">
        </div>
      <div class="formItem">
        <span class="formItemtitle">额度</span>
        <i class="icon iconfont icon-jifen1"></i>
        <input type="text" placeholder="请输入您期望申请获得的额度" class="initem" :style="{backgroundColor:pData.style.background__color,borderRadius:pData.style.border__radius+'px',borderColor:pData.style.border__color}">
      </div>
    </div>
    <div class="btnbox">
      <button class="nextBtn" :style="{backgroundColor:pData.style.btn__color}">{{pData.btnText}}</button>
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
<style lang="scss">
  .tform{
    padding:23px 0;
  }
  .tform .formhead{
    width: 100%;
    img{
      width: 320px;
    }
    .formtitle{
      text-align: center;
      margin:18px auto 30px;
      font-size:16px;
      color:#6D6D6D;
    }
  }
  .tform .initem{
    width: 216px;
    height: 32px;
    border:1px solid #c0c0c0;
  }
  .tform .initem::-webkit-input-placeholder{
    color: #9f9f9f;
    font-size: 12px;
  }


  .formItem{
  position: relative;
  margin-bottom:20px;
  .iconfont{
    font-size:14px;
    color:#9f9f9f;
  }
}
  .vForm__1{
    .formItem{
      padding:0 36px;
    }
    .formItemtitle{
      display: none;
    }
    .initem{
      width: 246px;
      height: 32px;
      border:1px solid #c0c0c0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left:22px;
    }
    .iconfont{
      position: absolute;
      left:40px;
      top:9px
    }
  }
  .btnbox{
    width:100%;
    .nextBtn{
      width: 150px;
      height: 32px;
      background-color: #b5d661;
      font-size:12px;
      -webkit-border-radius:5px;
      -moz-border-radius:5px;
      border-radius:5px;
      margin-left:85px;
      margin-top:10px;
      color: #ffffff;
    }
  }

  .vForm__2{
    .formItem{
      padding:0 32px;
    }
    .formItemtitle{
      display: none;
    }
    .initem{
      width: 216px;
      height: 32px;
      border:1px solid #c0c0c0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left:12px;
    }
    .iconfont{
      position: relative;
      top:3px;
      font-size:17px;
      margin-right:0;
    }
  }

  .vForm__3{
    .formItem{
      padding-left:68px;
    }
    .formItemtitle{
      display: block;
      position: absolute;
      top:8px;
      left:23px;
      width:38px;
      text-align: right;
      color:#8f8f8f;
      font-size:12px;
    }
    .initem{
      width: 216px;
      height: 32px;
      border:1px solid #c0c0c0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left:12px;
    }
    .iconfont{
      display: none;
    }
  }
</style>

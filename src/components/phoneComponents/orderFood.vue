<template>
  <div class="orderfood">
    <div class="pichead" >
      <div class="picbox">
        <img src="https://mps.essocial.win/design/images/default/picdefault.svg" alt="">
      </div>
      <div class="iconcany"><i class="icon iconfont icon-canyin1"></i></div>
      <div class="btn">
        <button class="onbtn" :style="{backgroundColor:pData.style.background__color}">立即点餐</button>
      </div>
    </div>
    <div class="shop">
      <ul class="shopinfo">
        <li><i class="icon iconfont icon-dianpu1"></i> <span>店铺名称</span></li>
        <li><i class="icon iconfont icon-location "></i> <span>地址</span><i class="iconr icon iconfont icon-location"></i></li>
        <li><i class="icon iconfont icon-dianhua1 "></i> <span>电话</span><i class="iconr icon iconfont icon-dianhua1"></i></li>
        <li><i class="icon iconfont icon-shijian "></i> <span>营业时间:</span></li>
      </ul>
      <ul class="shopintr">
        <li><i class="icon iconfont icon-xiangqing"></i> <span>店铺简介:</span></li>
        <li class="notice"><i class="icon iconfont icon-tongzhi "></i> <span>店铺公告:</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    props:['pData'],
  }
</script>
<style lang="scss" scoped="" type="text/scss">
  .pichead,.pichead .picbox ,.picbox img{
    width: 100%;
  }
  .orderfood,.shop{
    background-color: #f5f6f7;
  }
  .pichead{
    background-color: #fff;
    height: 200px;
    position: relative;
    padding-bottom: 26px;
    margin-bottom: 4px;
    .picbox{
      overflow: hidden;
      border-radius: 0 0 100px 100px;
      height: 140px;
      background-color: #f6f7f8;
    }
    .iconcany{
      width: 44px;
      height: 44px;
      position: absolute;
      top: 120px;
      left:50%;
      margin-left:-20px;
      background-color: #ff6d00;
      border-radius: 50%;
      .icon-canyin1{
        font-size: 40px;
        color:#fff;
        margin:2px;
      }
    }
    .onbtn{
      margin-top:36px;
      margin-left:40%;
      border-radius: 4px;
      color:#fff;
    }
  }
  .shop{
    .shopinfo,.shopintr{
      background-color: #fff;
      li{
        color:#777;
        font-weight:500;
        padding: 10px 8px;
        border-bottom: 1px solid #f6f7f8;
        i{
          font-size:13px;
          color:#999;
        }
        .iconr{
          font-size: 15px;
          color: #333;
          float: right;
        }
      }
    }
    .shopintr{
      margin-top:4px;
      .notice{
        padding-bottom: 20px;
      }
    }
  }

</style>

<template>
  <div id="userCenter">
    <!--<img src="/design/images/static/images/userCenter.jpg" alt="">-->
    <div class="member-top">
      <div class="member-info">
        <a href="javascript:;" class="default-avatar"></a>
        <a href="javascript:;" class="to-login">点击登录</a>
      </div>
    </div>
    <!--<div v-show="alldata.pages[nowPageIndex].module[0].widget.czk" class="card">储值卡余额(元) <span class="fr leftitem"><span class="red">0.00  </span> >  </span> </div>-->
    <div class="allorder"><i class="iconfont icon-74wodedingdan"></i>我的订单 <span class="fr leftitem">查看全部订单  > </span> </div>
    <div class="orderstate clearfloat">
      <ul>
        <li v-for="item in items" class="fl itemli"><i class="iconfont" :class="item.icon"></i>{{item.title}}</li>
      </ul>
    </div>
    <div class="itembox">
      <ul>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.hy"><i class="iconfont icon-vip1" style="color:#ffe954"></i> 我的会员 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.sc"><i class="iconfont icon-shoucang" style="color:#f82a2a"></i> 我的收藏<span class="fr"> > </span>  </li>
        <li><i class="iconfont icon-share_light" style="color: #f4821d"></i> 成为分销商<span class="fr"> > </span>  </li>
        <li><i class="iconfont icon-location" style="color:#09b464"></i> 地址管理<span class="fr"> > </span>  </li>
        <!--<li v-show="alldata.pages[nowPageIndex].module[0].widget.xttz"><i class="iconfont icon-noticefill" style="color:#ffb400"></i> 系统通知<span class="fr"> > </span>  </li>-->
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.kqb"><i class="iconfont icon-qiabao" style="color:#e7241a"></i> 我的卡券包 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.jf"><i class="iconfont icon-jifen1" style="color:#1a71e7"></i> 我的积分 <span class="fr"> > </span>  </li>

      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        items:[
          {
            icon:'icon-pay',
            title:'待付款'
          },{
            icon:'icon-send',
            title:'待发货'
          },{
            icon:'icon-deliver',
            title:'待收货'
          },{
            icon:'icon-comment',
            title:'待评价'
          },{
            icon:'icon-refund',
            title:'退换货'
          },
        ],

      }
    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        seleIndex: state => state.chooseBox.selectItem
      })
    },

  }
</script>
<style lang="scss">
  #userCenter{
    width: 100%;
    .card{
      background-color: #fff;
      line-height:30px;color:#555;
      padding: 0 6px;
    }
    .leftitem{
      color:#888;
      font-size:12px;
    }
    .allorder{
      margin:9px 0 4px;
      background-color: #fff;
      padding:0 6px;
      font-size:14px;
      line-height:36px;
    }
    .iconfont{
      position:relative;
      top:2px;
    }
    .icon-74wodedingdan{
      font-size:20px;
    }
    .orderstate{
      background-color: #fff;
    }
    .itemli{
      width: 20%;
      text-align: center;
      color:#666;
      line-height:24px;
      padding:3px 0;
      .iconfont{
        display: block;
        font-size:22px;
      }
    }
    img{
      width: 100%;
    }
    .itembox{
      margin-top:9px;
      background-color: #fff;
      li{
        font-size:12px;
        color:#6d6d6d;
        line-height:36px;
        border-bottom:1px solid #eee;
        padding:0 6px;
        .iconfont{
          font-size:18px;
        }
      }
    }
  }
  .member-top { -webkit-animation:changeBg 20s infinite; -moz-animation:changeBg 20s infinite; animation:changeBg 20s infinite;background-color:#ED5564; background-image: url(/design/images/travel/member_top_bg.png); background-size: cover;  text-align: center; width: 100%; height: 10rem; position: relative; z-index: 1;}
  @-webkit-keyframes changeBg{
    0%{background-color:#ED5564;}
    10%{background-color:#FB6E52;}
    20%{background-color:#FFCE55;}
    30%{background-color:#A0D468;}
    40%{background-color:#48CFAE;}
    50%{background-color:#4FC0E8;}
    60%{background-color:#5D9CEC;}
    70%{background-color:#AC92ED;}
    80%{background-color:#EC87BF;}
    90%{background-color:#ED5564;}
  }
  @-moz-keyframes changeBg{
    0%{background-color:#ED5564;}
    10%{background-color:#FB6E52;}
    20%{background-color:#FFCE55;}
    30%{background-color:#A0D468;}
    40%{background-color:#48CFAE;}
    50%{background-color:#4FC0E8;}
    60%{background-color:#5D9CEC;}
    70%{background-color:#AC92ED;}
    80%{background-color:#EC87BF;}
    90%{background-color:#ED5564;}
  }
  @keyframes changeBg{
    0%{background-color:#ED5564;}
    10%{background-color:#FB6E52;}
    20%{background-color:#FFCE55;}
    30%{background-color:#A0D468;}
    40%{background-color:#48CFAE;}
    50%{background-color:#4FC0E8;}
    60%{background-color:#5D9CEC;}
    70%{background-color:#AC92ED;}
    80%{background-color:#EC87BF;}
    90%{background-color:#ED5564;}
  }
  .member-info{
    width: 12rem;
    height: 6rem;
    margin: -3.5rem 0 0 -6rem;
    position: absolute;
    z-index: 1;
    top: 53%;
    left: 50%;}
  .member-info .default-avatar {
    background-color: rgba(0,0,0,0.5);
    background-image: url(/design/images/default/member_w.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60%;
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    border-radius: 100%;
    display: block;
  }
  .member-info .to-login {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.5rem;
    height: 1.5rem;
    width: 4rem;
    margin: 0.25rem auto;
    display: block;
    background-color: #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
</style>

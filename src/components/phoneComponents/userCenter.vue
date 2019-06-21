<template>
  <div id="userCenter">
    <img :src="centerData.img" alt="">
    <!--<img :src="$store.state.defaultData.vUserCenter[imgdata].img" alt="">-->
    <!--<div v-show="alldata.pages[nowPageIndex].module[0].widget.czk" class="card">储值卡余额(元) <span class="fr leftitem"><span class="red">0.00  </span> >  </span> </div>-->
    <div class="allorder"><i class="iconfont icon-74wodedingdan"></i>我的订单 <span class="fr leftitem">查看全部订单  > </span> </div>
    <div class="orderstate clearfloat">
      <ul>
        <li v-for="item in centerData.items" class="fl itemli" :style="{width:Liwidth}"><i class="iconfont" :class="item.icon"></i>{{item.title}}</li>
      </ul>
    </div>
    <div class="itembox">
      <ul>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.hy"><i class="iconfont icon-vip1" style="color:#ffe954"></i> 我的会员 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.sc"><i class="iconfont icon-shoucang" style="color:#f82a2a"></i> 我的收藏<span class="fr"> > </span>  </li>
        <!--<li><i class="iconfont icon-share_light" style="color: #f4821d"></i> 成为分销<span class="fr"> > </span>  </li>-->
        <li><i class="iconfont icon-location" style="color:#09b464"></i> 地址管理<span class="fr"> > </span>  </li>
        <!--<li v-show="alldata.pages[nowPageIndex].module[0].widget.xttz"><i class="iconfont icon-noticefill" style="color:#ffb400"></i> 系统通知<span class="fr"> > </span>  </li>-->
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.kqb"><i class="iconfont icon-qiabao" style="color:#e7241a"></i> 我的卡券包 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.jf"><i class="iconfont icon-jifen1" style="color:#1a71e7"></i> 我的积分 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.pt"><i class="iconfont icon-pintuanzhuanqu" style="color:#ff0000"></i> 我的拼团 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.ms"><i class="iconfont icon-miaosha1" style="color:#ff0000"></i> 我的秒杀 <span class="fr"> > </span>  </li>
        <li v-show="alldata.pages[nowPageIndex].module[0].widget.sp"><i class="iconfont icon-video" style="color:#4F55FF"></i> 我的视频 <span class="fr"> > </span>  </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    props:['pData'],
      data(){
          return{
          }
      },
    computed:{
      centerData(){
        let ind = this.pData.ind ? this.pData.ind : 0;
        return this.vUserCenter[ind]
//        console.log(this.pData.ind,this.alldata.pages[this.nowPageIndex].module[0].ind)
      },
      Liwidth(){
          return (100/this.centerData.items.length)+'%';
      },
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        vUserCenterNow: state => state.defaultData.vUserCenterNow,
        vUserCenter: state => state.defaultData.vUserCenter,
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
</style>

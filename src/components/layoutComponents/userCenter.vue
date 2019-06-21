<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">
        选择个人中心版本;
        <ul>
          <li v-for="(item,index) in versions"><input type="radio" name="version" :value="index" v-model="choosedVersion" @change="ChangeVersion">{{item}}</li>
        </ul>
      </div>
      <div class="chooselaout_title">
        固定组件：
        <ul>
        <li v-for="item in items">{{item}}</li>
      </ul>
      </div>
      <div class="chooseprolistwidget">
        <div class="chooseishide">选择要添加到个人中心的组件：</div>
        <ul>
          <!--<li>-->
            <!--<input type="checkbox" id="salesc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.czk">-->
            <!--<label for="salesc">储值卡</label>-->
          <!--</li>-->
          <!--<li>-->
            <!--<input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.xttz">-->
            <!--<label for="cartc">系统通知</label>-->
          <!--</li>-->
          <li>
            <input type="checkbox" id="carth" v-model="alldata.pages[nowPageIndex].module[0].widget.hy">
            <label for="carth" class="userLabel">我的会员 <span class="isVip">VIP</span></label>
          </li><li>
            <input type="checkbox" id="carts" v-model="alldata.pages[nowPageIndex].module[0].widget.sc">
            <label for="carts">我的收藏</label>
          </li><li>
            <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[0].widget.kqb">
            <label for="cartc" class="userLabel">我的卡券包<span class="isVip">VIP</span></label>
          </li><li>
            <input type="checkbox" id="cartj" v-model="alldata.pages[nowPageIndex].module[0].widget.jf">
            <label for="cartj" class="userLabel">我的积分<span class="isVip">VIP</span></label>
          </li><li>
            <input type="checkbox" id="cartp" v-model="alldata.pages[nowPageIndex].module[0].widget.pt">
            <label for="cartp" class="userLabel">我的拼团<span class="isVip">VIP</span></label>
          </li><li>
            <input type="checkbox" id="cartm" v-model="alldata.pages[nowPageIndex].module[0].widget.ms">
            <label for="cartm" class="userLabel">我的秒杀<span class="isVip">VIP</span></label>
          </li><li>
            <input type="checkbox" id="cartsp" v-model="alldata.pages[nowPageIndex].module[0].widget.sp">
            <label for="cartsp" class="userLabel">我的视频<span class="isVip">VIP</span></label>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        items:[ '我的订单','地址管理','待付款','待发货','待收货','待评价','退换货'],
        versions:['电商','预约','到店'],
        choosedVersion:0
      }
    },
    methods:{
      ChangeVersion(){

        this.alldata.pages[this.nowPageIndex].module[0].ind = this.choosedVersion
        console.log(this.alldata.pages[this.nowPageIndex].module[0].ind)
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
<style>
  .chooseProList li{
    float: left;
    width: 47%;
    margin-right:8px;
  }
  .chooseprolistwidget{
    margin-top:20px;
  }
  .chooseishide{
    margin-bottom:16px;
    font-size:18px;
  }
  .chooselaout_title li {
    margin-top:12px;
  }
  .rightlayout .chooselaout_title li{
    font-size:16px;
  }
  .userLabel{
    position: relative;
  }
  .isVip{
    position: absolute;
    top:-5px;
    right: -28px;
    display: inline-block;
    height: 16px;
    width: 30px;
    font: bold 12px Sans-Serif;
    text-align: center;
    color:#fff;
    background-color: #ffd200;
  }
  input[type="radio"]{
    margin: -1px 2px 0 3px;
  }
</style>

<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
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
          <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[0].widget.hy">
          <label for="cartc">我的会员</label>
        </li><li>
          <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[0].widget.sc">
          <label for="cartc">我的收藏</label>
        </li><li>
          <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[0].widget.kqb">
          <label for="cartc">我的卡券包</label>
        </li><li>
          <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[0].widget.jf">
          <label for="cartc">我的积分</label>
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
        items:[ '我的订单','地址管理','待付款','待发货','待收货','待评价','退换货','成为分销商'],
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
</style>

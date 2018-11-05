/design<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <p>商品推荐列表</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vRecommend__1'}" @click="$store.commit('choose_layout','vRecommend__1')" ><img src="/design/images/default/prolist1.png" alt=""> </li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vRecommend__2'}" @click="$store.commit('choose_layout','vRecommend__2')"> <img src="/design/images/default/prolist2.png" alt=""></li>
      </ul>

      <p>新闻推荐列表</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vRecommend__3'}" @click="$store.commit('choose_layout','vRecommend__3')" ><img src="/design/images/default/prolist1.png" alt=""> </li>
      </ul>

      <p>商品视频推荐列表</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideoRecommend__1'}" @click="$store.commit('choose_layout','vVideoRecommend__1')" class="vipicon"><img src="/design/images/default/provideo1.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div> </li>
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vVideoRecommend__2'}" @click="$store.commit('choose_layout','vVideoRecommend__2')" class="vipicon"><img src="/design/images/default/provideo2.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div> </li>
      </ul>

     <p>秒杀推荐位</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vSecKillRe'}" @click="$store.commit('choose_layout','vSecKillRe')" class="vipicon"><img src="/design/images/default/provideo1.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div> </li>
      </ul>

    <p>拼团推荐位</p>
      <ul class="chooselayout chooseProList clearfloat" >
        <li :class="{'nowChoose': alldata.pages[nowPageIndex].module[seleIndex].layout == 'vCollageRe'}" @click="$store.commit('choose_layout','vCollageRe')" class="vipicon"><img src="/design/images/default/provideo1.png" alt=""><div class="ribbon-vipicon-green" ><div class="ribbon-green">VIP</div></div> </li>
      </ul>

        <div class="chooseprolistwidget" v-if="alldata.pages[nowPageIndex].module[seleIndex].layout != 'vRecommend__3'">
          <div class="chooseishide">选择要添加的组件：</div>
          <ul>
            <li>
              <input type="checkbox" id="salesc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.sa">
              <label for="salesc">销量</label>
            </li>
            <li>
              <input type="checkbox" id="stockc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.st">
              <label for="stockc">库存</label>
            </li>
            <li>
              <input type="checkbox" id="opricec" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.op">
              <label for="opricec">虚拟价格</label>
            </li>
            <li>
              <input type="checkbox" id="cartc" v-model="alldata.pages[nowPageIndex].module[seleIndex].widget.ca">
              <label for="cartc">购物车按钮</label>
            </li>
          </ul>
        </div>
      </div>
    <div v-if="alldata.pages[nowPageIndex].module[seleIndex].layout != 'vRecommend__3'">
      <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
        <ul class="set">
          <!--<li>图片高度：<input type="number" class="number" min="1" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.height"></li>-->
          <li>上下间距：<input type="number" class="number" min="0" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.margin__bottom"></li>
        </ul>
      </div>
    </div>
    <div class="renews" v-if="alldata.pages[nowPageIndex].module[seleIndex].layout == 'vRecommend__3'">
      <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
        <div class="setcolor">字体颜色：<input type="color" name="color" id="color" value="#2D9900" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.color"></div>
        <div class="setfz">字体大小：<input type="number" class="number" step="1" min="12" max="16" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.font__size"/></div>
        <div class="seth">文字行高：<input type="number" class="number" step="1" min="12" max="28" v-model="alldata.pages[nowPageIndex].module[seleIndex].style.line__height"/></div>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {

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
  .rightlayout>div{
    margin-bottom:8px;
  }
  .rightlayout .imagela li{
    float: left;
    width: 46%;
    margin-right: 4%;
    cursor: pointer;
    margin-bottom:15px;
  }
</style>

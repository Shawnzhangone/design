<template>
  <div class="leftbox-widget">
    <div class="rightlayout page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">卡券中心无布局</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <div class="chooselaout_title">卡券中心无样式</div>
    </div>
  </div>

</template>

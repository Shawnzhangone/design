<template>
  <div class="leftbox-widget">
    <div class="page-widget" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">大转盘组件无布局</div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
    </div>
  </div>

</template>

<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
  import home from './pages/home'
  export default {
    name: 'app',
    data(){
      return{
      }
    },
    components:{
    'home':home,
    }
  }
</script>

<style type="text/css">
  #app {

  }
  body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;}
  body{background:#fff;color:#333;font-size:12px;font-family:"SimSun","宋体","Arial Narrow";  }
  html,body{height: 100%;}

  ul,ol{list-style-type:none;}
  select,input,img,select{vertical-align:middle;}
  button,input{border:none;}
  a,a:hover,a:active,a:focus{text-decoration:none;}
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1;}
  .clear{clear: both;}
  .fl{float: left;}
  .fr{float: right;}
  .red{color:#fd6363;}
  .org{color:#ff6d00;}
  .nownavitem{
    color: #fd7a42;
    border-bottom: 3px solid #fd7a42;
  }
  .active {
    background-color: #fd7a42;
    color:#fff !important;
  }
  .chooselayout li {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:1px solid #ccc;
  }
  .chooselayout .nowChoose{
    border:1px solid #fd7a42;
  }
  #color{
    background-color: #fff;
  }
  .rightlayout{
    font-size:16px;
    color:#6d6d6d;
    margin:20px 0 20px 12px ;
    overflow: hidden;
  }
  .rightlayout .chooselaout_title,#right-box .chooselaout_title{
    margin-bottom:18px;
    font-size:20px;
    color:#6d6d6d;
  }
  .number{
    width:36px;
  }
  .rightlayout li {
    margin-bottom:10px;
  }
  .rightlayout li img {
    width: 100%;
  }
  .worning{
    color:red;
    font-size:12px;
    margin-top:20px;
  }
  .instruction{
    color:#888;
    margin-bottom:10px;
  }
  .cp{
    cursor: pointer;
  }
  #app{
    height: 100%;
    position: relative;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .Vip{
    height: 16px;
    width: 30px;
    font: bold 12px Sans-Serif;
    text-align: center;
    color:#fff;
    background-color: #ffd200;
  }
  .vipicon {
    position: relative;
    z-index: 90;
  }
  .vipicon .ribbon-vipicon-green {
    width: 50px;
    height: 52px;
    overflow: hidden;
    position: absolute;
    top: -3px;
    right: -2px;
  }
  .vipicon .ribbon-green {
    font: bold 13px Sans-Serif;
    text-align: center;
    text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    position: relative;
    /* padding: 7px 0; */
    left: 14px;
    top: 2px;
    width: 51px;
    background-color: #ffd200;
    background-image: -o-linear-gradient(top, #fed200, #fcd200);
    color: #fff;
    -webkit-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  }
  .vipicon .ribbon-green:before, .ribbon-green:after {
    content: "";
    border-top: 3px solid #ab942a;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    position: absolute;
    bottom: -3px;
  }
  .vipicon .ribbon-green:before {
    left: 0;
  }
  .vipicon .ribbon-green:after {
    right: 0;
  }
</style>

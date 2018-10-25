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
    margin:20px 15px ;
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
</style>

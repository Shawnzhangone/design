<!--//对应制作页面模板模块-->
<template>
  <div id="right-box" >
    <div class="rightbox-header">
      <ul class="header-ul">
        <li @click="showPage()" class="page-button" :class="{'active':!$store.state.chooseBox.isShow}">
          我的模板
        </li>
        <li @click="showWidget()" class="widget-button" :class="{'active':$store.state.chooseBox.isShow}">
          模板库
        </li>
      </ul>
    </div>
    <div class="rightbox-con" v-show="!$store.state.chooseBox.isShow">
      <div class="module">
        <ul class="mpics">
          <li v-for="item in $store.state.rightTemplet.myTemData" class="mpic" >
            <img :src="item.image" alt="" draggable="true" @dragstart="dragStart($event)"  @drag="Drag($event)" @dragend="DragEnd($event)" :data-text="item.type">
            <p class="mtitle">{{item.title}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightbox-con" v-show="$store.state.chooseBox.isShow">
      <ul class="nav clearfloat">
        <li class="nav-item" v-for="(item,index) in $store.state.rightTemplet.navItem" @click="changeNav(index)" :class="{nownav:nowmodule == index}">{{item}}</li>
      </ul>
      <div class="module">
        <ul class="mpics">
          <li v-for="item in $store.state.rightTemplet.module[nowmodule].item" class="mpic" >
            <img :src="item.image" alt="" draggable="true" @dragstart="dragStart($event)"  @drag="Drag($event)" @dragend="DragEnd($event)" :data-text="item.type">
            <p class="mtitle">{{item.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>


  export default {
    name: 'edit-leftbox',
    data(){
      return {
        nowmodule:0,

      }
    },
    methods:{
      showPage:function(){ //选中我的模板
        this.$store.state.chooseBox.isShow = false;
      },
      showWidget(){ //选中模板库
        this.$store.state.chooseBox.isShow = true;
      },
      changeNav(idx){
              this.nowmodule = idx
      },
      dragStart(event){ //拖拽开始时在被拖拽元素上触发此事件,监听器需要设置拖拽所需数据
        console.log(event);
        event.target.style.opacity = .5;
        var dataText = $(event.target).attr('data-text');
        //firefox 必须添加
        console.log(dataText);
        event.dataTransfer.setData("text",dataText); //拖拽携带数据
        event.stopPropagation();

      },
      Drag(event){ //拖拽期间在被拖拽元素上连续触发

      },
      DragEnd(event){ //鼠标在拖放目标上释放时,在拖拽元素上触发.
        event.target.style.opacity = 1;
      },
    },

    components:{

    }



  }
</script>
<style lang="scss" scoped="" type="text/css">
  $bordercolor:#d4d2d3;
  $selectedcolor:#fd7a42;

  #right-box{
    background-color: #f4f4f4;
    width:360px;
    border-left:1px solid $bordercolor;
    height:100%;
    z-index: 9999;
    position:absolute;
    right:0;
    top:0;
  .rightbox-header{
    width:100%;
    height:50px;
    background-color: #d3d1d2;
  .header-ul {li{
                font-size:18px;
                float: left;
                color:#515567;
                margin-left:15%;
                margin-top:11px;
                text-align: center;
                line-height:28px;
                border-radius:3px;
                width:96px;
              }
  }
  }
  .leftbox-widget{
    height:680px;
  }

  .rightbox-con{
    width: 100%;
    .nav{
      width: 100%;
      .nav-item{
        float: left;
        margin:6px;
        width: 56px;
        height: 26px;
        line-height:26px;
        text-align: center;
        font-size:12px;
        border:1px solid #d9d7d7;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
      .nownav{
        border-color: $selectedcolor;
        color:$selectedcolor;
      }
    }
  .module{
    width:100%;
    margin-top:10px;
    height: 770px;
    overflow-x: hidden;
    overflow-y: auto;
  .mpics{
    width: 100%;}
    .mpic{
      width: 44%;
      padding:6px 10px;
      position: relative;
      float: left;
      img{
        width:100%;
      }
      .mtitle{
        position: absolute;
        bottom:6px;
        left:10px;
        right:10px;
        text-align: center;
        background: rgba(22,22,22,.6);
        line-height:18px;
        color:#fff;
      }
    }
  }
  }

  }
</style>

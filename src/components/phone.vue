<!--//对应制作页面中间手机模块-->
<template>
  <div id="phone">
    <div class="content">
      <div class="phone-box fl">
        <div id="phonepages">
          <!--//模拟手机页面小程序头部标题-->
          <div id="pagetitle" @click="chooseBox(0,'vPageTitle')" :class="{nowbox:$store.state.chooseBox.activeName == 0}" :style="{backgroundColor:stylePageColorPicker}">
            <div class="title" :style="{color:alldata.top_nav.navigationBarTextStyle}">{{alldata.pages[nowPageIndex].navigationBarTitleText || alldata.pages[nowPageIndex].name}}</div>
            <!--$store.state.mine.nowData.name-->
           </div>
          <div id="phonecontent">
            <!--模拟手机页面小程序组件模块-->
            <containment></containment>
            <v-dialog v-show="$store.state.chooseBox.delComShowDialog" :dialog-option="dialogOption" ref="dialog"></v-dialog>
          </div>
          <!--模拟手机页面小程序底部导航-->
          <div id="phone-navbottom" @click="chooseBox(1,'vNavBottom')" :class="{nowbox:$store.state.chooseBox.activeName == 1}"  :style="{backgroundColor:styleBColorPicker}">
            <ul>
              <li class="navbottom" v-for="(item,index) in alldata.bottom_nav.list" :style="{ width:navBottomWidth,color:alldata.bottom_nav.color}" ><img :src="item.iconPath" alt="">{{item.text}}</li>
            </ul>
          </div>
        </div>
      </div>
      <!--对应模拟手机右测导航-->
      <div class="right-btn fr">
        <ul>
          <li v-show="$store.state.mine.temStatus" @click="backStep()">撤销模板</li>
          <li @click="templet()" :class="{nowStyle:showTemplet}"><i class="iconfont icon-lifangtilitiduomiantifangkuai2"></i>模板</li>
          <!--<li @click="module()" :class="{nowStyle:showModule}"><i class="iconfont icon-msnui-module"></i>模块</li>-->
          <li @click="$store.state.mine.showStylePicker = !$store.state.mine.showStylePicker;" class="tbstyle" :class="{nowStyle:$store.state.mine.showStylePicker}"><i class="iconfont icon-beijingyanse"></i> 风格</li>
          <Sketch v-show="$store.state.mine.showStylePicker"  v-model="colors" ></Sketch >
        </ul>
      </div>
    </div>
    <!--选中底部导航栏图标-->
    <iconchoose v-show="chooseIconbox"></iconchoose>

  </div>
</template>
<script>
  import containment from './phoneComponents/containment'
  import DialogM from './DialogM'
  import {mapState,mapActions} from 'vuex'
  import { Sketch  } from 'vue-color'
  import iconchoose from './dialog/iconChoose'
  export default {
      name:'phone',
      data(){
           return{
             selectItem:0,
             showStylePicker:false,
              dialogOption: {
                title: '',
                text: '你确定要删除该组件吗?',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
              },
             colors: {
               hex: '',
               hsl: {
                 h: '',
                 s: '',
                 l: '',
                 a:''
               },
               hsv: {
                 h: '',
                 s: '',
                 v: '',
                 a: ''
               },
               rgba: {
                 r: '',
                 g: '',
                 b: '',
                 a: ''
               },
               a: 1
             }
           }
      },
    components :{
      containment,
      'v-dialog':DialogM,
      Sketch,
      iconchoose
    },
    methods:{
      chooseBox(index,name){ //选中组件
        this.$store.state.mine.showModule = false; //关闭模板
        this.$store.state.mine.showTemplet = false; //关闭模块
        this.$store.state.mine.showStylePicker = false; //关闭颜色板
        this.$store.state.chooseBox.chooseBoxName = name;//选中组件名
        this.$store.commit('choose_box',index);//choose_box_store里选中choose_box方法
      },
      templet(){ //模块
        this.$store.state.mine.showModule = false;
        this.$store.state.mine.showTemplet = !this.$store.state.mine.showTemplet;
      },
      module(){ //模板
        this.$store.state.mine.showTemplet = false;
        this.$store.state.mine.showModule = !this.$store.state.mine.showModule;
      },
      backStep(){ //上一步，只写了返回上一步
        this.$store.state.mine.getMineBaseMsg.alldata = JSON.parse(JSON.stringify(this.$store.state.mine.oalldata));
        this.$store.state.mine.temStatus = false;//隐藏撤销模板
      },
      colorPick(){
          console.log("111");
      }
    },
    computed:{
      navBottomWidth(){
        return (100 /this.alldata.bottom_nav.list.length)+'%'
      },
      styleBColorPicker(){ //选择颜色
          if(this.$store.state.mine.showStylePicker){
            this.alldata.bottom_nav.backgroundColor = this.colors.hex;
          }return (this.alldata.bottom_nav.backgroundColor)
      },
      stylePageColorPicker(){
        if(this.$store.state.mine.showStylePicker){
          this.alldata.top_nav.navigationBarBackgroundColor = this.colors.hex;
        }return (this.alldata.top_nav.navigationBarBackgroundColor)
      },
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        chooseIconbox: state => state.mine.chooseIconbox,
        showTemplet: state => state.mine.showTemplet,
        showModule: state => state.mine.showModule
      })
    },

  }
</script>
<style lang="scss" scoped="" type="text/scss">
  #phone{
   width: calc( 100% - 642px);
    height:calc(100% - 51px);
    float: left;
    .content{
      width: 440px;
      height:calc(100% - 131px);
      margin: 7% auto 0;
      .phone-box{
        background: url(/design/images/default/phone3.png);
        width: 320px;
        height: 581px;
        padding: 36px 7px 30px;
      }
      .right-btn{
        width: 50px;
        margin-top:120px;
        input{
          width:38px;
          margin:auto;
        }

        ul li{
          margin-bottom:50px;
          font-size:20px;
          color:#515567;
          cursor: pointer;
          width:50px;
          .iconfont{
            display: block;
            width:40px;
            height: 40px;
            font-size:36px;
            margin:auto;
          }
        }
      .nowStyle{
        color:#ff6d00;
      }

      }
    }
  }
  .right-btn{
    position: relative;
    .vc-sketch {
      position: absolute;
      top:0;
      left:54px;
    }
  }
  #phonepages{
    height: 100%;
    position: relative;
    overflow: hidden;
    .nowbox{
      border:1px dashed #fd7a42;
    }
  }
  #pagetitle{
    text-align: center;
    font-size:14px;
    background-color: #000;
    color:#fff;
    width: 100%;
    height: 30px;
    line-height:28px;
    .title{
      padding:0 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  #phonecontent{
    height: 505px;
    overflow-x: hidden;
    overflow-y: auto;
    transform:translate(0,0);
  }
  #phone-navbottom{
    height: 43px;
    background-color: #fff;
    border-bottom:1px solid #f0f0f0;
  }
  .scroll_bar_container{
    height: 100%;
    position: absolute;
    right: 0;
    background: transparent;
    z-index: 1000;
  }
  .navbottom{
    float: left;
    height: 40px;
    font-size: 13px;
    text-align: center;
  }
  .nowpage{
    color:#fd7a42;
  }
  .navbottom img {
    width: 22px;
    height: 22px;
    display: block;
    margin:2px auto;
  }
</style>

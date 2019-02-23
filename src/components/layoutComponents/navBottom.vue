<template>
  <div class="leftbox-widget">
    <div class="page-widget rightlayout" v-show="!$store.state.chooseBox.isShow">
      <div class="chooselaout_title">选择布局：</div>
      <!--<ul class="chooselayout choosenavb">-->
        <!--<li class="cp" @click="$store.commit('choose_layout','type_navb1')"> 底部</li>-->
        <!--<li class="cp" @click="$store.commit('choose_layout','type_navb2')"> 顶部</li>-->
      <!--</ul>-->
      <button class="addnavbtn cp" @click="addNavBottomItem()"><i class="iconfont"></i>+添加导航</button>
      <div class="choosenavitem">
        <ul>
          <li class="itembox" v-for="(item,index) in alldata.bottom_nav.list">
            <div class="title">{{item.text}} <i class="iconfont icon-lajixiang cp fr" @click="delNavBottomItem(index)"></i> <span class="fr" id="upnav" @click="upnav(index)">上移</span> </div>
            <ul class="cfuntion">
              <li>名称：<input type="text" v-model="item.text"></li>
              <li  class="cp choosep" ><span class="choosePic" @click="changeIcon(index)"><span class="tit">默认图标:</span><img
                :src="item.iconPath" alt=""><span class="chang"> 更换</span> </span> <span class="choosePic1" @click="changeSeIcon(index)"><span class="tit">选中图标:</span><img
                :src="item.selectedIconPath" alt=""><span class="chang"> 更换</span> </span></li>  <!--v-show="alldata.bottom_nav.layout == 'type_navb1'"-->
              <li>页面链接至：
                <select v-model="item.pagePath" @change="selectePage($event,item.pagePath)">
                  <option v-for="(page,ind) in alldata.pages" v-bind:value="'pages/page_'+page.page_id+'/page_'+page.page_id">{{page.name}}</option>
                </select>
              </li>
            </ul>
          </li>
        </ul>
        <div class="iconPicker">
          <ul>
            <li v-for="item in icons"></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rightlayout widget-widget" v-show="$store.state.chooseBox.isShow">
      <ul class="set">
        <li>背景颜色：<input type="color" name="color" id="color" v-model="alldata.bottom_nav.backgroundColor"></li>
        <li>文字颜色：<input type="color" name="color" id="color" v-model="alldata.bottom_nav.color"></li>
        <li>选中颜色：<input type="color" name="color" id="color" v-model="alldata.bottom_nav.selectedColor"></li>
      </ul>
    </div>

  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import iconchoose from '../dialog/iconChoose'
  export default {
      data(){
        return{
            icons:{},
          showIconPicker:false,
            addItem:{"text":"新添加","pagePath":"","iconPath":"","selectedIconPath":""},
            items:[{text:'A',value:'a'},{text:'B',value:'b'},{text:'C',value:'c'}],
            selected:''
        }
      },
    methods:{
      addNavBottomItem(){
        let addnavitem = Object.assign({}, JSON.parse(JSON.stringify(this.addItem)));
          if(this.alldata.bottom_nav.list.length == 5){
              alert("导航栏最多5个！")
          }else{
            this.alldata.bottom_nav.list.push(addnavitem);
            console.log(this.alldata.bottom_nav.list);
          }
      },
      delNavBottomItem(index){
        if(this.alldata.bottom_nav.list.length == 2){
          alert("导航栏至少2个！")
        }else {
          this.alldata.bottom_nav.list.splice(index, 1);
        }
      },
      upnav(index){ //上移底部nav页面
        if(index > 0){
          var index2 = index - 1;
          var tem = this.alldata.bottom_nav.list[index];
          this.alldata.bottom_nav.list.splice(index, 1);
          this.alldata.bottom_nav.list.splice(index2, 0,tem);
        }
      },
      selectePage(event,p){
          console.log("1",event.target.value,p)
      },
      changeIcon(inx){
        this.$store.state.mine.chooseIcon = '1';
          this.$store.state.mine.chooseIconIndex = inx;
          this.$store.state.mine.chooseIconbox = true;
          this.$store.state.mine.nowIconin = '9999';
          console.log(this.$store.state.mine.nowIconin)
      },
      changeSeIcon(inx){
        this.$store.state.mine.chooseIcon = '2';
        this.$store.state.mine.chooseIconIndex = inx;
        this.$store.state.mine.chooseIconbox = true;
      }
    },
    components:{
      iconchoose
    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex,
        seleIndex: state => state.chooseBox.selectItem,
        chooseIconIndex: state => state.mine.chooseIconIndex,
        chooseIcon: state => state.mine.chooseIcon,
        chooseIconbox: state => state.mine.chooseIconbox,
        nowIconin: state => state.mine.nowIconin,
      })
    }
  }
</script>
<style>
  .choosenavb li {
    float: left;
    width: 60px;
    margin-right:20px;
    margin-left:50px;
    background-color: #fff;
    text-align: center;
    height: 26px;
    line-height:26px;
    border:1px solid #ccc;
    -webkit-box-shadow: 1px 1px 2px 2px #c0c0c0;
    -moz-box-shadow: 1px 1px 2px 2px #c0c0c0;
    box-shadow: 1px 1px 2px 2px #c0c0c0;
  }
  .addnavbtn{
    width: 180px;
    height: 30px;
    line-height:22px;
    background-color: #fd7a42;
    color:#fff;
    margin: -5px 55px 10px;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;

  }
  .choosenavitem{
    height: 684px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 290px;
  }
  .choosenavitem .itembox {
    border:1px solid #ccc;
    -webkit-box-shadow: 1px 1px 1px 1px #c0c0c0;
    -moz-box-shadow: 1px 1px 1px 1px #c0c0c0;
    box-shadow: 1px 1px 1px 1px #c0c0c0;
    background-color: #fff;
    border-radius:5px;
  }
  .choosenavitem .title{
    height: 30px;
    line-height: 30px;
    border-bottom:1px solid #ccc;
    padding-left:10px;
  }
  .choosenavitem .title .icon-lajixiang{
    margin-right:8px;
  }
  .choosenavitem .cfuntion{
    padding-left:10px;
  }
  .choosenavitem .cfuntion li {
    margin-top:5px;
  }
  .choosenavitem .cfuntion input,select{
    border:1px solid #c0c0c0;
    height: 22px;
    -webkit-border-radius:3px;
    -moz-border-radius:3px;
    border-radius:3px;
    color:#333;
  }
  select{
    padding:1px;
    width: 135px;
    height: 26px;
  }
  .cfuntion .choosep{
    height:40px;
  }
  .cfuntion .cp span{
    display: inline-block;
  }
  .choosePic1{
    margin-left:18px;
  }
  .cfuntion .tit{
    width: 40px;
  }
  .cfuntion .choosePic img,.cfuntion .choosePic1 img{
    width: 28px;
    height: 28px;
    position: relative;
    top:-12px;
  }

  .chang{
    position: relative;
    top:-9px;
    right:-8px;
  }
  #upnav{
    font-size:14px;
    padding:0 6px;
    cursor: pointer;
    margin: auto 5px;
  }
</style>

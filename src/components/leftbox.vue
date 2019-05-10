<template>
  <div id="edit-leftbox">
    <div class="leftbox-header">
      <ul class="header-ul">
        <li @click="showPage()" class="page-button" :class="{'active':!isShow}">
          <i class="icon iconfont icon-guanli"></i>
          页面管理
        </li>
        <li @click="showWidget()" class="widget-button" :class="{'active':isShow}">
          <i class="icon iconfont icon-guanlizhongxin"></i>
          组件库
        </li>
      </ul>
    </div>
    <div class="leftbox-widget">
      <div class="page-widget" v-show="!isShow">
        <ul>
          <li v-for="(item,index) in alldata.pages" class="page-list" :class="{nowpage: index == selectItem }"
              @click="nowPage(index),$store.commit('nowPageData',index)">
            <ul class="widget-bar clearfloat" v-if="index != nowIndex">
              <li class="title cpname">{{item.name}}</li>
              <li @click.stop="delPage(index,item.page_id)"><i class="icon iconfont icon-lajixiang"></i></li>
              <li><i class="icon iconfont icon-edit-1-copy" @click.stop="changeName(index)"></i></li>
            </ul>
            <div class="changeNameBox" v-else><input type="text" v-model="nameValue" maxlength="20">
              <button @click="confirmChangeName(index)">确定</button>
              <button @click="cancelChangeName">取消</button>
            </div>
          </li>
        </ul>
        <div class="leftbox-bottom">
          <button @click="showNewPage">添加页面</button>
        </div>
        <transition name="fade">
          <div class="newpage" v-show="isShowNewPage">
            <span>页面名称:</span><input type="text" v-model="value" @blur="focusState =  false" v-focus="focusState" maxlength="20">
            <div class="btn">
              <button @click="fadeNewPage">取消</button>
              <button class="confirm" @click="confirmNewPage">确定</button>
            </div>
          </div>
        </transition>
      </div>
      <div class="widget-widget" v-show="isShow">
        <ul>
          <li class="widget-box" :data-type="item.type" v-for="item in arrWidget" >
            <div class="iconfont icon dragItem vipicon" :class="item.icon" draggable="true" @dragstart="dragStart($event)"
                 @drag="Drag($event)" @dragend="DragEnd($event)" :data-text="item.type">
                <div class="ribbon-vipicon-green" v-if="item.isVip"><div class="ribbon-green">VIP</div></div>
            </div>
            <span class="title">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <v-dialog v-show="showDialog" :dialog-option="dialogOption" ref="dialog"></v-dialog>
  </div>
</template>
<script>

  import {mapGetters} from 'vuex';
  import {mapState} from 'vuex'
  import {mapActions} from 'vuex'
  import DialogM from './DialogM'
  export default {
    name: 'edit-leftbox',
    data(){

      return {
        nowIndex: 'a',//a显示正常li面板，index修改名称input
        isShow: false,
        isShowNewPage: false,//添加新页面
        selectItem: 0,
        focusState: false, //焦点
        value: '',
        nameValue: '',
        arrtt: [],
        arrPages: {
          page_id: '',
          navigationBarTitleText: '',
          name: '',
          module: []
        },
        showDialog: false,
        dialogOption: {
          title: '',
          text: '你确定要删除该页面吗?',
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        },
        arrWidget: [
          {
            type: 'vText',
            icon: 'icon-wenben1',
            title: '文本',
          },
          {
            type: 'vImage',
            icon: 'icon-pic',
            title: '图片',
          },
          {
            type: 'vImgTextList',
            icon: 'icon-tuwenliebiao',
            title: '图文集'
          },
          {
            type: 'vSlider',
            icon: 'icon-lunboxiaoguo',
            title: '轮播图'
          }, {
            type: 'vLine',
            icon: 'icon-fengexian',
            title: '分割线'
          },
          {
            type: 'vSearch',
            icon: 'icon-searchlist',
            title: '搜索'
          }, {
            type: 'vQuickNav',
            icon: 'icon-daohang',
            title: '快速导航'
          },
          {
            type: 'vRecommend',
            icon: 'icon-liebiao',
            title: '推荐位'
          },
          {
            type: 'vProductList',
            icon: 'icon-3dtouchshangpinliebiao',
            title: '商品列表'
          }, {
            type: 'vNewsList',
            icon: 'icon-liebiao601',
            title: '文章列表'
          },
          {
            type: 'vClassify',
            icon: 'icon-fenlei1',
            title: '分类列表'
          },
          {
            type: 'vMulticlass',
            icon: 'icon-shangpinliebiao',
            title: '多级分类',
            isVip:true
          },
          {
            type: 'vCart',
            icon: 'icon-gouwuche02',
            title: '购物车'
          },
          {
            type: 'vUserCenter',
            icon: 'icon-gerenzhongxinkaobei',
            title: '个人中心'
          },{
            type: 'vDistributorCenter',
            icon: 'icon-gerenzhongxinkaobei',
            title: '分销系统中心',
            isVip:true
          },
//          {
//            type: 'vOrderFood',
//            icon: 'icon-canyin',
//            title: '点餐',
//            isVip:true
//          },
          {
            type: 'vMap',
            icon: 'icon-ditu',
            title: '地图'
          },
          {
            type: 'vVideo',
            icon: 'icon-video',
            title: '视频',
            isVip:true
          }, {
            type: 'vVideoList',
            icon: 'icon-shipinyuan',
            title: '视频列表',
            isVip:true
          },
          {
            type: 'vForm',
            icon: 'icon-wodedingdan',
            title: '表单组件'
          },
          {
            type: 'vCoupon',
            icon: 'icon-lingquanzhongxin',
            title: '卡券中心',
            isVip:true
          },{
            type: 'vSecKill',
            icon: 'icon-miaosha',
            title: '秒杀',
            isVip:true
          },{
            type: 'vCollage',
            icon: 'icon-tuangou',
            title: '拼团',
            isVip:true
          },{
            type: 'vTurntable',
            icon: 'icon-dazhuanpan',
            title: '大转盘',
            isVip:true
          },{
            type: 'vGoldenEgg',
            icon: 'icon-zhengshuidan',
            title: '砸金蛋',
            isVip:true
          },
        ],
      }
    },
    methods: {
      dragStart(event){ //拖拽开始时在被拖拽元素上触发此事件,监听器需要设置拖拽所需数据
        event.target.style.opacity = .5;
        var dataText = $(event.target).attr('data-text');
        //firefox 必须添加
//        console.log(dataText);
        event.dataTransfer.setData("text", dataText);
        event.stopPropagation();

      },
      Drag(event){ //拖拽期间在被拖拽元素上连续触发

      },
      DragEnd(event){ //鼠标在拖放目标上释放时,在拖拽元素上触发.
        event.target.style.opacity = 1;
      },
      showPage: function () {
        this.isShow = false;
        this.getDistributorInfo();
      },
      showWidget(){
        this.isShow = true;
      },
      nowPage(index){
        this.selectItem = index;
        this.$store.state.chooseBox.chooseBoxName = '';
      },
      changeName(index){
        this.nowIndex = index
      },
      confirmChangeName(index){
          if(this.nameValue != ''){
            this.alldata.pages[index].name = this.nameValue;
            this.nowIndex = 'a';
//            this.nameValue = '';
          }else{
            alert('请输入有效名称')
          }
      },
      cancelChangeName(){
        this.nowIndex = 'a';
      },
      delPage(index, page_id){
//        this.arrPages = this.arrPages.filter(o => o.name != item.name) //过滤删除
//        var i = this.arrPages.indexOf(item);
        this.showDialog = true;
        this.$refs.dialog.confirm().then(() => {
          this.showDialog = false;
          if (this.alldata.pages.length <= 2) {
            alert("请手下留情，还是留两个页面吧！")
          } else {

            console.log(page_id);
            if(this.$store.state.mine.program_module){
                alert("请先保存创建属于自己的小程序！")
            }else{
              this.alldata.pages.splice(index, 1);
              this.delpage(page_id);
              this.selectItem = 0;
            }
          }
        }).catch(() => {
          this.showDialog = false;
        })
        //向后台发数据
      },
      showNewPage(){
        this.isShowNewPage = true;
        this.focusState = true;
      },
      fadeNewPage(){
        this.isShowNewPage = false;
        this.value = '';
      },
      confirmNewPage(){ //添加新页面
        if(this.$store.state.mine.program_module){//模板小程序
          alert("请先保存创建属于自己的小程序！")
        }else {
          if (this.value != '') {
            this.arrPages.name = this.value;
            this.arrPages.navigationBarTitleText = this.value;
            let pagesArray = Object.assign({}, JSON.parse(JSON.stringify(this.arrPages)));
            this.addpage(pagesArray);
            this.isShowNewPage = false;
            this.value = '';
          }else{
              alert('请输入有效名称')
          }
        }
      },
      ...mapActions(['addpage', 'delpage', 'getDistributorInfo'])
    },
    created(){ //获取权限和保存的数据
        this.$axios.post(this.$store.state.mine.BASE_URL+'/home/page/getPerssion', {credentials: true}).then((response) => {
            let rdata = response.data;
            if (rdata.status === 1) {
                if(rdata.program_id == 0){
                    this.$store.state.mine.program_module = rdata.case_id; //行业模板进来id
                    this.$store.dispatch('getModuleData',rdata.case_id);
                }else{
//                  this.$store.state.mine.program_id = rdata.program_id;
                  this.$store.state.mine.program_name = rdata.program_name;
                  this.$store.state.mine.mobile = rdata.mobile;
//                  this.$store.dispatch('getMineBaseApi', rdata.program_id);
                  this.$store.dispatch('getMineBaseApi');
                }
            }else { //去登陆
              alert(response.data.message)
              window.location.href = '/home/login/'
              return;
            }
        });
      this.$axios.post(this.$store.state.mine.BASE_URL+'/home/user/getVersion', {credentials: true}).then((res)=>{
          var res = res.data.data;
          if(res.version == 'advanced'||res.version == 'flagship' ){
            this.$store.state.mine.isVIP = true;
          }else{
            this.$store.state.mine.isVIP = false;
          }
      })
    },
    directives: {
      focus: {
        update: function (el, {value}) {
          value && el.focus()
        }
      }
    },
    components: {
      'v-dialog': DialogM,
    },
    computed: {
      ...mapGetters([
        'getMineBaseMsg',
      ]),
      ...mapState({
        alldata: state => state.mine.getMineBaseMsg.alldata,
      })
    }

  }

</script>
<style lang="scss" scoped="" type="text/scss">
  $bordercolor:#d4d2d3;
  $selectedcolor:#fd7a42  ;
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .active {
    background-color: $selectedcolor;
  }

  .icon-icon6, .icon-shanchu {
    color: #999;
  }

  #edit-leftbox {
    float: left;
    background-color: #f4f4f4;
    width: 320px;
    border-right: 1px solid $bordercolor;
    height: calc(100% - 1px);
    position: relative;

  .leftbox-header {
    width: 100%;
    height: 50px;
    background-color: #d3d1d2;

  .header-ul {

  li {
    font-size: 18px;
    float: left;
    color: #515567;
    margin-left: 10%;
    margin-top: 11px;
    text-align: center;
    line-height: 28px;
    border-radius: 3px;
    width: 115px;
    cursor: pointer;
  }

  .widget-button {
    margin-right: 6%;
    margin-left: 0;
    float: right;
  }

  }
  }

  .leftbox-widget {
    width: 100%;

  .leftbox-bottom {
    position: absolute;
    bottom: 60px;
    left: 50%;
    margin-left: -58px;

  button {
    font-size: 18px;
    font-weight: 500;
    height: 42px;
    width: 116px;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #d9d7d7;
  }

  }
  .newpage {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 220px;
    background-color: #fff;
    padding: 40px 35px;
    height: 90px;
    font-size: 16px;
    margin-left: 15px;

  input {
    border: 1px solid #999;
    width: 123px;
    height: 18px;
  }

  .btn button {
    height: 28px;
    line-height: 28px;
    width: 70px;
    margin-top: 20px;
    text-align: center;
    background-color: $selectedcolor;
  }

  .btn .confirm {
    margin-left: 50px;
  }

  }
  ul {
    width: 100%;
    height: 640px;
    overflow-x: hidden;
    overflow-y: auto;

  .page-list {
    width: 99%;
    line-height: 40px;
    border-bottom: 1px solid $bordercolor;
    background-color: #e9e9e9;

  .widget-bar {
    width: 100%;
    height: 100%;

  li {
    font-size: 20px;
    float: right;
    text-align: left;
    width: 18px;
    margin-right: 15px;
    font-size: 16px;
    border: 0;
    cursor: pointer;
  }

  li.title {
    float: left;
    width: 196px;
    margin-left: 10%;
    margin-right:0;
  }
    li.cpname{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  }
  .nowpage {
    background-color: #fff;
    border: 1px solid $selectedcolor;
  }

  }
  .widget-widget {
    width: 100%;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

  ul {
    width: 100%;
    height: 820px;
    overflow-x: hidden;
    overflow-y: auto;

  .widget-box {
    width: 100px;
    float: left;
    height: 106px;
    border-right: 1px solid $bordercolor;
    border-bottom: 1px solid $bordercolor;
    color: #515567;
    background-color: #fff;
    text-align: center;

  .icon {
    width: 76px;
    height: 80px;
    display: block;
    font-size: 40px;
    margin: 0 auto 0px;
    line-height: 92px;
  }

  .title {
    font-size: 16px;
  }

  }
  .widget-box:nth-child(3n) {
    border-right: 0;
  }

  }
  }
  }
  }
  .changeNameBox input {
    border: 1px solid #666;
    height: 16px;
    width: 130px;
    margin: 0 40px 0 28px;
  }

  .changeNameBox button {
    margin-right: 10px;
    line-height: 20px;
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
    top: -1px;
    right: -12px;
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

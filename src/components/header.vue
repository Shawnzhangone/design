<template>
  <div id="edit-header" class="clearfloat clear">
    <div class="edit-user fl">
      <div id="to-user-center">
        <ul>
          <li><a href="/home/user/usercenter.html"><span  class="icon iconfont icon-gerenzhongxin" ></span>{{$store.state.mine.program_name}}</a></li>
          <li @click="offLine"><i class="icon iconfont icon-tuichu"></i></li>
        </ul>
      </div>
    </div>
    <div class="header-operation fl">
      <ul class="clearfloat clear">
        <!--$store.commit('saveAllDataApi')-->
        <li @click="save()"><i class="icon iconfont icon-baocun" ></i>保存</li>
        <!--$store.commit('saveAllDataApi','preview')-->
        <li ><a href="javascript:void(0);"  @click="save('preview')" ><i class="icon iconfont icon-yanjing" ></i>预览 </a></li>
        <li @click="save('build')"><i class="icon iconfont icon-dianji" ></i>生成</li> <!--limit();-->
      </ul>
    </div>
    <toast v-show="$store.state.mine.showToast" :toast-option="$store.state.mine.toastOption" ></toast> <!-- 保存-->
    <dialogset1 v-show="$store.state.mine.showIsVIP"></dialogset1> <!-- vip组件提示-->
    <dialogset v-show="$store.state.mine.showBasicSet"></dialogset> <!-- 小程序名称-->
    <dialogPackCount v-show="$store.state.mine.showDialogPackCount"></dialogPackCount> <!-- 基础版打包提示-->
    <setdialog v-show="$store.state.mine.showSetDialog"></setdialog>
    <setdialog2 v-show="$store.state.mine.showSetDialog2"></setdialog2>
    <setdialog3 v-show="$store.state.mine.showSetDialog3"></setdialog3>
    <div class="header-sever fl">
      <ul class="clearfloat clear">
        <li @click="backEnd">
            <i class="icon iconfont icon-houtai9"></i>管理
        </li>
        <li @click="weixinkf">
            <i class="icon iconfont icon-servicefill"></i>客服
        </li>
        <li @click="helpCenter" >
            <i class="icon iconfont icon-bangzhu"></i>帮助
        </li>
      </ul>
    </div>
    <v-dialog v-show="showDialog" :dialog-option="dialogOption" ref="dialog"></v-dialog>
  </div>
</template>
<script>
  import toast from './toast'
  import DialogM from './DialogM'
  import dialogset from './dialog/basicSet'
  import dialogset1 from './dialog/dialogset1'
  import dialogPackCount from './dialog/dialogPackCount'
  import setdialog from './dialog/setDialog'
  import setdialog2 from './dialog/setDialog2'
  import setdialog3 from './dialog/setDialog3'
  import Vue from 'vue'
  import api from "../fetch/api";
  import {mapState,mapActions} from 'vuex'
  export default{
    name:'edit-header',
    components:{
      toast,
      dialogset,
      dialogset1,
      dialogPackCount,
      setdialog,
      setdialog2,
      setdialog3,
      'v-dialog':DialogM,
    },
    data(){
      return{
        timeOut:null,
        showBasicSet:false,
        showDialog: false,
        dialogOption: {
          title: '',
          text: '你确定要退出吗?',
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        },
        limitData:['多级分类','视频','视频列表',"分销系统中心","卡券中心","拼团","秒杀","大转盘","砸金蛋","点餐"] //付费组件
      }
    },
    methods:{
     offLine(){//退出登录
       this.showDialog = true;
       this.$refs.dialog.confirm().then(() => {
         this.showDialog = false;
         this.$axios.post(this.$store.state.mine.BASE_URL+'/home/page/logout',{credentials:true}).then((response)=>{
           if(response.data.status === 1){
             window.location.href = response.data.url
             return;
             }else{
               alert(response.data.message);
           }
          })
       }).catch(() => {
         this.showDialog = false;
       })
     },
      backEnd(){//去后台管理
        var tempwindow=window.open();
        api.choosePro(this.$store.state.mine.BASE_URL+'/home/page/chooseProgram',this.$store.state.mine.program_id).then((res) => {
          if (res.status == 1) {
            this.$axios.post(this.$store.state.mine.BASE_URL+'/home/page/toBackend',{credentials:true}).then((response)=>{
              if(response.data.status === 0){
                alert(response.data.message);
                return;
              }else{
                tempwindow.location.href = '/cms/'
              }
            })
          } else if (res.data.status == -1)  {
            alert(res.data.message)
            window.location.href = res.data.url;
          }
        })
      },
      weixinkf(){
        var tempwindow=window.open();
        tempwindow.location = 'https://mpkf.weixin.qq.com/'
      },
      save(preview){
        let program_module = this.$store.state.mine.program_module //行业模板
        if(program_module){ // 区分行业模板和用户小程序
          console.log("abc")
          if(preview == 'preview'){
              let tempwindow=window.open();
              tempwindow.location='/design/preview/index.html';
          }else{
            this.$store.state.mine.showBasicSet = true;
          }
        }else{
          this.clearAndSetTime()
          if(!preview){//只是保存
              this.forModule();
              this.saveAllData();
          } else{
            var nav = this.bottomNav();//判断是否设置底部导航栏链接
            if(!nav) {
              this.forModule();
              this.saveAllData(preview);
              if(preview == 'build'){//生成查询VIP组件
                this.checkIsVIP()
              }
            }
          }
        }
      },
      helpCenter(){//去帮助中心
        var tempwindow=window.open();
        tempwindow.location = this.$store.state.mine.BASE_URL+'/home/help/index.html'
      },
      bottomNav(){//判断底部导航栏链接是否填写
        var navlist = this.alldata.bottom_nav.list;  //必选底部导航栏链接
        var flag = false;
        for (var i = 0; i < navlist.length; i++) {
          if (navlist[i].pagePath == '') {
            flag = true;
            alert('请选择底部导航栏链接!');
          }
          if(navlist[i].iconPath ==''|| navlist[i].iconPath == ''){
            flag = true;
            alert('请选择底部导航栏图标!');
          }
        }
        return flag;
      },
      checkIsVIP(){ //是不是
        var program_module = this.$store.state.mine.program_module
        if(program_module){ //判断模板
          return;
        }else {
            if (!this.$store.state.mine.isVIP) {//不是会员  判断是否有付费组件
              if (this.$store.state.mine.VIPCom.length != 0) {
                this.$store.state.mine.showIsVIP = true;
                return;
              } else { //没有付费组件 基础版打包提示
                this.$axios.post(this.$store.state.mine.BASE_URL+'/home/program/readPackageCount', {credentials: true}).then((res)=>{
                  var res = res.data
                  if(res.status === 200 ){
                    this.$store.state.mine.PackCount = res.data.package_count
                    this.$store.state.mine.showDialogPackCount = true;
                  }else{
                    this.$store.state.mine.showSetDialog = true;
                    this.$store.state.mine.focusState = true;
                  }
                })
              }
            } else { //是VIP
              this.$store.state.mine.showSetDialog = true;
              this.$store.state.mine.focusState = true;
            }
        }
      },
      forModule(){//循环组件判断组件顺序order，组件module_id,vip组件
        this.$store.state.mine.VIPCom = []  //清除保存的vip组件
        var allStrctureData = this.alldata.pages
        for (let i = 0; i < allStrctureData.length; i++) {
          for (let j = 0; j < allStrctureData[i].module.length; j++) {
            this.alldata.pages[i].module[j].order = j //组件顺序
            switch (allStrctureData[i].module[j].type){
              case 'vUserCenter':
                allStrctureData[i].module[j].widget.hy && this.$store.state.mine.VIPCom.push("个人中心会员功能");
                allStrctureData[i].module[j].widget.kqb && this.$store.state.mine.VIPCom.push("个人中心卡券包功能");
                allStrctureData[i].module[j].widget.jf && this.$store.state.mine.VIPCom.push("个人中心会员积分功能");
                allStrctureData[i].module[j].widget.pt && this.$store.state.mine.VIPCom.push("个人中心我的拼团功能");
                allStrctureData[i].module[j].widget.ms && this.$store.state.mine.VIPCom.push("个人中心我的秒杀功能");
                allStrctureData[i].module[j].widget.sp && this.$store.state.mine.VIPCom.push("个人中心我的视频功能");
                break;
              case 'vClassify':
                if (allStrctureData[i].module[j].layout == 'vProVideoClassify__1' || allStrctureData[i].module[j].layout == 'vProVideoClassify__2' || allStrctureData[i].module[j].layout == 'vShowVideoClassify__1' || allStrctureData[i].module[j].layout == 'vShowVideoClassify__2' || allStrctureData[i].module[j].layout == 'vShowVideoClassify__3') {
                  this.$store.state.mine.VIPCom.push("视频类分类列表")
                }
                break;
              case 'vRecommend':
                if (allStrctureData[i].module[j].layout == 'vVideoRecommend__1' || allStrctureData[i].module[j].layout == 'vVideoRecommend__2') {
                  this.$store.state.mine.VIPCom.push("视频类推荐位")
                }else if (allStrctureData[i].module[j].layout == 'vSecKillRe') {
                  this.$store.state.mine.VIPCom.push("秒杀推荐位")
                }else if (allStrctureData[i].module[j].layout == 'vCollageRe') {
                  this.$store.state.mine.VIPCom.push("拼团推荐位")
                }
                break;
              default:
                for (let a = 0; a < this.limitData.length; a++) {
                  allStrctureData[i].module[j].mname == this.limitData[a] && this.$store.state.mine.VIPCom.push(this.limitData[a])
                }
                break;
            }
          }
        }
      },
      setTimeSave(){
          if(this.timeOut == null){
            this.timeOut = setTimeout(() => {
              this.save(); //隔5分钟自动保存
            }, 300000);
          }
      },
      clearAndSetTime(){
        if(this.timeOut){
          clearTimeout(this.timeOut)
        }
        this.timeOut = null
        this.setTimeSave()
      },
      ...mapActions(['saveAllData',"createPro"])
    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex
      })
    },
    created(){
      this.clearAndSetTime()
    },

  }
</script>
<style >
  #edit-header{
    width:100%;
    height: 50px;
    border-bottom:1px solid #d4d2d3;
  }
  .icon-tuichu,.icon-servicefill,.icon-bangzhu,.icon-yanjing,.icon-dianji{
    font-size: 26px !important;
    line-height:30px;
  }
  #to-user-center {
    position: relative;
  }
  #to-user-center ul li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-left: 30px;
  }
  .icon-gerenzhongxin:before {
    position: absolute;
    top:0;
    left:20px;
    font-size:32px;
    color:#999;
  }
  .edit-user,
  .header-sever{
    border-right:1px solid #d4d2d3;
    width:320px;
    height:100%
  }
  .header-sever{
    float: right;
    border-left:1px solid #d4d2d3;
  }
  .header-operation{
    width: calc(100% - 642px);
  }
  .header-sever{
    border-right:0;
  }
  .edit-user ul,
  .header-sever ul{
    width: 98%;
    margin:0 auto;
  }
  .header-operation ul{
    width:460px;
    margin:0 auto;
  }
  .edit-user ul li,
  .header-sever ul li,
  .header-operation ul li{
    font-size:20px;
    float: left;
    text-align: center;
    color:#515567;
    line-height:50px;
    width: 32%;
    cursor: pointer;
  }
  .edit-user ul li{
    width: 21%;
  }

  li a {
    color:#515567;
  }
  .edit-user ul li:first-child{
    width: 75%;
    margin-left:10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .icon{
    margin-right:5px;
  }
</style>

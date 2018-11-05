<template>
  <div id="edit-header" class="clearfloat clear">
    <div class="edit-user fl">
      <div id="to-user-center">
        <ul>
          <li><a href="/home/user/usercenter.php"><span  class="icon iconfont icon-gerenzhongxin" ></span>{{$store.state.mine.program_name}}</a></li>
          <li @click="offLine"><i class="icon iconfont icon-tuichu"></i></li>
        </ul>
      </div>
    </div>
    <div class="header-operation fl">
      <ul class="clearfloat clear">
        <li @click="$store.commit('saveAllDataApi')"><i class="icon iconfont icon-baocun" ></i>保存</li>
        <li ><a href="javascript:void(0);"  @click="$store.commit('saveAllDataApi','preview')" ><i class="icon iconfont icon-yanjing" ></i>预览 </a></li>
        <li @click="$store.commit('saveAllDataApi');checkIsVIP(); "><i class="icon iconfont icon-dianji" ></i>生成</li> <!--limit();-->
      </ul>
    </div>
    <toast v-show="$store.state.mine.showToast" :toast-option="$store.state.mine.toastOption" ></toast> <!-- 保存-->
    <dialogset1 v-show="$store.state.mine.showIsVIP"></dialogset1> <!-- vip组件提示-->
    <dialogset v-show="$store.state.mine.showBasicSet"></dialogset> <!-- 小程序名称-->
    <setdialog v-show="$store.state.mine.showSetDialog"></setdialog>
    <setdialog2 v-show="$store.state.mine.showSetDialog2"></setdialog2>
    <setdialog3 v-show="$store.state.mine.showSetDialog3"></setdialog3>
    <div class="header-sever fl">
      <ul class="clearfloat clear">
        <li @click="backEnd">
          <!--<router-link to="/manage">-->
            <i class="icon iconfont icon-houtai9"></i>管理
          <!--</router-link>-->
        </li>
        <li @click="weixinkf">
          <!--<router-link to="/customService">-->
            <i class="icon iconfont icon-servicefill"></i>客服
          <!--</router-link>-->
        </li>
        <li @click="helpCenter" >
          <!--<router-link to="/help">-->
            <i class="icon iconfont icon-bangzhu"></i>帮助
          <!--</router-link>-->
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
  import setdialog from './dialog/setDialog'
  import setdialog2 from './dialog/setDialog2'
  import setdialog3 from './dialog/setDialog3'
  import Vue from 'vue'
  import {mapState,mapActions} from 'vuex'
  export default{
      name:'edit-header',
    data(){
      return{
        showBasicSet:false,
        showDialog: false,
        dialogOption: {
          title: '',
          text: '你确定要退出吗?',
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        },
        limitData:['多级分类','视频','视频列表',"分销系统中心","卡券中心","拼团","秒杀"] //付费组件
      }
    },
    methods:{

     offLine(){
       this.showDialog = true;
       this.$refs.dialog.confirm().then(() => {
         this.showDialog = false;
         this.$axios.post(this.$store.state.mine.BASE_URL+'/api/user/logout',{credentials:true}).then((response)=>{
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
      backEnd(){
        var tempwindow=window.open();
        this.$axios.post(this.$store.state.mine.BASE_URL+'/api/user/toBackend',{credentials:true}).then((response)=>{
          if(response.data.status === 0){
            alert(response.data.message);
            return;
          }else{
            tempwindow.location = response.data.data
          }
        })
      },
      weixinkf(){
        var tempwindow=window.open();
        tempwindow.location = 'https://mpkf.weixin.qq.com/'
      },
      Build(){
          this.$store.state.mine.showBasicSet = true;
      },
      helpCenter(){
        var tempwindow=window.open();
        tempwindow.location = this.$store.state.mine.BASE_URL+'/help/index.php'
      },
      checkIsVIP(){ //是不是
        var allStrctureData = this.alldata.pages
        if(!this.$store.state.mine.isVIP){//不是会员  判断是否有付费组件
          for(var i = 0;i < allStrctureData.length;i++ ){
            for(var j = 0; j < allStrctureData[i].module.length;j++){
                for(var a = 0; a < this.limitData.length; a++){
                    if (allStrctureData[i].module[j].mname == this.limitData[a]){
                      this.$store.state.mine.VIPCom.push(this.limitData[a])
                    }
                }
              if(allStrctureData[i].module[j].type =='vUserCenter'){
                if(allStrctureData[i].module[j].widget.hy){
                  this.$store.state.mine.VIPCom.push("个人中心会员功能")
                }
                if(allStrctureData[i].module[j].widget.kqb){
                  this.$store.state.mine.VIPCom.push("个人中心卡券包功能")
                }
                if(allStrctureData[i].module[j].widget.jf){
                  this.$store.state.mine.VIPCom.push("个人中心会员积分功能")
                }
              }
              if(allStrctureData[i].module[j].type =='vClassify'){
                if(allStrctureData[i].module[j].layout == 'vProVideoClassify__1' || allStrctureData[i].module[j].layout == 'vProVideoClassify__2'||allStrctureData[i].module[j].layout == 'vShowVideoClassify__1'||allStrctureData[i].module[j].layout == 'vShowVideoClassify__2'||allStrctureData[i].module[j].layout == 'vShowVideoClassify__3'){
                  this.$store.state.mine.VIPCom.push("视频类分类列表")
                }
              }
              if(allStrctureData[i].module[j].type =='vRecommend'){
                if(allStrctureData[i].module[j].layout == 'vVideoRecommend__1' || allStrctureData[i].module[j].layout == 'vVideoRecommend__2'){
                  this.$store.state.mine.VIPCom.push("视频类推荐位")
                }if(allStrctureData[i].module[j].layout == 'vSecKillRe'){
                  this.$store.state.mine.VIPCom.push("秒杀推荐位")
                }if(allStrctureData[i].module[j].layout == 'vCollageRe'){
                  this.$store.state.mine.VIPCom.push("拼团推荐位")
                }
              }
            }
          }
          console.log(this.$store.state.mine.VIPCom)
          if(this.$store.state.mine.VIPCom.length != 0){
            this.$store.state.mine.showIsVIP = true;
            return;
          }else{ //没有付费组件
            this.$store.state.mine.showBasicSet = true;this.$store.state.mine.focusState = true;
          }
        }else{ //是VIP
          this.$store.state.mine.showBasicSet = true;this.$store.state.mine.focusState = true;
        }

      }
    },
    computed:{
      ...mapState({
        alldata : state => state.mine.getMineBaseMsg.alldata,
        nowPageIndex: state => state.mine.nowPageIndex
      })
    },
    components:{
      toast,
      dialogset,
      dialogset1,
      setdialog,
      setdialog2,
      setdialog3,
      'v-dialog':DialogM,
    }
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
    width: 33%;
    cursor: pointer;
  }
  li a {
    color:#515567;
  }
  .edit-user ul li:first-child{
    width: 62%;
    margin-left:10px;
  }
  .icon{
    margin-right:5px;
  }
</style>

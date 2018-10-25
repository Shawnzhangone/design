<template>
  <div class="loginComponent">
    <div class="loginMain">
      <p>账号登录</p>
      <form action="" class="loginFrom">
        <div class="formInput">
          <i class="mobile"></i>
          <input type="text" placeholder="手机号码" v-model="user.mobile" maxlength="11">
        </div>
        <div class="formInput">
          <i class="password"></i>
          <input type="password" placeholder="密码" v-model="user.password">
        </div>
        <div class="loginMsg">
          <span>没有账号？</span>
          <router-link to="/Register">注册</router-link>
          <router-link to="/forgetPwd">忘记密码？</router-link>
        </div>
        <div v-show="isShowErr" class="isErro">{{ errMsg }}</div>
        <a href="javascript:;" @click.prevent="handleSignUp" class="loginSub">登录</a>
      </form>
    </div>
  </div>
</template>

<script>
  import {checkAuthCode,checkPwd,checkMobile} from "../assets/js/check";
  import qs from 'qs';
//  Vue.prototype.$qs = qs;

  export default {
    name: 'login',
    data () {
      return {
        errMsg:"登录失败",
        isShowErr:false,
        user:{
          mobile:'',
          password:''
        }
      }
    },
    methods: {
      showErr (errMsg) {
        this.errMsg = errMsg
        this.isShowErr = !this.isShowErr
        let timer = setTimeout(()=>{
          this.isShowErr = !this.isShowErr
        },1500)
      },
      handleSignUp (){
        if(!checkMobile(this.user.mobile)){
          this.showErr("请填写正确手机号")
          return
        }
        if(!checkPwd(this.user.password)) {
          this.showErr("请填写正确的密码")
          return
        }
         this.$axios.post(`http://mps.essocial.com.cn/api/user/login`,
           this.$qs.stringify({
             mobile : this.user.mobile,
             password : this.user.password
           })).then(
           response => {
               console.log(response);
             if(response.data.status == 0){
               this.showErr(response.data.message)
               return
             }else if(response.data.status == 1 ){
                 this.$store.state.mine.isLogin = true;
                 console.log(this.$store.state.mine.isLogin);
               this.$router.push('/home')
             }
           }
         )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ::-webkit-input-placeholder{
    font-size: 14px;
    color: #B7B7B7;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
  input[type=text]:focus, input[type=password]:focus, textarea:focus {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  }
  .loginComponent{
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    background-image: url("../../static/images/bglogin.png");
    .loginMain{
      width: 630px;
      height: 540px;
      background: #fff;
      overflow: hidden;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 0 5px #515567;
      border-radius: 3px;
      p{
        font-size: 20px;
        text-align: center;
        color: #515567;
        padding: 100px 0 65px 0;
      }
      .loginFrom{
        width: 100%;
        height: auto;
        overflow: hidden;
        .formInput{
          width: 280px;
          margin:0 auto 18px auto;
          overflow: hidden;
          i{
            height: 20px;
            width: 20px;
            float: left;
            margin-top: 10px;
            margin-right: 10px;
          }
          .mobile{
            background-image: url("../../static/images/mobile.png");
            background-repeat: no-repeat;
            background-size: 20px 20px;
          }
          .password{
            background-image: url("../../static/images/password.png");
            background-repeat: no-repeat;
            background-size: 20px 20px;
          }
          input{
            height: 35px;
            float: left;
            width: 240px;
            padding-left: 5px;
            border: 1px solid #CAC7C7;
          }
        }
        .loginMsg{
          width: 280px;
          overflow: hidden;
          height: 35px;
          margin: 0 auto ;
          font-size: 12px;
          line-height: 35px;
          span{
            float: left;
            color: #B7B7B7;
          }
          a{
            float: right;
            color: #B7B7B7;
          }
          a:nth-of-type(1){
            float: left;
          }
        }
        .loginSub{
          width: 280px;
          height: 35px;
          background-color: #FD7242;
          text-align: center;
          line-height: 35px;
          display: block;
          color: #fff;
          margin: 0 auto;
          margin-top: 10px;
        }
      }
    }
    .isErro{
      font-size: 14px;
      color: red;
      text-align: center;
    }
  }

</style>

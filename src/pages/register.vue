<template>
  <div class="RegisterComponent">
    <div class="RegisterMain">
      <p>账号注册</p>
      <form action="" class="RegisterFrom">
        <div class="formInput">
          <i class="mobile"></i>
          <input type="text" placeholder="手机号码" v-model="user.mobile" maxlength="11">
        </div>
        <div class="sendMsg">
          <i class="verificationCode"></i>
          <input type="text" placeholder="验证码" maxlength="6"><a href="javascript:;" class="sendCode" @click="handleSendAuthCode($event)">发送验证码</a>
        </div>
        <div class="formInput">
          <i class="password"></i>
          <input type="password" placeholder="输入密码" v-model="user.password">
        </div>
        <div class="formInput">
          <i class="passwords"></i>
          <input type="password" placeholder="确认密码" v-model="user.passwords">
        </div>
        <div class="formInput">
          <i class="company"></i>
          <input type="text" placeholder="公司名称" v-model="user.companyName">
        </div>
        <div v-show="isShowErr">{{ errMsg }}</div>
        <a href="javascript:;" class="RegisterSub" @click.prevent="handleRegister">确定</a>
      </form>
    </div>
  </div>
</template>

<script>
  import {checkAuthCode,checkPwd,checkMobile} from "../assets/js/check";
  export default {
    name: 'register',
    data () {
      return {
        errMsg:"登录失败",
        isShowErr:false,
        time:60,
        user: {
          mobile:'',
          code: '',
          password: '',
          passwords: '',
          companyName:''
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
      handleSendAuthCode(event) {
        if (this.time != 60) {
          return;
        }
        if (!checkMobile(this.user.mobile)) {
          alert('手机号码输入错误！')
          return;
        }
        //发送按钮读秒
        const timer = setInterval(() =>{
          this.time--;
          event.target.innerHTML = this.time + 's';
          if (this.time <= 0){
            clearInterval(timer);
            event.target.innerHTML = '获取验证码';
            this.time = 60
          }
        },1000)
        this.$axios.post('/',{mobile:this.user.mobile})
          .then(
            ({data}) => {
              this.showErr(data.msg)
            }
          )
      },
      handleRegister (){
        if(!checkMobile(this.user.mobile)){
          this.showErr('请填写正确的电话号码。')
          return
        }
        if(!checkAuthCode(this.user.code)){
          this.showErr('请填写正确的验证码。')
          return
        }
        if(!checkPwd(this.user.password)){
          this.showErr('请填写正确的密码。')
          return
        }
        if(!this.user.companyName.trim()){
          this.showErr('请填写正确的公司名。')
          return
        }
        this.$axios.post (`/register`,this.user)
          .then (
            ({data}) => {
              if(data.status == -1){
                this.showErr(data.msg)
                console.log(data)
                return
              }
              this.$router.push("/download")
            }
          )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @mixin backgroundSize {
    background-size: 20px 20px;
    background-repeat: no-repeat;
  }
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
  .RegisterComponent{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    background-image: url("../../static/images/bglogin.png");
    .RegisterMain{
      width: 630px;
      height: 510px;
      background: #fff;
      overflow: hidden;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border-radius: 3px;
      box-shadow: 0 0 5px #515567;
      border-radius: 3px;
      p{
        font-size: 20px;
        text-align: center;
        color: #515567;
        padding: 70px 0 30px 0;
      }
      .RegisterFrom{
        width: 100%;
        height: auto;
        overflow: hidden;
        .sendMsg{
          width: 270px;
          margin:0 auto 18px auto;
          overflow: hidden;
          i{
            height: 20px;
            width: 20px;
            float: left;
            margin-top: 10px;
            margin-right: 10px;
          }
          .verificationCode{
            @include backgroundSize;
            background-image: url("../../static/images/verificationCode.png");
          }
          input{
            height: 35px;
            float: left;
            width: 130px;
            border: 1px solid #CAC7C7;
            padding-left: 15px;
            font-size: 14px;
          }
          .sendCode{
            width: 90px;
            background-color: #FD7242;
            height: 38px;
            float: left;
            font-size: 12px;
            color: #fff;
            line-height: 38px;
            text-align: center;
          }
        }
        .formInput{
          width: 270px;
          margin:0 auto 18px auto;
          overflow: hidden;
          i{
            height: 20px;
            width: 20px;
            float: left;
            margin-top: 10px;
            margin-right: 10px;
          }
          .company{
            background-image: url("../../static/images/company.png");
            @include backgroundSize;
          }
          .mobile{
            background-image: url("../../static/images/mobile.png");
            @include backgroundSize;
          }
          .password,.passwords{
            background-image: url("../../static/images/password.png");
            @include backgroundSize;
          }
          input{
            height: 35px;
            float: left;
            width: 220px;
            border: 1px solid #CAC7C7;
            padding-left: 15px;
            font-size: 14px;
          }
        }
        .RegisterSub{
          width: 240px;
          height: 35px;
          background-color: #FD7242;
          text-align: center;
          line-height: 35px;
          display: block;
          color: #fff;
          margin-left: 33%;
          margin-top: 10px;
        }
      }
    }
  }

</style>

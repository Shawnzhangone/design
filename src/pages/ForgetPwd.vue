<template>
  <div class="forgetComponent">
    <div class="forgetMain">
      <p>忘记密码</p>
      <form action="" class="forgetFrom">
        <div class="formInput">
          <i class="mobile"></i>
          <input type="text" placeholder="手机号码" v-model="user.mobile">
        </div>
        <div class="sendMsg">
          <i></i>
          <input type="password" placeholder="验证码" v-model="user.code" maxlength="6">
          <a href="javascript:;" class="sendCode" @click="handleSendAuthCode($event)">发送验证码</a>
        </div>
        <div class="formInput">
          <i class="password"></i>
          <input type="password" placeholder="密码" v-model="user.password">
        </div>
        <div class="formInput">
          <i class="passwords"></i>
          <input type="password" placeholder="确认密码" v-model="user.password">
        </div>
        <div v-show="isShowErr" class="isErro">{{ errMsg }}</div>
        <a href="javascript:;" @click.prevent="handleFindPwd" class="forgetSub">确定</a>
      </form>
    </div>
  </div>
</template>

<script>
  import {checkAuthCode,checkPwd,checkMobile} from "../assets/js/check";
  export default {
    name: 'ForgetPwd',
    data () {
      return {
        time: 60,
        errMsg:'请填写正确的xx',
        isShowErr: false,
        user: {
          password:'',
          code:'',
          mobile:''
        }
      }
    },
    methods: {
      showErr (errMsg) {
        this.errMsg = errMsg;
        this.isShowErr = !this.isShowErr;
        let timer = setTimeout(()=>{
          this.isShowErr = !this.isShowErr;
        },1500)
      },
      handleSendAuthCode (event){
        if(this.time != 60) {
          return;
        }
        if(!checkMobile(this.user.mobile)){
           alert('手机号码输入错误！')
          return
        }
        // 让发送按钮读秒
        const timer =  setInterval(()=>{
          this.time--;
          event.target.innerHTML = this.time + 's';
          if(this.time <= 0){
            clearInterval(timer);
            event.target.innerHTML = '获取验证码'
            this.time = 60
          }
        },1000)
        this.$axios.post(`/send_verify_code`,{mobile:this.user.mobile})
          .then(
            ({data}) => {
              this.showErr(data.msg)
            }
          )
      },
      handleFindPwd () {
        if (!checkMobile(this.user.mobile)) {
          this.showErr('请填写正确的手机号。');
          return
        }
        if (!checkPwd(this.user.password)) {
          this.showErr('请填写正确的密码')
          return
        }
        if(!checkAuthCode(this.user.code)) {
          this.showErr('请填写正确的验证码')
          return
        }
        this.$axios.post('/',this.user)
          .then(({data}) =>{
            if (data.status == -1) {
              this.showErr(data.msg)
              return
            }
            this.$router.push('/login')
          })
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
  @mixin backgroundSize {
    background-size: 20px 20px;
    background-repeat: no-repeat;
  }
  .forgetComponent{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    background-image: url("../../static/images/bglogin.png");
    .forgetMain{
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
      box-shadow: 0 0 3px #515567;
      border-radius: 3px;
      p{
        font-size: 20px;
        text-align: center;
        color: #515567;
        padding: 70px 0 30px 0;
      }
      .forgetFrom{
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
            @include backgroundSize;
            background-image: url("../../static/images/verificationCode.png");
          }
          input{
            height: 35px;
            float: left;
            width: 140px;
            border: 1px solid #CAC7C7;
            padding-left: 5px;
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
          .mobile{
            @include backgroundSize;
            background-image: url("../../static/images/mobile.png");
          }
          .password,.passwords{
            @include backgroundSize;
            background-image: url("../../static/images/password.png");
          }
          input{
            height: 35px;
            float: left;
            width: 230px;
            border: 1px solid #CAC7C7;
            padding-left: 5px;
            font-size: 14px;
          }
        }
        .forgetSub{
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
  .isErro{
    font-size: 14px;
    color: red;
    text-align:center;
  }
</style>

<template>
  <div class="dialogs">
    <div class="mask"></div>
    <div class="dialog-content">
      <div class="title">基本设置</div>
      <p class="text">名称：<input class="grey inname" type="text" placeholder="小程序名称" v-model="$store.state.mine.getMineBaseMsg.alldata.pname" @blur="$store.state.mine.focusState =  false" v-focus="$store.state.mine.focusState"> </p>
      <div class="btn-group">
        <div class="btn" @click="cancel">返回</div>
        <div class="btn" @click="confireSet">确定</div>
      </div>
      <div class="del" @click="$store.state.mine.showBasicSet = false;">
        <i class="iconfont">X</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialogs',
    data() {
      return {
        focusState:false,
        resolve: '',
        reject: '',
        promise: '', // 保存promise对象
      }
    },
    computed: {
      modal: function() {
        return {
        }
      }
    },
    methods: {
      //确定,将promise断定为完成态
      confireSet() {
          if(this.$store.state.mine.getMineBaseMsg.alldata.pname != ''){

            if(this.$store.state.mine.getMineBaseMsg.alldata.pid < 0 ){ //判断是模板进来还是新建
                var that = this;
              $.ajax({
                type: 'POST',
                url: this.$store.state.mine.BASE_URL+'/api/user/createProgram',
                data: {program_name: that.$store.state.mine.getMineBaseMsg.alldata.pname},
                dataType: 'json',
                xhrFields: {
                  withCredentials: true
                },
                success: function (data) {
                  if (data.status == 1) { //创建成功  下一步
                    that.$store.state.mine.showSetDialog = true
                    that.$store.state.mine.showBasicSet = false
                  } else {
                    alert(data.message);
                  }
                }
              });
            }else{
              this.$store.state.mine.showSetDialog = true
              this.$store.state.mine.showBasicSet = false
            }
          }else{
              alert("请输入小程序名字！")
          }

      },
      // 取消,将promise断定为reject状态
      cancel() {
        this.$store.state.mine.showBasicSet = false
      },
      //显示confirm弹出,并创建promise对象，给父组件调用
//      confirm() {
//        this.promise = new Promise((resolve, reject) => {
//          this.resolve = resolve;
//          this.reject = reject;
//        });
//        return this.promise; //返回promise对象,给父级组件调用
//      }
    },
    directives:{
      focus:{
        update:function(el,{value}){
          if(value){
            el.focus()
          }
        }
      }
    },
  }
</script>

<style lang="scss">
  .dialogs {
    position: relative;
    .dialog-content {
      position: fixed;
      box-sizing: border-box;
      text-align: center;
      width: 492px;
      height: 299px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      background: #fff;
      z-index: 50002;
      .title {
        font-size: 18px;
        font-weight: 600;
        line-height: 46px;
        color:#000;
        border-bottom:2px solid #e0e0e0;
      }
      .text {
        font-size: 18px;
        line-height: 30px;
        margin:60px auto;
        .inname{
          border:1px solid #a0a0a0;
          height: 27px;
          width: 200px;
          padding-left:6px;
          font-size:14px;
        }
      }
      .del {
        position: absolute;
        top:10px ;
        right:15px;
      }
      .btn-group {
        display: flex;
        position: absolute;
        left:50%;
        margin-left: -119px;
        bottom: 50px;
        .btn {
          padding: 8px 30px;
          font-size: 16px;
          color:#000;
          background-color: #fff;
          -webkit-border-radius:5px;
          -moz-border-radius:5px;
          border-radius:5px;
          border:1px solid #E0e0e0;
          &:last-child {
            color: #fff;
            background-color: #fd7a42;
            margin-left:50px;
          }
        }
      }
    }
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 50001;
      background: rgba(0,0,0,.5);
    }
  }
</style>

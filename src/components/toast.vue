<template>
  <div class="toast">
    <div class="toast-content" :class="modal.type">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
      <p>{{modal.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toastOption: Object
  },
  methods:{

  },
  computed: {
    modal: function() {
      let options = this.toastOption;
      return {
        text: options.text,
        type: options.type
      }
    }
  },
}

</script>
<style>
  .toast{
    position: relative;
  }
  .toast .toast-content{
    position: fixed;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 20px;
    width: 168px;
    min-height: 66px;
    left: 46%;
    top: 38%;
    background-color: #333;
    opacity: .8;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    z-index: 50002;
  }
  .spinner{
    margin-top:14px;
  }
  .toast .toast-content p {
    width:100%;
    text-align: center;
    margin:auto;
    color: #fff;
    font-size:20px;
  }
  .loadingbox .spinner {
    margin: 10px auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;

    -webkit-animation: rotate 2.0s infinite linear;
    animation: rotate 2.0s infinite linear;
  }

  .loadingbox .dot1,.loadingbox .dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #67CF22;
    border-radius: 100%;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

 .loadingbox .dot2 {
    top: auto;
    bottom: 0px;
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg) }}
  @keyframes rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
</style>

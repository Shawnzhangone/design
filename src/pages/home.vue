<template>
  <div class="box">
    <v-header></v-header>
    <div class="design clearfloat clear">
      <v-leftbox></v-leftbox>
      <v-phone></v-phone>
      <v-rightbox></v-rightbox>
      <v-rightmodule v-show="showTemplet"></v-rightmodule>
    </div>

  </div>
</template>


<script>
  import DialogM from '../components/DialogM'
  //  import loading from './components/loading'
  import header from '../components/header'
  import leftbox from '../components/leftbox'
  import phone from '../components/phone'
  import rightbox from '../components/rightbox'
  import rightmodule from '../components/rightmodule'
  import {mapState,mapActions} from 'vuex'

  export default {
    name: 'app',
    data(){
      return{
        showDialog: true,
        dialogOption: {
          title: '',
          text: '你确定要删除该组件吗?',
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }
      }
    },

    components:{
      'v-dialog':DialogM,
//    'v-loading':loading,
      'v-header':header,
      'v-leftbox':leftbox,
      'v-rightbox':rightbox,
      'v-phone':phone,
      'v-rightmodule':rightmodule,
    },
    watch:{},
    methods:{},
    computed:{
      ...mapState({
        showTemplet: state => state.mine.showTemplet,
        showModule: state => state.mine.showModule,
      })
    }
  }
</script>

<style type="text/css">
  .box {
    height: 100%;
  }
  .design{
    width: 100%;
    height: calc(100% - 51px);
    position: relative;
  }

</style>

<template>
  <div id="icon">
    <div class="iconbox">
      <div class="iconchoose fl">
        <div class="title">素材库</div>
        <div class="iconItem">
          <ul class="clearfloat"><li class="navitem fl" :class="{nownavitem:nowClassify == index}" v-for="(item,index) in icons" @click="tabSwitch(index)">{{item.title}}</li></ul>
            <div class="icons clearfloat">
              <ul><li v-for="(item,ind) in icons[nowClassify].icon" class="fl" :class="{nowIcon:nowIconin == ind}" @click="choose(item,ind)"><img :src="item" alt=""> <div class="mob">
                <a class="trsymb" href="javascript:;"></a></div> </li></ul>
            </div>
        </div>
      </div>
      <div class="upicon fl">
        <!--<div class="upbox"><input type="file" id="upicon" class="inpfile" @change="fileChange($event)" accept="image/gif,image/jpeg,image/jpg,image/png"><label for="upicon" class="uplabel  cp">上传图片</label><i class="iconfont"></i></div>-->
        <!--<div class="imgbox">-->
          <!--<ul>-->
            <!--<li class="imgli"><img :src="avatar" alt=""></li>-->
          <!--</ul>-->
        <!--</div>-->
        <span class="close" @click="$store.state.mine.chooseIconbox = false"><i class="iconfont icon-guanbijiantou"></i></span>
      </div>

    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
      data(){
          return  {
              icons:[
                {
                  title:'红色',
                  icon:[
                    '/images/icon/red/red1.png',
                    '/images/icon/red/red2.png',
                    '/images/icon/red/red3.png',
                    '/images/icon/red/red4.png',
                    '/images/icon/red/red5.png',
                    '/images/icon/red/red6.png',
                    '/images/icon/red/red7.png',
                    '/images/icon/red/red8.png',
                    '/images/icon/red/red9.png',
                    '/images/icon/red/red10.png',
                    '/images/icon/red/red11.png',
                    '/images/icon/red/red12.png',
                    '/images/icon/red/red13.png',
                    '/images/icon/red/red14.png',
                    '/images/icon/red/red15.png',
                    '/images/icon/red/red16.png',
                    '/images/icon/red/red17.png',
                    '/images/icon/red/red18.png',
                    '/images/icon/red/red19.png',
                    '/images/icon/red/red20.png',
                    '/images/icon/red/red21.png',
                    '/images/icon/red/red22.png',
                    '/images/icon/red/red23.png',
                    '/images/icon/red/red24.png',
                    '/images/icon/red/red25.png',
                    '/images/icon/red/red26.png',
                    '/images/icon/red/red27.png',
                    '/images/icon/red/red28.png',
                    '/images/icon/red/red29.png',
                    '/images/icon/red/red30.png',
                    '/images/icon/red/red31.png',
                    '/images/icon/red/red32.png',
                    '/images/icon/red/red33.png',
                    '/images/icon/red/red34.png',
                    '/images/icon/red/red35.png',
                    '/images/icon/red/red36.png',
                    '/images/icon/red/red37.png',
                    '/images/icon/red/red38.png',
                    '/images/icon/red/red39.png',
                    '/images/icon/red/red40.png',
                  ],
                },
                {
                    title:'橙色',
                    icon:[
                      '/images/icon/org/org1.png',
                      '/images/icon/org/org2.png',
                      '/images/icon/org/org3.png',
                      '/images/icon/org/org4.png',
                      '/images/icon/org/org5.png',
                      '/images/icon/org/org6.png',
                      '/images/icon/org/org7.png',
                      '/images/icon/org/org8.png',
                      '/images/icon/org/org9.png',
                      '/images/icon/org/org10.png',
                      '/images/icon/org/org11.png',
                      '/images/icon/org/org12.png',
                      '/images/icon/org/org13.png',
                      '/images/icon/org/org14.png',
                      '/images/icon/org/org15.png',
                      '/images/icon/org/org16.png',
                      '/images/icon/org/org17.png',
                      '/images/icon/org/org18.png',
                      '/images/icon/org/org19.png',
                      '/images/icon/org/org20.png',
                      '/images/icon/org/org21.png',
                      '/images/icon/org/org22.png',
                      '/images/icon/org/org23.png',
                      '/images/icon/org/org24.png',
                      '/images/icon/org/org25.png',
                      '/images/icon/org/org26.png',
                      '/images/icon/org/org27.png',
                      '/images/icon/org/org28.png',
                      '/images/icon/org/org29.png',
                      '/images/icon/org/org30.png',
                      '/images/icon/org/org31.png',
                      '/images/icon/org/org32.png',
                      '/images/icon/org/org33.png',
                      '/images/icon/org/org34.png',
                      '/images/icon/org/org35.png',
                      '/images/icon/org/org36.png',
                      '/images/icon/org/org37.png',
                      '/images/icon/org/org38.png',
                      '/images/icon/org/org39.png',
                      '/images/icon/org/org40.png',
                      '',]
                },
                {
                  title:"灰色",
                  icon:[
                    '/images/icon/grey/grey1.png',
                    '/images/icon/grey/grey2.png',
                    '/images/icon/grey/grey3.png',
                    '/images/icon/grey/grey4.png',
                    '/images/icon/grey/grey5.png',
                    '/images/icon/grey/grey6.png',
                    '/images/icon/grey/grey7.png',
                    '/images/icon/grey/grey8.png',
                    '/images/icon/grey/grey9.png',
                    '/images/icon/grey/grey10.png',
                    '/images/icon/grey/grey11.png',
                    '/images/icon/grey/grey12.png',
                    '/images/icon/grey/grey13.png',
                    '/images/icon/grey/grey14.png',
                    '/images/icon/grey/grey15.png',
                    '/images/icon/grey/grey16.png',
                    '/images/icon/grey/grey17.png',
                    '/images/icon/grey/grey18.png',
                    '/images/icon/grey/grey19.png',
                    '/images/icon/grey/grey20.png',
                    '/images/icon/grey/grey21.png',
                    '/images/icon/grey/grey22.png',
                    '/images/icon/grey/grey23.png',
                    '/images/icon/grey/grey24.png',
                    '/images/icon/grey/grey25.png',
                    '/images/icon/grey/grey26.png',
                    '/images/icon/grey/grey27.png',
                    '/images/icon/grey/grey28.png',
                    '/images/icon/grey/grey29.png',
                    '/images/icon/grey/grey30.png',
                    '/images/icon/grey/grey31.png',
                    '/images/icon/grey/grey32.png',
                    '/images/icon/grey/grey33.png',
                    '/images/icon/grey/grey34.png',
                    '/images/icon/grey/grey35.png',
                    '/images/icon/grey/grey36.png',
                    '/images/icon/grey/grey37.png',
                    '/images/icon/grey/grey38.png',
                    '/images/icon/grey/grey39.png',
                    '/images/icon/grey/grey40.png',
                    '/images/icon/grey/grey41.png',
                    '/images/icon/grey/grey42.png',
                    '/images/icon/grey/grey43.png',
                    '/images/icon/grey/grey44.png',
                    ''
                  ]
                },

              ],
            avatar:'',
            nowClassify:0,
          }
      },
    methods:{
          choose(item,ind){
              if(this.chooseIcon == '1'){
                this.alldata.bottom_nav.list[this.chooseIconIndex].iconPath = item;
                this.$store.state.mine.nowIconin = ind;
              }else if(this.chooseIcon == '2'){
                this.alldata.bottom_nav.list[this.chooseIconIndex].selectedIconPath = item
              }
          },
      tabSwitch(index){
        this.nowClassify = index;
      },
      fileChange(el){
        var file = el.target.files[0];

        var reader = new FileReader()
        var that = this
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          that.avatar = this.result
        }
        var image = new FormData()
        image.append('avatar', file)
        console.log(image)
        this.$axios.post('/avatar', image, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      }
    },
  computed:{
  ...mapState({
      alldata : state => state.mine.getMineBaseMsg.alldata,
      chooseIconIndex: state => state.mine.chooseIconIndex,
      chooseIcon: state => state.mine.chooseIcon,
      chooseIconbox: state => state.mine.chooseIconbox,
      nowIconin: state => state.mine.nowIconin,
    })
  }
  }
</script>
<style lang="scss">
#icon{
  .iconbox{
    position: absolute;
    left:50%;
    top:200px;
    margin-left:-250px;
    width: 500px;
    height: 344px;
    background-color: #fff;
    z-index: 9999;
    border:1px solid #666;
    -webkit-border-radius:12px;
    -moz-border-radius:12px;
    border-radius:12px;

    .iconchoose{
      width: 500px;
      height: 288px;
      /*border-right:1px solid #666;*/
      .iconItem{
        overflow: hidden;
      }
      .navitem{
        height: 26px;
        width: 49px;
        text-align: center;
        line-height: 26px;
        border:1px solid #a0a0a0;
        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
        margin:14px 8px 6px;
        font-size:14px;
      }
      .icons{
        height: 246px;
        width: 509px;
        overflow: hidden;
        overflow-y: auto;

      }
      .icons li{
        width: 40px;
        height: 40px;
        margin:10px 10px 6px;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        img{
          width: 100%;
        }
      }
      .title{
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size:16px;
        border-bottom:1px solid #a0a0a0;
      }
    }
    .upicon{
      .imgbox{
        .imgli{
          width: 50%;
          img {
            width: 90%;
            margin:auto;
          }
        }

      }
      .upbox{
        position: relative;
        margin: 16px auto;
        height: 30px;
        width: 70px;
        .inpfile{
          position: absolute;
          right:9999px;
        }
        .uplabel{
          position: absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          text-align: center;
          line-height:30px;
          background-color: #ddd;
        }
      }

      width: 119px;
      .up{

      }
      .close{
        position: absolute;
        top:3px;
        right:3px;
      }
    }
    .el-upload--picture-card{
      width: 34px;
      height: 34px;
      line-height:34px;
    }
    .el-upload-list--picture-card .el-upload-list__item{
      width: 34px;
      height: 34px;
    }
  }
  .nowIcon{
    border:1px solid #ff6d00;
    .mob{
      position: absolute;
      left:0;
      right:0;
      top:0;
      bottom:0;
      background: rgba(120,120,120,.5);
    }
    .trsymb{ margin:20px 10px;display: inline-block; width: 10px;height:5px; background: #ff6d00;line-height: 0;font-size:0;vertical-align: middle;-webkit-transform: rotate(45deg);}
    .trsymb:after{content:'/';display:block;width: 20px;height:5px; background: #ff6d00;-webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);}
  }
}

</style>

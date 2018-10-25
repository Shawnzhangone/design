<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="slide in $store.state.defaultData.vSlider[imgdata]" :key="slide.id" style="background-color:#fff;" :data-swiper-autoplay="pData.time*1000" >
      <img class='slide-img':src="slide" alt="" ></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props:['pData'],
    name: 'carrousel',
    data() {
      return {
//        time:5,
        swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          notNextTick: true,
          autoplay: true,
          loop:true,
          autoplayDisableOnInteraction:true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
//          prevButton: '.swiper-button-prev',
//          nextButton: '.swiper-button-next',
//          scrollbar: '.swiper-scrollbar',
//          mousewheelControl: true,
          observeParents: true,
          onTransitionStart(swiper){
            console.log(swiper)
          }
        }
      }
      },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      imgdata(){ //图片素材，数组中的第几个   因为没法$store.state.defaultData.vSlider.出来具体对象，所以用数字下标，缺点不好整理
        if(this.pData.ind){
          return this.pData.ind;
        }else {
          return 0;
        }
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      },
//      time:function(){return this.$store.state.changeInfo.vSearch.time*1000}
    },
    mounted() {

//      this.swiper.slideTo(3, 1000, true)
      console.log('mounted');
    }
  }
</script>
<style>
  .swiper-slide .slide-img{
    width:100%;
  }
</style>

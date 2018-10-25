/**
 * Created by shawn on 2018/3/13 0013.
 */
import Vue from 'vue'
// import "babel-polyfill"
import vuex from 'vuex'
Vue.use(vuex);
import choose_box_store from './store_modules/choose_box_store.js';//引入某个store对象
import default_data_store from './store_modules/default_data_store.js'
import rightTemplet from './store_modules/right_templet_data.js'
// import change_info_store from './store_modules/change_info_store'
// import drag_store from './store_modules/drag_store'
import mine from './store_modules/mine'
export default new vuex.Store({

  modules: {
    chooseBox: choose_box_store, //选中组件，修改布局
    defaultData:default_data_store,  //各个组件模板文本图片数据
    mine,
    rightTemplet
    // changeInfo:change_info_store,
    // dragStore:drag_store
  }
})

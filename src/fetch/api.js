/**
 * Created by shawn on 2018/3/14 0014.
 */
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$qs = qs;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';


export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      url:url,
      method:'post',
      data:params,
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
    }).then(response => {
        console.log('Api--ok');
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi(url,pid) {
    // console.log('获取api.js')
    return fetch(url,{program_id:pid});
  },
  getModuleData(url,pid) {
    // console.log('获取api.js')
    return fetch(url,{case_id:pid});
  },
  //保存
  AllDataApi(url,data){
    console.log('保存api');
    // console.log(data);
    return fetch(url,{savedata:data});
  },
  //添加页面
  addPageApi(url,pagename,pid){
    console.log('添加页面api');
    return fetch(url,{name:pagename,program_id:pid});
  },
  //删除页面
  delPageApi(url,id){
    console.log('删除页面api');
    return fetch(url,{page_id:id});
  },

  //生成提交数据
  postAPPApi(url,appinfo,pid){
    // console.log("进入api",appinfo);
    return fetch(url,{appInfo:appinfo,program_id:pid});
  },

  //创建小程序
  createPro(url,name){
    return fetch(url,{program_name:name});
  }
}

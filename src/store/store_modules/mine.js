/**
 * Created by shawn on 2018/3/14 0014.
 */
import api from "./../../fetch/api";
import * as types from "./types.js";
import Vue from "vue";

const state = {
  BASE_URL :'https://mps.essocial.win',
  mobile:'',
  program_id:'',
  isVIP:false,//是不是VIP用户
  program_module:null,//行业模板进来
  nowData:"",
  nowPageIndex:0,//当前页
  program_name:'',
  showToast:false,
  showStylePicker:false,//展开样式
  showIsVIP:false, //VIP组件
  VIPCom:[],//拖拽的VIP组件
  showBasicSet:false,//基础设置
  showSetDialog:false,//设置开发设置
  showSetDialog2:false,//设置开发设置
  showSetDialog3:false,//设置开发设置
  focusState:false,//自动焦点
  showTemplet:false,//显示模板
  showModule:false,//显示模块
  sid:true,  //商户类型
  chooseIcon : '1', //更换icon 还是selectedIcon
  chooseIconIndex : '',
  chooseIconbox : false, //更改底部图标
  nowIconin:'',
  download:{path:'',size:''}, //生成完毕下载
  toastOption:{ //弹窗
    text:"",
    type:""
  },
  oalldata:{},//返回上一步数据
  getMineBaseMsg: { //小程序数据
    alldata:{ //初始化小程序数据
      "pid":"",
      "pname":"",
      "top_nav":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white"},
      "bottom_nav":{"backgroundColor":"#ffffff","color":"#666666","selectedColor":"#fd7a42","layout":"","list":[{"pagePath": "pages/page_1/page_1",
        "iconPath": "/images/icon/grey/grey33.png",
        "selectedIconPath": "/images/icon/org/org33.png",
        "text": "首页"},{
        "pagePath": "pages/page_2/page_2",
        "iconPath": "/images/icon/grey/grey1.png",
        "selectedIconPath": "/images/icon/org/org1.png",
        "text": "第二页"
      }]
      },
      "pages":[{
        "page_id":"1",
        "navigationBarTitleText":"首页",
        "name":"首页",
        "module":[]
      },{
        "page_id":"2",
        "navigationBarTitleText":"第二页",
        "name":"第二页",
        "module":[]
      }
      ]
    }
  }
}

const actions = {
  getMineBaseApi({commit},param) {
    let url = state.BASE_URL + '/api/page/getAllPageStructures'
    api.mineBaseMsgApi(url,param)
      .then(res => {
        // console.log(param,"pid");
        // console.log("action中调用封装后的axios成功",res)
        commit(types.GET_BASE_API, res)
      })
  },
  getModuleData({commit},param){ //获取行业案列模板
    let url = state.BASE_URL + '/home/tokencase/casequery'
    api.getModuleData(url,param)
      .then(res => {
        commit('getModuleAlldata', res)
      })
  },
  addpage({commit},page){
    commit("ADDPAGE",page);
  },
  delpage({commit},page_id){
    commit("DELPAGE",page_id);
  },
  postApp({commit},appi){
    let appinfo = JSON.stringify(appi);
    commit("POSTAPP",appinfo);
  },
  saveAllData({commit},preview){
    commit("saveAllDataApi",preview);
  },
  createPro({commit},name){
    commit("CREATEPRO",name);
  },

}

const getters = {
  getMineBaseMsg: state => state.getMineBaseMsg
}

const mutations = {
  [types.GET_BASE_API](state, res) {
    // alert("进入mutation");
    state.getMineBaseMsg = { ...state.getMineBaseMsg, alldata:res.data}

    // state.nowData = state.getMineBaseMsg.msg[0].pagedata;
    // console.log(res.data);
    console.log("进入mutations修改state成功");
  },
  getModuleAlldata(state, res){
      let alldata = res.data;
    state.getMineBaseMsg = { ...state.getMineBaseMsg, alldata:alldata }
  },

  saveAllDataApi(state,preview){
    if(preview){
        var tempwindow=window.open();
    }
    console.log("进入saveAllData");
    let savedata = JSON.stringify(state.getMineBaseMsg.alldata);
    let url = state.BASE_URL + '/api/page/saveAllPageStructures'
    api.AllDataApi(url,savedata)
      .then(res => {
        state.showToast = true;
        state.toastOption.text = res.message;
        if(preview){
          tempwindow.location='/design/preview/index.html';
        }
        setTimeout(() => {
          state.showToast = false;
        }, 2000);
        console.log("action中调用封装后的axios成功fasong", res)
      })
  },
  nowPageData(state,index){
    state.nowPageIndex = index;
  },
  ADDPAGE(state,page){
    let url = state.BASE_URL + '/api/page/addPage'
    api.addPageApi(url,page.name,state.program_id)
      .then(res => {
        page.page_id = res.data;
        state.getMineBaseMsg.alldata.pages.push(page);
        // console.log("action中调用封装后的axios添加页面成功fasong", res,page)
      })
    // console.log(state.getMineBaseMsg.alldata);
  },
  DELPAGE(state,page_id){
    let url = state.BASE_URL + '/api/page/deletePage'
    api.delPageApi(url,page_id)
      .then(res => {

      })
  },
  POSTAPP(state,appinfo){
    // console.log(appinfo);
    let url = state.BASE_URL + '/export'
    api.postAPPApi(url,appinfo,state.program_id)
      .then(res => {
        // console.log(res);
          if(res.status == '1') {
            state.showSetDialog2 = false;
            state.showSetDialog3 = true;
            state.download.path = res.path;
            state.download.size = res.size;
          }else{
            alert(res.message)
          }
    }).catch((error) => {
      console.log(error)
      alert('生成失败')
    })
  },
  CREATEPRO(state,name){
    let url = state.BASE_URL + '/api/user/createProgram'
    api.createPro(url,name).then(res =>{
      console.log(res,"create")
    })
  }

}

export default {
  state,
  actions,
  getters,
  mutations
}

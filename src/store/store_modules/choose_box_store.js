/**
 * Created by shawn on 2018/3/13 0013.
 */
import mine from './mine.js'
export default {
  state:{
    activeName:2,//0：顶部导航栏，1：底部导航栏，2:选中的是中间组件模块
    selectItem:0, //当前选中的组件，module里的第几个
    chooseBoxName:'vPageTitle',//选中组件名 type
    isShow: true,
    delComShowDialog: false,
  },
  mutations:{
    choose_box(state,n,cname){//n:选中的是顶部中间模块还是底部模块，cname选中组件名字
      state.activeName = n;
      if(n != 2){
        state.selectItem = null;
      }
    },
    choose_layout(state,layout){
      mine.state.getMineBaseMsg.alldata.pages[mine.state.nowPageIndex].module[state.selectItem].layout = layout //选择组件布局
      console.log(layout);
    },
    choose_border(state,sty){
      mine.state.getMineBaseMsg.alldata.pages[mine.state.nowPageIndex].module[state.selectItem].style.border__style = sty
    }
  },
}

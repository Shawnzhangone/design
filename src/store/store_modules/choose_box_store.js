/**
 * Created by shawn on 2018/3/13 0013.
 */
import mine from './mine.js'
export default {
  state:{
    activeName:2,
    selectItem:0,
    chooseBoxName:'vPageTitle',//选中组件名 type
    isShow: true,
    delComShowDialog: false,
  },
  mutations:{
    choose_box(state,n,cname){//这里的state对应着上面这个state
      state.activeName = n;
      if(n != 2){
        state.selectItem = null;
      }

      //你还可以在这里执行其他的操作改变state
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

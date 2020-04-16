import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

var science="pc"
  
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
  science='ios'
} else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
  science='ios'
} else { //pc
  science='pc'
};

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        science:science
    }
})

export default store
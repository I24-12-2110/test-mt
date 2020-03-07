import Vue from 'vue'
import Vuex from 'vuex'
import api from '../components/Api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName:'北京',
    cityCi:1,
    resentList : [],
    shouList: {
      alist: [],
      blist: [],
      clist: [],
      dlist: [],
      elist: [],
      flist: [],
      glist: [],
      hlist: [],
      jlist: [],
      klist: [],
      llist: [],
      mlist: [],
      nlist: [],
      plist: [],
      qlist: [],
      rlist: [],
      slist: [],
      tlist: [],
      wlist: [],
      xlist: [],
      ylist: [],
      zlist: []
    }
  },
  mutations: {
    changeCityName(state,payload){
      state.cityName = payload;
    },
    changeCityCi(state,payload){
      state.cityCi = payload;
    },
    changeResentList(state,payload){
      if(state.resentList.some(function(ele){
        return ele.city ==payload.city;
      })){
        let index = state.resentList.findIndex(function(ele){
          return ele.city == payload.city;
        })
        state.resentList.splice(index,1);
      }
      else if(state.resentList.length == 10){
        state.resentList.shift();
      }
      state.resentList.push(payload)
    },
    changeShouList(state,payload){
      state.shouList[`${payload.str}list`] = payload.data;
    }
  },
  actions: {
    changeShouList({commit}){
      let arr = "ABCDEFGHJKLMNPQRSTWXYZ".split("");
      for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toLowerCase();

        let reg = new RegExp(`^${str}`);
        api.getShowList(str).then(res => {
          let data = {};
          data.str = str;
          data.data = res.data.data.filter(function(ele) {
            return ele.cityPinYin.match(reg);
          });
          commit('changeShouList',data)
          // this.shouList[`${str}list`] = res.data.data.filter(function(ele) {
          //   return ele.cityPinYin.match(reg);
          // });
          // console.log(this.shouList.alist);
        });
      }
    }
  },
  modules: {
  }
})

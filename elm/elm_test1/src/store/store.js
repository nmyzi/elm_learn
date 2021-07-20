import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        nowcity:{'name':'','id':''},
        now_address:{'name':'','latitude':'','longitude':'','address':'','geohash':''},
        selected:'miste',
        shopsort:'compre'
    }
})
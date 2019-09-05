import Vue from 'vue'
import Vuex from 'vuex'
import addCart from './modules/addCart'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        addCart,
        cart
    }
})
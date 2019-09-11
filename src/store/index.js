import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import order from './modules/order'
import addAddress from './modules/addAddress'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        order,
        addAddress
    }
})
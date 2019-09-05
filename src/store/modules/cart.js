const state = {
    cart: []
};
const getters = {
    cart: state => state.cart
};
const mutations = {
    setCart(state, cart) {
        let flag = false;
        let i = -1;
        if (state.cart.length == 0) {
            state.cart.push(cart)
        } else {
            state.cart.forEach((element, index) => {
                if (element.obj.name == cart.obj.name) {
                    flag = true;
                    i = index
                }
            });
            if (flag) {
                state.cart[i].num++
            } else {
                state.cart.push(cart)
            }

        }

    },

};
const actions = {
    setCartAsync: ({ commit }, cart) => commit('setCart', cart),
    // delCartAsync: ({ commit }, cart) => commit('delCart', cart)
};


export default {
    state, getters, mutations, actions
}
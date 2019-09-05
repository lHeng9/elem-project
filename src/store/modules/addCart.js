const state = {
    addCart: {}
};
const getters = {
    addCart: state => state.addCart
};
const mutations = {
    setAddCart: (state, addCart) => state.addCart = addCart
};
const actions = {
    setAddCartAsync: ({ commit }, addCart) => commit('setAddCart', addCart)
};


export default {
    state, getters, mutations, actions
}
const state = {
    order: []
};
const getters = {
    order: state => state.order
};
const mutations = {
    setOrder: (state, order) => state.order.push(order)

};
const actions = {
    setOrderAsync: ({ commit }, order) => commit('setOrder', order),
};


export default {
    state, getters, mutations, actions
}
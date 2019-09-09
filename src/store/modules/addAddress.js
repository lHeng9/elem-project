const state = {
    addAddress: {}
};
const getters = {
    addAddress: state => state.addAddress
};
const mutations = {
    setAddAddress: (state, addAddress) => state.addAddress = addAddress
};
const actions = {
    setAddAddressAsync: ({ commit }, addAddress) => commit('setAddAddress', addAddress)
};


export default {
    state, getters, mutations, actions
}
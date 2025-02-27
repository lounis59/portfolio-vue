import { createStore } from 'vuex'

export default createStore({
  state: {
    timeline : null
  },
  getters: {
    getTimeline : state => state.timeline
  },
  mutations: {
    setTimeline(state,func) {
      state.timeline = func
    }
  },
  actions: {
    addTimeline({commit},func) {
      commit('setTimeline',func)
    }
  },
  modules: {
  }
})

import { createStore } from 'vuex';

export default createStore({
  state: {
    currentLanguage: 'ru',
  },
  mutations: {
    setLanguage(state, lang) {
      state.currentLanguage = lang;
    }
  },
  actions: {
    changeLanguage({ commit }, lang) {
      commit('setLanguage', lang);
    }
  },
  getters: {
    currentLanguage: state => state.currentLanguage
  }
});
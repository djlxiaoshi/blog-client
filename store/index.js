export const state = () => ({
  sidebarVisible: false
});

export const mutations = {
  changeSidebarVisible(state, visible) {
    state.sidebarVisible = visible;
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ dispatch, commit }, { req }) {
    // try {
    //   const user = await dispatch('user/getUserInfo');
    //   commit('user/setUserInfo', user);
    // } catch {
    //   commit('user/setUserInfo', null);
    // }
  }
};

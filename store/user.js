export const state = () => ({
  userInfo: null,
  userArticles: []
});

export const getters = {
  userInfo(state) {
    return state.userInfo;
  }
};

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
  setUserArticles(state, articles) {
    state.userArticles = articles;
  }
};

export const actions = {
  getUserInfo({ commit }) {
    const { response } = this.$http({
      url: `/user`,
      data: {}
    });

    return response.then(
      (user) => {
        // commit('setUserInfo', user);
        return user;
      },
      (e) => {
        throw e;
      }
    );
  },
  getUserArticles({ commit }, { pageSize, currentPage } = {}) {
    const { response } = this.$http({
      url: `/user/articles/`,
      data: {
        pageSize: pageSize || 10,
        currentPage: currentPage || 1
      },
      showSuccessMsg: false,
      showErrorMsg: false,
      jumpLogin: true
    });

    return response.then(
      (articles) => {
        commit('setUserArticles', articles.list);
      },
      (e) => {
        return e;
      }
    );
  },
  logout({ commit }) {
    const { response } = this.$http({
      url: '/logout',
      method: 'get',
      showSuccessMsg: true,
      showErrorMsg: true
    });

    response.then(
      (user) => {
        commit('setUserInfo', null);
      },
      () => {}
    );
  }
};

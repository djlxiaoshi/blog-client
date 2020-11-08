export const state = () => ({
  userInfo: null,
  userArticles: {
    list: [],
    total: 0,
    current: 1,
    pageSize: 1
  }
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
  setUserArticles(state, data) {
    state.userArticles.list = data.list;
    state.userArticles.total = data.total;
    state.userArticles.current = data.current;
    state.userArticles.pageSize = data.pageSize;
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
        commit('setUserInfo', user);
      },
      (e) => {
        throw e;
      }
    );
  },
  getUserArticles({ commit }, { pageSize, current } = {}) {
    const initState = state().userArticles;
    const _pageSize = pageSize || initState.pageSize;
    const _current = current || initState.current;
    const { response } = this.$http({
      url: `/user/articles/`,
      data: {
        pageSize: _pageSize,
        currentPage: _current
      },
      showSuccessMsg: false,
      showErrorMsg: false,
      jumpLogin: true
    });

    return response.then(
      (data) => {
        commit('setUserArticles', {
          ...data,
          current: _current,
          pageSize: _pageSize
        });
        return data;
      },
      (e) => {
        return e;
      }
    );
  },
  getAllUsers({ commit }, { pageSize, current, filter } = {}) {
    const { response } = this.$http({
      url: `/allUsers/`,
      data: {
        pageSize: pageSize || 10,
        currentPage: current || 1,
        filter
      },
      showSuccessMsg: false,
      showErrorMsg: false,
      jumpLogin: true
    });

    return response.then(
      (data) => {
        return {
          list: data.list,
          total: data.total
        };
      },
      (e) => {}
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

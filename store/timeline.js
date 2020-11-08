export const state = () => ({
  list: [],
  current: 1,
  total: 0,
  pageSize: 20
});

export const mutations = {
  setTimelines(state, data) {
    state.list = data.list;
    state.total = data.total;
    state.current = data.current;
    state.pageSize = data.pageSize;
  }
};

export const actions = {
  getTimelines({ commit }, { pageSize, current } = {}) {
    const initState = state();
    const _pageSize = pageSize || initState.pageSize;
    const _current = current || initState.current;
    const { response } = this.$http({
      url: '/timelines',
      data: {
        pageSize: _pageSize,
        currentPage: _current
      },
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      (data) => {
        commit('setTimelines', {
          ...data,
          current: _current,
          pageSize: _pageSize
        });
      },
      (e) => {
        return e;
      }
    );
  }
};

export const state = () => ({
  list: {}
});

export const mutations = {
  setTimelines(state, list) {
    state.list = list;
  }
};

export const actions = {
  getTimelines({ commit }, { pageSize, currentPage } = {}) {
    const { response } = this.$http({
      url: '/timelines',
      data: {
        pageSize: pageSize || 20,
        currentPage: currentPage || 1
      },
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      (articles) => {
        const data = articles.list;

        commit('setTimelines', data);
        return data;
      },
      (e) => {
        return e;
      }
    );
  }
};

import http from '~/assets/js/utils/http';

export const state = () => ({
  tags: []
});

export const mutations = {
  setAllTags(state, tags) {
    state.tags = tags;
  }
};

export const actions = {
  getAllTags({ commit }, { loadingTarget } = {}) {
    const { xhrInstance } = http({
      url: `/tags`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: true,
      loading: loadingTarget
    });

    return xhrInstance.then(
      (tags) => {
        commit('setAllTags', tags);
      },
      (e) => {
        return e;
      }
    );
  }
};

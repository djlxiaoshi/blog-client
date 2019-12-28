import http from '~/assets/js/utils/http';

export const state = () => ({
  list: [],
  currentTag: {}
});

export const getters = {
  tags(state) {
    return state.tags;
  }
};

export const mutations = {
  setAllTags(state, tags) {
    state.list = tags;
  },
  setTag(state, tag) {
    state.currentTag = tag;
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
  },
  getTag({ commit }, tagId) {
    const { xhrInstance } = http({
      url: `/tag/${tagId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: true
    });

    return xhrInstance.then(
      (tag) => {
        commit('setTag', tag);
      },
      (e) => {
        return e;
      }
    );
  }
};

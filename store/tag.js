export const state = () => ({
  allTags: [],
  currentTag: {}
});

export const getters = {
  tags(state) {
    return state.tags;
  }
};

export const mutations = {
  setAllTags(state, tags) {
    state.allTags = tags;
  },
  setTag(state, tag) {
    state.currentTag = tag;
  }
};

export const actions = {
  getAllTags({ commit }) {
    const { response } = this.$http({
      url: `/tags`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: true
    });

    return response.then(
      (tags) => {
        commit('setAllTags', tags);
      },
      (e) => {
        return e;
      }
    );
  },
  getTag({ commit }, tagId) {
    const { response } = this.$http({
      url: `/tag/${tagId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: true
    });

    return response.then(
      (tag) => {
        commit('setTag', tag);
      },
      (e) => {
        return e;
      }
    );
  }
};

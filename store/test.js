export const state = () => ({
  list: [],
  currentTag: {}
});

export const actions = {
  getAllTags({ commit }) {
    this.$http({
      url: `/tags`,
      method: 'get'
    });
  }
};

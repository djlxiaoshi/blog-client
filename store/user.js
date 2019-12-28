export const state = () => ({
  userInfo: null,
  name: 'djlxs'
});

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  }
};

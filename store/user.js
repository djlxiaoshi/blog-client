export const state = () => ({
  userInfo: null
});

export const getters = {
  userInfo(state) {
    return state.userInfo;
  }
};

export const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  }
};

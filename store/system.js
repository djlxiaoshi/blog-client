export const state = () => ({
  portalConfig: null,
  adminConfig: null
});

export const mutations = {
  setPortalConfig(state, data) {
    state.portalConfig = data;
  },
  setAdminConfig(state, data) {
    state.adminConfig = data;
  }
};

export const actions = {
  getAdminSystemConfig({ commit }) {
    const { response } = this.$http({
      url: '/adminConfig',
      data: {},
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then((data) => {
      return data;
    });
  },
  getPortalSystemConfig({ commit }) {
    const { response } = this.$http({
      url: '/portalConfig',
      data: {},
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then((data) => {
      commit('setPortalConfig', data);
    });
  }
};

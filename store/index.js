export const state = () => ({
  sidebarVisible: false
});

export const mutations = {
  changeSidebarVisible(state, visible) {
    state.sidebarVisible = visible;
  }
};

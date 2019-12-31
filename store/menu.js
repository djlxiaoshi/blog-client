export const state = () => ({
  activeMenu: '',
  list: [
    {
      path: '/',
      label: '发现'
    },
    {
      path: '/timeline',
      label: '时光轴'
    },
    {
      path: '/tag',
      label: '归档'
    },
    {
      path: '/about',
      label: '关于本站'
    },
    {
      path: '/test',
      label: '测试'
    },
    {
      path: '/crawl',
      label: '提取'
    }
  ]
});

export const mutations = {
  setActiveMenu(state, activeMenu) {
    state.activeMenu = activeMenu;
  }
};

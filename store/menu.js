function getMenuList() {
  const commonMenu = [
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
      label: '关于我'
    },
    {
      path: '/crawl',
      label: '快速发布'
    },
    {
      path: '/post',
      label: 'post'
    },
    {
      path: '/regist',
      label: 'regist'
    }
  ];
  if (process.env.NODE_ENV === 'development') {
    commonMenu.push({
      path: '/test/',
      label: 'test'
    });
  }

  return commonMenu;
}

export const state = () => ({
  activeMenu: '',
  list: getMenuList()
});

export const mutations = {
  setActiveMenu(state, activeMenu) {
    state.activeMenu = activeMenu;
  }
};

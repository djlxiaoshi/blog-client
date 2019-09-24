import menus from '@/router/routes';

export default {
  user: {
    articles: []
  }, // 用户信息
  activeMenu: '', // 激活菜单
  menuList: menus, // 菜单信息
  isMiniWidth: false, // 是否是小屏幕
  sidebarVisible: false, // 小屏幕时 菜单可见状态
  articles: [], // 文章列表
  article: {} // 当前文章
};

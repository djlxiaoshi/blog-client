import menus from '@/router/routes';

export default {
  userInfo: null, // 用户信息
  activeMenu: '', // 激活菜单
  menuList: menus, // 菜单信息
  isMiniWidth: false, // 是否是小屏幕
  sidebarVisible: false, // 小屏幕时 菜单可见状态
  userArticles: [], // 用户文章列表
  allArticles: [], // 所有文章
  tags: [], // 标签列表
  tag: {}, // 当前标签详情
  article: {} // 当前文章
};

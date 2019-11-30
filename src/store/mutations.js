/**
 * mutations 里面为同步操作，直接操作state
 */

import {
  SET_USER_INFO, SET_MENU_LIST, SET_ACTIVE_MENU,
  TOGGLE_IS_MINI_WIDTH, CHANGE_SIDEBAR_VISIBLE,
  SET_ALL_ARTICLES, SET_CURRENT_ARTICLE, SET_USER_ARTICLES,
  SET_TAGS, SET_TAG
} from './mutation-types';

export default {
  [SET_USER_INFO] (state, user) {
    state.userInfo = user;
  },
  [SET_MENU_LIST] (state, menuList) {
    state.menuList = menuList;
  },
  [SET_ACTIVE_MENU] (state, activeMenu) {
    state.activeMenu = activeMenu;
  },
  [TOGGLE_IS_MINI_WIDTH] (state, status) {
    state.isMiniWidth = status;
  },
  [CHANGE_SIDEBAR_VISIBLE] (state, status) {
    state.sidebarVisible = status;
  },
  [SET_CURRENT_ARTICLE] (state, article) {
    state.article = article;
  },
  [SET_ALL_ARTICLES] (state, articles) {
    state.allArticles = articles;
  },
  [SET_USER_ARTICLES] (state, articles) {
    state.userArticles = articles;
  },
  [SET_TAGS] (state, tags) {
    state.tags = tags;
  },
  [SET_TAG] (state, tag) {
    state.tag = tag;
  }
};

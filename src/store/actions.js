/**
 * 异步操作state
 */
import http from '../assets/js/utils/http';
import { SET_ALL_ARTICLES, SET_CURRENT_ARTICLE, SET_USER_ARTICLES, SET_TAGS, SET_TAG, SET_USER_INFO } from './mutation-types';

export default {
  getUserInfo ({ commit }) {
    const { xhrInstance } = http({
      url: `/user`,
      method: 'get',
      showErrorMsg: true
    });

    return xhrInstance.then((user) => {
      commit(SET_USER_INFO, user);
    }, (e) => {
        return e;
    });
  },
  getAllArticles ({ commit }, { loadingTarget, pageSize, currentPage } = {}) {
    const { xhrInstance } = http({
      url: '/articles',
      data: {
        pageSize: pageSize || 10,
        currentPage: currentPage || 1
      },
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false,
      loading: loadingTarget
    });

    return xhrInstance.then((articles) => {
      commit(SET_ALL_ARTICLES, articles.list);
      return articles;
    }, (e) => {
      return e;
    });
  },
  getUserArticles ({ commit }) {
    const { xhrInstance } = http({
      url: `/user/articles/`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return xhrInstance.then((articles) => {
      commit(SET_USER_ARTICLES, articles.list);
    }, (e) => {
      return e;
    });
  },
  getArticle ({ commit }, articleId) {
    const { xhrInstance } = http({
      url: `/article/${articleId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return xhrInstance.then((article) => {
      commit(SET_CURRENT_ARTICLE, article);
    }, (e) => {
      return e;
    });
  },
  getAllTags ({ commit }, { loadingTarget } = {}) {
    const { xhrInstance } = http({
      url: `/tags`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: true,
      loading: loadingTarget
    });

    return xhrInstance.then((tags) => {
      commit(SET_TAGS, tags);
    }, (e) => {
      return e;
    });
  },
  getTag ({ commit }, tagId) {
    const { xhrInstance } = http({
      url: `/tag/${tagId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: true
    });

    return xhrInstance.then((tag) => {
      commit(SET_TAG, tag);
    }, (e) => {
      return e;
    });
  }
};

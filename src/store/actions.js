/**
 * 异步操作state
 */
import http from '../assets/js/utils/http';
import { SET_ARTICLES, SET_CURRENT_ARTICLE } from './mutation-types';

export default {
  getArticles ({ commit }) {
    const { xhrInstance } = http({
      url: '/articles',
      data: {

      },
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return xhrInstance.then((articles) => {
      commit(SET_ARTICLES, articles.list);
    }, () => {
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
    }, () => {
    });
  }
};

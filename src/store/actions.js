/**
 * 异步操作state
 */
import http from '../assets/js/utils/http';
import { SET_ARTICLES } from './mutation-types';

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
  }
};

import http from '~/assets/js/utils/http';

export const state = () => ({
  userArticles: [], // 用户文章列表
  allArticles: [], // 所有文章
  // 当前文章
  currentArticle: {
    title: '',
    content: ''
  }
});

export const getters = {
  article(state) {
    return state.article;
  }
};

export const mutations = {
  setAllArticle(state, list) {
    state.allArticles = list;
  },
  setCurrentArticle(state, currentArticle) {
    state.currentArticle = currentArticle;
  }
};

export const actions = {
  getArticle({ commit }, articleId) {
    const { xhrInstance } = http({
      url: `/article/${articleId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return xhrInstance.then(
      (article) => {
        commit('setCurrentArticle', article);
      },
      (e) => {
        return e;
      }
    );
  },
  getAllArticles({ commit }, { loadingTarget, pageSize, currentPage } = {}) {
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

    return xhrInstance.then(
      (articles) => {
        commit('setAllArticle', articles.list);
        return articles;
      },
      (e) => {
        return e;
      }
    );
  }
};

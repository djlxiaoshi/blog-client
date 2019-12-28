import http from '~/assets/js/utils/http';

export const state = () => ({
  userArticles: [], // 用户文章列表
  allArticles: [], // 所有文章
  // 当前文章
  article: {
    title: '',
    content: ''
  }
});

export const mutations = {
  setAllArticle(state, list) {
    state.allArticles = list;
  }
};

export const actions = {
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

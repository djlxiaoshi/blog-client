export const state = () => ({
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
    const { response } = this.$http({
      url: `/article/${articleId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      (article) => {
        commit('setCurrentArticle', article);
      },
      (e) => {
        return e;
      }
    );
  },
  getArticleByUser({ commit }, articleId) {
    const { response } = this.$http({
      url: `/articleByUser/${articleId}`,
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      (article) => {
        commit('setCurrentArticle', article);
      },
      (e) => {
        return e;
      }
    );
  },
  getAllArticles({ commit }, { loadingTarget, pageSize, currentPage } = {}) {
    const { response } = this.$http({
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

    return response.then(
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

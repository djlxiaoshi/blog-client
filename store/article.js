import { ARTICLE_MODULE_URL } from '@/assets/js/global/url';

export const state = () => ({
  allArticles: {
    list: [],
    current: 1,
    pageSize: 10,
    total: 0
  }, // 所有文章
  currentPage: 1,
  tagArticles: [],
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
  setAllArticle(state, data) {
    state.allArticles = {
      ...state.allArticles,
      ...data
    };
  },
  setCurrentArticle(state, currentArticle) {
    state.currentArticle = {
      ...state.currentArticle,
      ...currentArticle
    };
  },
  setTagArticles(state, articles) {
    state.tagArticles = articles;
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
        return article;
      },
      (e) => {
        throw e;
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
  getArticlesByTagId({ commit }, tagId) {
    const { response } = this.$http({
      url: ARTICLE_MODULE_URL.getArticlesByTagId,
      method: 'get',
      data: {
        tagId
      },
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      ({ list }) => {
        commit('setTagArticles', list);
        return list;
      },
      (e) => {
        return e;
      }
    );
  },
  getAllArticles({ commit }, { pageSize, current } = {}) {
    const initState = state().allArticles;
    const _pageSize = pageSize || initState.pageSize;
    const _current = current || initState.current;
    const { response } = this.$http({
      url: '/articles',
      data: {
        pageSize: _pageSize,
        currentPage: _current
      },
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      (data) => {
        commit('setAllArticle', {
          ...data,
          current: _current,
          pageSize: _pageSize
        });
        return data;
      },
      (e) => {
        return e;
      }
    );
  }
};

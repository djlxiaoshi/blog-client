import dayjs from 'dayjs';
import { groupBy } from '~/assets/js/utils/tools';

export const state = () => ({
  list: {}
});

export const mutations = {
  setTimelines(state, list) {
    state.list = list;
  }
};

export const actions = {
  getTimelines({ commit }, { pageSize, currentPage } = {}) {
    const { response } = this.$http({
      url: '/timelines',
      data: {
        pageSize: pageSize || 10,
        currentPage: currentPage || 1
      },
      method: 'get',
      showSuccessMsg: false,
      showErrorMsg: false
    });

    return response.then(
      (articles) => {
        const data = articles.list;

        data.forEach((item) => {
          item._group = dayjs(item.createTime).format('YYYY-MM');
        });

        const timelines = groupBy(data, '_group');

        commit('setTimelines', timelines);
        return timelines;
      },
      (e) => {
        return e;
      }
    );
  }
};

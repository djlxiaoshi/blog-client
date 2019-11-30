import Vue from 'vue';
import { createApp } from './app';
import ProgressBar from 'components/common/Progress/Index';
import PageLoading from 'components/common/PageLoading/Index';
import 'nprogress/nprogress.css';
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(infiniteScroll);

// import './assets/js/register-sw'; // 注册Service Worker

// global progress bar
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount();
document.body.appendChild(bar.$el);

// global loading
const loading = new Vue(PageLoading).$mount();
document.body.appendChild(loading.$el);

// 客户端特定引导逻辑……

const { app, router, store } = createApp();

// 同步state
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

// a global mixin that calls `asyncData` when a route component's params change
// 例如 当从user/1 跳转到user/2 都应当再次执行asyncData
Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next);
    } else {
      next();
    }
  }
});

router.onReady(() => {

  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    let diffed = false;
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c));
    });
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
    if (!asyncDataHooks.length) {
      return next();
    }

    // 这里如果有加载指示器 (loading indicator)，就触发
    bar.start();
    loading.show();
    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
      // 停止加载指示器(loading indicator)
        bar.finish();
        loading.close();
        next();
      })
      .catch(next);
  });
  // 这里假定 App.vue 模板中根元素具有 `id="app"`
  app.$mount('#app');
});

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

// 为了解决在路由拦截中使用next的时候带来的警告，这里是比较暴力的解决方式
// https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: routes
  });

  return router;
}

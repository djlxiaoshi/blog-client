export default function({ store, route, error }) {
  const { path, name } = route;
  store.commit('menu/setActiveMenu', path);
  if (name === 'register') {
    error({ statusCode: 404, message: '页面不存在Page not found' });
  }
}

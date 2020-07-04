const env = process.env.NODE_ENV;
export default function({ store, route, error }) {
  const { path, name } = route;
  store.commit('menu/setActiveMenu', path);
  if (name === 'register') {
    error({ statusCode: 404, message: '页面不存在Page not found' });
  } else if (name === 'test' && env === 'production') {
    // 正式环境隐藏test 路由
    error({ statusCode: 404, message: '页面不存在Page not found' });
  }
}

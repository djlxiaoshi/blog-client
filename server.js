const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const koaRouter = require('koa-router');
const koaStatic = require('koa-static');
const { createBundleRenderer } = require('vue-server-renderer');

const resolve = file => path.resolve(__dirname, file);
const router = new koaRouter();

// const serverBundle = fs.readFileSync('./dist/bundle.server.js', 'utf-8');
// const renderer = createBundleRenderer(serverBundle, {
//   template: fs.readFileSync(resolve('./dist/index.ssr.html'), 'utf-8'),
// });

const serverBundle = require('./dist/vue-ssr-server-bundle');
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: true,
  template: fs.readFileSync(resolve('./dist/index.server.html'), 'utf-8'),
  clientManifest: require('./dist/vue-ssr-client-manifest.json'),
});

// 先匹配静态资源
app.use(koaStatic(path.resolve(__dirname, 'dist'), {
  index: 'test.html' // 这里不是index.html就行  否则会先返回index.html的静态资源
}));

// 静态资源没有匹配到的时候，再走这个服务端路由
router.get('*', async ctx => {
  const cookies = ctx.req.headers.cookie;
  console.log('重要信息-路径', ctx.req.url);
  console.log('重要信息-cookies', cookies);
  ctx.body = await renderer.renderToString({
    title: 'DJLXS',
    url: ctx.req.url,
    cookies: cookies
  }).then(html => {
      return html;
  }).catch(error => {
    console.log('error', error);
    return error.code; // 我们可以在前端路由中始终配置404页面，就不会走到这里
  });
});

app.use(router.routes());

app.listen(80, function () {
  console.log('server is listening on port 80')
});

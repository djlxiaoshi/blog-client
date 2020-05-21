# app-client

> frontend of my blog

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 项目搭建
- [x] SSR Nuxt.js
- [x] eslint/stylelint/husky/lint-staged
- [x] axios
- [x] vue-router
- [x] vuex
- [x] ElementUI

## 注意
- 不要npm run dev 时 设置NODE_ENV=production，如果想在开发环境使用正式环境，请直接在代码中assets/js/global/env.js配置。否则会出现`Manifest request to /_nuxt/e12a06ad6b43baad4b84.hot-update.json timed out.` [参考链接](https://github.com/nuxt/nuxt.js/issues/6202#issuecomment-519853526)

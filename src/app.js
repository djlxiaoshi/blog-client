import Vue from 'vue';
import App from './App.vue';
import { createStore } from './store';
import { createRouter } from './router';
import { sync } from 'vuex-router-sync';
import http from './assets/js/utils/http';
import envConfig from './assets/js/global/environment';
import interceptor from './router/interceptor';

import {
  Button, Menu, MenuItem, Submenu, Row, Col, Dropdown, DropdownMenu, DropdownItem,
  Form, FormItem, Input, Upload, Card, Notification, Tag, CheckboxGroup, CheckboxButton,
  Checkbox

} from 'element-ui';

import swal from 'sweetalert';

import 'element-ui/lib/theme-chalk/display.css';

import './assets/css/common.less';

import 'highlight.js/styles/monokai-sublime.css';

Vue.config.productionTip = false; // 开启vuex 调试工具

Vue.prototype.$http = http;
Vue.prototype.$notify = Notification;
Vue.prototype.$alert = swal;
Vue.prototype.$globalConfig = envConfig;

Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Card);
Vue.use(Tag);
Vue.use(CheckboxGroup);
Vue.use(CheckboxButton);
Vue.use(Checkbox);

export function createApp (context) {

  // 创建 router 实例
  const router = createRouter();

  // 创建store 实例
  const store = createStore();

  // 路由拦截
  interceptor(router, store);

  // 同步路由状态(route state)到 store
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  // 返回 app 和 router
  return { app, router, store };
}

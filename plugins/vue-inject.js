import Vue from 'vue';
import swal from 'sweetalert';
import { Notification } from 'element-ui';
import http from '~/assets/js/utils/http';
import envConfig from '~/assets/js/global/env';

Vue.prototype.$http = http;
Vue.prototype.$notify = Notification;
Vue.prototype.$alert = swal;
Vue.prototype.$globalConfig = envConfig;

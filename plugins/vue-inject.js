import Vue from 'vue';
import swal from 'sweetalert';
import { Notification } from 'element-ui';
import envConfig from '~/assets/js/global/env';

Vue.prototype.$notify = Notification;
Vue.prototype.$alert = swal;
Vue.prototype.$globalConfig = envConfig;

import Vue from 'vue';
import swal from 'sweetalert';
import { Notification } from 'element-ui';
import envConfig from '~/assets/js/global/env';
import { COLORS } from '~/assets/js/global/const';

Vue.prototype.$notify = Notification;
Vue.prototype.$alert = swal;
Vue.prototype.$globalConfig = envConfig;
Vue.prototype.$color = COLORS;

import Vue from 'vue';
import { formatTime } from '@/assets/js/utils/tools';

Vue.directive('time', {
  bind(el, binding, vnode) {
    const value = binding.value;
    el.innerHTML = formatTime(value);
  }
});

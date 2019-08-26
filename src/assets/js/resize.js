import { XS_WIDTH } from './global/const';

import store from '../../store';
import { TOGGLE_IS_MINI_WIDTH, CHANGE_SIDEBAR_VISIBLE } from 'store/mutation-types';

function setIsMiniWidth () {
  const clientWidth = document.body.clientWidth;
  store.commit(TOGGLE_IS_MINI_WIDTH, clientWidth < XS_WIDTH);

  // 当窗口大于XS_WIDTH，设置sidebar状态为隐藏状态
  if (clientWidth > XS_WIDTH) {
    store.commit(CHANGE_SIDEBAR_VISIBLE, false);
  }
}

// 设置DOM加载完毕初始状态值
window.addEventListener('DOMContentLoaded', function () {
  setIsMiniWidth();
});

// 监听窗口改变事件
// 加入节流 todo

window.addEventListener('resize', function () {
  setIsMiniWidth();
});

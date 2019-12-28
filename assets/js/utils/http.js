import axios from 'axios';
import NProgress from 'nprogress';
import { Notification, Loading } from 'element-ui';
import envConfig from '../global/env';

let xhrCacheList = [];
const CancelToken = axios.CancelToken;
const prefix = '/api';

// 请求发送拦截
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 增加响应拦截器（判断用户是否登录）
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Http(config) {
  const obj = {};
  const isBrowserEnv = process.browser; // 确定运行环境

  const commonHeaders = {
    'Content-Type': 'application/json'
  };
  // 服务端发送请求的时候，手动添加cookie
  if (!isBrowserEnv && global.__VUE_SSR_CONTEXT__.cookies) {
    commonHeaders.Cookie = global.__VUE_SSR_CONTEXT__.cookies;
  }
  const axiosConfig = {
    method: config.method || 'get',
    url: getFinalUrl(prefix, config.url),
    withCredentials: config.withCredentials || true,
    headers: Object.assign({}, commonHeaders, config.headers),
    cancelToken: new CancelToken(function executor(cancel) {
      obj.cancel = function() {
        // 如果是取消的请求，则在失败时也不现实错误提示
        obj.config.showErrorMsg = false;

        cancel();
      };
    })
  };

  obj.config = config;

  // 设置请求参数
  axiosConfig.method === 'get'
    ? (axiosConfig.params = config.data)
    : (axiosConfig.data = config.data);

  obj.xhrInstance = new Promise((resolve, reject) => {
    if (isBrowserEnv) {
      // 客户端渲染 开启滚动条
      NProgress.start();
    }

    if (config.loading) {
      obj.loadingInstance = Loading.service({
        target: config.loading,
        spinner: 'app-loading'
      });
    }

    axios(axiosConfig)
      .then((response) => {
        const data = response.data;

        if (!config.disableLoginCheck) {
          // 登录验证
          loginCheck(data);
        }

        if (data.code !== 0) {
          if (config.showErrorMsg) {
            Notification.error(data.message);
          }
          reject(data.message);
        } else {
          if (config.showSuccessMsg) {
            // 如果前端设置了提示信息则采用前端设置的提示信息，否则使用服务端返回的提示信息
            Notification.success(
              typeof config.showSuccessMsg === 'string'
                ? config.showSuccessMsg
                : data.message
            );
          }
          resolve(data.data);
        }
      })
      .catch((error) => {
        if (config.showErrorMsg) {
          Notification.error(
            typeof config.showErrorMsg === 'string'
              ? config.showErrorMsg
              : error.message
          );
        }
        reject(error);
      })
      .finally(() => {
        // 关闭loading
        if (config.loading) {
          obj.loadingInstance.close();
        }

        // 更新请求缓存列表
        const xhrIndex = xhrCacheList.indexOf(obj);
        xhrCacheList.splice(xhrIndex, 1);

        if (xhrCacheList.length === 0) {
          if (isBrowserEnv) {
            // NProgress.done();
          }
        }
      });
  });

  xhrCacheList.push(obj);

  return obj;
}

Http.cancelAll = function() {
  xhrCacheList.forEach((item) => {
    item.cancel();
  });

  // 清空请求缓存列表
  xhrCacheList = [];
};

// 根据模块名称取消对应请求
Http.cancelByModuleName = function(moduleName) {
  xhrCacheList.forEach((item, index) => {
    if (item.moduleName === moduleName) {
      item.cancel();
      // 从请求缓存列表中移除
      xhrCacheList.splice(index, 1);
    }
  });
};

Http.getXhrCacheList = function() {
  return xhrCacheList;
};

// 用户未登录处理
function loginCheck(response) {
  // 未登录
  if (response.code === -1000) {
    window.location.href = '/login';
  }
}

// 获取请求路径
function getFinalUrl(prefix, url) {
  if (/^(https:\/\/)|^(http:\/\/)|^(\/\/)/.test(url)) {
    return url;
  }
  return envConfig.SERVER_ADDRESS + prefix + url;
}

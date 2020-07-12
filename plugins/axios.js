import { Notification, Loading } from 'element-ui';
import NProgress from 'nprogress';
import envConfig from '~/assets/js/global/env';

export default function({ $axios, redirect, app, req }, inject) {
  // const cookies = app.$cookies.getAll();
  // console.log('cookies', req.headers.cookie);
  const SUCCESS_CODE = 0;
  const CancelToken = $axios.CancelToken;
  const defaultHeader = {
    'Content-Type': 'application/json'
  };
  let xhrCacheList = [];
  // 全局响应拦截
  $axios.onResponse((response) => {
    return Promise.resolve(response.data);
  });

  // 全局失败请求处理
  $axios.onError((error) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      code: error.status || 500,
      message: error.message,
      stack: error.stack,
      config: error.status
    });
  });

  // Create a custom axios instance
  const http = function(config) {
    const isClient = process.client;
    const isServer = process.server;
    const xhrInstance = {
      moduleName: config.moduleName || ''
    };
    const axiosConfig = {
      method: config.method || 'get',
      url: getFinalUrl('/api', config.url),
      withCredentials: true,
      headers: Object.assign({}, defaultHeader, config.headers),
      cancelToken: new CancelToken(function executor(cancel) {
        xhrInstance.cancel = function() {
          // 如果是取消的请求，则在失败时也不现实错误提示
          xhrInstance.config.showErrorMsg = false;
          cancel();
        };
      })
    };
    // 服务端设置cookie 貌似cookie-universal-nuxt会自动把cookie都添加上
    if (isServer) {
      console.log('--------cookies----------', app.$cookies.getAll());
      // axiosConfig.headers.Authorization = app.$cookies.get('login');
    }

    // 设置请求参数
    axiosConfig.method.toLowerCase() === 'get'
      ? (axiosConfig.params = config.data)
      : (axiosConfig.data = config.data);

    // 客户端开启滚动条
    if (isClient && config.progress) {
      NProgress.start();
    }

    // 客户端开启loading状态
    if (isClient && config.loading) {
      xhrInstance.loadingInstance = Loading.service({
        target: config.loading,
        spinner: 'common-loading-spinner',
        customClass: 'common-loading-wrap'
      });
    }

    xhrInstance.response = new Promise(async (resolve, reject) => {
      try {
        const response = await $axios(axiosConfig);
        if (response.code !== SUCCESS_CODE) {
          if (isClient && config.showErrorMsg) {
            // 错误信息提示
            Notification.error(response.message);
          }
          handleError(response, config, redirect);
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({ ...response, isAxiosError: false });
        } else {
          if (isClient && config.showSuccessMsg) {
            // 成功信息提示
            // 如果前端设置了提示信息则采用前端设置的提示信息，否则使用服务端返回的提示信息
            Notification.success(
              typeof config.showSuccessMsg === 'string'
                ? config.showSuccessMsg
                : response.message
            );
          }
          resolve(response.data);
        }
      } catch (error) {
        reject(error);
      } finally {
        // 关闭loading
        if (isClient && config.loading) {
          xhrInstance.loadingInstance.close();
        }

        // 当请求失败或者成功后，更新请求缓存列表
        const xhrIndex = xhrCacheList.indexOf(xhrInstance);
        xhrCacheList.splice(xhrIndex, 1);

        if (isClient && xhrCacheList.length === 0) {
          NProgress.done();
        }
      }
    });

    xhrCacheList.push(xhrInstance);
    return xhrInstance;
  };

  http.cancelAll = function() {
    xhrCacheList.forEach((item) => {
      item.cancel();
    });
    // 清空请求缓存列表
    xhrCacheList = [];
  };

  // 根据模块名称取消对应请求
  http.cancelByModuleName = function(moduleName) {
    xhrCacheList.forEach((item, index) => {
      if (item.moduleName === moduleName) {
        item.cancel();
        // 从请求缓存列表中移除
        xhrCacheList.splice(index, 1);
      }
    });
  };

  http.getXhrCacheList = function() {
    return xhrCacheList;
  };

  // Inject to context as $http
  inject('http', http);
}

function handleError(error, config, redirect) {
  switch (error.code) {
    case -1000: {
      // 用户未登录
      if (config.jumpLogin) {
        if (process.client) {
          const { pathname, search } = window.location;
          redirect(
            `/login?_redirectUrl=${encodeURIComponent(pathname + search)}`
          );
        } else {
          redirect('/login');
        }
      }
      break;
    }
  }
}

// 获取请求路径
function getFinalUrl(prefix, url) {
  if (/^(https:\/\/)|^(http:\/\/)|^(\/\/)/.test(url)) {
    return url;
  }
  return envConfig.SERVER_ADDRESS + prefix + url;
}

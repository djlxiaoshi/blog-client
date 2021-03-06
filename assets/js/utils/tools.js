import dayjs from 'dayjs';
import { COLORS } from '../global/const';

export function formatData(params) {
  const queryStrArr = [];
  Object.keys(params).forEach((key) => {
    const value = params[key];
    let queryStr = `${encodeURIComponent(key)}=${encodeURIComponent(
      params[key]
    )}`;
    if (Array.isArray(value)) {
      queryStr = `${encodeURIComponent(key)}=${encodeURIComponent(
        JSON.stringify(params[key])
      )}`;
    }
    queryStrArr.push(queryStr);
  });
  return queryStrArr.join('&');
}

/**
 * url参数转换为json
 * @param url
 */
export function urlToJson(url) {
  url = window.location.href || url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function(rs, $1, $2) {
    const name = decodeURIComponent($1);
    const val = String(decodeURIComponent($2));
    if (obj.hasOwnProperty(name)) {
      if (typeof obj[name] === 'string') {
        obj[name] = [obj[name]];
      }
      obj[name].push(val);
    } else {
      obj[name] = val;
    }
    return rs;
  });
  return obj;
}

/**
 * 获取 0 ~ num 的随机数（闭区间）
 */
export function randomNum(num) {
  return Math.floor(Math.random() * (num + 1));
}

/**
 * 是否是空对象
 * @param obj
 * @returns {boolean}
 */
export function isNullObject(obj) {
  if (Object.keys) {
    return Object.keys(obj).length > 0;
  } else {
    for (const i in obj) {
      if (Object.hasOwnProperty(i)) {
        return true;
      }
    }
    return false;
  }
}

/* 
分组
*/
export function groupBy(xs, key, result = {}) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, result);
}

/* 
随机获取颜色
*/
export function getRandomColor() {
  const colors = [];
  Object.keys(COLORS).forEach((key) => {
    colors.push(COLORS[key]);
  });

  return colors[randomNum(colors.length - 1)];
}

export function formatTime(timestamp) {
  return dayjs(timestamp).format('YYYY-MM-DD');
}

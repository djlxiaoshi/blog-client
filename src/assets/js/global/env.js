/*
*  环境配置文件
*  根据不同环境，获取不同环境的接口
* */

let env = {};

const development = {
  SERVER_ADDRESS: '//localhost:3000' // 开发环境后端接口地址
};

const test = {
  SERVER_ADDRESS: '//localhost:3000' // 测试环境后端接口地址
};

const production = {
  SERVER_ADDRESS: '//47.111.92.163:3000' // 正式环境后端接口地址
};

switch (process.env.NODE_ENV) {
  case 'development':
    env = development;
    break;
  case 'test':
    env = test;
    break;
  case 'production':
    env = production;
    break;
  default:
    env = development;
}

export default env;

/* 环境配置文件
 *  根据不同环境，获取不同环境的接口
 * */

const env = {};

const development = {
  SERVER_ADDRESS: 'http://localhost:3700', // 开发环境后端接口地址
  IMAGE_ADDRESS: 'http://images.djl.pub' // 七牛云图床地址
};

const test = {
  SERVER_ADDRESS: 'http://localhost:3700', // 测试环境后端接口地址
  IMAGE_ADDRESS: 'http://images.djl.pub' // 七牛云图床地址
};

const production = {
  SERVER_ADDRESS: 'http://djl.pub:3700', // 正式环境后端接口地址
  IMAGE_ADDRESS: 'http://images.djl.pub' // 七牛云图床地址
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(env, development);
    break;
  case 'test':
    Object.assign(env, test);
    break;
  case 'production':
    Object.assign(env, production);
    break;
  default:
    Object.assign(env, development);
}

export default env;

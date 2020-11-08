/* 环境配置文件
 *  根据不同环境，获取不同环境的接口
 * */

const env = {};

const development = {
  SERVER_ADDRESS: 'http://localhost:3700', // 开发环境后端接口地址
  IMAGE_ADDRESS: 'http://images.djl.pub', // 七牛云图床地址
  gitalk: {
    clientId: 'f8eb675bd5c920fbe6d6',
    clientSecret: '72a933b990d509cd709ad5eadcbe2ff0731d1e03',
    repo: 'blog-test'
  }
};

const test = {
  SERVER_ADDRESS: 'http://localhost:3700', // 测试环境后端接口地址
  IMAGE_ADDRESS: 'http://images.djl.pub', // 七牛云图床地址
  gitalk: {
    clientId: 'f8eb675bd5c920fbe6d6',
    clientSecret: '11bb95f2dc5d9125309017cb0131a07c85763d15',
    repo: 'blog-test'
  }
};

const production = {
  SERVER_ADDRESS: 'http://djl.pub:3700', // 正式环境后端接口地址
  IMAGE_ADDRESS: 'http://images.djl.pub', // 七牛云图床地址
  gitalk: {
    clientId: '0defc6b7dde11263449a',
    clientSecret: 'c91f6f8a6b463251f6185b85b22c9bc37d8b65ab',
    repo: 'blog'
  }
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

// akfun 功能模块引用主入口
const buildAction = require('../src/build.js'); // 构建脚本：生产环境
const devAction = require('../src/dev-server.js'); // 构建脚本：开发环境
const build2esm = require('../src/build2esm.js'); // 构建esm输出模块
const getCurWebpackConfig = require('../src/utils/getCurWebpackConfig.js'); // 用于获取当前webpack配置的方法

module.exports = {
  dev: devAction,
  build: buildAction,
  build2esm,
  curWebpackBaseConfPath: getCurWebpackConfig('base'),
};

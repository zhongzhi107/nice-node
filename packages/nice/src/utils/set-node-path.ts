import path from 'path';
import isNodeRuntime from './is-node-runtime';

export default (nodePath: string) => {
  if (isNodeRuntime) {
    console.log('检查到当前是 Javascript 运行环境');
    // js runtime 时 NODE_PATH 生效
    process.env.NODE_PATH = path.resolve(nodePath);
    require('module').Module._initPaths(); // eslint-disable-line global-require,no-underscore-dangle
    console.log(`设置process.env.NODE_PATH: ${process.env.NODE_PATH}`);
  }
};

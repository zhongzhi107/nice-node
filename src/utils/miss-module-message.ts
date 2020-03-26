/**
 * 检测到缺失的依赖包时给出的提示信息
 */
import log from './log';

export default (name: string): void => {
  log('error', `

  Cannot find module '${name}'

  Please run the following command to install the missing dependencies:
  > npm i ${name}

  `);
};

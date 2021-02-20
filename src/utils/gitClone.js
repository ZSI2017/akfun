const path = require('path');
const ora = require('ora');
const gitclone = require('git-clone');
const rm = require('rimraf').sync;
const { resolveToCurrentRoot } = require('../utils/pathUtils');

function gitClone(gitUrl, dir, callback) {
  const spinner = ora('[akfun]正在加载项目模板...').start();
  gitclone(
    gitUrl,
    resolveToCurrentRoot(dir),
    {
      checkout: 'master'
    },
    (err) => {
      if (err === undefined) {
        rm(resolveToCurrentRoot(path.resolve(dir, '.git')));
        spinner.succeed('[akfun]项目模板加载完成！');
        callback();
      } else {
        console.log(err);
        callback(err);
      }
    }
  );
}
module.exports = gitClone;

## 字蛛压缩字体，减小打包体积

```
// 全局安装font-spider
npm install font-spider -g
```

- 下载字体: https://www.100font.com/
- 在 assets 中放入下载的字体
- index.html 中添加 style 代码

  ```css
  <style>
     @font-face {
        font-family: 'qtbf';
        src: url('./src/assets/fonts/qtbf.ttf');
     }

     @font-face {
        font-family: 'zqljm';
        src: url('./src/assets/fonts/zqljm.ttf');
     }

     @font-face {
        font-family: 'UnidreamLED';
        src: url('./src/assets/fonts/UnidreamLED.ttf');
     }
  </style>
  ```

- index.html 引入字体，然后执行命令：
  ```
  font-spider ./index.html
  ```
- 在 assets/fonts/.font-spider 中为原始文件，生成已压缩字体位于 fonts 下

## 部署 github-pages

- 配置 yml 文件：
- 配置 deploy.sh 脚本：

  ```
  #!/usr/bin/env sh

  # 确保脚本抛出遇到的错误
  set -e

  # 生成静态文件
  pnpm build

  # 进入生成的文件夹
  cd dist

  # 如果是发布到自定义域名
  # echo 'www.example.com' > CNAME

  git init
  git add -A
  git commit -m 'deploy'

  git push -f git@github.com:wushengzhu/home.git HEAD:gh-pages

  cd -
  ```

  > 注意地，需要创建一个.npmrc 的文件

- 执行部署
  > 这是在 Git Bash UI 命令行执行，当然也可以通过 vscode 终端执行，需要配置
  ```
  pnpm bash
  ```
## 配置域名
- github的settings中pages添加域名验证
  - 根据生成的相关信息到域名解析创建一个TXT记录
  - 创建一个CNAME记录，把wushengzhu.github.io，添加进记录值
- 在仓库的settings中的域名添加已经验证的域名

## 提交规范

- feat 新增功能
- fix 修复 bug
- docs 文档变更
- style 代码格式（不影响功能，例如空格、分号等格式修正）
- refactor 代码重构
- perf 改善性能
- test 测试
- build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
- ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
- chore 变更构建流程或辅助工具
- revert 代码回退

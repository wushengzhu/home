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

## 部署github-pages
- 配置yml文件：
- 配置deploy.sh脚本：
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
  > 注意地，需要创建一个.npmrc的文件
- 执行部署
  > 这是在Git Bash UI命令行执行，当然也可以通过vscode终端执行，需要配置
  ```
  pnpm bash
  ```

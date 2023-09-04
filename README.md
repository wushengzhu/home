<h1 align="center">基于Vue3实现的静态个人主页</h1>

## 引入字体并压缩

- 字蛛压缩字体，减小打包体积
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

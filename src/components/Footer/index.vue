<script setup lang="ts">
import { MusicOne } from "@icon-park/vue-next";
import config from "@/../package.json";
import { mainStore } from "@/store";
import { ref } from 'vue'

const store = mainStore();
const fullYear = new Date().getFullYear();
const filing = ref(import.meta.env.VITE_FILINGS)
</script>

<template>
  <footer>
    <div class="power" v-show="!store.musicOpenState">
      <span>
        Copyright&nbsp;&copy;
        <template v-if="!store.mobileOpenState">
          2023
          -
        </template>
        {{ fullYear }}
      </span>
      &nbsp;
      <!-- &#124; -->
      <template v-if="!store.mobileOpenState">
        <!-- 以下信息请不要修改哦 -->
        <span class="hidden">
          Made&nbsp;by
          <a :href="config.github" target="_blank">
            {{ config.author }}
          </a>
        </span>
        &nbsp;
        <!-- &#124; -->
      </template>
      <!-- 站点备案 -->
      <a href="https://beian.miit.gov.cn" target="_blank">
        {{ filing }}
      </a>
    </div>
    <div class="lrc" v-show="store.musicOpenState">
      <music-one theme="filled" size="18" fill="#efefef" />
      <span class="lrc-text">
        {{ store.getMusicLrc ? store.getMusicLrc : "这句没有歌词" }}
      </span>
      <music-one theme="filled" size="18" fill="#efefef" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  text-align: center;
  backdrop-filter: blur(10px);
  background: rgb(0 0 0 / 25%);
  color: #fff;
  // z-index: 1;
  animation: fade;
  -webkit-animation: fade 0.5s;

  @media (max-width: 720px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    .hidden {
      display: none;
    }
  }

  .power {
    animation: fade;
    -webkit-animation: fade 0.3s;
  }

  .lrc {
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation: fade;
    -webkit-animation: fade 0.3s;

    .lrc-text {
      margin: 0 8px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;
    }

    .i-icon {
      width: 18px;
      height: 18px;
      display: inherit;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #1890ff;
  }

  // a:hover,
  // a:visited,
  // a:link,
  // a:active {
  //     color: #333;
  //     // 设置使所有a标签的四种状态都和本身颜色保持一致，样式代码自己写
  // }
}
</style>

<template>
  <div class="home-container">
    <div class="person-container">
      <div class="person-title">
        <div class="ml-ms fontface">{{ penName }}</div>
      </div>
      <div class="person-web">
        <CircleItem :component="Tool" tipContent="个人工具" />
        <CircleItem :component="Notes" tipContent="个人博客" />
        <CircleItem :imgSrc="'/images/logo.jpg'" tipContent="个人简历" />
        <CircleItem :component="PictureAlbum" tipContent="个人相册" />
        <CircleItem :component="Bookshelf" tipContent="个人书籍" />
      </div>
      <div class="tool-card">
        <Hitokoto />
        <MusicTool />
      </div>
      <div class="btn-area">
        <CartoonButton width="200" height="60" size="24" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hitokoto from '@/components/Hitokoto/index.vue'
import MusicTool from '@/components/MusicTool/index.vue'
import CircleItem from '@/components/CircleItem/index.vue'
import CartoonButton from '@/components/CartoonButton/index.vue'
import { Tool, GithubOne, PictureAlbum, Bookshelf, Log, Notes } from '@icon-park/vue-next';
import { ref } from 'vue';

const penName = ref(import.meta.env.VITE_HOME_PEN_NAME)
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;

  .person-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .person-title {
      font-family: "qtbf";
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
      // border-right: .15em solid #fff; //右边框
      white-space: nowrap; //禁止换行
      overflow: hidden; //隐藏多余的部分
      font-size: 3rem; //字体大小
      letter-spacing: .15em; //字母间距
      animation:
        typing 3.5s steps(30, end) infinite,
        blink-caret .5s step-end infinite; //光标闪烁
    }

    @keyframes typing {
      from {
        width: 0
      }

      to {
        width: calc(100% + .15em)
      }
    }

    @keyframes blink-caret {

      from,
      to {
        border-color: transparent
      }

      50% {
        border-color: #fff
      }
    }
  }

  .person-web {
    width: 36vw;
    display: flex;
    justify-content: space-between;
  }

  .tool-card {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-area {
    margin-top: 100px;
  }
}
</style>

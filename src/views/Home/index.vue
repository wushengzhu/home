<template>
  <div class="home-container">
    <div class="person-container">
      <div class="person-title">
        <div class="ml-ms fontface">{{ penName }}</div>
      </div>
      <div class="person-web">
        <CircleItem :component="Tool" tipContent="个人工具" />
        <CircleItem :component="Notes" tipContent="个人博客" />
        <CircleItem :component="ElAvatar" :imgSrc="'/images/logo.jpg'" tipContent="个人简历" />
        <CircleItem :component="PictureAlbum" tipContent="个人相册" />
        <CircleItem :component="Bookshelf" tipContent="个人书籍" />
      </div>
      <div class="tool-card">
        <Hitokoto />
        <MusicTool />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hitokoto from '@/components/Hitokoto/index.vue'
import MusicTool from '@/components/MusicTool/index.vue'
import CircleItem from '@/components/CircleItem/index.vue'
import { Tool, GithubOne, PictureAlbum, Bookshelf, Log, Notes } from '@icon-park/vue-next';
import { ref } from 'vue';
import { ElAvatar } from 'element-plus';

const penName = ref(import.meta.env.VITE_HOME_PEN_NAME)
</script>
<style lang="scss" scoped>
.home-container {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .person-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .person-title {
      font-size: 3rem;
      font-family: "qtbf";
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
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
}
</style>

<template>
  <div class="home-container">
    <div class="person-container">
      <div class="person-title">
        <div class="ml-ms fontface">{{ penName }}</div>
      </div>
      <div class="person-web">
        <template v-for="item of homePage">
          <CircleItem :component="item.component" :imgSrc="item.imgSrc" :tipContent="item.tipContent"
            @click="openModal(item.pageType)" />
        </template>
      </div>
      <div class="tool-card">
        <Hitokoto />
        <MusicTool />
      </div>
      <div class="btn-area">
        <CartoonButton :width="200" :height="60" :size="24" />
      </div>
    </div>
  </div>
  <HomeModal :showBody="false" :showClose="false" ref="modalRef">
    <div class="tools">
      <component :is="curComponent" />
    </div>
  </HomeModal>
</template>
<script setup lang="ts">
import Hitokoto from '@/components/Hitokoto/index.vue'
import MusicTool from '@/components/MusicTool/index.vue'
import HomeModal from '@/components/HomeModal/index.vue'
import CircleItem from '@/components/CircleItem/index.vue'
import CartoonButton from '@/components/CartoonButton/index.vue'
import CustomTool from '@/views/CustomTool/index.vue'
import PersonAlbum from '@/views/PersonAlbum/index.vue'
import PersonBlog from '@/views/PersonBlog/index.vue'
import PersonResume from '@/views/PersonResume/index.vue'
import BookShelf from '@/views/BookShelf/index.vue'
import { ref, shallowRef } from 'vue';
import { homePage } from '@/utils/contants';
import { CloseOne } from '@icon-park/vue-next'

const penName = ref(import.meta.env.VITE_HOME_PEN_NAME)
const pageComponents = {
  'tool': CustomTool,
  'blog': PersonBlog,
  'resume': PersonResume,
  'album': PersonAlbum,
  'book': BookShelf,
}
const modalRef = ref();
const curComponent = shallowRef() // shallowRef是浅层响应式数据，它只会将传入的对象的第一层属性转换为响应式数据，而不会递归地将嵌套对象的属性都转换为响应式数据。
const openModal = (type: homeTools) => {
  curComponent.value = pageComponents[type];
  if (modalRef.value) {
    modalRef.value.open();
  }
}
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

.tools {
  padding: 100px 200px;
  // box-sizing: border-box;
}

.close {
  z-index: 2;
}
</style>

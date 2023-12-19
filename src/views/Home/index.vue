<template>
  <!-- :class="{ 'home-container': !store.mobileOpenState, 'home-mobile-container': store.mobileOpenState }" -->
  <template v-if="!store.mobileOpenState">
    <div class="home-container">
      <div class="person-container">
        <TypeStrings :strings="typedText" />
        <div class="person-web">
          <template v-for="item of HomePage">
            <CircleItem
              :component="item.component"
              :src="item.src"
              :tipContent="item.tipContent"
              @click="openModal(item.pageType)"
              class="ml-ml mr-ml"
              v-if="!store.mobileOpenState"
            />
            <CardItem
              :component="item.component"
              :iconText="item.tipContent"
              v-if="store.mobileOpenState && item.canMobile"
            />
          </template>
        </div>
        <div class="tool-card">
          <Hitokoto />
          <MusicTool />
        </div>
        <div class="btn-area" v-if="store.getSystemSetting.showHomeBtn">
          <CartoonButton
            :width="200"
            :height="60"
            :size="24"
            v-if="!store.mobileOpenState"
          />
          <CartoonButton
            :is-show-cartoon="false"
            :width="150"
            :height="48"
            :size="20"
            v-if="store.mobileOpenState"
          />
        </div>
      </div>
    </div>
    <HomeModal
      :showBody="false"
      :showClose="false"
      :show-b-close="true"
      ref="modalRef"
    >
      <component :is="curComponent" />
    </HomeModal>
  </template>
  <template v-else>
    <div class="home-mobile-container">
      <CircleItem :src="'/images/logo.jpg'" />
      <TypeStrings :strings="typedText" :typeSpeed="50" :fontSize="24" />
    </div>
  </template>
</template>
<script setup lang="ts">
import Hitokoto from '@/components/Hitokoto/index.vue'
import MusicTool from '@/components/MusicTool/index.vue'
import HomeModal from '@/components/HomeModal/index.vue'
import CircleItem from '@/components/CircleItem/index.vue'
import TypeStrings from '@/components/TypeStrings/index.vue'
import CardItem from '@/components/CardItem/index.vue'
import CartoonButton from '@/components/CartoonButton/index.vue'
import CustomTool from '@/views/CustomTool/index.vue'
import PersonAlbum from '@/views/PersonAlbum/index.vue'
import PersonBlog from '@/views/PersonBlog/index.vue'
import PersonResume from '@/views/PersonResume/index.vue'
import BookShelf from '@/views/BookShelf/index.vue'
import { ref, shallowRef, onMounted, watch } from 'vue'
import { HomePage } from '@/utils/contants'
import { mainStore } from '@/store'

const penName = ref(import.meta.env.VITE_HOME_PEN_NAME)
const store = mainStore()
const pageComponents = {
  tool: CustomTool,
  blog: PersonBlog,
  resume: PersonResume,
  album: PersonAlbum,
  book: BookShelf,
}
const modalRef = ref()
// shallowRef是浅层响应式数据，
// 它只会将传入的对象的第一层属性转换为响应式数据，
// 而不会递归地将嵌套对象的属性都转换为响应式数据。
const curComponent = shallowRef()
const typedText = ref(["👋I'm wushengzhu", "🪄Welcome to wszhu's Home"])
const openModal = (type: homeTools) => {
  curComponent.value = pageComponents[type]
  if (modalRef.value) {
    modalRef.value.open()
  }
}

watch(
  () => store.mobileOpenState,
  (val: boolean) => {
    if (val) {
      typedText.value = ["👋I'm wushengzhu", 'Web Designer']
    } else {
      typedText.value = ["👋I'm wushengzhu", "🪄Welcome to wszhu's Home"]
    }
  }
)
</script>
<style lang="scss" scoped>
.home-mobile-container {
  height: 100vh;
  width: 100%;
  position: relative;
  margin-top: -50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .person-title {
    width: 100%;
    color: #fff;
    margin-bottom: 10px;
  }
}

.btn-area {
  margin-top: 50px;
  font-weight: 700;

  .el-btn {
    background-color: #f4cf47;
    border: 0px;
    width: 150px;
    letter-spacing: 1px;
    color: #000;
  }
}

.home-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  box-sizing: border-box;

  .person-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .person-web {
    // width: 36vw;
    width: 100%;
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

.home-mobile-container {
  // background-color: #333;
  color: #fff;
}
</style>

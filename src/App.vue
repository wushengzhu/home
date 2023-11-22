<template>
  <div class="app-container">
    <Header />
    <main>
      <!-- 季节模式 -->
      <component v-if="mode && mode !== 'default'" :is="season[mode]" />
      <!-- 背景图 -->
      <Background :bgc="bgc" />
      <Home />
      <!-- 左侧按钮 -->
      <FabsBtn v-if="showDarkMode && !store.mobileOpenState" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import Home from '@/views/Home/index.vue'
import Background from '@/components/Background/index.vue'
import Snow from '@/components/Season/Snow.vue'
import FallLeave from '@/components/Season/FallLeave.vue'
import Fog from '@/components/Season/Fog.vue'
import Rain from '@/components/Season/Rain.vue'
import FabsBtn from '@/components/FabsBtn/index.vue'
import Footer from '@/components/Footer/index.vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { checkDays, helloInit, getLunarTime } from '@/utils/getTime'
import { mainStore } from './store'
import { Cursor } from '@/utils/cursor'

const store = mainStore()
const { seasonMode, showDarkMode } = store.getSystemSetting
const season: ObjectType = {
  rain: Rain,
  fog: Fog,
  snow: Snow,
  leaves: FallLeave,
}
const bgc = ref(store.systemSettings.pcBgc)
const mode = ref(seasonMode)
// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth)
}
watch(
  [() => store.getSystemSetting.seasonMode, () => store.mobileOpenState],
  (val) => {
    if (val[1]) {
      bgc.value = (val[0] as SystemSettings).mobileBgc
    } else {
      mode.value = val[0]
    }
  }
)

onMounted(() => {
  new Cursor()
  // 加载完成事件
  window.addEventListener('load', () => {
    console.log('加载完成')
    // 去除加载标记
    document.getElementsByTagName('body')[0].className = ''
    // 给加载动画添加结束标记
    // const loadingBox = document.getElementById("loading-box") as HTMLElement;
    // loadingBox.classList.add("loaded");
    // 欢迎提示
    helloInit()
    checkDays()
    getLunarTime()
  })

  if (import.meta.env.VITE_NODE_ENV === 'production') {
    // 屏蔽右键
    document.oncontextmenu = () => {
      ElMessage({
        message: '为了浏览体验，本站禁用右键',
        grouping: true,
        duration: 2000,
      })
      return false
    }
    document.addEventListener('keydown', (e) => {
      // 禁止f12,禁用ctrl+shift+i,禁用shift+f10
      if (
        e.code === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.code === 'KeyI') ||
        (e.shiftKey && e.code === 'F10')
      ) {
        e.preventDefault()
      }
    })
    setInterval(() => {
      debugger
    }, 1000)
  }
  // 监听当前页面宽度
  window.addEventListener('resize', getWidth)
  window.addEventListener('load', getWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', getWidth)
  window.removeEventListener('load', getWidth)
})
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>

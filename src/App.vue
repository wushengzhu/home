<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Home from "@/views/Home/index.vue";
import Background from "@/components/Background/index.vue";
import Snow from "@/components/Season/Snow.vue";
import FallLeave from "@/components/Season/FallLeave.vue";
import Fog from "@/components/Season/Fog.vue";
import Rain from "@/components/Season/Rain.vue";
import FabsBtn from "@/components/FabsBtn/index.vue";
import Footer from "@/components/Footer/index.vue";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { checkDays, helloInit, getLunarTime } from "@/utils/getTime";
import { mainStore } from "./store";

const store = mainStore();
const { seasonMode, showDarkMode } = store.getSystemSetting;
const season: ObjectType = {
  rain: Rain,
  fog: Fog,
  snow: Snow,
  leaves: FallLeave
};
const mode = ref(seasonMode);
// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
};
watch(
  () => store.getSystemSetting,
  (val: SystemSettings) => {
    mode.value = val.seasonMode;
  }
);

onMounted(() => {
  // 加载完成事件
  window.addEventListener("load", () => {
    console.log("加载完成");
    // 去除加载标记
    document.getElementsByTagName("body")[0].className = "";
    // 给加载动画添加结束标记
    // const loadingBox = document.getElementById("loading-box") as HTMLElement;
    // loadingBox.classList.add("loaded");
    // 欢迎提示
    helloInit();
    checkDays();
    getLunarTime();
  });

  // checkDays();

  // 屏蔽右键
  // document.oncontextmenu = () => {
  //   ElMessage({
  //     message: "为了浏览体验，本站禁用右键",
  //     grouping: true,
  //     duration: 2000
  //   });
  //   return false;
  // };
});

// 监听当前页面宽度
window.addEventListener("resize", getWidth);

onBeforeUnmount(() => {
  window.removeEventListener("resize", getWidth);
});
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <!-- 季节模式 -->
      <component v-if="mode && mode !== 'default'" :is="season[mode]" />
      <Background bgc="/images/pc/1.webp" />
      <Home />
      <FabsBtn v-if="showDarkMode" />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>

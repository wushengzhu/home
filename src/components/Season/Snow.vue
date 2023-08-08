<template>
  <div class="snow-container">
    <template v-for="item of 200">
      <div class="snow" style=""></div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const snowList = ref([
  "--opacity:0.5247;--translateX:53.5971vw;--translateY:-10px;--scale:0.4118;--percent:67.901%;"
]);
</script>
<style lang="scss" scoped>
@import url("./style/snow.scss");

.snow-container {
  height: 100vh;
  // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  // filter: drop-shadow(0 0 10px white);
  // z-index: 1
}
</style>

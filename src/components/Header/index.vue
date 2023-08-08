<template>
  <header class="header-container">
    <div style="display: flex">
      <Weather />
      <DateTime />
    </div>
    <!-- <Lantern /> -->
    <hamburger-button
      class="hg-btn"
      theme="outline"
      size="32"
      fill="#fff"
      @click="showSetting"
    />
  </header>
  <HomeModal ref="modalRef" />
</template>
<script setup lang="ts">
import { HamburgerButton } from "@icon-park/vue-next";
import Lantern from "@/components/Lantern/index.vue";
import HomeModal from "@/components/HomeModal/index.vue";
import DateTime from "@/components/DateTime/index.vue";
import { ref } from "vue";

const modalRef = ref();
const showSetting = () => {
  if (modalRef.value) {
    modalRef.value.open();
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  // height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;

  .hg-btn {
    cursor: pointer;
  }
}
</style>

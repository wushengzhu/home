<template>
  <header class="header-container">
    <DateTime />
    <hamburger-button class="hg-btn" theme="outline" size="32" fill="#fff" />
  </header>
  <LibModal />
</template>
<script setup lang="ts">
import { HamburgerButton } from "@icon-park/vue-next";
import LibModal from '@/components/LibModal/index.vue'
import DateTime from '@/components/DateTime/index.vue'
</script>
<style lang="scss" scoped>
.header-container {
  height: 42px;
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

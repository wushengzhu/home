<template>
  <header class="header-container">
    <hamburger-button class="hg-btn" theme="outline" size="32" fill="#fff" />
  </header>
</template>
<script setup lang="ts">
import { HamburgerButton } from "@icon-park/vue-next";
</script>
<style lang="scss" scoped>
.header-container {
  height: 42px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 12px;
  padding-right: 12px;
  box-sizing: border-box;

  .hg-btn {
  }
}
</style>

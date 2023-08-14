<template>
  <header class="header-container">
    <div style="display: flex">
      <!-- <Weather /> -->
      <DateTime />
    </div>
    <hamburger-button class="hg-btn" theme="outline" size="32" fill="#fff" @click="showSetting()" />
  </header>
  <HomeModal ref="modalRef">
    <template v-for="item of settings">
      <SettingButton :btnText="item.text" v-model:isChecked="item.value" />
    </template>
  </HomeModal>
  <Lantern v-show="showLantern" />
</template>
<script setup lang="ts">
import { HamburgerButton } from "@icon-park/vue-next";
import Lantern from "@/components/Lantern/index.vue";
import SettingButton from "@/components/SettingButton/index.vue";
import HomeModal from "@/components/HomeModal/index.vue";
import DateTime from "@/components/DateTime/index.vue";
import { ref, reactive } from "vue";
import { mainStore } from "@/store";

const store = mainStore();
const { showLantern } = store.getSystemSetting;
const modalRef = ref();
const showSetting = () => {
  if (modalRef.value) {
    modalRef.value.open();
  }
};
const settings = reactive([
  { text: '暗黑模式', value: false },
  { text: '显示灯笼', value: true },
  { text: '季节模式', value: false },
])
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
  // position: absolute;
  // width: 100%;
  // box-sizing: border-box;

  .hg-btn {
    cursor: pointer;
    z-index: 1;
  }
}
</style>

<template>
  <header class="header-container">
    <div
      style="display: flex"
      v-show="systemSettings.showTimeAndWeather && !store.mobileOpenState"
    >
      <!-- <Weather /> -->
      <DateTime />
    </div>
    <div style="width: 50vw" v-if="store.mobileOpenState"></div>
    <div class="btn-area">
      <template  v-if="!store.mobileOpenState">
        <aiming class="hg-btn" theme="outline" size="28" fill="#fff" @click="toggleFullScreen()" v-if="isFullScreen" />
        <full-screen
          class="hg-btn"
          theme="outline"
          size="28"
          fill="#fff"
          @click="toggleFullScreen()"
          v-else
        />        
      </template>
      <hamburger-button
        class="hg-btn ml-ms"
        theme="outline"
        size="28"
        fill="#fff"
        @click="showSetting()"
      />      
    </div>
  </header>
  <HomeModal ref="modalRef" :showBody="!store.mobileOpenState">
    <div class="settings" v-if="!store.mobileOpenState">
      <template v-for="item of SystemValue" :key="item.attribute">
        <SettingButton
          :btnText="item.text"
          :btnType="item?.type"
          v-if="item?.type && item?.type === 'radio'"
        >
          <el-radio-group
            v-if="item?.radioArr"
            v-model="systemSettings[item.attribute]"
          >
            <el-radio
              v-for="jtem of item?.radioArr"
              :key="jtem.value"
              :label="jtem.value"
              @click.prevent="clickSetting(jtem.value, item.attribute)"
              >{{ jtem.text }}</el-radio
            >
          </el-radio-group>
        </SettingButton>
        <SettingButton
          :btnText="item.text"
          :btnType="item?.type"
          v-model:systemValue="systemSettings[item.attribute]"
          @click.prevent="
            clickSetting(!systemSettings[item.attribute], item.attribute)
          "
          v-else
        >
        </SettingButton>
      </template>
    </div>
    <div v-else>
      <MobileCard @close-modal="closeCard" />
    </div>
  </HomeModal>
  <Lantern v-show="store.getSystemSetting.showLantern" />
</template>
<script setup lang="ts">
import { HamburgerButton, FullScreen, Aiming } from "@icon-park/vue-next";
import Lantern from "@/components/Lantern/index.vue";
import MobileCard from "@/components/MobileCard/index.vue";
import SettingButton from "@/components/SettingButton/index.vue";
import HomeModal from "@/components/HomeModal/index.vue";
import DateTime from "@/components/DateTime/index.vue";
import { ref, reactive, watch } from "vue";
import { mainStore } from "@/store";
import { SystemValue } from "@/utils/contants";
import useFullScreen from "@/hooks/useFullScreen";

const { isFullScreen, toggleFullScreen } = useFullScreen();

const store = mainStore();
const modalRef = ref();
let systemSettings = reactive<ObjectType>({
  ...store.getSystemSetting,
});

const showSetting = () => {
  modalRef.value.open();
};

const closeCard = (ev: any) => {
  if (ev) {
    modalRef.value.close();
  }
};

watch(store.$state.systemSettings, (val: SystemSettings) => {
  systemSettings = val;
});

const clickSetting = (val: any, type: string) => {
  systemSettings[type] = val;
  store.setSystemSetting({ ...systemSettings });
};
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  
  .btn-area{
    // width: 100%;
    z-index: 100;
  }
  .hg-btn {
    cursor: pointer;
    z-index: 12;
  }

  .settings {
    height: 50vh;
    overflow-y: auto;
    box-sizing: border-box;
  }
}
</style>

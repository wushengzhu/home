<template>
  <header class="header-container">
    <div style="display: flex" v-show="systemSettings.showTimeAndWeather">
      <!-- <Weather /> -->
      <DateTime />
    </div>
    <hamburger-button class="hg-btn" theme="outline" size="32" fill="#fff" @click="showSetting()"
      v-if="!store.mobileOpenState" />
  </header>
  <HomeModal ref="modalRef">
    <div class="settings">
      <template v-for="item of SystemValue" :key="item.attribute">
        <SettingButton :btnText="item.text" :btnType="item?.type" v-if="item?.type && item?.type === 'radio'">
          <el-radio-group v-if="item?.radioArr" v-model="systemSettings[item.attribute]">
            <el-radio v-for="jtem of item?.radioArr" :key="jtem.value" :label="jtem.value"
              @click.prevent="clickSetting(jtem.value, item.attribute)">{{ jtem.text }}</el-radio>
          </el-radio-group>
        </SettingButton>
        <SettingButton :btnText="item.text" :btnType="item?.type" v-model:systemValue="systemSettings[item.attribute]"
          @click.prevent="
            clickSetting(!systemSettings[item.attribute], item.attribute)
            " v-else>
        </SettingButton>
      </template>
    </div>
  </HomeModal>
  <Lantern v-show="systemSettings.showLantern" />
</template>
<script setup lang="ts">
import { HamburgerButton } from "@icon-park/vue-next";
import Lantern from "@/components/Lantern/index.vue";
import SettingButton from "@/components/SettingButton/index.vue";
import HomeModal from "@/components/HomeModal/index.vue";
import DateTime from "@/components/DateTime/index.vue";
import { ref, reactive, watch } from "vue";
import { mainStore } from "@/store";
import { SystemValue } from "@/utils/contants";

const store = mainStore();
const modalRef = ref();
let systemSettings = reactive<ObjectType>({
  ...store.getSystemSetting
});

const showSetting = () => {
  if (modalRef.value) {
    modalRef.value.open();
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

  .hg-btn {
    cursor: pointer;
    z-index: 1;
  }

  .settings {
    height: 50vh;
    overflow-y: auto;
    box-sizing: border-box;
  }
}
</style>

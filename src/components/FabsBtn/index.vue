<template>
  <div
    :class="store.mobileOpenState ? 'fabs-mobile-container' : 'fabs-container'"
    @click="switchMode"
    v-if="showDarkBtn"
  >
    <CircleItem
      :placement="'left'"
      :tipContent="!isDark ? '黑夜模式' : '白日模式'"
      :component="DeskLamp"
      :iconSize="24"
      :bgWidth="48"
      :bgHeight="48"
      :bgColor="'#676767'"
      :fill="!isDark ? '#fff' : 'yellow'"
    />
  </div>
</template>
<script setup lang="ts">
import CircleItem from '@/components/CircleItem/index.vue'
import { mainStore } from '@/store'
import { Moon, SunOne, Tips, DeskLamp } from '@icon-park/vue-next'
import { ref, watch } from 'vue'
const store = mainStore()
const isDark = ref(store.getIsDark)
const showDarkBtn = ref(store.getSystemSetting.showDarkMode)
watch(
  () => [store.getIsDark, store.getSystemSetting.showDarkMode],
  (val: Array<any>) => {
    isDark.value = val[0] as boolean
    showDarkBtn.value = val[1] as boolean
  }
)
const switchMode = () => store.setIsDark(!isDark.value)
const watchTimeChange = () => {
  const d = new Date()
  if (d.getHours() >= 18 || d.getHours() < 6) {
    store.setIsDark(true)
  } else {
    store.setIsDark(false)
  }
}
// 自动变暗黑模式
watchTimeChange()
</script>
<style lang="scss" scoped>
.fabs-container {
  position: fixed;
  right: 70px;
  bottom: 200px;
  z-index: 1;
}

.fabs-mobile-container {
  position: fixed;
  right: 20px;
  bottom: 100px;
}
</style>

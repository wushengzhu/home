<template>
    <div class="fabs-container" @click="switchMode">
        <CircleItem :placement="'left'" :tipContent="!isDark ? '黑夜模式' : '白日模式'" :component="DeskLamp" :iconSize="24"
            :bgWidth="48" :bgHeight="48" :bgColor="'#676767'" :fill="!isDark ? '#fff' : 'yellow'" />
    </div>
</template>
<script setup lang="ts">
import CircleItem from '@/components/CircleItem/index.vue'
import { mainStore } from '@/store';
import { Moon, SunOne, Tips, DeskLamp } from '@icon-park/vue-next'
import { ref, watch } from 'vue';
const store = mainStore()
const isDark = ref(store.getIsDark)
watch(() => store.getIsDark, (val) => {
    isDark.value = val;
})
const switchMode = () => store.setIsDark(!isDark.value)

</script>
<style lang="scss" scoped>
.fabs-container {
    position: fixed;
    right: 70px;
    bottom: 200px;
    z-index: 2;
}
</style>

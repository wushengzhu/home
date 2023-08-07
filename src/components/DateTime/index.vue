<template>
    <div class="time-container">
        <Weather />
        <div class="date cards">
            <span>{{ currentTime?.year }}&nbsp;年&nbsp;</span>
            <span>{{ currentTime?.month }}&nbsp;月&nbsp;</span>
            <span>{{ currentTime?.day }}&nbsp;日&nbsp;</span>
            <span class="sm-hidden">{{ currentTime?.weekday }}</span>
        </div>
        <div class="time cards">
            <span>
                {{ currentTime?.hour }}:{{ currentTime?.minute }}:{{
                    currentTime?.second
                }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue"
import { getCurrentTime } from "@/utils/getTime";
import Weather from '@/components/Weather/index.vue'

// 当前时间
const currentTime = ref<any>({});
const timeInterval = ref();

onMounted(() => {
    timeInterval.value = setInterval(() => {
        currentTime.value = getCurrentTime();
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(timeInterval.value);
});
</script>
<style lang="scss" scoped>
.time-container {
    display: flex;
}

.date {
    height: 36px;
    padding: 5px;
    color: #fff;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 36px;
    margin-left: 5px;
}

.time {
    height: 36px;
    min-width: 130px;
    padding: 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    line-height: 36px;
    margin-left: 5px;
    font-size: 3rem;
    font-family: "UnidreamLED";
}
</style>

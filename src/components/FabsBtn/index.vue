<template>
    <div class="fabs-container">
        <CircleItem :isShowTooTip="false" :component="Moon" :iconSize="24" :bgWidth="60" :bgHeight="60"
            :bgColor="'green'" />
        <CircleItem :isShowTooTip="false" :component="SunOne" :iconSize="24" :bgWidth="60" :bgHeight="60"
            :bgColor="'grey'" />
    </div>
</template>
<script setup lang="ts">
import CircleItem from '@/components/CircleItem/index.vue'
import { ref, reactive } from "vue"
import { Moon, SunOne } from '@icon-park/vue-next'
</script>
<style lang="scss" scoped>
.fabs-container {
    position: fixed;
    right: 70px;
    bottom: 200px;
    // z-index: 10;
}
</style>

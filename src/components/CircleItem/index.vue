<template>
    <el-tooltip effect="dark" :content="tipContent" :placement="placement">
        <div class="circle circle-card">
            <!-- 头像 -->
            <component v-if="imgSrc" :is="component" :size="'large'" :src="imgSrc" class="img">
            </component>
            <component v-else :is="component" :theme="theme" :size="iconSize" :fill="fill"></component>
        </div>
    </el-tooltip>
</template>
<script setup lang="ts">
const props = defineProps({
    component: {}, // 组件
    theme: {
        type: String,
        default: 'outline'
    },
    iconSize: {
        type: Number,
        default: 48,
    },
    fill: {
        type: String,
        default: '#fff'
    },
    tipContent: {
        type: String,
        default: '个人简历'
    },
    placement: {
        type: String,
        default: 'top'
    },
    imgSrc: {
        type: String,
        default: null,
    }
})

</script>
<style lang="scss" scoped>
.img {
    width: 100%;
    height: 100%;
}
</style>

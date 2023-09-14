<template>
    <div class="scrollbar-container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.scrollbar-container {
    position: relative;
    z-index: auto;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    /* 浏览器滚动条样式 */
    /* width */
    &::-webkit-scrollbar {
        width: 6px;
        height: 4px;
    }

    /* 滚动条轨道 */
    &::-webkit-scrollbar-track {
        background: rgb(255, 255, 255);
        border-radius: 8px;
    }

    /* 滚动条 */
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }
}
</style>
  
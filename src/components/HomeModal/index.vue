<template>
    <Transition name="fade" v-if="isShow">
        <div class="modal-container" @click="close">
            <Transition name="zoom">
                <div class="list" @click.stop>
                    <close-one class="close" theme="filled" size="28" fill="#ffffff60" @click="close" v-show="showClose" />
                    <div class="modal-content">
                        <slot></slot>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { CloseOne } from '@icon-park/vue-next';
import { ref } from 'vue';

const isShow = ref(false)
const props = defineProps({
    showClose: {
        type: Boolean,
        default: true,
    },
    width: {
        type: Number,
        default: 640,
    },
    height: {
        type: Number,
        default: 600,
    }
})

const open = () => isShow.value = true;
const close = () => isShow.value = false;
defineExpose({
    open,
    close
})
</script>
<style lang="scss" scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    backdrop-filter: blur(20px);
    z-index: 2;

    .list {
        position: absolute;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        top: calc(50% - 300px);
        left: calc(50% - 320px);
        width: 640px;
        height: 600px;
        background-color: #ffffff66;
        border-radius: 6px;
        z-index: 999;

        @media (max-width: 720px) {
            left: calc(50% - 45%);
            width: 90%;
        }

        .close {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 28px;
            height: 28px;
            display: block;

            &:hover {
                transform: scale(1.2);
            }

            &:active {
                transform: scale(0.95);
            }
        }

        .modal-content {
            position: absolute;
            width: 100%;
            top: 50px;
            padding: 20px 30px;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
        }
    }
}

// 弹窗动画
.fade-enter-active {
    animation: fade 0.3s ease-in-out;
}

.fade-leave-active {
    animation: fade 0.3s ease-in-out reverse;
}

.zoom-enter-active {
    animation: zoom 0.4s ease-in-out;
}

.zoom-leave-active {
    animation: zoom 0.3s ease-in-out reverse;
}

@keyframes zoom {
    0% {
        opacity: 0;
        transform: scale(0) translateY(-600px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}
</style>

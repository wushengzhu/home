<template>
    <Transition name="fade" v-show="isShow">
        <div class="modal-container">
            <CircleItem :component="Left" :bg-color="'rgba(45, 143, 189, 0.685)'" :isShowTooTip="false" :icon-size="32"
                :bg-width="60" :bg-height="60" class="l-btn" @click="leftNext()" v-if="showLRNext" />
            <Transition name="zoom">
                <div class="modal-body" @click.stop :style="setBodyStyle" v-if="showBody">
                    <close-one class="close" theme="filled" size="28" fill="#ffffff60" @click="close" v-show="showClose" />
                    <div class="modal-content">
                        <slot></slot>
                    </div>
                </div>
                <slot v-else></slot>
            </Transition>
            <CircleItem :component="Right" :bg-color="'rgba(45, 143, 189, 0.685)'" :isShowTooTip="false" :icon-size="32"
                :bg-width="60" :bg-height="60" class="r-btn" @click="rightNext()" v-if="showLRNext" />

            <CircleItem :component="Close" :isShowTooTip="false" :icon-size="24" :bg-width="60" :bg-height="60"
                class="bottom-close" @click="close()" v-if="showBClose" />
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { CloseOne, Close, Left, Right } from '@icon-park/vue-next';
import CircleItem from '@/components/CircleItem/index.vue'
import { ref } from 'vue';

const isShow = ref(false)
const props = defineProps({
    showBClose: {
        type: Boolean,
        default: false,
    },
    showLRNext: {
        type: Boolean,
        default: false,
    },
    showBody: {
        type: Boolean,
        default: true,
    },
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

const setBodyStyle = ref(`--top:${Math.round(props.height / 2)}px;--left:${Math.round(props.width / 2)}px;--width:${props.width}px;--height:${props.height}px;`)
const open = () => isShow.value = true;
const close = () => isShow.value = false;
const leftNext = () => {

}
const rightNext = () => {

}

defineExpose({
    leftNext,
    rightNext,
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
    z-index: 1000;

    .modal-body {
        position: absolute;
        top: calc(50% - var(--top));
        left: calc(50% - var(--left));
        margin: 0 auto;
        width: var(--width);
        height: var(--height);
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
            cursor: pointer;

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
            // height: calc(50vh - 50px);
            top: 32px;
            padding: 20px 30px;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
        }
    }

    .bottom-close {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: 80px;
    }

    .l-btn,
    .r-btn {
        position: absolute;
        z-index: 2;
    }

    .l-btn {
        left: 100px;
        top: 50%;
    }

    .r-btn {
        right: 100px;
        top: 50%;
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

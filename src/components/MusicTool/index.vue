<template>
    <div class="music-container fixed-card" @mouseenter="volumeShow = true" @mouseleave="volumeShow = false">
        <div class="music-list">
            <music-menu theme="outline" size="24" fill="#fff" class="cursor" />
        </div>
        <div class="music-play">
            <go-start theme="outline" size="36" fill="#fff" class="cursor" />
            <play-one theme="outline" size="36" fill="#fff" class="cursor" />
            <go-end theme="outline" size="36" fill="#fff" class="cursor" />
        </div>
        <div class="music-name" v-show="!volumeShow">
            <span>{{
                // store.getPlayerData.name
                // ? store.getPlayerData.name + " - " + store.getPlayerData.artist
                // :
                "未播放音乐"
            }}</span>
        </div>
        <div class="music-volume" v-show="volumeShow">
            <div class="volume-icon">
                <volume-mute theme="filled" size="24" fill="#efefef" v-if="volumeNum == 0" />
                <volume-small theme="filled" size="24" fill="#efefef" v-else-if="volumeNum > 0 && volumeNum < 0.7" />
                <volume-notice theme="filled" size="24" fill="#efefef" v-else />
            </div>
            <el-slider v-model="volumeNum" :show-tooltip="false" :min="0" :max="1" :step="0.01" />
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    PlayOne,
    GoStart,
    GoEnd,
    MusicMenu,
    Pause,
    VolumeMute,
    VolumeSmall,
    VolumeNotice,
} from '@icon-park/vue-next'
import { ref } from 'vue'

const volumeShow = ref(false)
const volumeNum = ref(0.7)
</script>
<style lang="scss" scoped>
.music-container {
    width: 50%;
    height: 120px;
    margin-left: 10px;
    box-sizing: border-box;
    font-weight: 2rem;
    font-weight: bold;
    padding: 10px;

    .music-list {
        display: flex;
        justify-content: flex-end;
    }

    .music-play {
        display: flex;
        justify-content: space-around;
    }

    .music-name {
        display: flex;
        justify-content: center;
    }

    .music-volume {
        padding: 0 12px;
        display: flex;
        align-items: center;
        flex-direction: row;
        animation: fade;
        box-sizing: border-box;
        -webkit-animation: fade 0.3s;

        .volume-icon {
            margin-right: 12px;

            span {
                width: 24px;
                height: 24px;
                display: block;
            }
        }

        :deep(*) {
            transition: none;
        }

        :deep(.el-slider__button) {
            transition: 0.3s;
        }

        .el-slider {
            margin-right: 12px;
            --el-slider-main-bg-color: #efefef;
            --el-slider-runway-bg-color: #ffffff40;
            --el-slider-button-size: 16px;
        }
    }

    .cursor {
        cursor: pointer;
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
}
</style>

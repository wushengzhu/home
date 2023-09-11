<template>
  <div class="fixed-card" :class="store.mobileOpenState ? 'music-mobile-container' : 'music-container'"
    @mouseenter="volumeShow = true" @mouseleave="volumeShow = false">
    <div class="music-area">
      <music-menu theme="outline" size="24" fill="#fff" class="cursor" @click="openMusicList()" />
    </div>
    <div class="music-play">
      <go-start theme="outline" size="36" fill="#fff" class="cursor" @click="changeMusicIndex(0)" />
      <div @click="changePlayState">
        <play-one theme="filled" size="36" fill="#fff" class="cursor" v-show="!store.musicOpenState" />
        <pause theme="filled" size="36" fill="#fff" class="cursor" v-show="store.musicOpenState" />
      </div>
      <go-end theme="outline" size="36" fill="#fff" class="cursor" @click="changeMusicIndex(1)" />
    </div>
    <div class="music-name" v-show="!volumeShow">
      <span>{{
        store.getPlayerData.name
        ? store.getPlayerData.name + " - " + store.getPlayerData.artist
        : "未播放音乐"
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
  <!-- 音乐列表弹窗 -->
  <HomeModal ref="modalRef">
    <Player :songServer="playerData.server" :songType="playerData.type" :songId="playerData.id" :volume="volumeNum"
      :shuffle="true" ref="playerRef" v-show="musicListShow" />
  </HomeModal>
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
  CloseOne
} from "@icon-park/vue-next";
import Player from "@/components/Player/index.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { mainStore } from "@/store";
const store = mainStore();

// 音量条数据
const volumeShow = ref(false);
const volumeNum = ref(store.musicVolume ? store.musicVolume : 0.7);
// 播放列表数据
const musicListShow = ref(false);
const playerRef = ref();
const modalRef = ref();
const playerData = reactive({
  server: import.meta.env.VITE_MUSIC_SERVER,
  type: import.meta.env.VITE_MUSIC_TYPE,
  id: import.meta.env.VITE_MUSIC_ID
});

// 开启播放列表
const openMusicList = () => {
  musicListShow.value = true;
  modalRef.value.open();
};

// 音乐播放暂停
const changePlayState = () => {
  playerRef.value.playToggle();
};

// 音乐上下曲
const changeMusicIndex = (type: number) => {
  playerRef.value.changeMUSIC(type);
};

onMounted(() => {
  // 空格键事件
  window.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
      changePlayState();
    }
  });
  // 挂载方法至 window
  window.$openList = openMusicList;
});

// 监听音量变化
watch(
  () => volumeNum.value,
  (value: any) => {
    store.musicVolume = value;
    playerRef.value.changeVolume(store.musicVolume);
  }
);
</script>
<style lang="scss" scoped>
.music-mobile-container {
  width: 85%;
  height: 100px;
  margin: 5px auto;
  box-sizing: border-box;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 5px;

  .music-area {
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
}

.music-container {
  width: 50%;
  height: 120px;
  margin-left: 10px;
  box-sizing: border-box;
  font-weight: 2rem;
  font-weight: bold;
  padding: 10px;

  .music-area {
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
}

.music-list {
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  backdrop-filter: blur(20px);
  z-index: 100;

  .list {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
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

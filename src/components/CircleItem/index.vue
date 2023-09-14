<template>
  <div>
    <template v-if="isShowTooTip">
      <el-tooltip effect="dark" :content="tipContent" :placement="placement">
        <div class="circle circle-card" :style="dynamicStyle">
          <!-- 头像 -->
          <el-avatar v-if="src" :is="component" :size="'large'" :src="src" class="img">
          </el-avatar>
          <component v-else :is="component" :theme="theme" :size="iconSize" :fill="fill"></component>
        </div>
      </el-tooltip>
    </template>
    <template v-else>
      <div class="circle circle-card" :style="dynamicStyle">
        <!-- 头像 -->
        <el-avatar v-if="src" :is="component" :size="'large'" :src="src" class="img">
        </el-avatar>
        <component v-else :is="component" :theme="theme" :size="iconSize" :fill="fill">
        </component>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { mainStore } from "@/store";

const store = mainStore()

const props = defineProps({
  component: {}, // 组件
  theme: {
    type: String,
    default: "outline"
  },
  iconSize: {
    type: Number,
    default: 48
  },
  fill: {
    type: String,
    default: "#fff"
  },
  tipContent: {
    type: String,
    default: "个人简历"
  },
  placement: {
    type: String,
    default: "top"
  },
  src: {
    type: String || null,
    default: null
  },
  isShowTooTip: {
    type: Boolean,
    default: true
  },
  bgWidth: {
    type: Number,
    default: 120
  },
  bgHeight: {
    type: Number,
    default: 120
  },
  bgColor: {
    type: String,
    default: "rgba(0, 0, 0, 0.2509803922)"
  },
});

const dynamicStyle = ref(
  `--width: ${props.bgWidth}px; --height: ${props.bgHeight}px;--background:${props.bgColor
  };--borderRadius:${parseInt(props.bgWidth / 2 + "")}px;--iconSize:${props.iconSize}px`
);
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  width: var(--width);
  height: var(--height);
  background: var(--background);
  cursor: pointer;
}

.circle-card {
  border-radius: var(--borderRadius);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: scale(1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.98);
  }
}

svg {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

// 使svg外层元素与svg宽高一致性，方便居中处理
span {
  width: var(--iconSize);
  height: var(--iconSize);
}
</style>

<template>
  <div class="card cards" :style="dynamicStyle">
    <component
      :is="component"
      :theme="theme"
      :size="iconSize"
      :fill="fill"
    ></component>
    <div class="ml-ms">{{ iconText }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { mainStore } from '@/store'

const store = mainStore()

const props = defineProps({
  component: {}, // 组件
  theme: {
    type: String,
    default: 'outline',
  },
  iconSize: {
    type: Number,
    default: 24,
  },
  iconText: {
    type: String,
    default: '',
  },
  fill: {
    type: String,
    default: '#fff',
  },
  bgWidth: {
    type: Number,
    default: 150,
  },
  bgHeight: {
    type: Number,
    default: 80,
  },
  bgColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.2509803922)',
  },
})

const dynamicStyle = ref(
  `--width: ${props.bgWidth}px; --height: ${props.bgHeight}px;--background:${
    props.bgColor
  };--borderRadius:${parseInt(props.bgWidth / 2 + '')}px;--iconSize:${
    props.iconSize
  }px`
)
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  width: var(--width);
  height: var(--height);
  background: var(--background);
  cursor: pointer;
  margin: 5px 10px;
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

<template>
  <div class="typed" :style="dynamicStyle">
    <span class="typed-strings"></span>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as Typed from 'typed.js' // 打字动画库，也可以包含在常规脚本标记中

const props = defineProps({
  fontSize: {
    type: Number,
    default: 24,
  },
  strings: {
    type: Array,
    default: [],
  },
  typeSpeed: {
    type: Number,
    default: 100,
  },
  textColor: {
    type: String,
    default: '#fff',
  },
})

const dynamicStyle = ref(
  `--fontSize:${props.fontSize}px;--textColor:${props.textColor}`
)

onMounted(() => {
  const typed = new Typed('.typed-strings', {
    strings: props.strings,
    typeSpeed: props.typeSpeed, //打字的速度
    smartBackspace: true, // 开启智能退格 默认false
    backSpeed: 100, //后退速度
    backDelay: 500, //后退延迟
    loop: true, //是否循环 默认false
    startDelay: 1000, //起始时间
    fadeOut: true, //淡出效果
  })
})
</script>
<style lang="scss" scoped>
.typed {
  width: 100%;
  color: var(--textColor);
  font-size: var(--fontSize);
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

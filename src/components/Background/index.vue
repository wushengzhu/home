<template>
  <div class="bg-container">
    <img class="bg" :src="props.bgc" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  bgc?: string;
}
const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
.bg-container,
.bg {
  width: 100%;
  height: 100%;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.bg {
  transform: scale(1);
  filter: blur(0);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1.5s ease 0s;
  backface-visibility: hidden;
}
</style>

<template>
  <div class="bg-container">
    <!-- <img class="light-bg" :src="props.bgc" /> -->
    <div class="dark-bg" ref="bgRef">
      <div class="star comet"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";

interface Props {
  bgc?: string;
}
const props = defineProps<Props>();

const wH = window.innerHeight;
const wW = window.innerWidth;
const bgRef = ref();
const generateStars = (n: number) => {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.className =
      i % 20 == 0
        ? "star star--big"
        : i % 9 == 0
        ? "star star--medium"
        : "star";
    // random everywhere!
    div.setAttribute(
      "style",
      `top:${Math.round(Math.random() * wH)}px;left:${Math.round(
        Math.random() * wW
      )}px;animation-duration:${
        Math.round(Math.random() * 3000) + 3000
      }ms;animation-delay:${Math.round(Math.random() * 3000)}ms;`
    );
    bgRef.value.appendChild(div);
    // document.body.appendChild(div);
  }
};

onMounted(() => {
  generateStars(150);
});
</script>
<style lang="scss" scoped>
.bg-container,
.light-bg,
.dark-bg {
  width: 100%;
  height: 100%;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.light-bg {
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

.dark-bg {
  background-color: #03061a;
  // position: relative;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

.star {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(237, 205, 163, 0.8);
  box-shadow: 0 0 40px 0 rgba(237, 205, 163, 0.8), 0 0 20px 0 #ffffff;
  animation: glow 5s infinite;
}
.star--medium {
  width: 6px;
  height: 6px;
  position: absolute;
}
.star--big {
  width: 9px;
  height: 9px;
  position: absolute;
  box-shadow: 0 0 40px 0 #edcda3, 0 0 20px 0 #ffffff, inset 0 0 4px #ffffff;
}

.comet {
  width: 6px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 40px 0 #edcda3, 0 0 20px 0 #ffffff,
    inset 0 0 8px rgba(255, 255, 255, 0.6);
  top: 0;
  left: 80%;
  opacity: 0.3;
  transform: rotate(-45deg) translate(0, -50px);
  animation: comet 6s infinite;
}
.comet:after {
  content: "";
  width: 20vw;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(237, 205, 163, 0.4);
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes glow {
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.9;
  }
}
@keyframes comet {
  0% {
    transform: rotate(-45deg) translateX(0);
    opacity: 0.3;
  }
  10% {
    opacity: 1;
  }
  20% {
    transform: rotate(-45deg) translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: rotate(-45deg) translateX(-100vw);
    opacity: 0;
  }
}
</style>

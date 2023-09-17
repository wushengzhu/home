<template>
  <div class="fog-container">
    <div class="fog-img fog-img-first"></div>
    <div class="fog-img fog-img-second"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.fog-container {
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
}

.fog-img {
  position: absolute;
  height: 100vh;
  width: 300vw;
}

.fog-img-first {
  background: url("/images/fog-1.png") repeat-x;
  background-size: contain;
  background-position: center;
  -webkit-animation: marquee 60s linear infinite;
  animation: marquee 60s linear infinite;
}

.fog-img-second {
  background: url("/images/fog-2.png") repeat-x;
  background-size: contain;
  background-position: center;
  -webkit-animation: marquee 40s linear infinite;
  animation: marquee 40s linear infinite;
}

@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-200vw, 0, 0);
    transform: translate3d(-200vw, 0, 0);
  }
}

@keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-200vw, 0, 0);
    transform: translate3d(-200vw, 0, 0);
  }
}
</style>

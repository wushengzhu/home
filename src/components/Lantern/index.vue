<template>
  <div class="lantern-container">
    <div class="lantern-box" v-for="item in textValues">
      <div class="lantern-light">
        <div class="lantern-line"></div>
        <div class="lantern-circle">
          <div class="lantern-rect">
            <div class="lantern-text">{{ item }}</div>
          </div>
        </div>
        <div class="lantern-tassel-top">
          <div class="lantern-tassel-middle"></div>
          <div class="lantern-tassel-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getLunarTime } from '@/utils/getTime'

const textValues = ref(['新', '年', '快', '乐'])
const getTextChange = (timeObjs = getLunarTime('solar2lunar')) => {
  if (timeObjs && timeObjs.date.includes('1-1')) {
    textValues.value = ['元', '旦', '快', '乐']
  }
  if (timeObjs && timeObjs.lunarDate.includes('1-1')) {
    textValues.value = ['新', '年', '快', '乐']
  }
}
</script>
<style lang="scss" scoped>
.lantern-box {
  position: fixed;
  pointer-events: none;
  z-index: 10;
}

.lantern-light {
  position: relative;
  width: 120px;
  height: 90px;
  background-color: #d8000f;
  margin: 50px;
  border-radius: 50%;
  box-shadow: -5px 5px 50px 4px #fa6c00;
  animation: swing 3s infinite ease-in-out;
}

.lantern-light::before,
.lantern-light::after {
  content: '';
  position: absolute;
  border: 1px solid #dc8f03;
  width: 60px;
  height: 12px;
  background: linear-gradient(
    to right,
    #dc8f03,
    #ffa500,
    #dc8f03,
    #ffa500,
    #dc8f03
  );
  margin-left: 20px;
  left: 10px;
}

.lantern-light::before {
  top: -7px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.lantern-light::after {
  bottom: -7px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.lantern-line {
  width: 2px;
  height: 50px;
  background-color: #dc8f03;
  position: absolute;
  top: -50px;
  left: 60px;
}

.lantern-circle,
.lantern-rect {
  height: 90px;
  border-radius: 50%;
  border: 2px solid #dc8f03;
  background-color: rgba(216, 0, 15, 0.1);
}

.lantern-circle {
  width: 100px;
  margin: 12px 8px 8px 10px;
}

.lantern-rect {
  margin: -2px 8px 8px 26px;
  width: 45px;
}

.lantern-text {
  font: bold 2rem / 85px 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;
  text-align: center;
  color: #dc8f03;
}

.lantern-tassel-top {
  width: 5px;
  height: 20px;
  background-color: #ffa500;
  border-radius: 0 0 5px 5px;
  position: relative;
  margin: -5px 0 0 59px;
  animation: swing 3s infinite ease-in-out;
}

.lantern-tassel-middle,
.lantern-tassel-bottom {
  position: absolute;
  width: 10px;
  left: -2px;
}

.lantern-tassel-middle {
  border-radius: 50%;
  top: 14px;
  height: 10px;
  background-color: #dc8f03;
  z-index: 2;
}

.lantern-tassel-bottom {
  background-color: #ffa500;
  border-bottom-left-radius: 5px;
  height: 35px;
  top: 18px;
  z-index: 1;
}

@keyframes swing {
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-10deg);
  }
}

.lantern-container .lantern-box:first-child {
  left: 10px;
  top: -30px;
}

.lantern-container .lantern-box:nth-child(2) {
  left: 160px;
  top: -25px;
}

.lantern-container .lantern-box:nth-child(3) {
  right: 160px;
  top: -28px;
}

.lantern-container .lantern-box:last-child {
  right: 10px;
  top: -26px;
}
</style>

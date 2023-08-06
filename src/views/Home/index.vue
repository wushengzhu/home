<template>
  <div class="home-container">
    <div class="person-container">
      <div class="title">
        <el-avatar :size="'large'" :src="'/images/logo.jpg'" />
        <div class="ml-ms fontface">路灯下的光</div>
      </div>
      <div class="circle circle-card"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .person-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 3rem;
      font-family: "qtbf";
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
    }

    .circle {
      width: 100px;
      height: 100px;
    }
  }
}
</style>

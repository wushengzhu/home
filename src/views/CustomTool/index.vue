<template>
  <div class="tool-container" @click.stop>
    <template v-for="item of tools">
      <div class="tool-card cards">
        <h4 class="tool-title">{{ item.name }}</h4>
        <div class="tool-detail">
          <span>描述：</span>
          <span>{{ item.detail }}</span>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import tools from "@/assets/tools.json"
</script>
<style lang="scss" scoped>
.tool-container {
  box-sizing: border-box;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;

  .tool-card {
    width: 200px;
    height: 100px;
    background: rgba(45, 143, 189, 0.685);
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    box-sizing: border-box;
  }

  .tool-title {
    text-align: center;
  }

  .tool-detail {
    margin-top: 10px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>

<template>
  <div class="tool-container" @click.stop>
    <template v-for="item of tools">
      <a class="tool-card cards" :href="item.link" target="_blank">
        <h4 class="tool-title">{{ item.name }}</h4>
        <div class="tool-detail">
          <span>描述：</span>
          <span>{{ item.detail }}</span>
        </div>
        <div class="tool-tags">
          <el-tag v-for="jtem in item.keywords?.split(',')" :key="jtem" type="success" effect="dark">
            {{ jtem }}
          </el-tag>
        </div>
      </a>
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

  a {
    display: block;
    text-decoration: none;
    color: #fff;
  }

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
    margin-top: 5px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .tool-tag {
    margin-top: 5px;
  }
}
</style>

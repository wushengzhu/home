<template>
  <div class="tool-container">
    <div class="tool-container-head">
      <div class="head-container">
        <div class="left-tag">
          <el-check-tag
            :checked="selected === 'total'"
            @change="onChange('total')"
            class="mr-ms"
          >
            全部
          </el-check-tag>
          <template v-for="item of tools" :key="item.type">
            <el-check-tag
              :checked="selected === item.type"
              @change="onChange(item.type)"
              class="mr-ms"
            >
              {{ item.name }}
            </el-check-tag>
          </template>
        </div>
        <div class="right-search">
          <el-input
            v-model="searchValue"
            placeholder="请输入"
            :suffix-icon="Search"
          />
        </div>
      </div>
    </div>
    <div class="tool-container-content">
      <div class="item-container" v-for="item of tempT">
        <div class="item-type">{{ item.name }}</div>
        <el-row :gutter="24">
          <template v-if="item.children?.length === 0">
            <el-empty
              :image-size="50"
              :description="'暂无数据'"
              style="margin: 0 auto"
            />
          </template>
          <template v-else>
            <el-col
              v-for="jtem of item.children"
              :span="6"
              :xs="2"
              :sm="2"
              :md="3"
              :lg="4"
              :xl="4"
            >
              <a :href="jtem.link" target="_blank" class="tool-item">
                {{ jtem.name }}
              </a>
            </el-col>
          </template>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import tools from '@/assets/json/tools.json'
import { Tool, HamburgerButton } from '@icon-park/vue-next'
import Scrollbar from '@/components/Scrollbar/index.vue'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const tempT = ref<any>(tools)
const searchValue = ref('')
const selected = ref('total')
const onChange = (ev:any: any) => {
  selected.value = ev
  if (ev === 'total') {
    tempT.value = tools
  } else {
    let temp = tools.filter((item) => item.type === ev)
    tempT.value = temp
  }
}
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  position: relative;
}

.tool-container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  background-color: #f1f5f9;
  box-sizing: border-box;

  &-head {
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: #fff;
    border-bottom: 0px solid #e5e9f2;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);

    .head-container {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    }
  }

  &-content {
    width: 80%;
    height: 80%;
    margin: 0 auto;
    box-sizing: border-box;

    .item-container {
      width: 100%;
      position: relative;
      top: 100px;
      // left: 0;
      // display: flex;
      // flex-direction: column;
      min-width: 0;
      // word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      padding: 24px 20px 4px;
      margin-bottom: 20px;
      border: 0 solid rgba(0, 0, 0, 0.125);
      border-radius: 4px;
      box-sizing: border-box;

      .item-type {
        position: absolute;
        // width: 36px;
        // height: 36px;
        // background-color: #409eff;
        top: -15px;
        right: 10px;
        background-color: #409eff;
        color: #fff;
        padding: 5px 18px;
        border-radius: 8px;
        font-size: 1rem;
        box-shadow: 0 0.5rem 0.625rem #409eff57;
      }
    }

    .tool-item {
      width: 100%;
      height: 48px;
      line-height: 48px;
      display: block;
      margin: 6px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
      color: #526484;
      border-radius: 5px;
      border: 1px solid #dbdfea;
      box-sizing: border-box;
      box-shadow: 0 3px 12px 1px rgba(43, 55, 72, 0.15) !important;

      &:hover {
        color: #409eff;
        background-color: #d9ecff;
        font-weight: bold;
      }
    }
  }
}

:deep(.el-row) {
  margin-bottom: 20px;
}
</style>

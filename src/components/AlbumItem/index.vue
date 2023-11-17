<template>
  <div class="album-card">
    <el-image
      :src="image"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      :initial-index="4"
      fit="cover"
      class="album-card-image"
    />
    <div class="album-card-table">
      <div class="table-title">
        <pic theme="filled" size="16" fill="#ff9800" class="image" />
        <span class="title">{{ title }}</span>
      </div>
      <div class="table-info">{{ info }}</div>
      <div class="table-location">{{ location }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Pic } from '@icon-park/vue-next'
import CardItem from '@/components/CardItem/index.vue'
import { ref, reactive } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  info: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
})

const url = ref(
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
)
const srcList = ref([
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
])
</script>
<style lang="scss" scoped>
.album-card {
  display: inline-block;
  position: relative;
  margin: 30px 10px;
  width: 360px;
  height: 370px;
  margin-bottom: 30px;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  text-align: center;
  box-sizing: border-box;

  &-image {
    width: 90%;
    height: 220px;
    margin-top: -8%;
    border-radius: 6px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }

  &-table {
    width: 100%;
    height: 180px;
    padding: 15px 30px;
    box-sizing: border-box;
    text-align: start;

    .table-title {
      width: 100%;
      height: 15px;
      margin: 15px 0px;

      .title {
        height: 100%;
        color: #ff9800;
        line-height: 15px;
        font-size: 15px;
      }
    }

    .table-info {
      width: 100%;
      height: 70px;
      font-size: 15px;
      color: #333;
      margin: 5px 0px 10px;
    }

    .table-location {
      width: 100%;
      color: #3c4857;
      font-size: 12px;
      display: flex;
      justify-content: flex-end;
      margin: 15px 0px 0px;
    }
  }
}

svg {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

// 使svg外层元素与svg宽高一致性，方便居中处理
.image {
  width: 16px;
  height: 16px;
}
</style>

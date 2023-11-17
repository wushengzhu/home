<template>
  <div class="card-container">
    <div class="card-item">
      <div class="card-item-head">
        <span class="title-area">
          <span class="title-area-content">{{ current.name }}</span>
          <span class="title-area-arrowhead"></span>
        </span>
        <close-one
          class="close"
          theme="filled"
          size="24"
          fill="#ffffff60"
          @click="closeModal()"
        />
      </div>
      <div class="card-item-content" v-html="current.value"></div>
      <div class="card-item-footer">
        <el-radio-group v-model="funbtn" @change="changeRadio">
          <el-radio-button v-for="item of resume.my" :label="item.key">
            {{ item.name }}
          </el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import resume from '@/assets/json/resume.json'
import { CloseOne, Close, Left, Right } from '@icon-park/vue-next'

const funbtn = ref('info')
const current = ref(resume.my[0])
const changeRadio = (ev: string) => {
  current.value = resume.my.filter((item) => item.key === ev)[0]
  funbtn.value = ev
}

const emit = defineEmits(['close-modal'])
const closeModal = () => {
  emit('close-modal', true)
}
</script>
<style lang="scss" scoped>
.card-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.card-item {
  width: 82vw;
  height: 90vh;
  position: relative;
  overflow-y: auto;
  background-color: #ffffff66;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;

  &-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 36px;
    background-color: #00000080;
    padding: 2px 5px;
    box-sizing: border-box;

    .title-area {
      width: 13%;
      height: 24px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #ffffff66;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      text-align: center;

      &-content {
        width: 12%;
        height: 100%;
      }
      &-arrowhead {
        position: absolute;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 13px solid transparent;
        border-right: 12px solid transparent;
        border-left: 18px solid #ffffff66;
        border-bottom: 11px solid transparent;
      }
    }
  }
  &-content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 36px 10px 30px;
    box-sizing: border-box;
  }
  &-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    // background-color: #00000080;
    width: 100%;
    box-sizing: border-box;
    // height: 28px;
    // padding: 2px 5px;
  }
}

.close {
  position: absolute;
  // top: 8px;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
// .card-btn {
//   width: 82vw;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
// }

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

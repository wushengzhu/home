<template>
  <div class="card-bgc" v-html="current"></div>
  <div class="card-btn">
    <CircleItem
      :component="Left"
      :isShowTooTip="false"
      :bgWidth="72"
      :bgHeight="72"
      @click="preInfo()"
    />
    <CircleItem
      :component="Close"
      :isShowTooTip="false"
      :bgWidth="72"
      :bgHeight="72"
      iconSize="36"
      @click="closeModal()"
    />
    <CircleItem
      :component="Right"
      :isShowTooTip="false"
      :bgWidth="72"
      :bgHeight="72"
      @click="nextInfo()"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import resume from '@/assets/json/resume.json'
import { CloseOne, Close, Left, Right } from '@icon-park/vue-next'
import CircleItem from '@/components/CircleItem/index.vue'
const emit = defineEmits(['close-modal'])
const closeModal = () => {
  emit('close-modal', true)
}
const resumeArr = ref([resume.info, resume.skill, resume.experience])
const current = ref(resumeArr.value[0])
const num = ref(0)
const nextInfo = () => {
  num.value++
  current.value = resumeArr.value[num.value % resumeArr.value.length]
}
const preInfo = () => {
  num.value--
  if (num.value < 0) {
    num.value = 0
  }
  current.value = resumeArr.value[num.value % resumeArr.value.length]
}
</script>
<style lang="scss" scoped>
.card-bgc {
  width: 82vw;
  height: 80vh;
  overflow-y: auto;
  margin: 20px auto 0;
  background-color: #222831;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.7);
  padding: 30px 20px;
  box-sizing: border-box;
}
.card-btn {
  width: 82vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

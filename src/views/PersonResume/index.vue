<template>
  <div class="resume-container">
    <div class="resume-left">
      <div class="resume-avatar">
        <CircleItem
          :src="resume.avatar"
          :is-show-too-tip="false"
          class="avatar"
        />
        <div class="penName">{{ resume.penName }}</div>
      </div>
      <div class="resume-item">
        <span class="item-label">我的签名：</span>
        <span class="item-value">{{ resume.signature }}</span>
      </div>
      <div class="resume-item">
        <span class="item-label">兴趣爱好：</span>
        <span class="item-value">
          <template v-for="item of resume.interest" :key="item.name">
            <el-tooltip effect="dark" :content="item.name" :placement="'top'">
              {{ item.icon }} &nbsp;
            </el-tooltip>
          </template>
        </span>
      </div>
      <div class="resume-item">
        <span class="item-label">可联系我：</span>
        <div class="item-value">
          <template v-for="item of resume.contact" :key="item.name">
            <CircleItem
              :component="iconComponents[item.icon]"
              :tip-content="item.name + '：' + item.value"
              :bg-width="48"
              :bg-height="48"
              :iconSize="24"
            />&nbsp;
          </template>
        </div>
      </div>
      <div class="resume-btn">
        <el-radio-group v-model="funbtn" @change="changeRadio">
          <el-radio-button label="info">介绍</el-radio-button>
          <el-radio-button label="skill">技能</el-radio-button>
          <el-radio-button label="experience">经历</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="resume-right">
      <div class="resume-content" v-html="current"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import resume from '@/assets/json/resume.json'
import { EmailBlock, Github, TencentQq, Me } from '@icon-park/vue-next'
import { ref } from 'vue'

const iconComponents: any = {
  qq: TencentQq,
  email: EmailBlock,
  me: Me,
  github: Github,
}
const funbtn = ref('info')
const current = ref(resume.info)
const changeRadio = (ev: any) => {
  current.value = resume[ev]
  funbtn.value = ev
}
</script>
<style lang="scss" scoped>
.resume-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .resume-left {
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff66;
    border-radius: 6px;
    padding: 0 20px;
    margin-right: 20px;
    box-sizing: border-box;
    position: relative;

    .resume-avatar {
      width: 100%;
      text-align: center;
      font-size: 32px;
      font-weight: 600;

      .avatar {
        display: flex;
        justify-content: center;
      }
    }

    .resume-item {
      width: 90%;
      margin: 0 auto;
      margin-top: 20px;
      font-size: 16px;
      font-weight: 600;

      .item-label {
        width: 20%;
      }

      .item-value {
        width: 80%;
        display: inline-flex;
        align-items: center;
      }
    }

    .resume-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }

    :deep(.el-radio-group) {
      display: flex;
      flex-direction: column;
    }

    :deep(.el-radio-button__inner) {
      border: 0 !important;
      border-bottom: 1px solid #efefef;
      border-radius: 0 !important;
      box-shadow: none !important;
    }
  }

  .resume-right {
    width: 30%;
    height: 60%;
    box-sizing: border-box;
    background-color: #ffffff66;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    .resume-content {
      width: 90%;
      height: 90%;
      padding: 20px;
      border: 1px solid #fff;
      border-radius: 8px;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>

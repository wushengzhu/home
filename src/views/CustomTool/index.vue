<template>
  <div class="tool-container">
    <aside class="left-menu" v-if="!isCollapse">
      <div class="left-menu-head">
        <svg data-v-eddb75f4="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" class="gradient">
          <defs>
            <linearGradient id="a" x1="13.74" x2="303.96" y1="183.7" y2="45.59" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#034a93"></stop>
              <stop offset=".6" stop-color="#127be5"></stop>
              <stop offset="1" stop-color="#409eff"></stop>
            </linearGradient>
          </defs>
          <!-- 绿色14a058 -->
          <path fill="#409eff" d="M0 187.5v25s0 37.5 50 50S300 225 300 225v-37.5Z" opacity=".49"></path>
          <path fill="#409eff" d="M300 237.5S287.5 275 250 275s-128.95-37.5-188.6-75 134.21 0 134.21 0Z" opacity=".49">
          </path>
          <path fill="#409eff" d="M0 200v12.5a241.47 241.47 0 0 0 112.5 50c73.6 11.69 130.61-14.86 150-25L300 200Z"
            opacity=".38"></path>
          <path fill="url(#a)" d="M0 0v212.5s62.5-12.5 150 25 150 0 150 0V0Z"></path>
        </svg>
        <div class="title">
          <tool theme="outline" size="48" fill="#fff" />
          <div class="title-text">个人工具</div>
        </div>
      </div>
      <Scrollbar>
        <div style="height: 200px;"></div>
        <template v-for="item of tools" :key="item.type">
          <div :class="{ 'left-menu-item': true, 'left-menu-item-active': selected == item.type }"
            @click="getRelatedTool(item.type)">
            <tool theme="outline" size="22" fill="#000" />
            <a class="ml-ms">{{ item.name }}</a>
          </div>
        </template>
      </Scrollbar>
    </aside>
    <div class="right-content">
      <div class="right-content-head">
        <hamburger-button theme="outline" size="24" fill="#000" class="hbg-btn" @click.stop="setIsCollapse()" />
      </div>
      <div class="right-content-area">
        <template v-for="item of tempT" :key="item.type">
          <div class="tool-item-container">
            <a class="tool-item" :href="item.link" target="_blank">
              <div class="tool-item-title">{{ item.name }}</div>
              <div class="tool-item-content">{{ item.detail }}</div>
              <img class="tool-item-icon" v-if="item?.icon" :src="item.icon" />
              <tool class="tool-item-icon" style="display: flex;justify-content: center;align-items: center;"
                theme="outline" size="32" fill="#000" v-else />
            </a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import tools from "@/assets/json/tools.json"
import { Tool, HamburgerButton } from "@icon-park/vue-next"
import Scrollbar from "@/components/Scrollbar/index.vue"
import { ref } from "vue";

const tempT = ref<any>([]);
const isCollapse = ref(false);
const selected = ref("frontend")
const setIsCollapse = () => isCollapse.value = !isCollapse.value;
const getRelatedTool = (type: string) => {
  let temp = tools.filter(item => item.type === type);
  tempT.value = temp[0].children;
  selected.value = type;
} 
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  position: relative;
}

.tool-item-container {
  width: 220px;
  height: 110px;
  position: relative;
  padding: 10px 10px;
  box-sizing: border-box;
}

.tool-item {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 1px 0 9px 1px rgb(0 0 0 / 20%);

  &:hover {
    border: 2px solid orange;
  }

  &-title {
    width: 100%;
    height: 50%;
    background-color: #409eff;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
  }

  &-content {
    width: 100%;
    height: 50%;
    background-color: #c6e2ff;
    color: grey;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
  }

  &-icon {
    position: absolute;
    display: block;
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 10%;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }
}

.right-content-area {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
}

.tool-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #f1f5f9;
  color: #000;
  overflow: hidden;
  display: flex;
  font-size: 20px;
  box-sizing: border-box;

  .left-menu {
    width: 200px;
    height: 100%;
    flex-shrink: 0;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    background-color: #fff;
    // overflow: hidden;
    overflow-y: auto;
    // transition: all .3s ease-in-out;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;

    .left-menu-head {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      z-index: 10;
      overflow: hidden;

      .title {
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        top: 16px;
        color: #fff;
        font-weight: bold;
        font-size: 30px;

        &-text {
          color: #fff;
        }
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* 淡入动画：从透明到非透明的状态转化 */
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }


    .left-menu-item {
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: #000;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        cursor: pointer;
        background-color: #c6e2ff;
      }

      &-active {
        background-color: #409eff;
      }
    }
  }

  .right-content {
    width: calc(100% - 200px);
    height: 100%;
    position: relative;
    box-sizing: border-box;
    transition: all .3s;

    .right-content-head {
      width: 100%;
      padding: 10px;

      .hbg-btn {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        border: 1px solid #409eff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

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

:deep(.el-tabs__item) {
  color: #fff;
}

:deep(.el-tabs__item.is-active) {
  color: var(--el-color-primary);
}
</style>

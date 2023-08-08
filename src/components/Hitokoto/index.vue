<template>
  <div class="saying-container cards">
    <!-- <div class="refresh">
      <refresh
        theme="outline"
        size="16"
        fill="#fff"
        @onclick="updateHitokoto()"
      />
    </div> -->
    <!-- <div>一言说：</div> -->
    <p class="saying-text">{{ hitokotoData.text }}</p>
    <div class="saying-from">--&nbsp;{{ hitokotoData.from }}</div>
  </div>
</template>
<script setup lang="ts">
import { h, onMounted, reactive } from "vue";
import { getHitokoto } from "@/api";
import debounce from "@/utils/debounce.ts";
import { Error } from "@icon-park/vue-next";

// 一言数据
const hitokotoData = reactive({
  text: "这里应该显示一句话",
  from: "路灯下的光"
});

// 获取一言数据
const getHitokotoData = () => {
  getHitokoto()
    .then((res) => {
      hitokotoData.text = res.hitokoto;
      hitokotoData.from = res.from;
    })
    .catch(() => {
      ElMessage({
        message: "一言获取失败",
        icon: h(Error, {
          theme: "filled",
          fill: "#efefef"
        })
      });
    });
};
// 更新一言数据
const updateHitokoto = () => {
  hitokotoData.text = "新的一言正在赶来的路上";
  hitokotoData.from = "来源加载中";
  // 防抖
  debounce(() => {
    getHitokotoData();
  }, 500);
};

onMounted(() => {
  getHitokotoData();
});
</script>
<style lang="scss" scoped>
.saying-container {
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  width: 50%;
  height: 120px;
  margin-right: 10px;
  box-sizing: border-box;

  .refresh {
    cursor: pointer;
    text-align: end;
  }

  .saying-text {
    margin-top: 5px;
  }

  .saying-from {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
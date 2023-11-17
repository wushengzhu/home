<template>
  <div class="album-container">
    <el-carousel
      indicator-position="outside"
      :height="'420px'"
      :autoplay="false"
    >
      <el-carousel-item
        class="carousel"
        v-for="i in Math.ceil(albums.length / 3)"
        :key="i"
      >
        <template v-for="j in 3" :key="albumItem(i, j)">
          <AlbumItem
            v-if="albumItem(i, j)"
            :info="albumItem(i, j).info"
            :title="albumItem(i, j).title"
            :location="albumItem(i, j).location"
            :image="albumItem(i, j).image"
          />
        </template>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import AlbumItem from '@/components/AlbumItem/index.vue'
import albums from '@/assets/json/album.json'
import { ref, reactive } from 'vue'

const albumItem = (i: number, j: number) => albums[j - 1 + (i - 1) * 3]
</script>
<style lang="scss" scoped>
.album-container {
  width: 100%;
  height: 100%;
  padding: 200px;
  text-align: center;
  box-sizing: border-box;

  .carousel {
    width: 100%;
  }

  :deep(.el-carousel__arrow) {
    background-color: yellowgreen;
  }
}
</style>

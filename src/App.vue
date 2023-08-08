<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Home from "@/views/Home/index.vue";
import Background from "@/components/Background/index.vue";
import FabsBtn from "@/components/FabsBtn/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <Background bgc="/images/bg1-1.webp" />
      <Home />
      <FabsBtn />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

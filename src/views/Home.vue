<script setup lang="ts">
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="home">
    <Header />
    <div class="container">
      <SideBar />
      <div class="router">
        <div class="router-content">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    height: 100%;

    .router {
      padding-top: 55px;
      padding-left: 266px;
      width: 100%;

      .router-content {
        padding: 32px;
        overflow: auto;
      }
    }
  }
}
</style>

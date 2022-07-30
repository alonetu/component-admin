<script setup lang="ts">
import { onMounted } from 'vue'
import { jsonAnimation } from '@/utils/common'
import backgroundJson from '@/assets/animation/home-bg.json'

onMounted(() => {
  jsonAnimation('#welcome-background', backgroundJson)
})
</script>

<template>
  <div class="welcome">
    <div id="welcome-background"></div>
    <div class="welcome-name">你好，alonetu</div>
  </div>
</template>

<style lang="less" scoped>
.welcome {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .welcome-name {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -38px;
    margin-top: -7px;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('admin')
</script>

<template>
  <div class="header">
    <div class="header-name">你好，{{ username }}</div>
    <img src="@/assets/image/avatar-default.png" alt="" class="avatar" />
  </div>
</template>

<style lang="less" scoped>
.header {
  height: 55px;
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid #4c4d4f;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .header-name {
    color: #00e5ff;
    margin-right: 16px;
  }

  .avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
}
</style>

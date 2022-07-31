<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import btnJson from '@/assets/animation/login-btn.json'
import { jsonAnimation } from '@/utils/index'

const router = useRouter()

const onLogin = () => {
  router.push('/home')
}

onMounted(() => {
  jsonAnimation('#login-btn', btnJson)
})
</script>

<template>
  <div class="login">
    <div id="login-btn" class="login-btn" @click="onLogin"></div>
  </div>
</template>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-btn {
    width: 228px;
    height: 50px;
    cursor: pointer;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { menu } from '@/router/menu'

const router = useRouter()
const activePage = ref(menu[0].key)

const handleOpen = () => {
  router.push('/home/welcome')
}
const handleClose = () => {}
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="transparent"
    text-color="rgba('#ffffff', 0.85)"
    class="sidebar"
    :default-active="activePage"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in menu" :key="item.key">
      <el-menu-item :index="item.key">
        <span>{{ item.title }}</span>
      </el-menu-item>
    </template>
    <!-- <el-sub-menu index="1">
      <template #title>
        <span>Navigator One</span>
      </template>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
  </el-menu>
</template>

<style lang="less" scoped>
.sidebar {
  width: 266px;
  height: 100%;
  margin-top: 55px;
  position: fixed;
  border-right: 1px solid #4c4d4f;
}
</style>

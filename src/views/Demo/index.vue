<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  msg?: string;
}>(), {
  msg: "vue"
})

console.log(props.msg)

console.log(import.meta.env.VITE_PROJECT_ENV)

watch(() => props.msg, (nValue, oValue) => {
  console.log(nValue, oValue)
})

const message = ref("hello world")

const changeMessage = () => {
  message.value = "hello, vue3+vite!"
}

</script>

<template>
  {{ message }}
  <el-button type="primary" @click="changeMessage">点击</el-button>
</template>

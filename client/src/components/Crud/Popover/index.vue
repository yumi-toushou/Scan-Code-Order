<template>
  <el-dialog v-model="dialogTableVisible" :title="title">
    <slot></slot>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  dialogTableVisible: {
  },
  title: {
  }
})

const dialogTableVisible = computed(() => {
  return props.dialogTableVisible
})
</script>
<template>
  <Crud app="user" :options-data="optionsData" />
</template>

<script lang="ts" setup>
import Crud from '@/components/Crud/index.vue'
import { ref } from 'vue'

const optionsData = ref({
  authority: [{ value: 0, label: '普通用户' }, { value: 1, label: '管理员' }]
})
</script>
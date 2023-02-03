<template>
  <el-form :model="formModel" label-width="60">
    <el-form-item v-for="(item, index) in formItems" :key="index" :label="item.label">
      <el-input v-model="_selfFormModel[item?.prop]"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch, ref, toRaw } from 'vue';

const emits = defineEmits(['submit'])
const props = defineProps({
  formModel: {
    type: Object,
    default: {}
  },
  formItems: {
    type: Array,
    default: []
  }
})

const _selfFormModel = ref({})

watch(() => props.formModel, (value) => {
  console.log(value)
  _selfFormModel.value = toRaw(value)
}, {
  immediate: true,
})

const submit = () => {
  emits('submit', _selfFormModel.value)
 }
</script>

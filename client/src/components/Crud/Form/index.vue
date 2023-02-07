<template>
  <el-form :model="formModel" label-width="60">
    <el-form-item v-for="(item, index) in formItems" :key="index" :label="item.label">
      <el-input v-if="item.type === 'string'" v-model="_selfFormModel[item?.prop]"></el-input>
      <el-select style="width: 100%;" placeholder="请选择" v-else-if="item.type === 'select'" v-model="_selfFormModel[item?.prop]">
        <el-option v-for="item2 in optionsData[item.prop] || []" :key="item2.value" :label="item2.label" :value="item2.value" />
      </el-select>
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
  },
  optionsData: {
    type: Object,
    default: {}
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

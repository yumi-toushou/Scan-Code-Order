<template>
  <div style="margin-bottom: 15px">
    <el-button type="primary" @click="onAdd">新增</el-button>
  </div>
  <Table :table-data="tableData" :options-data="optionsData" :table-columns="formItems" @remove="remove" @update="onUpdate" />
  <Popover :dialog-table-visible="show" :title="title">
    <Form @submit="submit" :formModel="formModel" :formItems="formItems" :options-data="optionsData" />
  </Popover>
</template>

<script lang="ts" setup>
import Table from './Table/index.vue'
import Popover from './Popover/index.vue'
import Form from './Form/index.vue'
import { ref, defineProps, computed, onMounted } from 'vue'
import { Crud } from '@/apis/crud.ts'

const props = defineProps({
  app: {
    type: String,
    default: ''
  },
  optionsData: {
    type: Object,
    default: {}
  }
})

const app = computed(() => {
  return new Crud({
    app: props.app
  })
})


const show = ref(false)
const title = ref('新增')

const formModel = ref({})
const formItems = ref({})

const tableData = ref([])
const tableColumns = ref([])

const change = () => {
  show.value = !show.value
}

const submit = async (newForm: any) => {
  if (title.value === '新增') {
    console.log(newForm)
    const response = await app.value.add(newForm)
    if (response.message === 'ok') {
      change()
      getAllData()
    }
  } else {
    const response = await app.value.update(newForm)
    if (response.message === 'ok') {
      change()
      getAllData()
    }
  }
}

const remove = async (id: string) => {
  const response = await app.value.remove(id)
  if (response.message === 'ok') {
    getAllData()
  }
}

const onAdd = () => {
  title.value = '新增'
  change()
}

const onUpdate = (data) => {
  title.value = '修改'
  change()
  formModel.value = data
}


const getModel = async () => {
  const modelItems = await app.value.getAppModel()
  formItems.value = modelItems

  const model = {}
  modelItems.forEach(item => {
    model[item.prop] = item.defaultValue
  })
  formModel.value = model
}

const getAllData = async () => {
  const data = await app.value.getList()
  tableData.value = data
}

onMounted(() => {
  getModel()
  getAllData()
})
/**
 * --Model
 * type 
 * prop
 * label
 * defaultValue
 * */
</script>
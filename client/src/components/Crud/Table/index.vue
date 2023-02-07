<template>
  <el-table :data="tableData" col border>
    <el-table-column v-for="(item, index) in tableColumns" :key="index" :prop="item?.prop" :label="item?.label">
      <template #default="scope">
        {{
          item.type === 'select'
            ? optionsData[item?.prop]?.find(i => i.value === scope.row[item?.prop])?.label || ''
            : scope.row[item?.prop]
        }}
      </template>
    </el-table-column>
    <el-table-column label="编辑">
      <template #default="scope">
        <el-button type="warning" size="small" @click.prevent="updateRow(scope.row)">
          修改
        </el-button>
        <el-button type="danger" size="small" @click.prevent="deleteRow(scope.row.Id)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, toRaw } from 'vue';

const emits = defineEmits(['remove', 'update'])
defineProps({
  tableData: {
    type: Array,
    default: []
  },
  tableColumns: {
    type: Array,
    default: []
  },
  optionsData: {
    type: Object,
    default: {}
  }
})

const deleteRow = (id: string) => {
  emits('remove', id)
}

const updateRow = (rowData: any) => {
  emits('update', toRaw(rowData))
}

</script>
<template>
    <Crud app="good" :options-data="optionsData"/>
</template>

<script lang="ts" setup>
import Crud from '@/components/Crud/index.vue'
import { ref, onMounted } from 'vue';
import {Crud as Model} from '../../apis/Crud'

const optionsData = ref({
    'categoryId': []
})

onMounted(async () => {
    const app = new Model({app: 'category'})

    const response =  await app.getList()

    optionsData.value.categoryId = response.map(item => {
        return {
            ...item,
            label: item.name,
            value: item.Id
        }
    })
})

</script>
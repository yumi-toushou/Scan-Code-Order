
<template>
  <div class="main">
    <el-card style="width: 400px">
      <div>
        <el-image></el-image>
      </div>
      <el-form  size="large" :model="form">
        <el-formItem>
          <el-input v-model="form.username"></el-input>
        </el-formItem>
        <el-formItem>
          <el-input type="password" show-password v-model="form.password"></el-input>
        </el-formItem>
        <el-formItem>
          <el-button @click="login" type="primary" style="width:100%;">Login</el-button>
        </el-formItem>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const rules = ref({
  username: ''
})

onMounted(() => {
})

const login = () => {
  router.push({
    path: 'manage'
  })
}

</script>

<style lang="scss" scoped>

.main {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  right: 0;
  bottom: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

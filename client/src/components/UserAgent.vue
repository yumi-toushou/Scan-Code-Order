<template>
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      <el-avatar :icon="Avatar" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>管理</el-dropdown-item>
        <el-dropdown-item divided>
          <span style="color: red">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { Avatar } from '@element-plus/icons-vue'
</script>
<style scoped>
.example-showcase .el-dropdown+.el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
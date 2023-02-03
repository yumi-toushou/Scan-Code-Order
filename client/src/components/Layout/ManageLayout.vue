<template>
  <div class="flex main">
    <div class="left">
      <el-menu default-active="2" style="height:100%;" class="el-menu-vertical-demo" active-text-color="#ffd04b"
        background-color="#0f2439" text-color="#fff" @select="onSelect">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="category">类别管理</el-menu-item>
          <el-menu-item index="goods">菜品管理</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="desk">
          <el-icon>
            <location />
          </el-icon>
          <span>桌位管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <document />
          </el-icon>
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>个人中心</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <div class="flex tab-bar">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item v-for="(item, index) in routes" :key="index" :to="{ path: item.path }">{{
            item?.meta?.name
          }}</el-breadcrumb-item>
        </el-breadcrumb>
        <UserAgent />
      </div>
      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView, useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  ArrowRight
} from '@element-plus/icons-vue'
import UserAgent from '../UserAgent.vue'
import { computed, ref } from 'vue';

const router = useRouter()

const route = useRoute()

const routes = ref(route.matched)

onBeforeRouteUpdate((e) => {
  console.log(e)
  routes.value = e.matched
})

const onSelect = (routeName) => {
  router.push({
    name: routeName
  })
}
</script> 

<style lang="scss" scoped>
.main {
  height: 100vh;
  overflow: hidden;
}

.left {
  width: 210px;
  min-width: 210px;
}

.right {
  flex: 1;

  .tab-bar {
    height: 50px;
    border-bottom: solid 1px var(--el-menu-border-color);
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    padding: 20px;
  }
}
</style>
<template>
  <div class="header">
    <div class="header-container">
      <div class="logo"></div>
      <div class="nav"></div>
      <div class="login">
        <UserAgent />
      </div>
    </div>
  </div>
  <div style="padding-top: 64px">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import UserAgent from '../UserAgent.vue'
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 64px;
  background: #fff;
  transition: box-shadow .3s;
  box-shadow: 0 1px 4px rgb(21 26 48 / 8%);
}
.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 30px;
  .logo {

  }
  .nav {
    flex: 1;
  }
  .login {

  }
}



</style>
<template>
  <nav>
      <!-- 路由封装了一个a标签 -->
      <router-link to="/home">home</router-link> |
      <router-link to="/about">about</router-link>
  </nav>

  <!-- 路由窗口，所有配置了路由的文件都会放置此处 -->
  <router-view></router-view>
</template>

<style>
  #app{
    text-align: center;
    font-size :40px;
  }
</style>
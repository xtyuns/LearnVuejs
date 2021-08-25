<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style>
@import "~@/assets/css/base.css";
</style>
<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
export default {
  components: {MainTabBar}
}
</script>
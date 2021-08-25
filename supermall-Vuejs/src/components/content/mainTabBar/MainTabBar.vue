<template>
  <tab-bar>
    <tab-bar-item path="/">
      <template #item-icon>
        <img src="~@/assets/img/tabBar/shop.png" alt="首页">
      </template>
      <template #item-text>首页</template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template #item-icon>
        <img src="~@/assets/img/tabBar/category.png" alt="分类">
      </template>
      <template #item-text>分类</template>
    </tab-bar-item>

    <tab-bar-item path="/shop">
      <template #item-icon>
        <img src="~@/assets/img/tabBar/shop.png" alt="购物车">
      </template>
      <template #item-text>购物车</template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template #item-icon>
        <img src="~@/assets/img/tabBar/profile.png" alt="我的">
      </template>
      <template #item-text>我的</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar";
import TabBarItem from "@/components/common/tabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>

</style>
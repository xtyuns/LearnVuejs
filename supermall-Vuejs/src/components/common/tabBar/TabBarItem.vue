<template>
  <div class="tab-bar-item" @click="itemClick" :class="{active: isActive}">
    <slot name="item-icon"></slot>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    }
  },
  methods: {
    itemClick() {
      if (!this.isActive) {
        this.$router.replace(this.path);
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 3px;
}

.tab-bar-item>img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.tab-bar-item.active {
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
}
</style>
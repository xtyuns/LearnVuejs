<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="item.key"
         :class="{active: index === activeIndex}"
         @click="itemClick(index)">
    <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.activeIndex = index;
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.active>span {
  padding: 5px 10px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>
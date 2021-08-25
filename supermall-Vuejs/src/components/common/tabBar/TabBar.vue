<template>
  <div id="tab-bar" :style="{color: primaryColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    primaryColor: {
      type: String,
      default: 'dodgerblue'
    }
  }
}
</script>

<style scoped>
#tab-bar {
  background-color: #f6f6f6;
  box-shadow: 0 -2px 2px 0 rgba(100, 100, 100, .08);
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
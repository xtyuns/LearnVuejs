<template>
  <div class="scroll-wrapper" :style="{height: wrapperHeight}" ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

export default {
  name: "Scroll",
  props: {
    wrapperHeight: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bs: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 500);
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        click: true
      });
    }
  }
}
</script>

<style scoped>
.scroll-wrapper {
  overflow: hidden;
}
</style>
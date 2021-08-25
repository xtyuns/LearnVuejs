<template>
  <div class="good-item">
      <img :src="goodItem.show.img" :alt="goodItem.title">
      <div class="good-info">
        <p class="title">{{ goodItem.title }}</p>
        <span class="price">{{ goodItem.price }}</span>
        <span class="collect">{{ goodItem.cfav }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.good-item {
  width: 45%;
  padding: 6px 0;
}

.good-item > img {
  width: 100%;
  border-radius: 5px;
}

.good-info {
  font-size: 12px;
  text-align: center;
}

.good-info > .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.good-info > .price::before {
  content: '￥';
}

.good-info > .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.png") 0 0/14px 14px;;
}

.good-info > .collect {
  color: var(--color-high-text);
  position: relative;
  margin-left: 25px;
}

</style>
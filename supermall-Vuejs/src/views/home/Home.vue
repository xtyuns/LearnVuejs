<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>首页</template>
    </nav-bar>

    <scroll :wrapper-height="scrollWrapperHeight">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <tab-control :titles="tabControlTitles" @tabClick="tabClick"></tab-control>
      <goods-list :goods-list="goods[currentGoodIndex].list"></goods-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import TabControl from "@/components/common/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import home from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      currentGoodIndex: 0,
      goods: [
        {
          type: 'pop',
          title: '流行',
          page: 0,
          list: []
        }, {
          type: 'new',
          title: '新款',
          page: 0,
          list: []
        }, {
          type: 'sell',
          title: '精品',
          page: 0,
          list: []
        }
      ]
    }
  },
  computed: {
    tabControlTitles() {
      return this.goods.map(e => e.title);
    },
    scrollWrapperHeight() {
      return "calc(100vh - 49px - 44px)";
    }
  },
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    GoodsList
  },
  methods: {
    tabClick(index) {
      if (this.goods[index].list.length === 0) {
        this.getHomeGoods(index);
      }
      this.currentGoodIndex = index;
    },

    /**
     * net method
     */
    getHomeMultiData() {
      home.getHomeMultiData().then(resp => {
        this.banners = resp.data.banner.list;
        this.recommends = resp.data.recommend.list;
      });
    },
    getHomeGoods(goodIndex, page = -1) {
      const type = this.goods[goodIndex].type;
      page = page === -1 ? this.goods[goodIndex].page + 1 : page;
      home.getHomeGoods(type, page).then(resp => {
            this.goods[goodIndex].list.push(...resp.data.list);
            this.goods[goodIndex].page = page;
          }
      );
    }
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods(this.currentGoodIndex, 1);
  }
}
</script>

<style scoped>
#home {
  margin-bottom: 49px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
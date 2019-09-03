<template>
  <div class="banner">
    <van-swipe
      indicator-color="#3190e8"
      :touchable=true
      class="ban"
    >
      <van-swipe-item class="swp">
        <li
          v-for="item in 8"
          :key="item"
        >
          <div class="item">
            <img
              src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg"
              alt=""
            >
            <span>甜品饮品</span>
          </div>
        </li>
      </van-swipe-item>
      <van-swipe-item class="swp">
        <li
          v-for="item in 8"
          :key="item"
        >
          <div class="item">
            <img
              src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg"
              alt=""
            >
            <span>甜品饮品</span>
          </div>
        </li>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "banner",
  methods: {},
  components: {},
  created() {
    // this.$axios.get(
    //   "http://elm.cangdu.org/v2/index_entry?geohash=37.609542,112.347147&group_type=1&flags[]=F",
    //   {
    //     params: {
    //     }
    //   }
    // );
  }
};
</script>

<style scoped>
.banner {
  width: 10rem;
  margin-bottom: 0.25rem;
}
.ban {
  width: 10rem;
  height: 5.3125rem;
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
  /* border: 1px solid red; */
}
.swp {
  list-style: none;
}
.swp li {
  width: 2.5rem;
  height: 63.0016px;
  padding: 6px 0;
  float: left;
}
.swp li .item {
  font-size: 12px;
  color: #666;
  text-align: center;
}
.swp li .item img {
  width: 1.125rem;
  height: 1.125rem;
  display: block;
  margin: 0 auto;
}
</style>
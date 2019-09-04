<template>
  <div class="banner">
    <van-swipe
      indicator-color="#3190e8"
      :touchable=true
      class="ban"
    >
      <van-swipe-item
        class="swp"
        v-for="item in banner.length/8"
        :key="item"
      >
        <router-link
          tag="li"
          to="/food"
          v-for="item in banner.slice((item-1)*8,item*8)"
          :key="item.id"
        >
          <div class="item">
            <img
              :src="'https://fuss10.elemecdn.com'+item.image_url"
              alt=""
            >
            <span>{{item.title}}</span>
          </div>
        </router-link>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "banner",
  methods: {},
  components: {},
  data() {
    return {
      banner: []
    };
  },
  created() {
    let geohash = this.$route.query.geohash;
    console.log(geohash);

    this.$axios
      .get(
        "http://elm.cangdu.org/v2/index_entry?+geohash=" +
          geohash +
          "&group_type=1&flags[]=F"
      )
      .then(res => {
        console.log(res.data);
        this.banner = res.data;
      });
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
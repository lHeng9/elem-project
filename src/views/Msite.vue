<template>
  <div>
    <Banner></Banner>
    <p class="fujin">
      <span class="el-icon-s-shop"></span> 附近商家
    </p>
    <Shop></Shop>
  </div>
</template>

<script>
import Banner from "../components/commen/Banner";
import Shop from "../components/Shop/Shop";
export default {
  components: {
    Banner,
    Shop
  }
};
</script>
<style scoped>
.fujin {
  background-color: #fff;
  color: #999;
  font-size: 0.4rem;
  line-height: 1rem;
  padding: 0 0.25rem;
}
</style>
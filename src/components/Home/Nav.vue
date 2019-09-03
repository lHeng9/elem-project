<template>
  <div class="nav">
    <div class="city_tip">
      <span>

        当前定位城市：
      </span>
      <span class="city_tip-rt">
        定位不准时，请在城市列表中选择
      </span>
    </div>
    <router-link
      :to="'/city/'+city.id"
      tag="div"
      class="guess_city"
    >
      <span>{{city.name}}</span>
      <i class="el-icon-arrow-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: {}
    };
  },
  created() {
    this.$axios.get("http://elm.cangdu.org/v1/cities?type=guess").then(res => {
      console.log(res.data);
      this.city = res.data;
    });
  }
};
</script>

<style scoped>
.nav {
  margin-bottom: 0.25rem;
  background-color: #fff;
  margin-top: 1.5rem;
}
.city_tip {
  background-color: #fff;
  width: 10rem;
  height: 0.9063rem;
  /* border-bottom: 1px solid #e4e4e4; */
  font-size: 0.375rem;
  color: #666;
  line-height: 0.9063rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2813rem;
  box-sizing: border-box;
}
.guess_city {
  background-color: #fff;
  padding: 0 0.2813rem;
  font-size: 0.4688rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  height: 1.125rem;
  border-top: 0.0313rem solid #e4e4e4;
  border-bottom: 0.0625rem solid #e4e4e4;
  line-height: 1.125rem;
  align-items: center;
}
.guess_city span {
  color: #3190e8;
}
.guess_city i {
  color: #999;
}
.city_tip-rt {
  font-weight: 900;
  color: #9f9f9f;
}
</style>
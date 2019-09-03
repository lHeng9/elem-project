<template>
  <div class="hot">
    <ul class="clear">
      <h4>热门城市</h4>
      <router-link
        tag="li"
        v-for="item in hotCity"
        :key="item.id"
        :to="'/city/'+item.id"
      >{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotCity: []
    };
  },
  created() {
    this.$axios.get("http://elm.cangdu.org/v1/cities?type=hot").then(res => {
      console.log(res.data);
      this.hotCity = res.data;
    });
  }
};
</script>

<style scoped>
ul {
  background-color: #fff;
  list-style: none;
  margin-bottom: 0.25rem;
}
h4 {
  font-size: 0.375rem;
  color: #666;
  font-weight: 400;
  text-indent: 0.2813rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  height: 0.9063rem;
  line-height: 0.9063rem;
}
li {
  float: left;
  text-align: center;
  color: #3190e8;
  width: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  font-size: 0.375rem;
  height: 1.0938rem;
  line-height: 1.0938rem;
}
</style>
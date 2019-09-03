<template>
  <div class="cityList">
    <ul
      class="clear"
      v-for="(item,index) in listSort"
      :key="index"
    >
      <h4>{{item}}</h4>
      <li
        class="ellipsis"
        v-for="(it) in cityList[item]"
        :key="it.id"
      >{{it.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: {}
    };
  },
  created() {
    this.$axios.get("http://elm.cangdu.org/v1/cities?type=group").then(res => {
      this.cityList = res.data;
      console.log(res.data);
    });
  },
  computed: {
    listSort() {
      let arr = Object.keys(this.cityList);
      arr.sort();
      return arr;
    }
  }
};
</script>

<style scoped>
ul {
  background-color: #fff;
  list-style: none;
  text-decoration: none;
  border: none;
  color: #333;
  box-sizing: border-box;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid #e4e4e4;
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
  color: #666;
  width: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  font-size: 0.375rem;
  height: 1.0938rem;
  line-height: 1.0938rem;
}
</style>
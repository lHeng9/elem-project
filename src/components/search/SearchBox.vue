<template>
  <el-row class="box">
    <el-col :span="24">
      <el-input placeholder="请输入商家或美食名称" clearable size="small" v-model="keyword"></el-input>
    </el-col>
    <el-col :span="6" :offset="1">
      <el-button
        type="primary"
        size="small"
        class="my-btn"
        v-model="keyword"
        @click="selectRestaurants()"
      >提交</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      restaurants: []
    };
  },
  methods: {
    selectRestaurants() {
      axios
        .get(
          "https://elm.cangdu.org/v4/restaurants/geohash=31.22967,121.4762",
          {
            params: {
              keyword: this.keyword
            }
          }
        )
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  padding: 0.3rem;
  border-bottom: 0.0313rem solid #ddd;
  background-color: #f2f2f2;
}

.my-btn {
  background-color: #3190e8;
}
</style>
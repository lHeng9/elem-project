<template>
  <div>
    <el-row class="box">
      <el-col :span="24">
        <el-input
          placeholder="请输入商家或美食名称"
          clearable
          size="small"
          v-model="keyword"
          @clear="resetRestaurants()"
        ></el-input>
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
    <ul>
      <li v-for="item in restaurants" :key="item.id">
        <div class="img">
          <img :src="'//elm.cangdu.org/img/' + item.image_path" />
        </div>
        <div>
          <p>{{ item.name }}</p>
          <p>月售 {{ item.recent_order_num }} 单</p>
          <p>{{ item.float_minimum_order_amount }} 元起送 / 距离{{ item.distance }}公里</p>
        </div>
      </li>
    </ul>
  </div>
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
          "https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762",
          {
            params: {
              keyword: this.keyword
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.restaurants = res.data;
        });
    },
    resetRestaurants() {
      console.log("成功");
      this.restaurants = [];
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

.img {
  width: 1.0625rem;
  height: 1.0625rem;
  margin-right: 0.3125rem;
}

img {
  width: 100%;
}

li {
  padding: 0.3125rem;
  display: flex;
  color: #333;
  font-size: 0.3438rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

li p {
  line-height: 0.5rem;
}
</style>
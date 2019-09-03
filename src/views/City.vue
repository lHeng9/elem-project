<template>
  <div class="city">
    <div class="search">
      <el-row>
        <el-input
          class="input"
          v-model="input"
          placeholder="输入学校，商务楼，地址"
        ></el-input>
      </el-row>
      <div style="margin:0.625rem 0;">

      </div>
      <button
        class="btn"
        @click='submit'
      >提交</button>

    </div>

    <div class="show">
      <router-link
        tag="div"
        to='/msite'
        class="card"
        v-for="(item,index) in result"
        :key="index"
      >
        <p class="tit">{{item.name}}</p>
        <p class="content">{{item.address}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      input: "",
      result: []
    };
  },
  created() {
    console.log(this.$route);
    this.id = this.$route.params.id;
  },
  methods: {
    submit() {
      this.$axios
        .get("http://elm.cangdu.org/v1/pois", {
          params: {
            type: "search",
            city_id: this.id,
            keyword: this.input
          }
        })
        .then(res => {
          console.log(res.data);
          this.result = res.data;
        });
    }
  }
};
</script>

<style scoped>
.search {
  width: 10rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
  height: 2.9688rem;
  padding: 0.25rem 0 0;
  background-color: #fff;
  margin-top: 0.2rem;
}
.input {
  margin: 0 0.5rem;
  padding: 0;
  width: 9rem;
  height: 0.8125rem;
}
.btn {
  width: 9rem;
  height: 0.875rem;
  margin: 0 0.5rem;
  background-color: #3190e8;
  color: #fff;
  border: 0;
  font-size: 0.4375rem;
}
.card {
  width: 10rem;
  /* border: 1px solid red; */
  border-bottom: 1px solid #e4e4e4;
  background-color: #fff;
  padding: 0.1875rem 0 0;
}
.card p {
  padding: 0 0.5rem 0;
  margin: 0.1094rem 0;
}
.tit {
  font-size: 0.4063rem;
  color: #333;
}
.content {
  font-size: 0.375rem;
  color: #999;
}
</style>
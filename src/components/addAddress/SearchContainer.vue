<template>
  <div>
    <div class="search-title">
      <form class="search-form" @click.prevent="searchForm">
        <input type="search" placeholder="请输入小区/写字楼/学校等" v-model="keyword" />
        <button>搜索</button>
      </form>
    </div>
    <!-- 显示搜索内容 -->
    <ul class="search-content">
      <router-link
        tag="li"
        v-for="(searchList,index) in searchLists"
        :key="index"
        :to="{name:'addAddress',params:searchList}"
      >
        <p>{{ searchList.name }}</p>
        <p>{{ searchList.address }}</p>
      </router-link>
    </ul>
    <!-- 找不到地址 -->
    <div class="search-empty" v-if="flag">
      <p>找不到地址？</p>
      <p>尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号等）可稍后输入哦</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchContainer",
  data() {
    return {
      flag: true,
      keyword: "",
      searchLists: []
    };
  },
  methods: {
    searchForm() {
      this.flag = false;
      this.$axios
        .get(
          "http://elm.cangdu.org/v1/pois?type=nearby&keyword=" + this.keyword
        )
        .then(res => {
          console.log(res.data);
          this.searchLists = res.data;
        });
    }
  }
};
</script>

<style scoped>
.search-form {
  display: flex;
  padding: 0.4375rem;
  font-size: 0.4063rem;
}
.search-form input {
  color: #999;
  flex: 4;
  background-color: #f1f1f1;
  margin-right: 0.375rem;
  height: 0.9375rem;
  border-radius: 0.0938rem;
  padding: 0 0.25rem;
  border: none;
}
.search-form button {
  flex: 1;
  color: #fff;
  background-color: #3190e8;
  border-radius: 0.0938rem;
  border: none;
}
.search-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.search-empty p {
  font-size: 0.3125rem;
  color: #aaa;
  line-height: 0.4375rem;
  text-align: center;
}
.search-content {
  padding: 0.4375rem;
}
.search-content li {
  padding: 0.4375rem 0;
  border-bottom: 0.0156rem solid #f5f5f5;
  line-height: 0.625rem;
}
.search-content li p:nth-child(1) {
  font-size: 0.4688rem;
  color: #555;
}
.search-content li p:nth-child(2) {
  font-size: 0.4063rem;
  color: #999;
}
</style>
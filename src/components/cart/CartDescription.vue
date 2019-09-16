<template>
  <div class="food-description">
    <div class="des-header">
      <i class="el-icon-arrow-left" @click="goback"></i>
      <div class="des-title">
        <span class="des-title-text">{{ queryObj.name }}</span>
      </div>
    </div>
    <div class="des-container">
      <div class="des-img">
        <img :src="'http://elm.cangdu.org/img/' + queryObj.image_path" alt />
      </div>
      <p class="des-p">{{ queryObj.description }}</p>
      <div class="des-des">
        <div class="des-des-left">
          <p>{{ queryObj.name }}</p>
          <div class="des-rating">
            <span>评分</span>
            <div class="des-star">
              <el-rate v-model="queryObj.rating" disabled text-color="#ff9900"></el-rate>
            </div>
            <span class="des-score">{{ queryObj.rating }}</span>
          </div>
          <div class="des-sale-price">
            <span class="des-sale">月售 {{ queryObj.month_sales }} 单</span>
            <span class="des-price">售价 ￥{{ queryObj.specfoods[0].price }} 起</span>
          </div>
          <div class="des-sale-price">
            <span class="des-pinglun">评论数 {{ queryObj.rating_count }}</span>
            <span class="des-good">好评率 {{ queryObj.satisfy_rate }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartDescription",
  data() {
    return {
      queryObj: {},
      value: queryObj.rating
    };
  },
  created() {
    this.queryObj = this.$route.query;
    // console.log(this.queryObj);
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.food-description {
  margin-top: -1.2188rem;
  background: #fff;
}
.des-header {
  background-color: #3190e8;
  position: relative;
  width: 100%;
  height: 1.2188rem;
}
i.el-icon-arrow-left {
  color: #fff;
  font-size: 0.625rem;
  margin-left: 0.3125rem;
  line-height: 1.2188rem;
}
.des-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.des-title-text {
  font-size: 0.5rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
.des-img img {
  width: 100%;
}
.des-p {
  font-size: 0.375rem;
  color: #666;
  margin: 0.3125rem 0 0;
  line-height: 0.5rem;
  padding: 0 0.25rem;
}
.des-des {
  padding: 0.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.des-des-left p:nth-child(1) {
  font-size: 0.4375rem;
  color: #333;
  margin-bottom: 0.125rem;
}
.des-rating {
  display: flex;
  align-items: center;
}
.des-rating span:nth-child(1) {
  font-size: 0.375rem;
  color: #666;
  margin-right: 0.125rem;
}
.des-star {
  /* position: relative; */
  /* top: 0.125rem; */
  /* width: 1.25rem; */
  /* height: 0.25rem; */
}
.des-star-star {
  position: absolute;
  display: flex;
  width: 1.25rem;
  height: 0.25rem;
  top: -0.0125rem;
  left: -0.0125rem;
}
i.el-icon-star-on {
  color: #d1d1d1;
  font-size: 0.25rem;
}
.des-rating span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.des-score {
  font-size: 0.3438rem;
  color: #f60;
  margin-left: 0.375rem;
}
.des-sale-price {
  margin-top: 0.1875rem;
  height: 0.5rem;
  position: flex;
}
.des-sale {
  position: absolute;
  font-size: 0.375rem;
  color: #666;
  margin-right: 0.25rem;
}
.des-price {
  position: absolute;
  font-size: 0.375rem;
  color: #f60;
  margin-right: 0.125rem;
  left: 3rem;
}
.des-pinglun,
.des-good {
  position: absolute;
  font-size: 0.375rem;
  color: #666;
  margin-right: 0.25rem;
}
.des-good {
  left: 2.5rem;
}
el-rate {
  font-size: 0.3125rem;
}
</style>
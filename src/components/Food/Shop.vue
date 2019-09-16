<template>
  <div id="rate">
    <el-row class="card" v-for="shop in shopList" :key="shop.id">
      <el-col :span="5">
        <img :src="'//elm.cangdu.org/img/' + shop.image_path" @click="gotoCart(shop.id)" />
      </el-col>
      <el-col :span="19">
        <div class="box1">
          <h4 class="title">{{ shop.name }}</h4>
          <span class="supports">保准票</span>
        </div>

        <div class="box2">
          <div class="subbox">
            <el-rate
              :value="shop.rating"
              disabled
              disabled-void-color="#cccccc"
              show-score
              text-color="#ff6000"
              score-template="{value}"
              class="star"
            ></el-rate>
            <p class="order_num">月售{{ shop.recent_order_num }}单</p>
          </div>
          <div class="subbox">
            <p class="delivery_left">蜂鸟专送</p>
            <p class="delivery_right">准时达</p>
          </div>
        </div>

        <div class="box3">
          <p
            class="fee"
          >￥{{shop.float_minimum_order_amount}}元起送 / 配送费约￥{{ shop.float_delivery_fee }}</p>
          <div class="subbox">
            <p class="p1">{{ shop.distance }} /</p>
            <p class="p2">{{ shop.order_lead_time }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shopList: Array
  },
  methods: {
    Handle() {
      var stars = document.getElementsByClassName("el-rate__icon");
      for (const star of stars) {
        star.style.fontSize = "0.3rem";
        star.style.margin = "0";
      }
      var texts = document.getElementsByClassName("el-rate__text");
      for (const text of texts) {
        text.style.fontSize = "0.4rem";
      }
    },
    gotoCart(id) {
      console.log(id);
      this.$router.push("/cart?geohash=31.22967,121.4762&id=" + id);
    }
  },
  watch: {
    shopList() {
      setTimeout(() => {
        this.Handle();
        setTimeout(() => {
          document.querySelector("#rate").style.opacity = "1";
        }, 300);
      }, 1);
    }
  }
};
</script>

<style scoped>
.el-rate__text {
  font-size: 1px;
}
.card {
  padding: 0.4375rem 0.25rem;
  border-bottom: 0.0313rem solid #cccccc;
}

img {
  width: 1.6875rem;
  margin: 0 0.25rem 0 0;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333333;
  width: 5.3125rem;
  font-size: 0.4063rem;
}

.supports {
  color: #999;
  font-size: 0.3rem;
  letter-spacing: 0.1rem;
}

.box1,
.box2,
.box3 {
  display: flex;
  justify-content: space-between;
}

.fee {
  font-size: 0.3rem;
  color: #666;
}

.delivery_left {
  color: #ffffff;
  background-color: #3190e8;
  font-size: 0.3rem;
  margin: 0 0.05rem 0 0;
  padding: 0.015rem 0.05rem 0;
  height: 0.4rem;
  margin-top: 0.15rem;
}

.delivery_right {
  color: #3190e8;
  border: 0.0313rem solid #3190e8;
  font-size: 0.3rem;
  padding: 0.01rem 0.05rem 0;
  height: 0.35rem;
  margin-top: 0.15rem;
}

.order_num {
  font-size: 0.3rem;
  color: #666;
  margin-top: 0.25rem;
  margin-left: 0.1rem;
}

.p1 {
  color: #999;
  font-size: 0.3rem;
}

.p2 {
  color: #3190e8;
  font-size: 0.3rem;
}

.subbox {
  display: flex;
}

.title::before {
  content: "品牌";
  font-size: 0.3125rem;
  background-color: #ffd930;
  padding: 0 0.0625rem;
  margin: 0 0.125rem 0 0;
}

.box3 {
  margin-top: 0.2rem;
}

#rate {
  opacity: 0;
}
</style>
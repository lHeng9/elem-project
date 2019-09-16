<template>
  <div class="order">
    <ul class="order-list">
      <li class="order-item" v-for="(item,index) in orderlist" :key="index">
        <img :src="'http://elm.cangdu.org/img/' + item.restaurant_image_url" alt />
        <div class="item-container">
          <div class="item-header">
            <div class="item-header-left">
              <h4>
                <span>{{ item.restaurant_name }}</span>
                <i class="el-icon-arrow-right"></i>
              </h4>
              <p class="item-header-time">{{ item.formatted_created_at }}</p>
            </div>
            <p class="item-header-right">支付超时</p>
          </div>
          <div class="item-center">
            <p class="item-name">
              <span>{{ item.basket.group[0][0].name }}</span>
              <span v-if="item.total_quantity != 1">等{{ item.total_quantity }}件商品</span>
            </p>
            <p class="item-money">￥ {{ item.total_amount }}</p>
          </div>
          <div class="item-footer">
            <span>再来一单</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      orderlist: []
    };
  },
  created() {
    this.$axios
      .get(
        "https://elm.cangdu.org/bos/v2/users/" +
          localStorage.getItem("userId") +
          "/orders?limit=10&offset=0"
      )
      .then(res => {
        this.orderlist = res.data;
        console.log(this.orderlist);
      });
  }
};
</script>

<style scoped>
.order-item {
  background-color: #fff;
  display: flex;
  margin-bottom: 0.3125rem;
  padding: 0.375rem 0.375rem 0;
}
.order-item img {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.25rem;
}
.item-container {
  flex: 5;
}
.item-header {
  border-bottom: 0.0156rem solid #f5f5f5;
  padding-bottom: 0.1875rem;
  display: flex;
  justify-content: space-between;
}
.item-header-left h4 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.4688rem;
  color: #333;
  line-height: 0.625rem;
  width: 5.625rem;
}
span,
p {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.item-header-left span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
i {
  font-size: 0.625rem;
  color: #ccc;
}
.item-header-time {
  font-size: 0.3438rem;
  color: #999;
  line-height: 0.5rem;
}
.item-header-right {
  font-size: 0.375rem;
  color: #333;
}
.item-center {
  display: flex;
  justify-content: space-between;
  line-height: 1.25rem;
  border-bottom: 0.0156rem solid #f5f5f5;
}
.item-name {
  font-size: 0.375rem;
  color: #666;
  width: 6.25rem;
}
.item-name span {
  margin-right: 0.25rem;
}
.item-money {
  font-size: 0.375rem;
  color: #f60;
  font-weight: 700;
}
.item-footer {
  text-align: right;
  line-height: 1rem;
}
.item-footer span {
  font-size: 0.3438rem;
  color: #3190e8;
  border: 0.0156rem solid #3190e8;
  padding: 0.0625rem 0.125rem;
  border-radius: 0.0938rem;
}
</style>
<template>
  <div class="delivery-foodsList">
    <div class="foodsList-header" v-if="order.length != 0">
      <img :src="'http://elm.cangdu.org/img/' + order[0].cart.restaurant_info.image_path" />
      <span>{{order[0].cart.restaurant_info.name}}</span>
    </div>
    <ul class="foodsList-list">
      <li class="foodsList-list-item" v-for="(menuOne,inde) in cart" :key="inde">
        <p class="list-item-name">{{ menuOne.obj.specfoods[0].name }}</p>
        <div class="list-item-num-price">
          <span class="list-item-num">x {{ menuOne.num }}</span>
          <span class="list-item-price">￥ {{ menuOne.obj.specfoods[0].price * menuOne.num }}</span>
        </div>
      </li>
    </ul>
    <div class="foodsList-other" v-if="order.length != 0">
      <p class="other-text">{{order[0].cart.extra[0].name}}</p>
      <span class="other-price">￥ {{order[0].cart.extra[0].price}}</span>
    </div>
    <div class="foodsList-other">
      <p class="other-text">配送费</p>
      <span
        class="other-price"
        v-if="order.length != 0"
      >￥ {{order[0].cart.restaurant_info.float_delivery_fee}}</span>
    </div>
    <div class="foodsList-order">
      <span>订单</span>
      <span
        class="list-item-num"
        v-if="order.length != 0"
      >待支付 ￥{{ showPriceAll + order[0].cart.extra[0].price + order[0].cart.restaurant_info.float_delivery_fee }}</span>
    </div>
    <!-- {{orderData}} -->
  </div>
</template>

<script>
import { setTimeout } from "timers";
import { mapGetters } from "vuex";

export default {
  name: "GoToDelivery",
  props: {
    showPriceAll: Number
  },
  computed: {
    ...mapGetters(["cart", "order"])
  },
  created() {}
};
</script>

<style scoped>
.delivery-foodsList {
  background-color: #fff;
  margin-top: 0.25rem;
}
.delivery-foodsList p,
.delivery-foodsList span {
  font-size: 0.4063rem;
  color: #666;
  font-family: Helvetica Neue, Tahoma, Arial;
}

.foodsList-header {
  padding: 14px;
  border-bottom: 0.025rem solid #f5f5f5;
}
.foodsList-header img {
  width: 0.75rem;
  height: 0.75rem;
  vertical-align: middle;
}
.foodsList-header span {
  font-size: 0.5rem;
  color: #333;
}
.foodsList-list {
  padding-top: 0.3125rem;
}
.foodsList-list-item,
.foodsList-other,
.foodsList-order {
  display: flex;
  justify-content: space-between;
  line-height: 1.125rem;
  padding: 0 0.4375rem;
}
.list-item-name {
  width: 6.875rem;
}
.list-item-num-price {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.delivery-foodsList span.list-item-num {
  color: #f60;
}
.foodsList-order {
  border-top: 0.0156rem solid #f5f5f5;
}
</style>
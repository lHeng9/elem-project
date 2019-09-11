<template>
  <div class="payfor-wait">
    <p
      class="wait-money"
      v-if="order.length != 0"
    >待支付￥ {{ showPriceAll + order[0].cart.extra[0].price + order[0].cart.restaurant_info.float_delivery_fee }}</p>
    <p class="wait-current">确认下单</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GoToFooter",
  props: {
    showPriceAll: Number,
    orderData: Object
  },
  computed: {
    ...mapGetters(["order"])
  }
};
</script>

<style scoped>
.payfor-wait {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.4688rem;
  color: #fff;
}
.wait-money {
  background-color: #3c3c3c;
  flex: 5;
  padding-left: 0.4375rem;
}
.wait-current {
  flex: 2;
  background-color: #56d176;
  text-align: center;
}
</style>
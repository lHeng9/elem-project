<template>
  <div class="payfor-wait">
    <p
      class="wait-money"
      v-if="order.length != 0"
    >待支付￥ {{ showPriceAll + order[0].cart.extra[0].price + order[0].cart.restaurant_info.float_delivery_fee }}</p>
    <p class="wait-current" @click="goBuy">确认下单</p>
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
    ...mapGetters(["order", "addAddress", "cart"])
  },
  methods: {
    goBuy() {
      console.log(this.order);
      this.cart.forEach(element => {
        this.$axios
          .post(
            "https://elm.cangdu.org/v1/users/" +
              localStorage.getItem("userId") +
              "/carts/" +
              this.order[0].cart.id +
              "/orders",
            {
              address_id: this.addAddress.id,
              come_from: "mobile_web",
              geohash: "37.82371,112.55487",
              sig: this.order[0].sig,
              entities: [
                [
                  {
                    attrs: [],
                    extra: {},
                    id: element.obj._id,
                    name: element.obj.name,
                    packing_fee: element.obj.specfoods[0].packing_fee,
                    price: element.obj.specfoods[0].price,
                    quantity: element.num,
                    sku_id: element.obj.specfoods[0].sku_id,
                    stock: element.obj.specfoods[0].stock
                  }
                ]
              ]
            }
          )
          .then(res => {
            this.$router.push("/payment");
          });
      });
    }
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
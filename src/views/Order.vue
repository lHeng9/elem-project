<template>
  <div>
    <Header-m></Header-m>
    <GoToOrder :showPriceAll="showPriceAll" :orderData="orderData" />
    <GoToFooter :showPriceAll="showPriceAll" :orderData="orderData" />
  </div>
</template>

<script>
import HeaderM from "../components/header/Header.vue";
import GoToOrder from "../components/gotoOrder/GoToOrder";
import GoToFooter from "../components/gotoOrder/GoToFooter";
import { mapGetters } from "vuex";

export default {
  name: "Order",
  components: {
    HeaderM,
    GoToOrder,
    GoToFooter
  },
  computed: {
    ...mapGetters(["cart"]),
    showPriceAll() {
      let priceAll = 0;
      for (let i = 0; i < this.cart.length; i++) {
        priceAll += this.cart[i].num * this.cart[i].obj.specfoods[0].price;
      }
      return priceAll;
    }
  },
  data() {
    return {
      orderData: {}
    };
  },
  created() {
    // console.log(this.$route.query);
    this.cart.forEach(element => {
      //   console.log(element);
      if (element.obj.specfoods[0].restaurant_id == this.$route.query.id) {
        this.$axios
          .post("http://elm.cangdu.org/v1/carts/checkout", {
            come_from: "web",
            entities: [
              [
                {
                  attrs: [],
                  extra: [],
                  id: element.obj.specfoods[0].id,
                  name: element.obj.specfoods[0].name,
                  packing_fee: element.obj.specfoods[0].packing_fee,
                  price: element.obj.specfoods[0].price,
                  quantity: 1,
                  sku_id: element.obj.specfoods[0].sku_id,
                  specs: [""],
                  stock: element.obj.specfoods[0].stock
                }
              ]
            ],
            geohash: "37.82371,112.55487",
            restaurant_id: element.obj.specfoods[0].restaurant_id
          })
          .then(res => {
            this.orderData = res.data;
            console.log(this.orderData);
          });
      }
    });
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <!-- <Header-m></Header-m> -->
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
  name: "OrderList",
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
    // console.log(this.$route.params);
    this.orderData = this.$route.params.data;
    this.$store.dispatch("setOrderAsync", this.orderData);
  }
};
</script>

<style scoped>
</style>
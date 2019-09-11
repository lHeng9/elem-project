<template>
  <div>
    <Selecter @msg='handle'></Selecter>
    <Shop :shopList='list'></Shop>
  </div>
</template>

<script>
import Selecter from "../components/Food/Selecter";
import Shop from "../components/Food/Shop";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    Selecter,
    Shop
  },
  methods: {
    handle(data) {
      this.list = data;
      console.log(data);
    }
  },
  created() {
    this.$axios
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=37.851375&longitude=112.545341&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=265&order_by=null&delivery_mode[]=null"
      )
      .then(res => {
        this.list = res.data;
      });
  }
};
</script>

<style scoped>
</style>
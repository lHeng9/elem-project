<template>
  <section class="food_container">
    <section class="menu-container">
      <CartLeft :menuList="menuList" />
      <CartRight :menuList="menuList" />
    </section>
  </section>
</template>

<script>
import CartLeft from "../cart/cartMain/CartLeft";
import CartRight from "../cart/cartMain/CartRight";

export default {
  name: "CartMain",
  components: {
    CartLeft,
    CartRight
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  data() {
    return {
      menuList: []
    };
  },
  created() {
    this.$axios
      .get("http://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.id)
      .then(res => {
        // console.log(res.data);
        this.menuList = res.data;
        // console.log(this.menuList);
      });
  }
};
</script>

<style scoped>
.food_container {
  flex: 1;
  padding-bottom: 2rem;
}
.menu-container {
  display: flex;
  flex: 1;
  overflow-y: hidden;
  position: relative;
}
</style>
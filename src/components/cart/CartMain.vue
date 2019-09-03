<template>
  <section class="food_container">
    <section class="menu-container">
      <CartLeft />
      <CartRight />
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
  /* flex: 1; */
  /* overflow-y: hidden; */
  position: relative;
}
</style>
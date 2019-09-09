<template>
  <div>
    <CartDescription />
    <CartFooter />
  </div>
</template>

<script>
import CartFooter from "../components/cart/CartFooter";
import CartDescription from "../components/cart/CartDescription";

export default {
  name: "ShowDescription",
  components: {
    CartFooter,
    CartDescription
  }
};
</script>

<style scoped>
</style>
<template>
  <section class="cart-header">
    <div>
      <router-link tag="span" to="/cart">商品</router-link>
    </div>
    <div>
      <router-link tag="span" to="/cart1">评价</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cart-header span {
  font-size: 0.5rem;
  padding: 0.2rem 0.1rem;
  border-bottom: 0.12rem solid #fff;
}
.cart-header {
  width: 10rem;
  height: 1.4187rem;
  display: flex;
  background-color: #fff;
  padding: 0.125rem 0 0.125rem;
  border-bottom: 1px solid #ebebeb;
}
.cart-header div {
  flex: 1;
  text-align: center;
  height: 0.825rem;
  line-height: 0.825rem;
}
.cart-header .router-link-active {
  color: #3190e8;
  border-color: #3190e8;
}
</style>
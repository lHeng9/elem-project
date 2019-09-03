<template>
  <div class="cart-main">
    <CartHeader />
    <CartMain />
    <CartFooter />
  </div>
</template>

<script>
import CartHeader from "../components/cart/CartHeader";
import CartMain from "../components/cart/CartMain";
import CartFooter from "../components/cart/CartFooter";

export default {
  name: "Cart",
  components: {
    CartHeader,
    CartMain,
    CartFooter
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a,
article,
aside,
b,
body,
button,
dd,
div,
dl,
dt,
figcaption,
figure,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
header,
i,
input,
li,
nav,
p,
section,
select,
span,
textarea,
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
</style>
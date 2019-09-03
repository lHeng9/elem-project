<template>
  <div class="buy-cart">
    <div class="cart-icon-i">
      <div class="cart-icon-container">
        <span class="cart-list-num">1</span>
        <svg data-v-c8684834 class="cart_icon">
          <use data-v-c8684834 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-icon" />
        </svg>
      </div>
      <div class="cart-num">
        <div>￥ 20.00</div>
        <div>配送费 ￥5</div>
      </div>
    </div>
    <div class="gotopay">
      <button>去结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartFooter"
};
</script>

<style scoped>
.buy-cart {
  position: fixed;
  background-color: #3d3d3f;
  bottom: 0;
  left: 0;
  z-index: 13;
  display: flex;
  width: 100%;
  height: 1.25rem;
}
.cart-icon-i {
  flex: 1;
}
.cart-icon-container {
  display: flex;
  background-color: #3d3d3f;
  position: absolute;
  padding: 0.25rem;
  border: 0.1125rem solid #444;
  border-radius: 50%;
  left: 0.125rem;
  top: -0.4375rem;
}
.cart-list-num {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: #ff461d;
  line-height: 0.7rem;
  text-align: center;
  border-radius: 50%;
  border: 0.025rem solid #ff461d;
  min-width: 0.7rem;
  height: 0.7rem;
  font-size: 0.5rem;
  color: #fff;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.cart_icon {
  width: 0.75rem;
  height: 0.75rem;
}
.cart-num {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.1875rem;
  color: #fff;
}
.cart-num div:first-child {
  font-size: 0.5rem;
  font-weight: 700;
  margin-bottom: 0.0625rem;
}
.cart-num div:nth-child(2) {
  font-size: 0.25rem;
}
</style>
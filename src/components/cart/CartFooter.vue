<template>
  <div>
    <div class="buy-cart">
      <div class="cart-icon-i">
        <div
          class="cart-icon-container"
          :class="cart.length != 0 ? 'cartActive' : ''"
          @click="showMenu"
        >
          <span class="cart-list-num" v-if="cart.length != 0">{{ showNum }}</span>
          <i class="el-icon-shopping-cart-full" />
        </div>
        <div class="cart-num">
          <div>￥ {{ showPriceAll }}</div>
          <div>配送费 ￥5</div>
        </div>
        <div class="gotopay" v-if="cart.length == 0">
          <span class="gotopay-span">还差￥20起送</span>
        </div>
        <div class="gotopay gotopay-active" v-if="cart.length != 0">
          <span class="gotopay-span">结算</span>
        </div>
      </div>
    </div>
    <div class="add-menu-list" v-if="flag">
      <div class="cart-header">
        <h4>购物车</h4>
        <div @click="clearCart">
          <i class="el-icon-delete"></i>
          <span class="clear-cart">清空</span>
        </div>
      </div>
      <div class="car-foods-details">
        <ul>
          <li class="cart-food-li" v-for="(showList,index) in cart" :key="index">
            <div class="cart-food-num">
              <p class="ellipsis">{{ showList.obj.name }}</p>
            </div>
            <div class="cart-food-price">
              <span>￥</span>
              <span>{{ showList.obj.specfoods[0].price }}</span>
            </div>
            <div class="cart-list-control">
              <i class="el-icon-remove-outline" @click="showList.num--;deleteMenuOne(cart)"></i>
              <span>{{ showList.num }}</span>
              <i class="el-icon-circle-plus" @click="showList.num++"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="screen-cover" v-if="flag"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartFooter",
  data() {
    return {
      flag: false
      //   showMenuList: []
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    showNum() {
      let numAll = 0;
      for (let i = 0; i < this.cart.length; i++) {
        numAll += this.cart[i].num;
      }
      return numAll;
    },
    showPriceAll() {
      let priceAll = 0;
      for (let i = 0; i < this.cart.length; i++) {
        priceAll += this.cart[i].num * this.cart[i].obj.specfoods[0].price;
      }
      return priceAll;
    }
  },
  methods: {
    showMenu() {
      if (this.cart.length != 0) {
        this.flag = !this.flag;
      } else {
        this.flag = false;
      }
    },
    deleteMenuOne(cartArr) {
      cartArr.forEach((element, index) => {
        if (element.num <= 0) {
          cartArr.splice(index, 1);
        }
      });
      if (cartArr.length == 0) {
        this.flag = false;
      }
    },
    clearCart() {
      console.log(this.cart);
      this.cart.splice(0, this.cart.length);
      console.log(this.cart.length);
      this.flag = false;
      //   this.$store.dispatch("setCartAsync", []);
    }
  }
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
.cartActive {
  background-color: #3190e8;
}
.cart-list-num {
  position: absolute;
  top: -0.1563rem;
  right: -0.1563rem;
  background-color: #ff461d;
  line-height: 0.4375rem;
  text-align: center;
  border-radius: 50%;
  border: 0.0156rem solid #ff461d;
  min-width: 0.4375rem;
  height: 0.4375rem;
  font-size: 0.3125rem;
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
.gotopay {
  background-color: #535356;
  position: absolute;
  right: 0;
  width: 3.125rem;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gotopay-active {
  background: #4cd964;
}
.gotopay-span {
  font-size: 0.4375rem;
  color: #fff;
  font-weight: 700;
}
i.el-icon-shopping-cart-full {
  color: #fff;
  font-size: 0.7813rem;
}
/*  */
.add-menu-list {
  position: fixed;
  width: 100%;
  padding-bottom: 1.25rem;
  z-index: 12;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.cart-header {
  display: flex;
  padding: 0.1875rem 0.375rem;
  background-color: #eceff1;
  align-items: center;
  justify-content: space-between;
}
.cart-header h4 {
  font-size: 0.4375rem;
  color: #666;
}
.clear-cart {
  font-size: 0.375rem;
  color: #666;
}
.car-foods-details {
  background-color: #fff;
  max-height: 12.5rem;
  overflow-y: auto;
}
.cart-food-li {
  display: flex;
  justify-content: space-between;
  padding: 0.375rem 0.3125rem;
}
.cart-food-num {
  display: flex;
  align-items: center;
  width: 55%;
}
.cart-food-num p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.4375rem;
  color: #666;
  font-weight: 700;
}
.cart-food-price {
  display: flex;
  align-items: center;
}
.cart-food-price span:nth-child(1) {
  font-size: 0.375rem;
  color: #f60;
  font-family: Helvetica Neue, Tahoma;
}
.cart-food-price span:nth-child(2) {
  font-size: 0.4375rem;
  color: #f60;
  font-family: Helvetica Neue, Tahoma;
  font-weight: 700;
}
.cart-list-control {
  display: flex;
  align-items: center;
}
.cart-list-control span {
  font-size: 0.4063rem;
  color: #666;
  min-width: 0.625rem;
  text-align: center;
  font-family: Helvetica Neue, Tahoma;
}
i.el-icon-delete {
  font-size: 0.3125rem;
  margin-right: 0.1875rem;
}
i.el-icon-remove-outline,
i.el-icon-circle-plus {
  color: #3190e8;
  font-size: 0.625rem;
}
/*  */
.screen-cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
}
</style>
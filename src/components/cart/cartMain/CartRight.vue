<template>
  <section class="menu-right">
    <ul>
      <li v-for="(menu,index) in menuList" :key="index">
        <div class="menu-right-header">
          <section :id="'w' + menu.id" class="menu-right-headerL">
            <strong class="menu-item-title">{{ menu.name }}</strong>
            <span class="menu-item-description">{{ menu.description }}</span>
          </section>
          <span class="menu-item-right">···</span>
        </div>
        <!--  -->
        <section class="menu-right-list" v-for="(menuMain,inde) in menu.foods" :key="inde">
          <div class="menu-list-link">
            <section class="munu-list-img" @click="gotoDescription(menuMain)">
              <img :src="'http://elm.cangdu.org/img/' + menuMain.image_path" />
            </section>
            <section class="menu-list-description">
              <h3 class="menu-food-head">
                <strong class="food-name">{{ menuMain.name }}</strong>
                <ul class="attributes-ul">
                  <li
                    class="attribute-new"
                    v-if="menuMain.attributes.length != 0"
                    :style="'color:' + menuMain.attributes.icon_color + ';border-color:' + menuMain.attributes.icon_color"
                  >
                    <p style="color: rgb(255, 255, 255);">新品</p>
                  </li>
                </ul>
              </h3>
              <p class="food-content">{{ menuMain.description}}</p>
              <p class="food-sale">
                <span>{{ menuMain.tips }}</span>
              </p>
              <p class="food-activity">
                <span
                  v-if="menuMain.activity != null"
                  :style="'color:' + menuMain.activity.image_text_color + '; border-color:' + menuMain.activity.icon_color "
                >{{ menuMain.activity.image_text }}</span>
              </p>
            </section>
          </div>
          <footer class="menu-right-footer">
            <div class="food-price" v-if="menuMain.specfoods[0]">
              <span>￥</span>
              <span>{{ menuMain.specfoods[0].price }}</span>
              <span>起</span>
            </div>
            <section class="cart-module">
              <i
                class="el-icon-remove-outline"
                v-if="getNum(menuMain) && getNum(menuMain) != 0"
                @click="delNum(menuMain)"
              ></i>
              <span v-if="getNum(menuMain) && getNum(menuMain) != 0">{{ getNum(menuMain) }}</span>
              <i class="el-icon-circle-plus" @click="addMenu(menuMain);" />
              <!-- <i class="el-icon-circle-plus add-cart-transition" /> -->
            </section>
          </footer>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default {
  name: "CartRight",
  data() {
    return {
      cartList: [],
      shopcar: {}
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    getNum() {
      return obj => {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].obj._id == obj._id) {
            // console.log(this.cart[i].num);
            return this.cart[i].num;
          }
        }
      };
    },
    delNum() {
      return obj => {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].obj._id == obj._id) {
            // console.log(this.cart[i].num);
            this.cart[i].num--;
            if (this.cart[i].num <= 0) {
              this.cart.splice(i, 1);
            } else {
              return this.cart[i].num;
            }
          }
        }
      };
    }
  },
  props: {
    menuList: Array
  },
  methods: {
    addMenu(obj) {
      //   console.log(obj);
      let objMenu = { obj, num: 1 };
      this.$store.dispatch("setCartAsync", objMenu);
    },
    gotoDescription(obj) {
      // this.$router.push("/description?id=" + obj._id);
      this.$router.push({ path: "/description", query: obj });
      //   console.log(obj);
    }
  }
};
</script>

<style scoped>
.menu-right {
  width: 7.625rem;
  height: 100%;
  position: fixed;
  right: 0;
  overflow-y: scroll;
}
.menu-right-header {
  padding: 0.25rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font: 0.625rem "Microsoft Yahei";
}
.menu-right-headerL {
  width: 6.875rem;
  height: 0.825rem;
}
.menu-item-title {
  /* width: 1.3125rem; */
  font-size: 0.4375rem;
  color: #333;
  white-space: nowrap;
}
.menu-item-description {
  width: 2.1875rem;
  color: #999;
  font-size: 0.3125rem;
  margin-left: 5px;
}
.menu-item-right {
  height: 0.625rem;
  display: block;
  color: #999;
}
/*  */
.menu-right-list {
  background-color: #fff;
  padding: 0.375rem 0.25rem;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.menu-list-link,
.attributes-ul {
  display: flex;
}
.munu-list-img {
  width: 1.25rem;
  margin: 0 0.25rem 0 0;
}
.munu-list-img img {
  width: 1.25rem;
  height: 1.25rem;
}
/*  */
.attributes-ul .attribute-new {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #4cd964;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: flex-end;
  transform: rotate(-45deg) translate(-0.0625rem, -0.9375rem);
  border: none;
  border-radius: 0;
}
.attributes-ul .attribute-new p {
  font-size: 0.25rem;
  text-align: center;
  flex: 1;
  transform: scale(0.8) translate(0.0625rem, 0.15rem);
}
/*  */
.menu-food-head {
  margin: 0 0 0.125rem;
  font-size: 0.75rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.625rem;
  overflow: hidden;
}
.food-name {
  font-size: 0.4375rem;
}
p {
  margin-bottom: 0;
}
.food-content {
  color: #999;
  font-size: 0.3125rem;
  line-height: 0.375rem;
}
.food-sale {
  line-height: 0.5rem;
}
.food-sale span {
  font-size: 0.3125rem;
  color: #333;
  margin-right: 0.1875rem;
}
.food-activity {
  line-height: 0.25rem;
}
.food-activity span {
  color: #f1884f;
  margin: 0 0 0 -0.2rem;
  padding: 0.05rem;
  border: 1px solid rgb(240, 115, 115);
  font-size: 0.1875rem;
  border-radius: 0.1875rem;
  display: inline-block;
  padding: 0.05rem;
}
/*  */
.menu-right-footer {
  margin: 0.2rem 0 0 1.5rem;
  display: flex;
  height: 0.5625rem;
  justify-content: space-between;
  align-items: center;
}
.food-price span {
  color: #ff6600;
  font-family: Helvetica Neue, Tahoma, Arial;
  /* line-height: 0.5625rem; */
}
.food-price span:first-child {
  margin-right: 1px;
  font-size: 0.3125rem;
}
.food-price span:nth-child(2) {
  font-size: 0.4375rem;
  font-weight: 700;
  margin-right: 0.1875rem;
}
.food-price span:nth-child(3) {
  font-size: 0.315rem;
  color: #999;
}
.cart-module {
  /* position: relative; */
  display: flex;
  align-items: center;
}
.cart-module span {
  font-size: 0.4063rem;
  color: #666;
  min-width: 0.625rem;
  text-align: center;
  font-family: Helvetica Neue, Tahoma;
}
/* 购物车动画 */
@keyframes animation1 {
  from {
    left: 0;
    top: 0;
  }
  to {
    left: -20px;
    top: 50px;
  }
}
/* .add-cart-transition {
  z-index: 2;
  position: absolute;
  animation: animation1 10s linear infinite;
} */

/*  */
i.el-icon-remove-outline,
i.el-icon-circle-plus {
  color: #3190e8;
  font-size: 0.625rem;
}
</style>
<template>
  <section class="menu-right">
    <ul>
      <li v-for="(menu,index) in menuList" :key="index">
        <header class="menu-right-header">
          <section class="menu-right-headerL">
            <strong class="menu-item-title">{{ menu.name }}</strong>
            <span class="menu-item-description">{{ menu.description }}</span>
          </section>
          <span class="menu-item-right">···</span>
        </header>
        <!--  -->
        <section class="menu-right-list" v-for="(menuMain,inde) in menu.foods" :key="inde">
          <div class="menu-list-link">
            <section class="munu-list-img">
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
            <div class="food-price">
              <span>￥</span>
              <span>{{ menuMain.specfoods[0].price }}</span>
              <span>起</span>
            </div>
            <section class="cart-module">
              <svg class="add-icon">
                <use
                  data-v-2feef6d8
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#cart-add"
                >
                  <svg viewBox="0 0 50 50" id="cart-add">
                    <path fill="none" d="M0 0h44v44H0z" />
                    <path
                      fill-rule="evenodd"
                      d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </use>
              </svg>
            </section>
          </footer>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CartRight",
  data() {
    return {
      menuList: []
    };
  },
  created() {
    this.$axios
      .get("http://elm.cangdu.org/shopping/v2/menu?restaurant_id=3269")
      .then(res => {
        console.log(res.data);
        this.menuList = res.data;
        console.log(this.menuList);
      });
  }
};
</script>

<style scoped>
.menu-right {
  flex: 4;
  overflow-y: auto;
}
.menu-right-header {
  width: 100%;
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
.cart-module svg {
  width: 0.5625rem;
  height: 0.5625rem;
  fill: #3190e8;
}
</style>
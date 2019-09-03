<template>
  <section class="menu-wrapper menu-left">
    <ul>
      <li
        class="menu-left-li"
        :class="{menuListClick:index == findex}"
        v-for="(menu,index) in menuList"
        :key="index"
        @click="menuClick(index)"
      >
        <span>{{ menu.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CartLeft",
  data() {
    return {
      menuList: [],
      findex: 0
    };
  },
  created() {
    this.$axios
      .get("http://elm.cangdu.org/shopping/v2/menu?restaurant_id=3269")
      .then(res => {
        console.log(res.data);
        this.menuList = res.data;
        // console.log(this.menuList);
      });
  },
  methods: {
    menuClick(index) {
      this.findex = index;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.menu-wrapper {
  width: 2.375rem;
  /* height: 1.7188rem; */
  /* overflow: hidden; */
}
.menu-left-li {
  font-size: 0.625rem;
  width: 2.375rem;
  height: 1.7188rem;
  font-family: "Microsoft Yahei";
  padding: 0.4375rem 0.1875rem;
  color: #333333;
}
.menu-left-li span {
  color: #666;
  font-size: 0.375rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.menuListClick {
  background-color: #fff;
  border-left: 0.0938rem solid #3190e8;
}
</style>
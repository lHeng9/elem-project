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
        <a :href="'#' + menu.id ">
          <span>{{ menu.name }}</span>
        </a>
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
      findex: 0,
      height: ""
    };
  },
  created() {
    this.$axios
      .get("http://elm.cangdu.org/shopping/v2/menu?restaurant_id=3269")
      .then(res => {
        console.log(res.data);
        this.menuList = res.data;
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
  position: fixed;
  height: 100%;
  left: 0;
  width: 2.375rem;
  overflow-y: scroll;
}
.menu-left-li {
  font-size: 0.625rem;
  font-family: "Microsoft Yahei";
  padding: 0.4375rem 0.1875rem;
  color: #333333;
  border-bottom: 0.0156rem solid #ededed;
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
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
        <a @click="changeHash(menu.id)">
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
      findex: 0,
      height: ""
    };
  },
  props: {
    menuList: Array
  },
  methods: {
    menuClick(index) {
      this.findex = index;
    },
    changeHash(idName) {
      let id = "w" + idName;
      console.log(id);
      document.querySelector("#" + id).scrollIntoView(true);
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
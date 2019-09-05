<template>

  <div id="app" class="app">
    <Header-m></Header-m>
    <transition>
      <router-view></router-view>
    </transition>
    <FootGuide class="top"></FootGuide>

  </div>
</template>


<script>
import FootGuide from "./components/footer/FootGuide";
import HeaderM from "./components/header/Header";
export default {
  components: {
    FootGuide,
    HeaderM
  }
};
</script>

<style>
.app {
  padding: 1.2188rem 0 1.2312rem 0;
  overflow-x: hidden;
  overflow: hidden;
}

.my-active {
  color: #409eff;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.top {
  z-index: 99;
}
</style>

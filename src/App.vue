<template>
  <div id="app">
    <Header-m></Header-m>
    <router-view></router-view>
    <FootGuide></FootGuide>
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
.my-active {
  color: #409eff;
}
</style>

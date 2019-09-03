<template>
  <div id="app">
    <Header-m></Header-m>
    <router-view></router-view>
    <!-- <footGuide></footGuide> -->

  </div>
</template>


<script>
import footGuide from "./components/footer/footGuide";
import HeaderM from "./components/header/Header";
export default {
  components: {
    footGuide,
    HeaderM
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  /* font-size: 32px; */
}

.my-active {
  color: #409eff;
}
</style>

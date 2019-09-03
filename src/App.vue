<template>
  <div id="app">
    <!-- <router-link></router-link> -->
    <footGuide></footGuide>
  </div>
</template>


<script>
import footGuide from "./components/footer/footGuide";
export default {
  components: {
    footGuide
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
  overflow: hidden;
  font-size: 32px;
}

.my-active {
  color: #409eff;
}
</style>

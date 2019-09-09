<template>
  <div class="search">
    <Header />
    <SearchContainer />
  </div>
</template>

<script>
import Header from "../components/header/Header";
import SearchContainer from "../components/addAddress/SearchContainer";

export default {
  name: "SearchAddress",
  components: {
    Header,
    SearchContainer
  }
};
</script>

<style scoped>
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 204;
  overflow-y: auto;
  padding-top: 1.2188rem;
}
</style>
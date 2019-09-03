<template>
  <div class="home">
    <Nav></Nav>
    <HotCity></HotCity>

    <CityList></CityList>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Home/Nav.vue";
import HotCity from "@/components/Home/HotCity.vue";
import CityList from "@/components/Home/CityList.vue";

export default {
  name: "home",
  components: {
    Nav,
    HotCity,
    CityList
  }
};
</script>

<style scoped>
</style>

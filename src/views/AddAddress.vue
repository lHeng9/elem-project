<template>
  <div>
    <Header />
    <AddAddressContainer />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import AddAddressContainer from "../components/addAddress/AddAddressContainer";

export default {
  name: "AddAddress",
  components: {
    Header,
    AddAddressContainer
  }
};
</script>

<style scoped>
</style>
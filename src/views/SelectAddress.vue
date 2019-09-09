<template>
  <div class="select-address">
    <HeaderM />
    <SelectAddressAdd />
  </div>
</template>

<script>
import HeaderM from "../components/header/Header";
import SelectAddressAdd from "../components/addAddress/SelectAddressAdd";

export default {
  name: "SelectAddress",
  components: {
    HeaderM,
    SelectAddressAdd
  }
};
</script>

<style lang="scss" scoped>
</style>
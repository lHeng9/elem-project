<template>
  <div>
    <ul class="show-address" v-if="address.length != 0">
      <li v-for="(add,index) in address" :key="index">
        <div class="show-address-left">
          <p>{{ add.address1 }}</p>
          <p>{{ add.address2 }}</p>
          <p>
            <span>{{ add.name }}</span>
            <span>{{ add.tel }}</span>
          </p>
        </div>
        <div class="show-address-right">
          <i class="el-icon-edit-outline"></i>
        </div>
      </li>
    </ul>

    <div class="add-address" @click="gotoAddress">
      <i class="el-icon-circle-plus-outline"></i>
      <span>新增收货地址</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectAddressAdd",
  computed: {
    ...mapGetters(["address"])
  },
  methods: {
    gotoAddress() {
      console.log(this.address);
      this.$router.push("/selectAddress/addAddress");
    }
  }
};
</script>

<style scoped>
.add-address {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5625rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3190e8;
}
.add-address span {
  font-size: 0.4375rem;
  margin-left: 0.1875rem;
}
i {
  font-size: 0.7813rem;
}
.show-address {
  color: #333;
}
.show-address li {
  padding: 0.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.0156rem solid #f5f5f5;
}
.show-address-left p {
  padding: 0.125rem 0;
}
.show-address-left p:nth-child(1) {
  font-size: 0.5rem;
}
.show-address-left p:nth-child(2) {
  font-size: 0.4375rem;
}
.show-address-left p:nth-child(3) {
  font-size: 0.3125rem;
  color: #333;
}
span {
  margin-right: 0.1563rem;
}
</style>
<template>
  <div class="show-address-all">
    <ul class="show-address">
      <li v-for="(address,index) in addressLists" :key="index">
        <div class="show-address-left" @click="chooseOK(index,address)">
          <i :class="findex == index ? 'el-icon-success' : ''"></i>
          <div>
            <div class="show-address-title">
              <span class="name">{{ address.name }}</span>
              <span class="sex">{{ address.sex == 1 ? '先生' : '女士' }}</span>
              <span class="tel">{{ address.phone }} {{address.phone_bk}}</span>
            </div>
            <div>
              <span
                class="type"
              >{{ address.tag_type == 1 ? '无' : address.tag_type == 2 ? '家' : address.tag_type == 3 ? '学校' : address.tag_type == 4 ? '公司' : '' }}</span>
              <span class="address">{{ address.address }} {{ address.address_detail}}</span>
            </div>
          </div>
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
import { setTimeout } from "timers";

export default {
  name: "SelectAddressAdd",
  data() {
    return {
      addressLists: [],
      findex: 0
    };
  },
  created() {
    this.$axios
      .get(
        "https://elm.cangdu.org/v1/users/" +
          parseInt(localStorage.getItem("userId")) +
          "/addresses"
      )
      .then(res => {
        this.addressLists = res.data;
        // console.log(this.addressLists);
      });
    console.log(this.$route.params);
  },
  methods: {
    gotoAddress() {
      // console.log(this.address);
      this.$router.push("/selectAddress/addAddress");
    },
    chooseOK(index, address) {
      this.findex = index;
      this.$store.dispatch("setAddAddressAsync", address);
      setTimeout(() => {
        this.$router.push({
          name: "order",
          query: {
            geohash: "31.22967,121.4762",
            id: this.$route.query.id
          }
        });
      }, 500);
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
.show-address-all {
  padding-bottom: 3.125rem;
}
.show-address {
  background: #fff;
}
.show-address-left {
  display: flex;
  align-items: center;
  flex: 4;
}
.show-address-right {
  text-align: center;
  flex: 1;
}
.show-address li {
  line-height: 0.625rem;
  padding: 0.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.0156rem solid #f5f5f5;
}
.show-address-title {
  font-size: 0.4375rem;
  color: #333;
}
span {
  margin-right: 0.1563rem;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.name {
  font-size: 0.5rem;
  font-weight: 700;
}
.type {
  font-size: 0.3125rem;
  color: #fff;
  border-radius: 0.0938rem;
  background-color: #ff5722;
  height: 0.375rem;
  line-height: 0.375rem;
  padding: 0 0.125rem;
  margin-right: 0.1875rem;
}
.address {
  font-size: 0.375rem;
  color: #777;
}
.show-address-left i {
  width: 0.625rem;
}
i.el-icon-success {
  font-size: 0.625rem;
  margin-right: 0.25rem;
  color: #4cd964;
}
</style>
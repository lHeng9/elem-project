<template>
  <div>
    <div class="add-address-container">
      <div class="address-list">
        <span>联系人</span>
        <div class="address-right">
          <input type="text" name id placeholder="你的名字" v-model="address.name" />
          <div class="address-sex">
            <span>
              <i
                class="el-icon-success"
                @click="[flag1 = true, flag2 = false]"
                :class="flag1 ? 'i-active': ''"
              ></i>
              先生
            </span>
            <span>
              <i
                class="el-icon-success"
                @click="[flag2 = true, flag1 = false]"
                :class="flag2 ? 'i-active': ''"
              ></i>
              女士
            </span>
          </div>
        </div>
      </div>
      <div class="address-list">
        <span>联系电话</span>
        <div class="address-right">
          <div class="address-tel">
            <input type="text" placeholder="你的手机号" v-model="address.tel" />
            <i class="el-icon-plus" @click="flag3 = !flag3"></i>
          </div>
          <input
            type="text"
            class="beixuan-tel"
            placeholder="备选电话"
            v-if="flag3"
            v-model="address.tel2"
          />
        </div>
      </div>
      <div class="address-list">
        <span>送餐地址</span>
        <div class="address-right">
          <div
            class="address-choose"
            @click="gotoSearch"
          >{{ this.$route.params.name ? this.$route.params.name : '小区/写字楼/学校等' }}</div>
          <input type="text" name id placeholder="详细地址（如门牌号等）" v-model="address.address2" />
        </div>
      </div>
      <div class="address-list">
        <span>标签</span>
        <div class="address-right">
          <input type="text" name id placeholder="无/家/学校/公司" v-model="address.label" />
        </div>
      </div>
    </div>

    <div class="btn-success" @click="addAddress">确认</div>
  </div>
</template>

<script>
export default {
  name: "AddAddress",
  data() {
    return {
      flag1: true,
      flag2: false,
      flag3: false,
      address: {
        name: "",
        tel: "",
        tel2: "",
        address2: "",
        label: "",
        tag: 0
      },
      sex: 0,
      address1: ""
    };
  },
  methods: {
    addAddress() {
      this.sex = this.flag1 == true ? 1 : 2;
      this.address1 = this.$route.params.name ? this.$route.params.name : "";
      if (this.address.label == "家") {
        this.address.tag = 2;
      } else if (this.address.label == "学校") {
        this.address.tag = 3;
      } else if (this.address.label == "公司") {
        this.address.tag = 4;
      } else {
        this.address.tag = 1;
      }
      // console.log(parseInt(localStorage.getItem("userId")));
      this.$axios
        .post(
          "https://elm.cangdu.org/v1/users/" +
            parseInt(localStorage.getItem("userId")) +
            "/addresses",
          {
            address: this.address1,
            address_detail: this.address.address2,
            geohash: "37.82371,112.55487",
            name: this.address.name,
            phone: this.address.tel,
            phone_bk: this.address.tel2,
            sex: this.sex,
            tag: this.address.label,
            tag_type: this.address.tag
          }
        )
        .then(res => {
          console.log(res);
          this.$router.push("/selectAddress");
        });
    },
    gotoSearch() {
      this.$router.push("/selectAddress/addAddress/searchAddress");
    }
  }
};
</script>

<style scoped>
.add-address-container {
  background: #fff;
  padding: 0 0.4375rem;
  font-size: 0.4375rem;
}
.address-list {
  display: flex;
  border-bottom: 0.0156rem solid #f5f5f5;
}
.address-list span {
  color: #333;
  flex: 2;
  line-height: 1.5625rem;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.address-right {
  flex: 5;
}
.address-tel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0156rem solid #f5f5f5;
}
.address-list input {
  width: 100%;
  height: 1.5625rem;
  /* font-size: 0.4375rem; */
  color: #999;
  border: none;
}
.address-sex {
  display: flex;
  line-height: 1.5625rem;
  border-top: 0.0156rem solid #f5f5f5;
}
.address-sex span {
  margin-right: 0.5rem;
}
.address-choose {
  color: #999;
  line-height: 1.5625rem;
  border-bottom: 0.0156rem solid #f5f5f5;
}
i {
  color: #ccc;
  font-size: 0.625rem;
}
.i-active {
  color: #4cd964;
}
.btn-success {
  background-color: #4cd964;
  font-size: 0.4375rem;
  color: #fff;
  text-align: center;
  margin: 0 0.4375rem;
  line-height: 1.125rem;
  border-radius: 0.125rem;
  margin-top: 0.375rem;
}
</style>
<template>
  <div class="header">
    <i class="el-icon-arrow-left" @click="gotoBack()"></i>
    <div v-if="!user">
      <span @click="login">登录</span>
      |
      <span>注册</span>
    </div>
    <div v-else>
      <span>
        <i class="el-icon-user"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: ""
    };
  },
  methods: {
    gotoBack() {
      this.$router.go(-1);
    },
    login() {
      this.$router.push("/login");
    }
  },
  created() {
    this.user = localStorage.getItem("userId");
    console.log(this.$route);
  }
};
</script>

<style>
.header {
  background-color: #3190e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4375rem;
  color: #fff;
  height: 1.2188rem;
  line-height: 1.2188rem;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0 0.2813rem;
}
i {
  font-size: 0.8125rem;
}
i.el-icon-user {
  font-size: 0.625rem;
}
</style>
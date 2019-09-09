<template>
  <div class="header">
    <i class="el-icon-arrow-left" @click="gotoBack()"></i>
    <div>
      <span>登录</span>|
      <span>注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    gotoBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.header {
  width: 10rem;
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
  box-sizing: border-box;
  padding: 0 0.2813rem;
}
i {
  font-size: 0.8125rem;
}
</style>
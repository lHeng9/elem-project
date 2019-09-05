<template>
  <div>
    <router-link class="flex box" to="/profile/info/address/add" tag="div">
      <p>新增地址</p>
      <p>
        <span class="el-icon-arrow-right"></span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.box {
  background-color: #fff;
  height: 1.3125rem;
  line-height: 1.3125rem;
  padding-left: 0.3rem;
  padding-right: 0.11rem;
  border-bottom: 1px solid #d2d2d2;
  border-top: 1px solid #d2d2d2;
  font-size: 0.4375rem;
  margin-top: 0.5rem;
}
.flex {
  display: flex;
  justify-content: space-between;
}

.el-icon-arrow-right {
  color: #ccc;
  font-weight: bold;
  font-size: 0.4375rem;
}
</style>
<template>
  <div class="font">
    <div style="position: relative;" class="input">
      <span class="title">头像</span>

      <div style="display:flex;" class="imgBox">
        <div class="img">
          <img src="../../assets/default.jpg" width="100%" />
        </div>
        <span class="el-icon-arrow-right select"></span>
      </div>
      <input type="file" />
    </div>
    <router-link class="flex box" to="/profile/info/setusername" tag="div">
      <p>用户名</p>
      <p>
        2072270857
        <span class="el-icon-arrow-right"></span>
      </p>
    </router-link>
    <router-link class="flex box" to="/profile/info/address" tag="div">
      <p>收货地址</p>
      <p>
        <span class="el-icon-arrow-right"></span>
      </p>
    </router-link>
    <p class="p">账号绑定</p>
    <div class="flex box border-top">
      <div style="display: flex;">
        <div class="img1">
          <img src="../../assets/mobile.png" width="100%" />
        </div>
        <p>手机</p>
      </div>
      <p>
        <span class="el-icon-arrow-right"></span>
      </p>
    </div>
    <p class="p">安全设置</p>
    <router-link class="flex box border-top" to="/profile/info/resetpwd" tag="div">
      <p>登录密码</p>
      <p style="font-size:0.5rem;color:#999">
        修改
        <span class="el-icon-arrow-right"></span>
      </p>
    </router-link>
    <div class="my-btn">退出登录</div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped>
.my-btn {
  width: 96%;
  margin: 1rem auto 0;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: 0.375rem;
  color: #fff;
  height: 30px;
  line-height: 30px;
}
.p {
  padding-left: 0.3rem;
  height: 0.9063rem;
  line-height: 0.9063rem;
  font-size: 0.3125rem;
}

.box {
  background-color: #fff;
  height: 1.3125rem;
  line-height: 1.3125rem;
  padding-left: 0.3rem;
  padding-right: 0.11rem;
  border-bottom: 1px solid #d2d2d2;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.imgBox {
  position: absolute;
  top: 0.4rem;
  right: 0.1rem;
}

.title {
  position: absolute;
  top: 0.7rem;
  margin-left: 0.3rem;
}

.select {
  margin-top: 0.35rem;
}

.border-top {
  border-top: 1px solid #d2d2d2;
}

.input {
  background-color: #fff;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
  margin-top: 0.3rem;
  height: 2rem;
}

.img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  overflow: hidden;
}

.font {
  font-size: 0.375rem;
  color: #333;
}
input {
  padding: 0;
  margin: 0;
  outline: none;
  display: block;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.el-icon-arrow-right {
  color: #ccc;
  font-weight: bold;
  font-size: 0.4375rem;
}

.img1 {
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  width: 0.625rem;
  height: 0.6875rem;
}
</style>
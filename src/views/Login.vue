<template>
  <div>
    <div class="login">
      <form class="login-form">
        <div class="login-input">
          <input type="text" placeholder="账号" v-model="username" />
        </div>
        <div class="login-input">
          <input type="text" placeholder="密码" v-model="password" />
          <div class="login-input-right">
            <div class="circle-btn"></div>
            <span>abc</span>
            <span>...</span>
          </div>
        </div>
        <div class="login-input">
          <input type="text" placeholder="验证码" maxlength="4" v-model="code" />
          <div class="code">
            <img :src="refreshCode" />
            <div class="change-code">
              <p>看不清</p>
              <p @click="changeCode">换一张</p>
            </div>
          </div>
        </div>
      </form>
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <div class="login-btn" @click="login">登录</div>
      <a href>重置密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {
    this.changeCode();
  },
  components: {},
  data() {
    return {
      username: "",
      password: "",
      code: "",
      refreshCode: ""
    };
  },
  methods: {
    changeCode() {
      this.$axios.post("http://elm.cangdu.org/v1/captchas").then(response => {
        this.refreshCode = response.data.code;
        // console.log(this.refreshCode);
      });
    },
    login() {
      this.$axios
        .post("http://elm.cangdu.org/v2/login", {
          captcha_code: this.code,
          password: this.password,
          username: this.username
        })
        .then(res => {
          localStorage.setItem("userId", res.data.user_id);
          console.log(res.data.user_id);
        });
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.login-form {
  background-color: #fff;
  margin-top: 0.375rem;
  display: block;
}
.login-input {
  display: flex;
  justify-content: space-between;
  padding: 0.375rem 0.5rem;
  border-bottom: 1px solid #f1f1f1;
}
input {
  font-family: Helvetica Neue, Tahoma, Arial;
  font-size: 0.4375rem;
  color: #666;
  border: none;
}
.login-input-right {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  width: 1.25rem;
  height: 0.4375rem;
  padding: 0 0.125rem;
  border: 1px;
  border-radius: 0.3125rem;
  position: relative;
}
.circle-btn {
  transition: all 0.3s;
  position: absolute;
  top: -0.125rem;
  z-index: 1;
  left: -0.1875rem;
  width: 0.75rem;
  height: 0.75rem;
  box-shadow: 0 0.0187rem 0.0187rem 0 rgba(0, 0, 0, 0.1);
  background-color: #f1f1f1;
  border-radius: 50%;
}
.login-input-right span {
  font-size: 0.2813rem;
  color: #fff;
  transform: translateY(0.0313rem);
  line-height: 0.375rem;
}
.login-input-right span:nth-child(2) {
  transform: translateY(0.05rem);
}
.login p {
  font-size: 0.3125rem;
  color: red;
  padding: 0.25rem 0.375rem;
  line-height: 0.3125rem;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.login-btn {
  margin: 0 10px 0.625rem;
  font-size: 0.4375rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.3125rem 0;
  border: 1px;
  border-radius: 0.0938rem;
  text-align: center;
}
a {
  float: right;
  font-size: 0.375rem;
  color: #3b95e9;
  margin-right: 0.1875rem;
}
.code {
  display: flex;
  align-items: center;
}
.code img {
  width: 2.1875rem;
  height: 0.9375rem;
  margin-right: 0.125rem;
}
.change-code {
  display: flex;
  flex-wrap: wrap;
  width: 1.8rem;
  justify-content: center;
}
.login .change-code p {
  font-size: 0.3438rem;
  color: #666;
  padding: 0;
}
.login .change-code p:nth-child(2) {
  color: #3b95e9;
  margin-top: 0.125rem;
}
</style>
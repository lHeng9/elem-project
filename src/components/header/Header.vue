<template>
  <div v-if="$route.name != 'description'">
    <div class="header" v-if="$route.name != 'cart'">
      <div>
        <span v-if="$route.name == 'home'">ele</span>
        <i class="el-icon-zoom-out" v-else-if="$route.name == 'msite'" @click="goSearch()"></i>
        <i class="el-icon-arrow-left" @click="gotoBack()" v-else></i>
      </div>

      <div>
        <span v-if="$route.name == 'city'">城市</span>
        <span v-if="$route.name == 'msite'">商品</span>
        <span v-if="$route.name == 'orderList'">确认订单</span>
        <span v-if="$route.name == 'payment'">在线支付</span>
        <span v-if="$route.name == 'order'">订单列表</span>
        <span v-if="$route.name == 'profile'">我的</span>
        <span v-if="$route.name == 'search'">搜索</span>
        <span v-if="$route.name == 'vipcard'">会员中心</span>
        <span v-if="$route.name == 'service'">服务中心</span>
        <span v-if="$route.name == 'download'">下载</span>
        <span v-if="$route.name == 'food'">商家</span>
        <span v-if="$route.name == 'selectAddress'">地址</span>
        <span v-if="$route.name == 'addAddress'">添加地址</span>
        <span v-if="$route.name == 'info'">我的</span>
        <span v-if="$route.name == 'balance'">当前余额</span>
        <span v-if="$route.name == 'points'">积分</span>
        <span v-if="$route.name == 'setusername'">修改</span>
        <span v-if="$route.name == 'address'">添加地址</span>
        <span v-if="$route.name == 'resetpwd'">修改用户信息</span>
        <span v-if="$route.name == 'benefit'">优惠信息</span>
      </div>

      <div v-if="!user">
        <span @click="login">登录</span> |
        <span>注册</span>
      </div>
      <div v-else>
        <span>
          <i class="el-icon-user"></i>
        </span>
      </div>
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
    },
    goSearch() {
      this.$router.push("/search");
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
  line-height: 1.2188rem;
}
i.el-icon-user {
  font-size: 0.625rem;
}
</style>
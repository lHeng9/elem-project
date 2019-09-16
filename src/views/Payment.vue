<template>
  <div>
    <div class="time">
      <p>支付剩余时间</p>
      <p class="time-date">00:{{m}}:{{s}}</p>
    </div>
    <p class="pay-way">先择支付方式</p>
    <div class="pay-way-list">
      <div class="pay-item">
        <div class="pay-container">
          <div class="zhifubao">
            <img src="../assets/zhifubao.png" alt />
          </div>
          <span class="text">支付宝</span>
        </div>
        <i
          class="el-icon-success"
          :class="flag1 ? 'choose-i' : ''"
          @click="[flag2 = false,flag1 = true]"
        ></i>
      </div>
      <div class="pay-item">
        <div class="pay-container">
          <div class="weixin">
            <img src="../assets/weixin.jpg" alt />
          </div>
          <span class="text">微信</span>
        </div>
        <i
          class="el-icon-success"
          :class="flag2 ? 'choose-i' : ''"
          @click="[flag1 = false,flag2 = true]"
        ></i>
      </div>
    </div>
    <p class="btn" @click="flag4 = true">确认支付</p>

    <!--  -->
    <div class="alert" v-if="flag3">
      <div class="alert-container">
        <i class="el-icon-warning-outline"></i>
        <p class="alert-text">暂不开放支付功能</p>
        <p class="btn1" @click="flag3 = false">确认</p>
      </div>
    </div>
    <div class="alert" v-if="flag4">
      <div class="alert-container">
        <i class="el-icon-warning-outline"></i>
        <p class="alert-text">当前环境无法支付，请打开官方APP进行付款</p>
        <p class="btn1" @click="goOrder">确认</p>
      </div>
    </div>
    <div class="alert" v-if="flag5">
      <div class="alert-container">
        <i class="el-icon-warning-outline"></i>
        <p class="alert-text">支付超时</p>
        <p class="btn1" @click="flag5 = false">确认</p>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "Payment",
  data() {
    return {
      flag1: true,
      flag2: false,
      flag3: true,
      flag4: false,
      flag5: false,
      time: 900,
      m: "15",
      s: "00"
    };
  },
  created() {
    let timeId = setInterval(() => {
      this.time--;
      this.m =
        Math.floor(this.time / 60) < 10
          ? "0" + Math.floor(this.time / 60)
          : Math.floor(this.time / 60);
      this.s = this.time % 60 < 10 ? "0" + (this.time % 60) : this.time % 60;
      if (this.time <= 0) {
        clearInterval(timeId);
        this.flag5 = true;
      }
    }, 1000);
  },
  methods: {
    goOrder() {
      this.flag4 = false;
      this.$router.push("/order");
    }
  }
};
</script>

<style scoped>
.time {
  background-color: #fff;
  padding: 0.4375rem;
  text-align: center;
}
.time p {
  font-size: 0.375rem;
  color: #666;
  margin-top: 0.625rem;
}
.time p.time-date {
  font-size: 0.9375rem;
  color: #333;
  margin: 0.1875rem 0 0.625rem;
}
.pay-way {
  background-color: #f1f1f1;
  padding: 0 0.4375rem;
  font-size: 0.4375rem;
  color: #666;
  line-height: 1.125rem;
}
.pay-way-list {
  background-color: #fff;
}
.pay-item,
.pay-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay-item {
  padding: 0.25rem 0.4375rem;
  line-height: 1.625rem;
  border-bottom: 0.0156rem solid #f5f5f5;
}
.zhifubao,
.weixin {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.125rem;
}
.zhifubao img,
.weixin img {
  width: 100%;
}
.text {
  font-size: 0.4375rem;
  color: #666;
}
i {
  color: #ccc;
}
.choose-i {
  color: #4cd964;
}
.btn {
  background-color: #4cd964;
  font-size: 0.4375rem;
  color: #fff;
  text-align: center;
  margin: 0 0.4375rem;
  line-height: 1.125rem;
  border-radius: 0.125rem;
  margin-top: 0.3125rem;
  font-weight: 700;
}
.alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}

.alert-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -4rem;
  margin-left: -3.75rem;
  width: 7.5rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  padding-top: 0.375rem;
  border: 1px;
  border-radius: 0.1563rem;
}
i.el-icon-warning-outline {
  color: #f8cb86;
  font-size: 1.5625rem;
}
.alert-text {
  font-size: 0.4375rem;
  color: #333;
  line-height: 0.5625rem;
  text-align: center;
  margin-top: 0.5rem;
  padding: 0 0.25rem;
}
.btn1 {
  font-size: 0.5rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.5rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 1.125rem;
  border: 1px;
  border-bottom-left-radius: 0.1563rem;
  border-bottom-right-radius: 0.1563rem;
}
</style>
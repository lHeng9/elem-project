<template>
  <div class="currentOrder">
    <div class="address-add" @click="gotoAddress">
      <div class="address-add-left">
        <i class="el-icon-location-outline"></i>
        <span class="add-left-text">请添加一个收货地址</span>
      </div>
      <div class="address-add-right">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <!--  -->
    <div class="address-send">
      <p class="send-arrive">送达时间</p>
      <div class="send-time">
        <p class="send-time-p1">尽快送达 | 预计 {{ orderData.delivery_reach_time }}</p>
        <p class="send-time-p2">{{ orderData.cart.restaurant_info.delivery_mode.text }}</p>
      </div>
    </div>
    <!--  -->
    <div class="address-payforway">
      <div class="payforway-text">
        <span class="payforway-way-span1">支付方式</span>
        <div class="payforway-waymore" @click="flag = true">
          <span class="payforway-way-span2">在线支付</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="payforway-money">
        <span class="payforway-money-span">红包</span>
        <span class="payforway-money-span">暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <!--  -->
    <GotoDelivery :orderData="orderData" :showPriceAll="showPriceAll" />
    <!--  -->
    <div class="order-other">
      <div class="payforway-text">
        <span class="payforway-way-span1">订单备注</span>
        <div class="payforway-waymore">
          <span class="payforway-way-span2">口味、偏好等</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="payforway-money">
        <span class="payforway-money-span">发票抬头</span>
        <span class="payforway-money-span">商家不支持开发票</span>
      </div>
    </div>
    <!-- 支付方式隐藏 -->
    <div class="payforway-hidden" v-if="flag">
      <div class="hidden-container">
        <p class="hidden-title">支付方式</p>
        <ul>
          <li
            v-for="(payWay,index) in orderData.payments"
            :key="index"
            :class="payWay.is_online_payment == false ? 'hidden-moreway' : 'hidden-moreway hidden-i'"
            @click="payWay.is_online_payment == false ? flag=true : flag=false"
          >
            <span
              :class="payWay.is_online_payment == false ? 'huodao-pay' : 'online-payfor'"
            >{{payWay.name}}{{payWay.description}}</span>
            <i class="el-icon-success"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GotoDelivery from "./GotoDelivery";
import { mapGetters } from "vuex";

export default {
  name: "GoToOrder",
  data() {
    return {
      flag: false
    };
  },
  props: {
    orderData: Object,
    showPriceAll: Number
  },
  components: {
    GotoDelivery
  },
  computed: {
    ...mapGetters(["cart"])
  },
  methods: {
    gotoAddress() {
      this.$router.push("/selectAddress");
    }
  }
};
</script>

<style scoped>
.currentOrder {
  margin-bottom: 1rem;
}
.address-add-left,
.address-add {
  display: flex;
  align-items: center;
}
.address-add {
  min-height: 2.1875rem;
  justify-content: space-between;
  padding: 0 0.375rem;
  background: url(../../assets/order.png) 0 100% repeat-x;
  background-size: auto 0.075rem;
  background-color: #fff;
}
.add-left-text {
  font-size: 0.4375rem;
  color: #333;
}
i.el-icon-location-outline {
  color: #3190e8;
  margin-right: 0.125rem;
  font-size: 0.625rem;
}
i.el-icon-arrow-right {
  color: #999;
  font-size: 0.625rem;
}

/*  */
.address-send {
  border-left: 0.125rem solid #3190e8;
  min-height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.send-arrive {
  font-size: 0.5rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.1875rem;
}
.send-time {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.send-time-p1 {
  font-size: 0.4375rem;
  color: #3190e8;
}
.send-time-p2 {
  font-size: 0.3125rem;
  color: #fff;
  background-color: #3190e8;
  width: 1.5rem;
  margin-top: 0.3125rem;
  text-align: center;
  border-radius: 0.075rem;
  padding: 0.0625rem;
}

/*  */
.address-payforway,
.address-send,
.order-other {
  background-color: #fff;
  margin-top: 0.25rem;
  padding: 0 0.4375rem;
}
.payforway-text,
.payforway-money {
  display: flex;
  justify-content: space-between;
}
.payforway-text {
  line-height: 1.25rem;
}
.payforway-way-span1 {
  font-size: 0.4375rem;
  color: #666;
}
.payforway-way-span2 {
  font-size: 12px;
  color: #aaa;
  width: 6.25rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.payforway-waymore i.el-icon-arrow-right {
  color: #ccc;
  font-size: 0.4375rem;
}
.payforway-money {
  border-top: 0.0156rem solid #f5f5f5;
}
.payforway-money-span {
  font-size: 0.375rem;
  color: #aaa;
  line-height: 1.25rem;
}

/* hidden */
.payforway-hidden {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.hidden-container {
  min-height: 6.25rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 204;
}
.hidden-title {
  background-color: #fafafa;
  font-size: 0.4375rem;
  color: #333;
  text-align: center;
  line-height: 1.25rem;
}
.hidden-moreway {
  display: flex;
  justify-content: space-between;
  padding: 0 0.4375rem;
  line-height: 1.5625rem;
  align-items: center;
}
.huodao-pay {
  font-size: 14px;
  color: #ccc;
}
i.el-icon-success {
  color: #eee;
  font-size: 0.625rem;
}
.online-payfor {
  font-size: 14px;
  color: #333;
}
.hidden-i i.el-icon-success {
  color: #4cd964;
}
</style>
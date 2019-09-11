<template>
  <div class="currentOrder">
    <div class="address-add" @click="gotoAddress">
      <div class="address-add-left">
        <i class="el-icon-location-outline"></i>
        <span class="add-left-text" v-if="addAddress.toString() == ''">请添加一个收货地址</span>
        <div v-else>
          <div class="show-address-title">
            <span class="name">{{ addAddress.name }}</span>
            <span
              :class="addAddress.sex ? 'sex' : ''"
            >{{ addAddress.sex == 1 ? '先生' : addAddress.sex == 2 ? '女士' : ''}}</span>
            <span class="tel">{{ addAddress.phone }} {{addAddress.phone_bk}}</span>
          </div>
          <div>
            <span
              :class="addAddress.tag_type ? 'type' : ''"
            >{{ addAddress.tag_type == 1 ? '无' : addAddress.tag_type == 2 ? '家' : addAddress.tag_type == 3 ? '学校' : addAddress.tag_type == 4 ? '公司' : '' }}</span>
            <span class="address">{{ addAddress.address }} {{ addAddress.address_detail}}</span>
          </div>
        </div>
      </div>
      <div class="address-add-right">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <!--  -->
    <div class="address-send">
      <p class="send-arrive">送达时间</p>
      <div class="send-time">
        <p class="send-time-p1">尽快送达 | 预计 {{ order[0].delivery_reach_time }}</p>
        <p
          class="send-time-p2"
          v-if="order[0].cart"
        >{{ order[0].cart.restaurant_info.delivery_mode.text }}</p>
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
        <div class="payforway-waymore" @click="gotoOrderRemark">
          <span class="payforway-way-span2">
            <span v-if="ele.length == 0">微辣、不要香菜等</span>
            <span v-else>
              <span
                v-for="(element,index) in ele"
                :key="index"
                style="margin-right:0.0938rem"
              >{{ element }}</span>
              <span>{{text}}</span>
            </span>
          </span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="payforway-money">
        <span class="payforway-money-span">发票抬头</span>
        <span class="payforway-money-span">商家不支持开发票</span>
      </div>
    </div>
    <!-- 支付方式隐藏 -->
    <div class="payforway-hidden" v-if="flag" @click="flag = false">
      <div class="hidden-container">
        <p class="hidden-title">支付方式</p>
        <ul>
          <li
            v-for="(payWay,i) in order[0].payments"
            :key="i"
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
      flag: false,
      ele: [],
      text: ""
    };
  },
  created() {
    for (const key in this.$route.params.obj) {
      if (this.$route.params.obj.hasOwnProperty(key)) {
        const element = this.$route.params.obj[key];
        this.ele.push(this.$route.params.list[key][element]);
      }
    }
    this.text = this.$route.params.text;
  },
  props: {
    orderData: Object,
    showPriceAll: Number
  },
  components: {
    GotoDelivery
  },
  computed: {
    ...mapGetters(["cart", "addAddress", "order"])
  },
  methods: {
    gotoAddress() {
      this.$router.push({
        name: "selectAddress",
        query: {
          geohash: "31.22967,121.4762",
          id: this.$route.query.id
        }
      });
    },
    gotoOrderRemark() {
      this.$router.push("/remark");
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
  overflow: visible;
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
.show-address-title {
  font-size: 0.4375rem;
  color: #333;
}
.show-address-title span {
  margin-right: 0.1563rem;
  font-family: Helvetica Neue, Tahoma, Arial;
}
</style>
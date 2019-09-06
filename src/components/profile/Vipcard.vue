<template>
  <div>
    <p class="title">
      为账户
      <span class="subtitle">202770857</span>购买会员
    </p>
    <div class="box1" style="margin-bottom:0.3rem">
      <router-link to="/profile/vipcard/vipDescription" class="flex" tag="div">
        <p class="box1-title">会员特权</p>
        <p class="box1-title1">
          会员说明
          <span class="el-icon-arrow-right"></span>
        </p>
      </router-link>
      <el-row class="box2">
        <el-col :span="3">
          <img src="../../assets/vip1.jpg" alt />
        </el-col>
        <el-col :span="19" :offset="2">
          <h4 class="title2">减免配送费</h4>
          <p class="subtitle2">每月减免30单，每日可减免3单，每单最高减4元</p>
          <p class="subtitle2">蜂鸟专送专享</p>
        </el-col>
      </el-row>
      <el-row class="box2" style="border-top:0.0313rem solid #f2f2f2">
        <el-col :span="3">
          <img src="../../assets/vip2.jpg" alt />
        </el-col>
        <el-col :span="19" :offset="2">
          <h4 class="title2">减免配送费</h4>
          <p class="subtitle2">每月减免30单，每日可减免3单，每单最高减4元</p>
          <p class="subtitle2">蜂鸟专送专享</p>
        </el-col>
      </el-row>
    </div>
    <div class="box3">
      <p class="box3-title">开通会员</p>
      <div class="flex">
        <p class="box3-title">
          一个月
          <span class="box3-subtitle">￥20</span>
        </p>
        <div>
          <div class="box3-title1">购买</div>
        </div>
      </div>
    </div>
    <router-link to="/profile/vipcard/useCart" tag="div" class="box4 flex" style="margin:0.3rem 0">
      <p class="box4-title">兑换会员</p>
      <p class="box1-title1">
        使用卡号卡密
        <span class="el-icon-arrow-right"></span>
      </p>
    </router-link>
    <router-link to="/profile/vipcard/invoiceRecord" tag="div" class="box4 flex">
      <p class="box4-title">购买记录</p>
      <p class="box1-title1">
        开发票
        <span class="el-icon-arrow-right"></span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
img {
  width: 100%;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.subtitle {
  font-weight: bold;
  color: #333;
}
.el-icon-arrow-right {
  color: #ccc;
  font-weight: bold;
}

.title {
  color: #666;
  font-size: 0.375rem;
  height: 1.25rem;
  line-height: 1.25rem;
  padding-left: 0.4375rem;
}

.box1 {
  background-color: #fff;
  padding-left: 0.4375rem;
}

.box1-title {
  color: #333;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.4375rem;
}

.box3-title {
  color: #333;
  height: 1.5625rem;
  line-height: 1.5625rem;
  font-size: 0.4375rem;
}

.box4-title {
  color: #333;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.4375rem;
}

.box3 {
  padding-left: 0.4375rem;
  background-color: #fff;
}

.box4 {
  padding-left: 0.4375rem;
  background-color: #fff;
  height: 1.25rem;
}

.box1-title1 {
  color: #999;
  font-size: 0.375rem;
  line-height: 1.25rem;
  height: 1.25rem;
  margin-right: 0.4375rem;
}

.box4-title1 {
  color: #999;
  font-size: 0.375rem;
  line-height: 1.25rem;
  height: 1.25rem;
}

.title2 {
  color: #333;
  font-size: 0.4375rem;
  font-weight: normal;
}
.subtitle2 {
  color: #999;
  font-size: 0.3125rem;
}

.box2 {
  padding: 0.5rem 0;
}

.box3-subtitle {
  color: #ff6600;
  font-weight: bold;
}

.box3-title1 {
  color: #ff6600;
  border: 0.0313rem solid #ff6700;
  border-radius: 0.1563rem;
  font-size: 0.375rem;
  display: inline-block;
  padding: 0.1rem 0.35rem;
  margin-right: 0.4375rem;
}
</style>
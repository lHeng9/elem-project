<template>
  <div>
    <router-link to="/profile/info" tag="div">
      <el-row class="box1">
        <el-col :span="4" class="subbox1">
          <img src="../assets/default.jpg" alt />
        </el-col>
        <el-col :span="20" class="subbox2" style="position: relative;">
          <p class="p1">202770857</p>
          <p class="p2">
            <span class="iconfont icon-shouji"></span>暂无绑定手机号
          </p>
          <span class="el-icon-arrow-right right-icon"></span>
        </el-col>
      </el-row>
    </router-link>
    <ul :span="24">
      <router-link to="/profile/balance" tag="li">
        <p>
          <span style="color:#ff9900">0.00</span>元
        </p>
        <p>我的余额</p>
      </router-link>

      <li>
        <p>
          <span style="color:#ff5f3e">3</span>个
        </p>
        <p>我的优惠</p>
      </li>
      <router-link style="border:none" to="/profile/points" tag="li">
        <p>
          <span style="color:#6ac208">0</span>分
        </p>
        <p>我的积分</p>
      </router-link>
    </ul>

    <div class="box3">
      <router-link to="/order">
        <el-row class="sub">
          <el-col :span="3">
            <span class="iconfont icon-wodedingdan icon" :span="4" style="color:#aaa"></span>
          </el-col>
          <el-col :span="21" class="subbox3">
            <p>我的订单</p>
            <p class="el-icon-arrow-right"></p>
          </el-col>
        </el-row>
      </router-link>
      <el-row class="sub">
        <el-col :span="3">
          <span
            class="iconfont icon-- icon"
            :span="4"
            style="color:#FC7B53;font-size: 0.7rem;margin-left:0.4rem"
          ></span>
        </el-col>
        <el-col :span="21" class="subbox3">
          <p>积分商城</p>
          <p class="el-icon-arrow-right"></p>
        </el-col>
      </el-row>
      <router-link to="/profile/vipcard" tag="div">
        <el-row class="sub" style="border:none">
          <el-col :span="3">
            <span class="iconfont icon-huangguan icon" :span="4" style="color:#FFC636"></span>
          </el-col>
          <el-col :span="21" class="subbox3">
            <p>饿了么会员卡</p>
            <p class="el-icon-arrow-right"></p>
          </el-col>
        </el-row>
      </router-link>
    </div>

    <div class="box4">
      <el-row class="sub">
        <el-col :span="3">
          <span class="iconfont icon-fuwuzhongxin icon" :span="4" style="color:#4AA5F0"></span>
        </el-col>
        <el-col :span="21" class="subbox3">
          <p>服务中心</p>
          <p class="el-icon-arrow-right"></p>
        </el-col>
      </el-row>

      <el-row class="sub" style="border:none">
        <el-col :span="3">
          <span
            class="iconfont icon-changyonglogo40 icon"
            :span="4"
            style="color:#3CABFF;font-size:0.9rem;margin-left:0.3rem;"
          ></span>
        </el-col>
        <el-col :span="21" class="subbox3">
          <p>下载饿了么APP</p>
          <p class="el-icon-arrow-right"></p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.right-icon {
  position: absolute;
  top: 0.4rem;
  right: 0;
  font-size: 0.5rem;
}
.icon {
  margin-left: 0.5rem;
}
.sub {
  padding: 0.2813rem 0;
  border-bottom: 0.03rem solid #ddd;
}
.box3 {
  margin: 0.3rem 0;
}

.box3,
.box4 {
  font-size: 0.4375rem;
  color: #333;
  background-color: #fff;
}

.subbox3 {
  display: flex;
  justify-content: space-between;
}

.box1 {
  height: 2.4063rem;
  width: 100%;
  padding: 0.4063rem 0.375rem;
  background-color: #3190e8;
  display: flex;
  color: #fff;
}

.subbox1 {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  overflow: hidden;
}

.subbox2 {
  margin-left: 0.4rem;
}

img {
  width: 100%;
  vertical-align: middle;
}

.p1 {
  font-size: 0.5rem;
  font-weight: bold;
}

.p2 {
  font-size: 0.375rem;
  margin-top: 0.2rem;
}

ul {
  background-color: #fff;
  display: block;
  display: flex;
  border-bottom: 1px solid #fff;
  width: 100%;
}

li {
  border-right: 0.03rem solid #ddd;
  flex: 1;
  text-align: center;
  font-size: 0.375rem;
  color: #666;
}

li > p:nth-child(1) {
  padding: 0.5313rem 0 0.2813rem;
}

li > p:nth-child(2) {
  padding-bottom: 0.2813rem;
}

li > p > span {
  font-size: 0.75rem;
  font-weight: bold;
}

.el-icon-arrow-right {
  color: #ccc;
  font-weight: bold;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
}
</style>
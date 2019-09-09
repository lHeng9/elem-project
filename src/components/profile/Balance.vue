<template>
  <div>
    <div class="box">
      <div class="subbox">
        <div class="flex">
          <p class="font">当前余额</p>
          <router-link style="display:flex" to="/profile/balance/detail" tag="div">
            <div class="img">
              <img src="../../assets/wenhao.png" />
            </div>
            <span class="font" style="color:#3190e8">余额说明</span>
          </router-link>
        </div>
        <p class="font2">
          <span class="font1">0.00</span> 元
        </p>
        <div class="my-btn">提现</div>
      </div>
    </div>
    <p class="font4">交易明细</p>
    <div class="no_log">
      <div class="img1">
        <img src="../../assets/jiaoyimingxi.png" />
      </div>
      <p class="font3">暂无明细记录</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img1 {
  width: 5rem;
  margin: auto;
}
.font2 {
  font-size: 0.4375rem;
  color: #333;
}

.font1 {
  font-size: 1.125rem;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.font {
  font-size: 0.375rem;
}
.img {
  width: 0.375rem;
  height: 0.375rem;
  margin-top: -0.35rem;
  margin-right: 0.1rem;
}
img {
  width: 100%;
}
.box {
  background-color: #3190e8;
  padding: 0.1875rem;
}

.subbox {
  background-color: #fff;
  border-radius: 0.125rem;
  padding: 0.1875rem;
}

.my-btn {
  margin-top: 0.625rem;
  background-color: #ccc;
  font-size: 0.5rem;
  text-align: center;
  width: 100%;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #fff;
  border-radius: 0.125rem;
}

.font4 {
  color: #999;
  font-size: 0.375rem;
  height: 1.25rem;
  line-height: 1.25rem;
  padding-left: 0.3125rem;
}

.no_log {
  text-align: center;
  margin-top: 0.5rem;
}

.font3 {
  font-size: 14px;
  color: #666;
}
</style>
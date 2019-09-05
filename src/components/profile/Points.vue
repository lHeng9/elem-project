<template>
  <div>
    <div class="box">
      <div class="subbox">
        <div class="flex">
          <p class="font">当前积分</p>
          <div style="display:flex">
            <div class="img">
              <img src="../../assets/wenhao.png" />
            </div>
            <span class="font" style="color:#3190e8">积分说明</span>
          </div>
        </div>
        <p class="font2">
          <span class="font1">0</span> 分
        </p>
        <div class="my-btn">积分兑换商品</div>
      </div>
    </div>
    <p class="font4">最近30天积分记录</p>
    <div class="no_log">
      <div class="img1">
        <img src="../../assets/jiaoyimingxi.png" />
      </div>
      <p class="font3">最近30天无积分记录</p>
      <p class="font5">快去下单赚取大量积分吧</p>
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
  background-color: #fe6d47;
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

.font5 {
  font-size: 0.3125rem;
  color: #999;
  padding-top: 0.3125rem;
}
</style>
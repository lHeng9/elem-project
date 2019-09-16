<template>
  <div>
    <div class="top">
      <span>红包</span>
      <span>商家代金券</span>
    </div>
    <div class="benefit">
      <div class="title">
        <div>
          有
          <span style="color:red;font-weight: bold">3</span>
          个红包即将到期
        </div>
        <div class="subBenefit">
          <div class="img">
            <img src="../../assets/wenhao.png" alt />
          </div>
          <div style="color:#3190e8">红包说明</div>
        </div>
      </div>
      <ul>
        <li>
          <p></p>
          <div class="li-benefit">
            <div class="left">
              <p style="font-size:0.4688rem;color:red">
                ￥
                <span style="font-size:0.9375rem">1</span>.0
              </p>
              <p>满20元可用</p>
            </div>
            <div class="content">
              <p style="color:#666;font-size:0.4375rem">分享红包</p>
              <p>2017-05-23到期</p>
              <p>限收货手机号为 13663588965</p>
            </div>
            <div class="right">
              <p style="color:red;font-size:0.4688rem">剩3日</p>
            </div>
          </div>
        </li>
        <li>
          <p></p>
          <div class="li-benefit">
            <div class="left">
              <p style="font-size:0.4688rem;color:red">
                ￥
                <span style="font-size:0.9375rem">2</span>.0
              </p>
              <p>满20元可用</p>
            </div>
            <div class="content">
              <p style="color:#666;font-size:0.4375rem">分享红包</p>
              <p>2017-05-23到期</p>
              <p>限收货手机号为 13663588965</p>
            </div>
            <div class="right">
              <p style="color:red;font-size:0.4688rem">剩3日</p>
            </div>
          </div>
        </li>
        <li>
          <p></p>
          <div class="li-benefit">
            <div class="left">
              <p style="font-size:0.4688rem;color:red">
                ￥
                <span style="font-size:0.9375rem">4</span>.5
              </p>
              <p>满20元可用</p>
            </div>
            <div class="content">
              <p style="color:#666;font-size:0.4375rem">分享红包</p>
              <p>2017-05-23到期</p>
              <p>限收货手机号为 13663588965</p>
            </div>
            <div class="right">
              <p style="color:red;font-size:0.4688rem">剩3日</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p class="history">查看历史红包 ></p>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.top {
  line-height: 1.25rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  color: #333;
  font-size: 0.4063rem;
}

.img {
  width: 0.375rem;
  height: 0.375rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}

img {
  width: 100%;
}

.title {
  line-height: 1.25rem;
  color: #666;
  font-size: 0.3125rem;
  display: flex;
  justify-content: space-between;
}

.benefit {
  margin: 0 0.4375rem;
}

.subBenefit {
  display: flex;
}

li > p {
  background: url(../../assets/benefit.png) repeat;
  background-size: 0.375rem;
  height: 0.125rem;
}

li {
  background-color: #fff;
  border-radius: 0.1875rem;
  overflow: hidden;
  margin-bottom: 0.375rem;
}

.li-benefit {
  display: flex;
  color: #999;
  font-size: 0.3rem;
  justify-content: space-between;
  padding: 0.4rem 0.3125rem 0.5rem;
}

.history {
  color: #999;
  text-align: center;
  font-size: 0.3125rem;
  margin-top: 1.25rem;
}
</style>
<template>
  <div>
    <p class="title">
      成功兑换后将关联到当前帐号：
      <span class="user_id">202770857</span>
    </p>
    <div class="input">
      <input type="text" placeholder="请输入10位卡号" style="border-bottom:0.0156rem solid #f1f1f1" />
      <input type="text" placeholder="请输入6位卡密" />
    </div>
    <div class="my-btn">兑换</div>
    <div data-v-3e3dbf9c class="Binding">
      <h3 data-v-3e3dbf9c>——温馨提示——</h3>
      <p data-v-3e3dbf9c>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p data-v-3e3dbf9c>
        月卡：
        <b data-v-3e3dbf9c>30次</b>减免配送费。
      </p>
      <p data-v-3e3dbf9c>
        季卡：
        <b data-v-3e3dbf9c>90次</b>减免配送费。
      </p>
      <p data-v-3e3dbf9c>
        年卡：
        <b data-v-3e3dbf9c>360</b>次减免配送费。
      </p>
      <p data-v-3e3dbf9c>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.title {
  color: #666;
  font-size: 0.375rem;
  line-height: 1.25rem;
  padding-left: 0.4375rem;
}

.user_id {
  font-weight: bold;
  color: #000;
}

.input {
  background-color: #fff;
  padding-left: 0.4375rem;
}

input {
  outline: none;
  font-size: 0.4rem;
  line-height: 1.25rem;
  width: 98%;
  border: none;
}

.my-btn {
  text-align: center;
  margin: 0.5rem 0.4rem;
  line-height: 1.125rem;
  background-color: #4cd964;
  border-radius: 0.125rem;
  color: #fff;
  font-size: 14px;
}

.Binding {
  text-align: center;
  color: #aaa;
}

.Binding > p {
  font-size: 0.3125rem;
  line-height: 0.5rem;
}

h3 {
  line-height: 1.25rem;
  font-size: 0.4063rem;
}
</style>
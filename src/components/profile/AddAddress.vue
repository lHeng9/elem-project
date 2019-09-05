<template>
  <div class="box">
    <form @submit.prevent>
      <input type="text" placeholder="请填写你的名字" required />
      <input type="text" placeholder="中北大学" required />
      <input type="text" placeholder="请填写详细送餐地址" required />
      <input type="text" placeholder="请填写能够联系到您的手机号" required />
      <input type="text" placeholder="备用联系电话（选填）" />
      <button type="submit" class="my-btn">新增地址</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  margin-top: 0.2rem;
  background-color: #fff;
  padding: 0.1rem 0.3rem;
}

input {
  border: 1px solid #ddd;
  border-radius: 0.125rem;
  outline: none;
  background-color: #f2f2f2;
  width: 95%;
  margin-bottom: 0.15rem;
  padding: 0.1875rem;
  height: 0.6rem;
  font-size: 0.4rem;
}

.my-btn {
  outline: none;
  border: none;
  background-color: #4cd964;
  border-radius: 0.125rem;
  color: #fff;
  width: 100%;
  margin-top: 0.3rem;
  height: 1rem;
  font-size: 0.4rem;
}
</style>
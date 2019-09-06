<template>
  <div class="box">
    <div class="img">
      <img src="../../assets/logo_elm.jpg" alt />
    </div>
    <p>下载饿了么APP</p>
    <div class="my-btn">下载</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  height: 100%;
  background-color: #fff;
  padding-top: 0.7813rem;
}

.img {
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 16px;
  overflow: hidden;
  margin: auto;
}

img {
  width: 100%;
}

p {
  text-align: center;
  color: #666;
  font-size: 0.5rem;
  margin: 0.3125rem 0 0.625rem;
}

.my-btn {
  text-align: center;
  margin: 0 0.4rem;
  line-height: 1.125rem;
  background-color: #4cd964;
  border-radius: 0.125rem;
  color: #fff;
  font-size: 14px;
}
</style>
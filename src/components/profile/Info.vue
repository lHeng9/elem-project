<template>
  <div>
    <ul>
      <li>
        <p>头像</p>
        <p class="el-icon-arrow-right"></p>
      </li>
      <li>
        <p>头像</p>
        <p>
          2072270857
          <span class="el-icon-arrow-right"></span>
        </p>
      </li>
      <li>
        <p>收货地址</p>
        <p class="el-icon-arrow-right"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  background-color: #fff;
}
p {
  font-size: 0.375rem;
  color: #333;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 0.1875rem 0.25rem;
}

.el-icon-arrow-right {
  color: #ccc;
  font-weight: bold;
}
</style>
<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <router-link to tag="div">
        <el-col :span="5">
          <span class="el-icon-eleme icon icon1"></span>
          <span>外卖</span>
        </el-col>
      </router-link>

      <el-col :span="5">
        <span class="iconfont icon-luopancompass83 icon"></span>
        <span>搜索</span>
      </el-col>
      <el-col :span="5">
        <span class="el-icon-tickets icon"></span>
        <span>订单</span>
      </el-col>
      <el-col :span="5">
        <span class="iconfont icon-wode icon"></span>
        <span class="font">我的</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.el-row {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
  padding: 0.2rem 0;
  border-top: 1px solid #cccccc;
  background-color: #fff;
}
span {
  display: block;
  text-align: center;
  font-size: 0.7rem;
  color: #666;
}

.icon {
  font-size: 1.3rem;
  height: 1.6rem;
}

.el-col:nth-child(2) {
  height: 1rem;
}

.icon1 {
  font-size: 1.5rem;
}
</style>
<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="5" class="font1">
        <router-link to="/msite" tag="div">
          <span class="el-icon-eleme icon1"></span>
          <span class="font">外卖</span>
        </router-link>
      </el-col>
      <el-col :span="5" class="font1">
        <router-link to="/search" tag="div">
          <span class="iconfont icon-luopancompass83 icon"></span>
          <span class="font">搜索</span>
        </router-link>
      </el-col>
      <el-col :span="5" class="font1">
        <router-link to="/order" tag="div">
          <span class="el-icon-tickets icon"></span>
          <span class="font">订单</span>
        </router-link>
      </el-col>
      <el-col :span="5" class="font1">
        <router-link to="/profile" tag="div">
          <span class="iconfont icon-wode icon"></span>
          <span class="font">我的</span>
        </router-link>
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
  padding: 0.1rem 0;
  border-top: 1px solid #cccccc;
  background-color: #fff;
}

span {
  display: block;
  text-align: center;
  height: 0.5rem;
  line-height: 0.6rem;
}

.font {
  font-size: 0.3rem;
  color: #666;
}

.icon {
  font-size: 0.5rem;
  font-weight: bold;
}

.icon1 {
  font-size: 0.6rem;
}

.font1 {
  color: #666;
  /* visibility: hidden; */
}
</style>

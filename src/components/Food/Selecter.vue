<template>
  <div class='selecter'>
    <!-- 分类 -->
    <div class="select select1">

      <span>分类
        <i class="el-icon-arrow-down"></i>
      </span>

    </div>
    <div class="box">
      <ul class="ul-lf">
        <li>
          <div class="lf">
            <img
              src="https://fuss10.elemecdn.com/4/82/43703799592368585b23589cf3ba8png.png"
              alt=""
            >
            <span>甜品饮品</span>
          </div>
          <div class="rt">
            <span></span>
            <i class="el-icon-arrow-right"></i>
          </div>

        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>
    <!-- 排序 -->
    <div class="select select2">
      <span>排序
        <i class="el-icon-arrow-down"></i>
      </span>

    </div>
    <!-- 筛选 -->
    <div class="select select3">
      <span>筛选
        <i class="el-icon-arrow-down"></i>
      </span>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.selecter {
  display: flex;
  justify-content: space-around;
  font-size: 0.3438rem;
  color: #333;
  background-color: #fff;
  padding: 5px 0;
}
.selecter .select {
  height: 20px;
  line-height: 20px;
  width: 100%;
  text-align: center;
  position: relative;
}
.selecter .select1 {
  border-right: 1px solid #e4e4e4;
}
.selecter .select2 {
  border-right: 1px solid #e4e4e4;
}
.box {
  position: absolute;
  width: 10rem;
  height: 10rem;
  top: 100px;
}
.box .ul-lf {
  width: 5rem;
  border: 1px solid red;
}
.box .ul-lf .lf {
  line-height: 36px;
}
.box .ul-lf .rt {
  line-height: 36px;
}
.box li {
  width: 4.375rem;
  height: 1.125rem;
  padding: 0 0.3125rem;
  display: flex;
  justify-content: space-between;
}
.box li img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>
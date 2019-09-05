<template>
  <div class="box">
    <el-row>
      <el-col :span="15">
        <input type="text" placeholder="账号" required />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15">
        <input type="text" placeholder="旧密码" required />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15">
        <input type="text" placeholder="请输入新密码" required />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15">
        <input type="text" placeholder="请确认密码" required />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <input type="text" placeholder="验证码" />
      </el-col>
      <el-col :span="12" style="display:flex">
        <div class="img">
          <img :src="captchas.code" />
        </div>
        <div class="imgChange">
          <p>看不清</p>
          <p style="color: #3b95e9">换一张</p>
        </div>
      </el-col>
    </el-row>
    <button type="submit" class="my-btn">确认修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      captchas: {}
    };
  },
  methods: {
    getCaptchas() {
      axios.post("https://elm.cangdu.org/v1/captchas").then(res => {
        this.captchas = res.data;
      });
    }
  },
  created() {
    this.getCaptchas();
  }
};
</script>

<style  scoped>
.img {
  width: 2.5rem;
  height: 0.9375rem;
  margin: auto;
}

img {
  width: 100%;
}
.box {
  margin-top: 0.2rem;
  background-color: #fff;
}

input {
  width: 100%;
  height: 0.625rem;
  font-size: 0.45rem;
  padding: 0;
  border: none;
  outline: none;
  color: #999;
}

.el-row {
  border-bottom: 1px solid #ccc;
}

.el-col {
  padding: 0.1875rem 0.5rem;
}

.my-btn {
  width: 94%;
  height: 1.25rem;
  line-height: 1.25rem;
  background-color: #4cd964;
  color: #fff;
  font-size: 0.4375rem;
  text-align: center;
  outline: none;
  border: none;
  margin: 0.5rem 0.3rem 0;
  border-radius: 0.1563rem;
}

.imgChange {
  color: #666;
  font-size: 0.3438rem;
}
</style>
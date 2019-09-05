<template>
  <div class="setusername">
    <input type="text" placeholder="输入用户名" class="my-input" />
    <p v-if="flag">用户名只能修改一次 (5-24字符之间 )</p>
    <p v-else style="font-size:0.375rem;color:#ea3106">用户名长度在5到24位之间</p>
    <div class="my-btn" @click="changeFlag()">确认修改</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    changeFlag() {
      this.flag = false;
      document.getElementsByClassName("my-input")[0].style.borderColor =
        "#ea3106";
    }
  }
};
</script>

<style  scoped>
.setusername {
  padding: 0.3rem 0.2rem;
}

.my-input {
  width: 95%;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  color: #fff;
  padding: 0.1rem 0.2rem;
  height: 0.8rem;
  font-size: 0.5rem;
}

p {
  font-size: 0.25rem;
  color: #666;
  padding: 0.25rem 0 0.625rem;
}

.my-btn {
  height: 1.25rem;
  line-height: 1.25rem;
  background-color: #3199e8;
  color: #fff;
  font-size: 0.4375rem;
  text-align: center;
}
</style>
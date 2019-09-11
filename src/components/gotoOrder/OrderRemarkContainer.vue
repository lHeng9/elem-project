<template>
  <div>
    <div class="remark">
      <div class="remark-header">快速备注</div>
      <ul class="remark-list">
        <li class="remark-list-arr" v-for="(remarkList,index) in remarkLists" :key="index">
          <span
            class="remark-list-item"
            v-for="(remark,i) in remarkList"
            :key="i"
            :class="[i == 0 ? 'first' : '',i == remarkList.length-1 ? 'last' : '', obj[index] == i ? 'choose' : '']"
            @click="chooseRemark(index,i)"
          >{{ remark }}</span>
        </li>
      </ul>
    </div>

    <!--  -->
    <div class="remark">
      <div class="remark-header">其他备注</div>
      <textarea placeholder="请输入备注内容(可不填)" v-model="text"></textarea>
    </div>

    <div class="btn" @click="currentRemark()">确定</div>
  </div>
</template>

<script>
export default {
  name: "OrderRemarkContainer",
  data() {
    return {
      remarkLists: [],
      string: "",
      obj: {},
      text: ""
    };
  },
  created() {
    this.$axios
      .get("http://elm.cangdu.org/v1/carts/101562/remarks")
      .then(res => {
        this.remarkLists = res.data.remarks;
        // console.log(this.remarkLists);
      });
  },
  methods: {
    chooseRemark(index, i) {
      // console.log(e.target.innerHTML);
      //   this.string = e.target.innerHTML;
      //   this.obj[index] = i;
      this.$set(this.obj, index, i);
      // console.log(this.obj);
    },
    currentRemark() {
      this.$router.push({
        name: "orderList",
        params: { obj: this.obj, list: this.remarkLists, text: this.text }
      });
    }
  }
};
</script>

<style scoped>
span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.remark {
  background-color: #fff;
  margin-top: 0.25rem;
  padding: 0 0.375rem 0.625rem;
}
.remark-header {
  font-size: 0.4063rem;
  color: #333;
  line-height: 1.25rem;
}
.remark-list {
  display: flex;
  flex-wrap: wrap;
}
.remark-list-arr {
  margin: 0 0.375rem 0.375rem 0;
}
.remark-list-item {
  font-size: 0.375rem;
  color: #333;
  padding: 0.1875rem 0.375rem;
  border: 0.0156rem solid #3190e8;
  border-left: 0;
}
.first {
  border-left: 0.0156rem solid #3190e8;
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}
.last {
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}
textarea {
  width: 8.5rem;
  background-color: #f9f9f9;
  border: 0.0156rem solid #eee;
  resize: none;
  min-height: 2.8125rem;
  border-radius: 0.125rem;
  font-size: 0.375rem;
  color: #666;
  padding: 0.3125rem;
}
.btn {
  background-color: #4cd964;
  font-size: 0.4375rem;
  color: #fff;
  text-align: center;
  margin: 0.25rem 0.4375rem 0;
  line-height: 1.125rem;
  border-radius: 0.125rem;
}
.choose {
  color: #fff;
  background-color: #3190e8;
}
</style>



 
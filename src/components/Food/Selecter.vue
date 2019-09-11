<template>
  <div class='selecter'>
    <!-- 分类 -->
    <div class="select select1">

      <span @click="show = !show">分类
        <i class="el-icon-arrow-down"></i>
      </span>

    </div>
    <transition name="fade">

      <div
        class="box"
        v-if='show'
      >
        <ul class="ul-lf">
          <li
            v-for="(item,index) in lists"
            :key="index"
            @click='handle(index)'
            :class="i == index ? 'white' :''"
          >
            <div class="lf">
              <img
                :src="'https://fuss10.elemecdn.com/'+item.image_url"
                alt=""
              >
              <span>{{item.name}}</span>
            </div>
            <div class="rt">
              <span>{{item.count}}</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
        <ul class="ul-rt">
          <li
            v-for="item in sublist"
            :key='item.id'
            style="border-bottom:1px solid #ddd"
            @click="handlesub(item.id)"
          >
            <span>{{item.name}}</span>
            <span>{{item.count}}</span>
          </li>
        </ul>
      </div>
    </transition>
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
    return {
      show: false,
      list: [],
      sublist: [],
      i: 0
    };
  },
  computed: {
    lists() {
      this.list.forEach(ele => {
        let str = ele.image_url;
        // console.log(str);

        let t = str.slice(0, 1);
        let t2 = str.slice(1, 3);

        let extent =
          str.indexOf("j") != -1
            ? str.slice(str.indexOf("j"))
            : str.slice(str.indexOf("p"));

        ele.image_url = t + "/" + t2 + "/" + str.slice(3) + "." + extent;

        // console.log(str, ele.image_url);
      });
      return this.list;
    }
  },
  methods: {
    handle(index) {
      this.sublist = this.lists[index].sub_categories;
      this.i = index;
    },
    handlesub(id) {
      this.show = false;
      this.$axios
        .get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=37.851375&longitude=112.545341&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=" +
            id +
            "&order_by=null&delivery_mode[]=null"
        )
        .then(res => {
          console.log(res.data);
          this.$emit("msg", res.data);
        });
    }
  },
  created() {
    this.$axios
      .get(
        "http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=37.851375&longitude=112.545341"
      )
      .then(res => {
        this.list = res.data;
        console.log(this.list);
      });
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
  font-size: 0.375rem;
}
.selecter .select1 {
  border-right: 1px solid #e4e4e4;
}
.selecter .select2 {
  border-right: 1px solid #e4e4e4;
}
.selecter .select i {
  font-size: 12px;
}
.white {
  background-color: #fff;
}
.box {
  position: absolute;
  width: 10rem;
  height: 10rem;
  top: 70px;
  background-color: #fff;
  color: #666;
  z-index: 9;
}
.box .ul-lf {
  width: 5rem;
  background-color: #f1f1f1;
  overflow-y: scroll;
  height: 100%;
  float: left;

  /* border: 1px solid red; */
}
.box .ul-rt {
  overflow-y: scroll;
  height: 100%;
}
.box .ul-lf .lf {
  line-height: 36px;
}
.box .ul-lf .lf img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  vertical-align: middle;
}
.box .ul-lf .lf span {
  vertical-align: middle;
}
.box .ul-lf .rt {
  line-height: 36px;
}
.box .ul-lf .rt span {
  background-color: #ccc;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
}
.box .ul-lf .rt i {
  font-size: 12px;
  vertical-align: middle;
}
.box li {
  width: 4.375rem;
  height: 1.125rem;
  padding: 0 0.3125rem;
  display: flex;
  justify-content: space-between;
  line-height: 1.125rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  top: -200px;
}
</style>
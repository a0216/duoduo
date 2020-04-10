<template>
  <div class="hello">
    <el-container>
      <topHeader></topHeader>
      <el-main>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import topHeader from "./common/topHeader";
export default {
  name: "HelloWorld",
  components: { topHeader },
  data() {
    return {
      msg: "eeee"
    };
  },
  methods: {
    jiegu: function() {
      function foo(x, y, z) {
        console.log(x, y, z);
      }
      // foo.apply(null, [1, 2, 3]); //在ES6之前我们这样使用数组作为函数参数调用。
      foo(...[1, 2, 3]);
      var mySet = new Set([1, 2, 3, 4, 4, 8, 5, 6, 8]);
      let newArr = [...mySet]; // [1, 2, 3, 4]
      console.log(newArr);
      let f = (x, y) => x + y;
      console.log(f(2, 3));
      let string2 = `Game start,${f(2)}`;
      console.log(string2); // Game start,have fun!

      // fetch("https://bird.ioliu.cn/netease", {
      //   text: "速度集合框架",
      //   type: "2",
      //   key: "080c41d7e449f854c59fd5b9957e9f5d"
      // }).then(res => {
      //   console.log(res);
      // });

      let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
      console.log(rest);
      // console.log(res);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-row {
  margin-bottom: 0.2rem;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>

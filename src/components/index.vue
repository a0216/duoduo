<template>
  <div class="hello">
    <el-container>
      <!-- <topHeader></topHeader> -->
      <el-main>
        <suspension :isPc="isPc"></suspension>

        <div class="swiper-container" id="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/img/banner.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/banner1.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/banner2.jpg" alt />
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/banner3.jpg" alt />
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <duoduo :isPc="isPc"></duoduo>
        <advantage :isPc="isPc"></advantage>
        <platform :isPc="isPc"></platform>
        <friend :isPc="isPc"></friend>
      </el-main>
      <el-footer style="height:auto;padding:0"></el-footer>
    </el-container>
  </div>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import topHeader from "./common/topHeader";
import duoduo from "./common/duoduo";
import suspension from "./common/sup";
import platform from "./common/platform";
import advantage from "./common/advantage";
import friend from "./common/friend";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import store from "@/store";

export default {
  name: "HelloWorld",
  components: { duoduo, platform, advantage, friend, suspension },
  props: ["nowPath"],
  data() {
    return {
      msg: "eeee",
      isPc: "true",
      show2: true
    };
  },
  methods: {
    hover: function() {
      console.log(111);
    },
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
  mounted() {
    const _this = this;
    console.log(window.location.href);
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
    console.log(_this.isPc);
    var mySwiper = new Swiper("#swiper", {
      autoplay: true,
      loop: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next"
    });

    console.log(_this.$router.options.routes);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.swiper-button-prev,
.swiper-button-next {
  height: 44px;
  width: 44px;
  border-radius: 20px;
  background: #fff;
  // background-image: url("../assets/img/swiper_button.png");
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 10px;
  color: #171717;
}

.el-row {
  margin-bottom: 0.2rem;
  &:last-child {
    margin-bottom: 0;
  }
}
#swiper {
  height: 800px;
  max-height: 820px;
  // height: 820px;
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>

<template>
  <div class="hello">
    <el-container>
      <!-- <topHeader></topHeader> -->
      <el-main>
        <popup :isPc="isPc" :popShow="popShow" @pops="pops"></popup>
        <suspension :isPc="isPc" :idx="idx" @idxShow="idxShow" :popShows="popShow" :idxShow="idxShows"></suspension>
        <!-- <div class="swiper-container" id="swiper">
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
        </div>-->
        <div class="topImg" v-if="isPc">
          <!-- <div class="download">
            <img src="../assets/img/iphone.png" alt />
            <img src="../assets/img/andorid.png" alt />
          </div>
          <img src="../assets/img/appCode.png" alt class="appCode" />-->
        </div>
        <div class="topImgs" v-else></div>
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
import suspension from "./common/sups";
import platform from "./common/platform";
import popup from "./common/popup";

import advantage from "./common/advantage";
import friend from "./common/friend";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import store from "@/store";
import axios from "axios";

export default {
  name: "HelloWorld",
  components: { duoduo, platform, advantage, friend, suspension, popup },
  props: ["nowPath"],
  data() {
    return {
      msg: "eeee",
      isPc: "true",
      show2: true,
      idx: true,
      popShow: "5",
      idxShows:"7"
    };
  },
  methods: {
    //判断弹出框
    idxShow(val) {
      this.popShow = val;
      this.idxShows=val
    },
    pops(val) {
      this.idxShows='7'
      this.popShow = '5';
    },
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
.topImg {
  height: 820px;
  background: url("../assets/img/banner.jpg") top left;
  background-size: cover;
  position: relative;
  margin-top: 60px;

  .download {
    position: absolute;
    top: 60%;
    left: 20%;
    width: 250px;
    img {
      width: 250px;
      margin-bottom: 20px;
      height: 60px;
    }
  }
}
.topImgs {
  height: 420px;
  background: url("../assets/img/bannerA.jpg") top left;
  background-size: cover;
  position: relative;
  .download {
    position: absolute;
    top: 60%;
    left: 20%;
    width: 250px;
    img {
      width: 250px;
      margin-bottom: 20px;
      height: 60px;
    }
  }
}
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

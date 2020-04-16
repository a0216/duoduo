<template>
  <div class="hello">
    <el-container>
      <el-main>
        <div class="suspension" v-show="isPc">
          <ul>
            <li @click="tos">
              <img src="../assets/img/susa.png" alt />
              <p>在线咨询</p>
              <button>x</button>
            </li>
            <li>
              <img src="../assets/img/susb.png" alt />
              <p>售后服务</p>
            </li>
            <li>
              <img src="../assets/img/susc.png" alt />
              <p>留言</p>
            </li>
          </ul>
        </div>
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
     
      </el-main>
      <el-footer style="height:auto;padding:0">
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import store from "@/store";


export default {
  name: "TIKTOK",
  components: { },
  props:['nowPath'],
  data() {
    return {
      msg: "eeee",
      isPc: "true",
    };
  },
  
  methods: {

    hover: function() {
      console.log(111);
    },
    tos:function(){
      this.$emit('pathCh',this.nowPath)

    }
 
  },
   created(){
      this.$emit('pathCh',this.nowPath)
  },
  mounted() {
    const _this = this;
    _this.nowPath='/TIKTOK'
    console.log(window.location.href);
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
    console.log(_this.isPc);
    

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>

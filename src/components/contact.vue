<template>
  <el-container>
    <el-main>
      <div class="topImg"></div>
      <div class="information">
        <h2 v-show="isPc">联系方式</h2>
        <h2 v-show="!isPc" style="padding-left:30px">联系方式</h2>
        <h4 v-show="isPc">CONTACT</h4>
        <h4 v-show="!isPc" style="padding-left:30px">CONTACT</h4>
        <div class="company" v-show="isPc">
          <div class="leftFont">
            联系电话：400-0389-369
            <br />公司地址：河南省郑州市金水区学府广场B座
          </div>
        </div>
        <div class="company" v-show="!isPc" style="padding-left:30px">
          <div class="leftFont">
            联系电话：400-0389-369
            <br />公司地址：河南省郑州市金水区学府广场B座
          </div>
        </div>
        <baidu-map
          class="bm-view"
          :center="{lng: mapArr.lng, lat: mapArr.lat}"
          :zoom="15"
          :scroll-wheel-zoom="true"
        >
          <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
          <bm-marker
            :position="{lng: mapArr.lng, lat: mapArr.lat}"
            :dragging="true"
            animation="BMAP_ANIMATION_BOUNCE"
          ></bm-marker>
        </baidu-map>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import store from "@/store";
import BaiduMap from "vue-baidu-map";

export default {
  name: "brand",
  props: ["ipAll"],
  components: {},
  data() {
    return {
      msg: "",
      isPc: "true",
      mapArr: {
        lat: 34.80034636,
        lng: 113.80757434
      }
    };
  },

  methods: {},
  created() {},
  mounted() {
    const _this = this;
    console.log(store.state.science);
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
    console.log(_this.isPc);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.topImg {
  height: 220px;
  width: 100%;
  margin-top: 60px;
  background: url("../assets/img/conact.png") top left;
  background-size: 100% 100%;
}

.information {
  width: 100%;
  margin: 0 auto;
  h2 {
    text-align: left;
    color: #333;
    font-size: 26px;
    width: 1200px;
    margin: 120px auto 0 auto;
  }
  h4 {
    color: #999;
    font-size: 14px;
    text-align: left;
    margin: 0px auto 60px auto;
    width: 1200px;
  }
  .company {
    width: 1200px;
    margin: 0 auto 120px auto;
    display: flex;
    .leftFont {
      width: 490px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 36px;
      text-align: left;
      margin-right: 149px;
    }
    .rightImg {
      width: 566px;
      position: relative;
      img {
        width: 530px;
        height: 430px;
        position: absolute;
        z-index: 6;
        bottom: 0;
        left: 0;
      }

      .imgright {
        position: absolute;
        left: 36px;
        bottom: 36px;
        z-index: 5;
      }
    }
  }
  .bm-view {
    height: 400px;
    margin: 120px auto;
  }
}
</style>

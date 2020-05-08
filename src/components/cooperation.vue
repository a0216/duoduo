<template>
  <el-container>
    <el-main>
      <sups :isPc="isPc" :coope="coope" @nowShow="nowShow"></sups>
      <div class="topImg">
        <img src="../assets/img/coop.png" alt />
      </div>
      <div class="information">
        <h2>招商合作</h2>
        <h4>INVESTMENT COOPERATION</h4>
        <div class="requirement">
          <h3 v-if="nowIn=='0'" :class="[isPc?'line':'']">合作要求</h3>
          <h3 v-else :class="[isPc?'line':'']">入驻要求</h3>

          <div class="imgBox" v-if="nowIn=='0'">
            <img src="../assets/img/cooa.png" alt />
            <img src="../assets/img/coob.png" alt />
            <img src="../assets/img/cooc.png" alt />
          </div>
          <div class="imgBox" v-else>
            <img src="../assets/img/cood.png" alt />
            <img src="../assets/img/cooe.png" alt />
            <img src="../assets/img/coof.png" alt />
          </div>
          <h3 v-show="nowIn!='0'" :class="[isPc?'line':'']">服务支持</h3>
          <div class="borderBox" v-show="nowIn!='0'">
            <div class="box">
              <img src="../assets/img/boxa.png" alt />
              <h5>培训扶持</h5>
              <p>落地扶持、系统化培训、轻松推广</p>
            </div>
            <div class="box">
              <img src="../assets/img/boxb.png" alt />
              <h5>正品保障</h5>
              <p>源头直采、精挑严选、只卖精品</p>
            </div>
            <div class="box">
              <img src="../assets/img/boxc.png" alt />
              <h5>专业客服</h5>
              <p>专业售后团队、免除后顾之忧</p>
            </div>
            <div class="box">
              <img src="../assets/img/boxd.png" alt />
              <h5>技术支持</h5>
              <p>技术团队确保系统稳定运行</p>
            </div>
          </div>
        </div>
        <div class="fromIn">
     
          <div class="iptBox">
            <label for>公司名称:</label>
            <input type="text" :style="iptWidth" />
            <label for>联系电话:</label>
            <input type="text" :style="iptWidth" />
            <label for v-show="nowIn=='0'">定位人群:</label>
            <input
              type="text"
              v-show="nowIn=='0'"
              :class="[nowIn=='0'?'ipts':'ipt']"
              :style="iptWidth"
            />
          </div>
          <label for class="fl" style="width:100%">备注内容：</label>
          <el-input
            type="textarea"
            :rows="10"
            style="width: 93%;
    float: right;"
            placeholder="请输入内容"
            v-model="remarks"
          ></el-input>
          <button v-if="nowIn=='2'">立即申请</button>
          <button v-else>申请入驻</button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import store from "@/store";
import sups from "./common/sups";

export default {
  name: "brand",
  props: [""],
  components: { sups },
  data() {
    return {
      msg: "",
      isPc: "true",
      company: "",
      phone: "",
      remarks: "",
      coope: true,
      nowIn: "1",
      iptWidth: {
        width: "100%"
      }
    };
  },

  methods: {
    nowShow: function(val) {
      console.log(val);
      this.nowIn = val;
    }
  },
  created() {},
  watch: {
    nowIn() {
      const _this = this;
      console.log(_this.isPc)
      if (_this.isPc && _this.nowIn == "0") {
        _this.iptWidth = { width: "25%" };
      } else if (_this.isPc && _this.nowIn != "1||2") {
        _this.iptWidth = { width: "40%" };
      } else {
        _this.iptWidth = { width: "100%" };
      }
    }
  },
  mounted() {
    const _this = this;
    console.log(store.state.science);
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
      if (_this.isPc && _this.nowIn == "0") {
        _this.iptWidth = { width: "25%" };
      } else if (_this.isPc && _this.nowIn != "1||2") {
        _this.iptWidth = { width: "40%" };
      } else {
        _this.iptWidth = { width: "100%" };
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.topImg {
  height: 220px;
  width: 100%;
  img {
    height: 220px;
    width: 100%;
  }
}

.information {
  width: 65%;
  margin: 0 auto;
  h2 {
    text-align: left;
    color: #333;
    font-size: 26px;
    margin-top: 120px;
  }
  h4 {
    color: #999;
    font-size: 14px;
    text-align: left;
    margin-bottom: 60px;
  }
  .requirement {
    text-align: center;
    h3 {
      position: relative;
      font-weight: bold;
      color: rgba(153, 153, 153, 1);
      line-height: 36px;
      margin-bottom: 50px;
    }
    .line {
      &:before {
        position: absolute;
        background: #f8f8f8;
        content: "";
        width: 484px;
        height: 2px;
        top: 50%;
        left: -10%;
      }
      &:after {
        position: absolute;
        background: #f8f8f8;
        width: 484px;
        height: 2px;
        content: "";
        top: 50%;
        right: -10%;
      }
    }
    .imgBox {
      display: flex;
      width: 100%;
      margin: 0 auto;
      flex-wrap: wrap;
      img {
        width: 190px;
        height: 258px;
        margin: auto;
      }
    }
  }
  .borderBox {
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    .box {
      width: 260px;
      height: 268px;
      border: 2px solid rgba(153, 153, 153, 1);
      margin: 10px auto 10px auto;
      img {
        width: 106px;
        height: 98px;
        margin: 26px auto 76px auto;
      }
      h5 {
        margin: 0 auto 10px auto;
      }
      p {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .fromIn {
    width: 100%;
    margin: 120px auto;
    .iptBox {
      margin-bottom: 34px;
      display: flex;
      flex-wrap: wrap;
      + label {
        margin: auto;
        text-align: left;
      }
    }
    label {
      line-height: 40px;
    }
    input {
      margin: auto;
      width: 40%;
      height: 40px;
      border: 1px solid rgba(153, 153, 153, 1) !important;
    }
    .ipts {
      width: 25%;
    }
    .ipt {
      width: 100%;
    }
    button {
      width: 130px;
      height: 40px;
      border: 2px solid rgba(153, 153, 153, 1);
      border-radius: 20px;
      margin: 120px auto;
      color: #999;
      line-height: 1;
    }
  }
}
</style>

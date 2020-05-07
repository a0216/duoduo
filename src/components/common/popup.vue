<template>
  <div class="popup" v-if="isPc">
    <div class="tops">
      <p>报名信息</p>
      <img src="../../assets/img/close.png" alt />
    </div>
    <div class="forms">
      <div>
        <p>您的姓名(已加密）</p>
        <input type="text" placeholder="请输入" />
        <p>您的电话(已加密）</p>
        <input type="text" placeholder="请输入" />
        <p class="agreement">
          使用本机号码即为同意
          <span>《中国移动服务条款》</span>
        </p>
        <p>您是否有产品？</p>
        <el-radio v-model="product" label="1">有产品</el-radio>
        <el-radio v-model="product" label="2">无产品</el-radio>
        <p>您想通过短视频学到什么？</p>
        <div class="radioBox">
          <el-radio v-model="study" label="1">短视频变现</el-radio>
          <el-radio v-model="study" label="2">涨粉上热门</el-radio>
          <el-radio v-model="study" label="3">橱窗带货</el-radio>
          <el-radio v-model="study" label="4">产品销售</el-radio>
          <el-radio v-model="study" label="5">引流带货</el-radio>
          <el-radio v-model="study" label="6">报名信息</el-radio>
        </div>
      </div>
      <button>立即报名领取试听课</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.popup {
  width: 500px;
  height: 478px;
  background: rgba(248, 248, 248, 1);
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.4);
  border-radius: 10px;
  margin: 0 auto;
  .tops {
    height: 50px;
    background: rgba(0, 171, 245, 1);
    border-radius: 10px 10px 0px 0px;
    color: #fff;
    display: flex;
    p {
      font-size: 16px;
      width: 75%;
      text-align: left;
      margin: auto;
    }
    img {
      width: 20px;
      height: 20px;
      margin: auto;
    }
  }
  .forms {
    padding-left: 5%;
    div {
      text-align: left;
      input {
        background: transparent;
        border-bottom: 1px solid #999999 !important;
        width: 420px;
      }
      .agreement {
        span {
          color: #00abf5;
        }
      }
    }
    .radioBox {
      display: flex;
      flex-wrap: wrap;
      .el-radio {
        margin-bottom: 10px;
        width: 90px;
      }
    }
    button {
      width: 200px;
      height: 40px;
      background: rgba(0, 171, 245, 1);
      border-radius: 20px;
      color: #fff;
      margin-top: 20px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      nowShow: "1",
      product: "",
      study: ""
    };
  },
  props: ["isPc", "coope", "idx"],
  methods: {
    toCoop: function(val) {
      // console.log(val);
      this.nowShow = val;
      this.$emit("nowShow", val);
    }
  }
};
</script>
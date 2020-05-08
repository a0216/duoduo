<template>
  <div class="popup" v-if="isPc&&popShow!='5'">
    <div v-show="popShow=='1'" class="first">
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
    <div class="customer" v-show="popShow=='0'">
      <div class="tops">
        <p>
          <span>哆哆抖商-客服</span>
          <span>正在为您服务</span>
        </p>
      </div>
      <div class="content">
        <li>
          <img src="../../assets/img/duoduoHeader.png" alt />
          <div>你好，请问有疑问可以扫描二维码， 帮您实现产品带货和品牌传播</div>
        </li>
        <li>
          <img src="../../assets/img/duoduoHeader.png" alt />
          <img class="codes" src="../../assets/img/duoduoCode.png" alt />
        </li>
      </div>
    </div>
    <div class="popup message" v-show="popShow=='2'">
      <div class="tops">
        <p>留言</p>
        <img src="../../assets/img/close.png" alt />
      </div>
      <div class="forms">
        <div>
          <p>您的姓名(已加密）</p>
          <input type="text" placeholder="请输入" />
          <p>您的电话(已加密）</p>
          <input type="text" placeholder="请输入" />
        
          <p>留言</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowShow: "1",
      product: "",
      study: ""
    };
  },
  props: ["isPc", "coope", "idx","popShow"],
  methods: {
    toCoop: function(val) {
      // console.log(val);
      this.nowShow = val;
      this.$emit("nowShow", val);
    }
  }
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 99999;
  left: 60%;
  bottom: 200px;
  height: 478px;
  background: rgba(248, 248, 248, 1);
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.4);
  border-radius: 10px;
  margin: 0 auto;
  .first{
    width: 500px;
  }
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
      border: 0;
      margin-top: 20px;
      margin-right: 5%;
    }
  }
}
.customer {
  position: fixed;
  z-index: 99999;
  left: 60%;
  bottom: 200px;
  width: 460px;
  height: 500px;
  background: rgba(248, 248, 248, 1);
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.4);
  border-radius: 10px;
  margin: 0 auto;
  .tops {
    height: 60px;
    background: rgba(0, 171, 245, 1);
    border-radius: 10px 10px 0px 0px;
    p {
      margin: 0;
      text-align: left;
      color: #fff;
      line-height: 60px;
      padding-left: 5%;
      font-size: 20px;
      span {
        &:last-child {
          font-size: 12px;
        }
      }
    }
  }
  .content {
    margin: 44px auto;
    li {
      display: flex;
      margin-bottom: 40px;
      img {
        width: 36px;
        height: 36px;
        margin: 0 20px;
      }
      div {
        width: 268px;
        height: 60px;
        background: #fff;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 5px 0px rgba(153, 153, 153, 0.24);
        border-radius: 0px 10px 10px 10px;
        padding-left: 3%;
        text-align: left;
        line-height: 1.8;
      }
      .codes {
        width: 156px;
        height: 156px;
      }
    }
  }
}
.message {
  position: fixed;
  z-index: 99999;
  left: 60%;
  bottom: 200px;
  width: 460px;
  height: 500px;
  background: rgba(248, 248, 248, 1);
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.4);
  border-radius: 10px;
  margin: 0 auto;
  
}
</style>

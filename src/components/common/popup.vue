<template>
  <div class="popup" v-if="isPc&&popShow!='5'">
    <div v-show="popShow=='1'" class="first">
      <div class="tops" @click="close('5')">
        <p>报名信息</p>
        <img src="../../assets/img/close.png" alt />
      </div>
      <div class="forms">
        <div>
          <p>您的姓名(已加密）</p>
          <input type="text" placeholder="请输入" v-model="name" />
          <p>您的电话(已加密）</p>
          <input type="text" placeholder="请输入" v-model="phone" />
          <p class="agreement">
            使用本机号码即为同意
            <span>《中国移动服务条款》</span>
          </p>
          <p>您是否有产品？</p>
          <el-radio v-model="product" label="有产品">有产品</el-radio>
          <el-radio v-model="product" label="无产品">无产品</el-radio>
          <p>您想通过短视频学到什么？</p>
          <div class="radioBox">
            <el-radio v-model="study" label="短视频变现">短视频变现</el-radio>
            <el-radio v-model="study" label="涨粉上热门">涨粉上热门</el-radio>
            <el-radio v-model="study" label="橱窗带货">橱窗带货</el-radio>
            <el-radio v-model="study" label="产品销售">产品销售</el-radio>
            <el-radio v-model="study" label="引流带货">引流带货</el-radio>
            <el-radio v-model="study" label="报名信息">报名信息</el-radio>
          </div>
        </div>
        <button @click="getStudy">立即报名领取试听课</button>
      </div>
    </div>
    <div class="customer" v-show="popShow=='0'">
      <div class="tops">
        <p>
          <span>哆哆抖商-客服</span>
          <span>正在为您服务</span>
        </p>
        <img src="../../assets/img/close.png" alt @click="close('5')" />
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
        <img src="../../assets/img/close.png" alt @click="close('5')" />
      </div>
      <div class="forms">
        <div>
          <p>您的姓名(已加密）</p>
          <input type="text" placeholder="请输入" v-model="namea" />
          <p>您的电话(已加密）</p>
          <input type="text" placeholder="请输入" v-model="phonea" />
          <p>留言</p>
          <textarea name id cols="48" rows="10" style="resize:none" v-model="remarks"></textarea>
        </div>
        <button @click="send">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import { post, fetch } from "../../assets/js/axios";

export default {
  data() {
    return {
      nowShow: "1",
      product: "",
      study: "",
      name: "",
      popShows: this.popShow,
      namea: "",
      phone: "",
      phonea: "",
      remarks: "",
      conent: ""
    };
  },
  props: ["isPc", "coope", "idx", "popShow"],
  watch: {
    product(val) {
      console.log(val);
    }
  },
  methods: {
    toCoop: function(val) {
      // console.log(val);
      this.nowShow = val;
      this.$emit("nowShow", val);
    },
    close: function(val) {
      this.$emit("pops", this.popShow);
    },
    getStudy() {
      if (this.name == "") {
        this.$message({
          offset: "100",
          message: "请输入您的姓名！",
          type: "warning"
        });
      } else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.$message({
          offset: "100",
          message: "手机号码有误，请查证后在试！",
          type: "warning"
        });
      } else {
        post("/public/apply", {
          type: "0",
          name: this.name,
          phone: this.phone,
          comment: this.study + this.product
        })
          .then(res => {
            console.log(res);
            if (res.data) {
              this.$message({
                offset: "100",
                message: "报名成功，稍后会有工作人员联系您!",
                type: "success"
              });
            } else {
              this.$message({
                offset: "100",
                message: "请稍后再试！",
                type: "errot"
              });
            }
          })
          .catch(res => {});
      }
    },
    send() {
      if (this.namea == "") {
        this.$message({
          offset: "100",
          message: "请输入您的姓名！",
          type: "warning"
        });
      } else if (!/^1[3456789]\d{9}$/.test(this.phonea)) {
        this.$message({
          offset: "100",
          message: "手机号码有误，请查证后在试！",
          type: "warning"
        });
      } else {
        post("/public/apply", {
          type: "3",
          name: this.namea,
          phone: this.phonea,
          comment: this.remarks
        })
          .then(res => {
            console.log(res);
            if (res.data) {
              this.$message({
                offset: "100",
                message: "提交成功!",
                type: "success"
              });
            } else {
              this.$message({
                offset: "100",
                message: "请稍后再试！",
                type: "errot"
              });
            }
          })
          .catch(res => {});
      }
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
  .first {
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
      cursor: pointer;
    }
  }
  .forms {
    padding-left: 5%;
    div {
      text-align: left;
      margin-right: 5%;
      input {
        background: transparent;
        border-bottom: 1px solid #999999 !important;
        width: 420px;
        outline: none;
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
    textarea {
      width: 100%;
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
      line-height: 1.5;
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

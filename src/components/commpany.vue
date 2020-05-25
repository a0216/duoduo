<template>
  <el-container>
    <el-main>
      <div class="topImg">
        <!-- <img src="../assets/img/company.png" alt /> -->
      </div>

      <div class="information" v-if="isPc">
        <h2>公司介绍</h2>
        <h4>COMPANY PROFILE</h4>
        <div class="company">
          <div class="leftFont">
            河南熊孩儿网络科技有限公司，隶属于仲景国际集团，集团为开拓互联网市场，于2019年决定成立河南熊孩儿网络科技有限公司。熊孩儿是一家专注于社交电商和解决粉丝引流问题的创新型企业。主营业务有“哆哆抢客”电商平台和“哆哆抖商”学院。
            “哆哆抢客”的使命是帮助每个人去创造更多的价值。公司的创始人初衷是希望通过提供一个透明的平台，让人人都能参与进互联网时代，通过各维度去获得收益。
            <br />我们拥有完善的技术研发团队和自媒体培训团队，为每个客户提供强大的技术服务支持和专业的自媒体培训课程，帮助各类人群提供解决方案即学习平台。
          </div>
          <div class="rightImg">
            <div class="imgright"></div>
            <img src="../assets/img/banner1.jpg" alt />
          </div>
        </div>
      </div>
      <div class="information informationb" v-else>
        <h2>公司介绍</h2>
        <h4>COMPANY PROFILE</h4>
        <div class="company">
          <div class="leftFont">
            河南熊孩儿网络科技有限公司，隶属于仲景国际集团，集团为开拓互联网市场，于2019年决定成立河南熊孩儿网络科技有限公司。熊孩儿是一家专注于社交电商和解决粉丝引流问题的创新型企业。主营业务有“哆哆抢客”电商平台和“哆哆抖商”学院。
            “哆哆抢客”的使命是帮助每个人去创造更多的价值。公司的创始人初衷是希望通过提供一个透明的平台，让人人都能参与进互联网时代，通过各维度去获得收益。
            <br />我们拥有完善的技术研发团队和自媒体培训团队，为每个客户提供强大的技术服务支持和专业的自媒体培训课程，帮助各类人群提供解决方案即学习平台。
          </div>
          <div class="rightImg">
            <div class="imgright"></div>
            <img src="../assets/img/banner1.jpg" alt />
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import store from "@/store";

export default {
  name: "brand",
  props: [""],
  components: {},
  data() {
    return {
      msg: "",
      isPc: "true"
    };
  },

  methods: {},
  created() {},
  mounted() {
    const _this = this;
    console.log(store.state.science);
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.topImg {
  height: 220px;
  width: 100%;
  margin-top: 60px;
  background: url("../assets/img/company.png") top left;
  background-size: cover;
}

.information {
  width: 1200px;
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
  .company {
    width: 1200px;
    margin: 0 auto 120px auto;
    display: flex;
    flex-wrap: w;
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
        width: 530px;
        height: 430px;
        border: 3px solid rgba(0, 171, 245, 1);
      }
    }
  }
}
.informationb {
  padding: 0 3%;
  width: 94%;
  .company {
    width: 100%;
    display: block;
    .leftFont {
      width: 100%;
      margin-right: 0;
    }
    .rightImg {
      height: 500px;
      left: 5%;
      img {
        width: 370px;
        height: 300px;
      }
      .imgright {
        width: 370px;
        height: 300px;
      }
    }
  }
}
</style>

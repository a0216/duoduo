<template>
  <el-container>
    <el-main>
      <div class="topImg">
        <!-- <img src="../assets/img/brand.png" alt /> -->
      </div>
      <div class="fontBox" v-if="isPc">
        <div class="fonts">
          <p>2020年，河南熊孩儿网络科技有限公司与仲景国际集团达成合作，通过哆哆抢客平台对仲景集团生产的连花清瘟颗粒进行宣传推广和资源共享，大力扩宽销售渠道。</p>
        </div>
        <div class="imgb" @mouseover="toShow(showIs)" @mouseout="toShow(showIs)">
          <!-- <div class="triangle"></div> -->
          <img src="../assets/img/banner2.jpg" alt />
          <div class="hovers" v-show="showIs=='1'"></div>
          <div class="notOpcity" v-show="showIs=='1'">
            <h3>成分:</h3>
            <p>
              杏仁功效： 润肺，清积食，散滞
              <br />板蓝根功效： 清热解毒，凉血，利咽
              <br />连翘叶功效： 清热，解毒，散结，消肿​
              <br />​金银花功效： 清热解毒、抗炎、补虚疗风
              <br />鱼腥草功效： 清热解毒；排脓消痈；利尿通淋
              <br />甘草功效： 清热解毒，润肺止咳，调和诸药性
              <br />同时还富含薄荷、百合、藿香等十二味中草药，
              <br />天然无添加，品质值得保障。
              <br />
            </p>
          </div>
        </div>
        <div class="imga">
          <!-- <div class="triangle"></div> -->
          <img src="../assets/img/banner1.jpg" alt />
        </div>
        <div class="codes">
          <img src="../assets/img/banner2.jpg" alt />
          <p>微信扫码购买</p>
        </div>
      </div>

      <div class="fontBox fontBoxb" v-else>
        <div class="fonts">
          <p>2020年，河南熊孩儿网络科技有限公司与仲景国际集团达成合作，通过哆哆抢客平台对仲景集团生产的连花清瘟颗粒进行宣传推广和资源共享，大力扩宽销售渠道。</p>
        </div>
        <div class="imgb">
          <!-- <div class="triangle"></div> -->
          <img src="../assets/img/banner2.jpg" alt />
        </div>
        <div class="imga">
          <!-- <div class="triangle"></div> -->
          <img src="../assets/img/banner1.jpg" alt />
        </div>
        <div class="codes">
          <img src="../assets/img/banner2.jpg" alt />
          <p>微信扫码购买</p>
        </div>
      </div>
      <div class="introduce" v-if="isPc">
        <h2>企业介绍</h2>
        <h4>BUSINESS INTRODUCTION</h4>
        <P>河南医圣寿之源生物科技有限公司，隶属于香港仲景国际集团，是一家集中草药养生、产品研发、生产，销售为一体的综合性企业 。公司位于医圣故里——南阳，秉承医圣 “防未病，治未病”理念，以仲景汉方为根本，结合现代科技，研发出适应现代人群的“仲景养生”系列产品。</P>
        <P>公司旨在弘扬传统中医文化，以养代医，防病于未发，遵循中医“清调养”的健康理念。升华中医汉方精髓，淬炼中草药精华。专为城市亚健康人群体质，研制生产“仲景养生”系列产品，包含膏滋、口服液、茶饮、高能补品，野生珍品等以达到强身健体、养颜美容、防病调养的功效。</P>
        <P>拥有国内顶尖中医药科研单位大力支持，传承仲景古方得以延续，完美缔造中医药养生精品。公司坚持以真材实料、道地药材、全流程严格管控。确保产品质量精益求精。</P>
        <div class="imgList">
          <img src="../assets/img/banner.jpg" alt />
          <img src="../assets/img/banner.jpg" alt />
          <img src="../assets/img/banner.jpg" alt />
        </div>
        <button @clcik="toSame()">申请入驻</button>
      </div>

      <div class="introduce introduceb" v-else>
        <h2>企业介绍</h2>
        <h4>BUSINESS INTRODUCTION</h4>
        <P>河南医圣寿之源生物科技有限公司，隶属于香港仲景国际集团，是一家集中草药养生、产品研发、生产，销售为一体的综合性企业 。公司位于医圣故里——南阳，秉承医圣 “防未病，治未病”理念，以仲景汉方为根本，结合现代科技，研发出适应现代人群的“仲景养生”系列产品。</P>
        <P>公司旨在弘扬传统中医文化，以养代医，防病于未发，遵循中医“清调养”的健康理念。升华中医汉方精髓，淬炼中草药精华。专为城市亚健康人群体质，研制生产“仲景养生”系列产品，包含膏滋、口服液、茶饮、高能补品，野生珍品等以达到强身健体、养颜美容、防病调养的功效。</P>
        <P>拥有国内顶尖中医药科研单位大力支持，传承仲景古方得以延续，完美缔造中医药养生精品。公司坚持以真材实料、道地药材、全流程严格管控。确保产品质量精益求精。</P>
        <div class="imgList">
          <img src="../assets/img/banner.jpg" alt />
          <img src="../assets/img/banner.jpg" alt />
          <img src="../assets/img/banner.jpg" alt />
        </div>
        <button @clcik="toSame()">申请入驻</button>
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
      isPc: "true",
      showIs: "0"
    };
  },

  methods: {
    toSame() {
      this.$router.push("/cooperation");
    },
    toShow(val) {
      if (val == 0) {
        this.showIs = "1";
      } else {
        this.showIs = "0";
      }
    }
  },
  created() {},
  mounted() {
    const _this = this;
    // console.log(store.state.science);
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
  background: url("../assets/img/brand.png") top left;
  background-size: 100% 100%;
}
.fontBox {
  height: 1090px;
  width: 12rem;
  margin: 0 auto;
  padding: 60px 360px;
  position: relative;
  .fonts {
    height: 320px;
    width: 620px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
    p {
      width: 457px;
      height: 77px;
      text-align: left;
    }
  }
  .imga {
    width: 630px;
    height: 630px;
    position: absolute;
    top: 60px;
    right: 360px;
    img {
      width: 100%;
      height: 100%;
    }
    .triangle {
      position: absolute;
      top: 50px;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 30px solid #fff;
    }
  }
  .imgb {
    width: 630px;
    height: 630px;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
    }
    .triangle {
      position: absolute;
      top: 500px;
      right: 0;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-right: 30px solid #fff;
      border-bottom: 30px solid transparent;
      border-left: 30px solid transparent;
    }
    .hovers {
      width: 630px;
      height: 630px;
      background: rgba(51, 51, 51, 1);
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
    }
    .notOpcity {
      position: absolute;
      top: 0;
      left: 0;
      h3 {
        padding-left: 130px;
        padding-top: 130px;
        text-align: left;
        margin-bottom: 50px;
        color: rgba(232, 232, 232, 1);
      }
      p {
        padding-left: 130px;
        text-align: left;
        line-height: 38px;
        color: rgba(232, 232, 232, 1);
      }
    }
  }
  .codes {
    width: 260px;
    height: 260px;
    position: absolute;
    bottom: 200px;
    right: 481px;
    img {
      width: 260px;
      height: 260px;
      + p {
        color: #333;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
.fontBoxb {
  width: 94%;
  padding: 0 3%;
  height: 600px;
  .fonts {
    height: 200px;
    width: 100%;
  }
  .imga {
    width: 220px;
    height: 240px;
    top: 20%;
    left: 50%;
  }
  .imgb {
    width: 244px;
    height: 231px;
    top: 45%;
    left: 5%;
    .triangle {
      top: 100px;
    }
  }
  .codes {
    top: 70%;
    bottom: 0;
    right: 10%;
    width: 130px;
    img {
      width: 130px;
      height: 130px;
    }
  }
}
.introduce {
  width: 12rem;
  margin: 0 auto;
  h2 {
    text-align: left;
    color: #333;
    font-size: 26px;
    margin-top: 0;
  }
  h4 {
    color: #999;
    font-size: 14px;
    text-align: left;
    margin-bottom: 60px;
  }
  p {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 36px;
    text-align: left;
  }
  .imgList {
    display: flex;
    margin-top: 54px;
    img {
      width: 374px;
      height: 246px;
      margin-right: 40px;
    }
  }
  button {
    width: 130px;
    height: 40px;
    border: 2px solid rgba(153, 153, 153, 1);
    border-radius: 20px;
    margin: 120px auto;
    color: #999;
    line-height: 1;
    outline: none;
    &:hover {
      background: rgba(0, 171, 245, 1);
      border-radius: 20px;
      color: #fff;
      border: 0;
    }
  }
}
.introduceb {
  padding: 3%;
  width: 94%;
  .imgList {
    flex-wrap: wrap;
    img {
      margin: 5px auto;
    }
  }
  button {
    margin: 60px auto;
  }
}
</style>

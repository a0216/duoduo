<template>
  <div class="curriculum" v-if="isPc">
    <div class="curBox">
      <img src="../../assets/img/curra.png" alt v-show="course==1" />
      <img src="../../assets/img/currb.png" alt v-show="course==2" />
      <img src="../../assets/img/currc.png" alt v-show="course==3" />
      <img src="../../assets/img/currd.png" alt v-show="course==4" />
      <div class="course">
        <h3>定向课程</h3>
        <p>ORIENTATION COURSE</p>
        <h4>微信引流人脉必选玩法</h4>
        <p v-show="course==1" class="more">
          日引流可达1000+、超活跃、超精准
          <br />适合群体：微商、实体、项目招代理
          <br />变现方式：带货、接广告、为他人引流
        </p>
        <p v-show="course==2" class="more">
          多种视频拍摄风格，让你越吃越火
          <br />适合群体：学生，宝妈，上班族，吃货，兼职
          <br />变现方式：短视频带货，直播带货，接商家广告
        </p>
        <p v-show="course==3" class="more">
          淘宝，京东，拼多多等，无需囤货，一个链接全网直达，客户覆盖人群高达90%
          <br />适合人群：学生、宝妈、兼职
          <br />变现方式：直播、橱窗、微信福利
          <!-- 全网多平台带货，淘宝，天猫，京东，拼多多，饿了么，飞猪，加油等无需囤货，一个链接全网直达，客户覆盖人群高达90%
          <br />适合人群：学生，宝妈，兼职
          <br />变现方式：直播，橱窗，微信福利
          <br />学习金额：399-->
        </p>
        <p v-show="course==4" class="more">
          短视频 + 抖音小程序 转化率高达20% 万流量可直接变现千元。
          <br />适合群体：学生，宝妈，上班族，兼职
          <br />变现方式：抖音小程序心理测评
        </p>
      </div>
      <div class="currList">
        <li class="notShow" v-show="course!=1" @click="changeCourse('1')">图文类课程</li>
        <li class="active" v-show="course==1" @click="changeCourse('1')">
          <div>
            <p>图文类课程</p>
            <p>Graphics and text</p>
          </div>
          <div>01</div>
        </li>
        <li class="notShow" v-show="course!=2" @click="changeCourse('2')">美食类课程</li>
        <li class="active" v-show="course==2" @click="changeCourse('2')">
          <div>
            <p>美食类课程</p>
            <p>Food lessons</p>
          </div>
          <div>02</div>
        </li>
        <li class="notShow" v-show="course!=3" @click="changeCourse('3')">购物省钱类课程</li>
        <li class="active" v-show="course==3" @click="changeCourse('3')">
          <div>
            <p>购物省钱类课程</p>
            <p>Save money</p>
          </div>
          <div>03</div>
        </li>
        <li class="notShow" v-show="course!=4" @click="changeCourse('4')">心理测评类课程</li>
        <li class="active" v-show="course==4" @click="changeCourse('4')">
          <div>
            <p>心理测评类课程</p>
            <p>Evaluation</p>
          </div>
          <div>04</div>
        </li>
      </div>
    </div>
  </div>
  <div v-else class="currb">
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/curra.png" alt />
          <div>
            <h4>图文类课程</h4>
            <p>日引流可达1000+、超活跃、超精准</p>
            <p>
              <br />适合群体：微商、实体、项目招代理
              <br />变现方式：带货、接广告、为他人引流
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/currb.png" alt />
          <div>
            <h4>美食课程</h4>
            <p>吃货必选玩法，边吃边赚。</p>
            <p>
              适合群体：学生，宝妈，上班族，吃货，兼职
              <br />变现方式：短视频带货，直播带货，接商家广告
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/currc.png" alt />
          <div>
            <h4>购物省钱类课程</h4>

            <p>淘宝，京东，拼多多等，无需囤货，一个链接全网直达，客户覆盖人群高达90%</p>
            <p>
              <br />适合人群：学生，宝妈，兼职
              <br />变现方式：直播、橱窗、微信福利
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/currd.png" alt />
          <div>
            <h4>心理测评类课程</h4>
            <p>抖音快速赚钱必选</p>
            <p>
              短视频 + 抖音小程序 转化率高达20% 万流量可直接变现千元
              <br />短视频 + 抖音小程序 转化率高达20% 万流量可直接变现千元。
              <br />适合群体：学生，宝妈，上班族，兼职
              <br />变现方式：抖音小程序心理测评
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.curriculum {
  width: 100%;
  height: 580px;
  background: #f8f8f8;
  padding-top: 1px;
  .curBox {
    width: 1200px;
    height: 460px;
    margin: 60px auto;
    display: flex;
    flex-wrap: nowrap;
    background: #fff;
    img {
      width: 390px;
      height: 460px;
      position: relative;
      bottom: 30px;
      right: 30px;
    }
    .course {
      padding: 60px;
      text-align: left;
      width: 376px;
      h4 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 36px;
      }
      h3 {
        font-size: 26px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        color: #333;
        position: relative;
        margin-bottom: 12px;
        &::after {
          position: absolute;
          background: #e5e5e5;
          content: "";
          height: 0.02rem;
          top: 50%;
          width: 270px;
          left: 120px;
        }
        + p {
          margin-top: 0;
          margin-bottom: 60px;
        }
      }
      .more {
        width: 420px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 30px;
      }
      h4 {
        color: #333;
        font-size: 16px;
        + p {
        }
      }
    }
    .currList {
      width: 320px;
      text-align: center;
      border-left: 3px solid #e5e5e5;
      li {
        height: 113px;
        border-bottom: 3px solid #e5e5e5;
        &:last-child {
          border: 0;
        }
        p {
          margin: 0;
        }
      }
      .notShow {
        line-height: 113px;
      }
      .active {
        background: #00abf5;
        display: flex;
        flex-wrap: nowrap;
        div:first-child {
          width: 55%;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 10px;
          padding: 40px 10px;
          text-align: left;
          font-size: 12px;

          p:first-child {
            margin-bottom: 10px;
            font-size: 16px;
          }
        }
        div:last-child {
          font-size: 62px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 1.8;
          opacity: 0.3;
          text-align: right;
          float: right;
        }
        p {
          line-height: 1;
        }
      }
    }
  }
}
.currb {
  height: 840px;
  width: 100%;
  background: #f8f8f8;

  #swiper {
    width: 96%;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 500px;
    + div {
      width: 500px;
      text-align: left;
      padding-left: 30px;
      h4 {
        font-weight: 400;
        font-size: 24px;
        color: rgba(51, 51, 51, 1);
        line-height: 36px;
        margin: 10px 0;
        + p {
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 41px;
          width: 80%;
          margin: 0px;
        }
      }
      p {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 36px;
        width: 80%;
        margin: 0px;
      }
    }
  }
}
</style>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      course: "1"
    };
  },
  props: ["isPc"],
  mounted() {
    var mySwiper = new Swiper("#swiper", {
      autoplay: true,
      loop: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next"
    });
  },
  methods: {
    changeCourse(val) {
      this.course = val;
    }
  }
};
</script>
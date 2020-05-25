<template>
  <div class="hello">
    <el-container>
      <el-main>
        <popup :isPc="isPc" :popShow="popShow"></popup>
        <suspension :isPc="isPc" :idx="idx" @idxShow="idxShow" :popShow="popShow"></suspension>
        <div class="topImg">
          <!-- <img src="../assets/img/tiktok.png" alt /> -->
        </div>
        <div class="advantage" v-if="isPc">
          <div class="white">
            <h2>核心优势</h2>
            <h4>CORE STRENGTHS</h4>
            <div class="twoBox">
              <div class="leftAdv anmtion">
                <img src="../assets/img/idxa.png" alt />
                <div>
                  <h3>私人定制</h3>
                  <p>根据实际情况定制专属学习计划</p>
                </div>
              </div>
              <div class="leftAdv anmtion">
                <img src="../assets/img/idxb.png" alt />
                <div>
                  <h3>随叫随到</h3>
                  <p>加入课程，即刻开始学习</p>
                </div>
              </div>
              <div class="leftAdv anmtion">
                <img src="../assets/img/idxc.png" alt />
                <div>
                  <h3>线下实操服务</h3>
                  <p>老师现场指导，让学员学有所得</p>
                </div>
              </div>
              <div class="leftAdv">
                <img src="../assets/img/idxd.png" alt />
                <div>
                  <h3>问题专业诊断</h3>
                  <p>根据学员问题，进行专业诊断辅导</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="advantage advantageb" v-else>
          <h2>核心优势</h2>
          <h4>CORE STRENGTHS</h4>
          <div class="twoBox">
            <div class="leftAdv anmtion">
              <img src="../assets/img/idxa.png" alt />
              <div>
                <h3>私人定制</h3>
                <p>根据实际情况定制专属学习计划</p>
              </div>
            </div>
            <div class="leftAdv anmtion">
              <img src="../assets/img/idxb.png" alt />
              <div>
                <h3>随叫随到</h3>
                <p>加入课程，即刻开始学习</p>
              </div>
            </div>
            <div class="leftAdv anmtion">
              <img src="../assets/img/idxc.png" alt />
              <div>
                <h3>线下实操服务</h3>
                <p>老师现场指导，让学员学有所得</p>
              </div>
            </div>
            <div class="leftAdv">
              <img src="../assets/img/idxd.png" alt />
              <div>
                <h3>问题专业诊断</h3>
                <p>根据学员问题，进行专业诊断辅导</p>
              </div>
            </div>
          </div>
        </div>
        <div class="student" v-if="isPc">
          <div class="content">
            <h2>学员风采</h2>
            <h4>STUDENT STYLE</h4>
            <div class="imgList">
              <img src="../assets/img/studentd.png" alt />
              <img src="../assets/img/studente.png" alt />
              <img src="../assets/img/studentf.png" alt />
            </div>
            <button @click="tosame('/tiktoks')">查看更多</button>
          </div>
        </div>
        <div class="student studentb" v-else>
          <div class="content">
            <h2>学员风采</h2>
            <h4>STUDENT STYLE</h4>
            <div class="imgList">
              <img src="../assets/img/studentd.png" alt />
              <img src="../assets/img/studente.png" alt />
              <img src="../assets/img/studentf.png" alt />
            </div>
            <button @click="tosame('/tiktoks')">查看更多</button>
          </div>
        </div>
        <div class="operate" v-if="isPc">
          <div class="white">
            <h2>运营推广</h2>
            <h4>OPERATION PROMOTION</h4>
            <div class="list">
              <div>
                <img src="../assets/img/operatea.png" alt />
                <p>上门运营指导</p>
              </div>
              <div>
                <img src="../assets/img/operateb.png" alt />
                <p>全托付运营</p>
              </div>
              <div>
                <img src="../assets/img/operatec.png" alt />
                <p>全套运营方案</p>
              </div>
              <div>
                <img src="../assets/img/operated.png" alt />
                <p>线下长期学习</p>
              </div>
            </div>
          </div>
        </div>
        <div class="operate operateb" v-else>
          <h2>运营推广</h2>
          <h4>OPERATION PROMOTION</h4>
          <div class="list">
            <div>
              <img src="../assets/img/operatea.png" alt />
              <p>上门运营指导</p>
            </div>
            <div>
              <img src="../assets/img/operateb.png" alt />
              <p>全托付运营</p>
            </div>
            <div>
              <img src="../assets/img/operatec.png" alt />
              <p>全套运营方案</p>
            </div>
            <div>
              <img src="../assets/img/operated.png" alt />
              <p>线下长期学习</p>
            </div>
          </div>
        </div>

        <div class="tiktok" v-if="isPc">
          <video
            id="media"
            controls="controls"
            width="100%"
            height="100%"
            src="../assets/img/show.mp4"
            @canplay="videoCanPlay()"
            ref="video"
          ></video>
          <div class="play" @click="videoPlay()" v-show="!vcIsPlay">
            <img src="../assets/img/play.png" alt />
            <div class="plus">
              <div class="pulse"></div>
              <div class="pulse1"></div>
            </div>
          </div>
        </div>
        <div class="tiktok tiktokb" v-else>
          <video
            id="media"
            controls="controls"
            width="100%"
            height="100%"
            src="../assets/img/show.mp4"
            @canplay="videoCanPlay()"
            ref="video"
          ></video>
          <div class="play" @click="videoPlay()" v-show="!vcIsPlay">
            <img src="../assets/img/play.png" alt />
          </div>
        </div>
        <div class="training" v-if="isPc">
          <div class="white">
            <h2>特训营</h2>
            <h4>SPECIAL TRAINING CAMP</h4>
            <div class="camp">
              <div
                v-for="item in imgBoxlist"
                :key="item.idx"
                class="imgBox"
                @mousemove="changeImg(item.idx)"
                @mouseout="backImg(item.idx)"
                @click="showMore(item.show,item.idx)"
              >
                <div v-if="item.show">
                  <img :src="item.imga" alt />
                  <p>{{item.fonts}}</p>
                  <p @click.stop="showMore(item.show,item.idx)">查看更多&gt;</p>
                </div>
                <div class="fonts" v-else>
                  <p v-for="font in item.fontsList" :key="font.idx">{{font.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="training trainingb" v-else>
          <h2>特训营</h2>
          <h4>SPECIAL TRAINING CAMP</h4>
          <div class="camp">
            <div class="imgBox">
              <img src="../assets/img/iosa.png" alt />
              <h4>热门爆破班</h4>
              <P>
                账号定位
                <br />图文账号制作
                <br />抖音微信引流
                <br />视屏内容提升
              </P>
            </div>
            <div class="imgBox">
              <img src="../assets/img/iosb.png" alt />
              <h4>引流变现班</h4>
              <P>
                账号定位
                <br />图文账号制作
                <br />抖音微信引流
                <br />视屏内容提升
              </P>
            </div>
            <div class="imgBox">
              <img src="../assets/img/iosc.png" alt />
              <h4>好物带货班</h4>
              <P>
                账号定位
                <br />无人直播技术
                <br />引流变现
                <br />多种玩法教学 （矩阵、无货源带货、心里测评等）
                <br />剪映剪辑训练
              </P>
            </div>
            <div class="imgBox">
              <img src="../assets/img/iosd.png" alt />
              <h4>商户运营服务</h4>
              <P>
                产品定位
                <br />活动策划
                <br />爆品分析
                <br />辅导小店开通
                <br />短视频热门运营
                <br />电商运营方案落地
                <br />社群运营方案落地
              </P>
            </div>
          </div>
        </div>
        <curriculum :isPc="isPc"></curriculum>
        <div class="team">
          <div>
            <h2>专业团队，提供优质服务</h2>
            <h2>哆哆抢客，你的私人运营导师</h2>
          </div>
          <div>
            <img src="../assets/img/code.png" alt />
            <p>扫码资讯</p>
          </div>
        </div>
        <div class="fromIn">
          <h2 v-if="isPc">索要课程详细介绍</h2>
          <h3 v-else>索要课程详细介绍</h3>
          <div class="iptBox">
            <div>
              <label for>名称:</label>
              <input type="text" :style="iptWidth" v-model="name" />
            </div>
            <div>
              <label for>联系电话:</label>
              <input type="text" :style="iptWidth" v-model="phone" />
            </div>
          </div>
          <div class="textar">
            <label for>留言：</label>
            <el-input
              type="textarea"
              :rows="10"
              style="width:96%;
              float: right;"
              placeholder="请输入内容"
              v-model="remarks"
            ></el-input>
          </div>
          <div class="btnBox">
            <button @click="submitIt">提交</button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { post, fetch } from "../assets/js/axios";
import store from "@/store";
import curriculum from "./common/curriculum";
import suspension from "./common/sups";
import popup from "./common/popup";

export default {
  name: "TIKTOK",
  components: { curriculum, suspension, popup },
  props: ["nowPath"],
  data() {
    return {
      name: "",
      phone: "",
      msg: "eeee",
      isPc: "true",
      vcIsPlay: false,
      course: "1",
      nowIn: "1",
      remarks: "",
      idx: false,
      popShow: "5",
      shows: "0",
      nowIs: "0",
      idxIs: "0",
      iptWidth: {
        width: "87%"
      },
      imgBoxlist: [
        {
          imgs: require("../assets/img/camp.png"),
          imgSrc: require("../assets/img/camps.png"),
          fonts: "热门爆破班",
          imga: require("../assets/img/camp.png"),
          idx: 0,
          show: true,
          fontsList: [
            {
              name: "账号定位"
            },
            {
              name: "图文账号制作"
            },
            {
              name: "抖音微信引流"
            },
            {
              name: "视屏内容提升"
            }
          ]
        },
        {
          imgs: require("../assets/img/campd.png"),
          imgSrc: require("../assets/img/campds.png"),
          fonts: "引流变现班",
          imga: require("../assets/img/campd.png"),
          idx: 1,
          show: true,
          fontsList: [
            {
              name: "账号定位"
            },
            {
              name: "图文账号制作"
            },
            {
              name: "抖音微信引流"
            },
            {
              name: "视屏内容提升"
            }
          ]
        },
        {
          imgs: require("../assets/img/campb.png"),
          imgSrc: require("../assets/img/campbs.png"),
          fonts: "好物带货班",
          imga: require("../assets/img/campb.png"),
          idx: 2,
          show: true,
          fontsList: [
            {
              name: "账号定位"
            },
            {
              name: "无人直播技术"
            },
            {
              name: "引流变现"
            },
            {
              name: "多种玩法教学"
            },
            {
              name: "（矩阵、无货源带货、心里测评等）"
            },
            {
              name: "剪映剪辑训练"
            }
          ]
        },
        {
          imgs: require("../assets/img/campc.png"),
          imgSrc: require("../assets/img/campcs.png"),
          fonts: "商户运营服务",
          imga: require("../assets/img/campc.png"),
          idx: 3,
          show: true,
          fontsList: [
            {
              name: "产品定位"
            },
            {
              name: "活动策划"
            },
            {
              name: "爆品分析"
            },
            {
              name: "辅导小店开通"
            },
            {
              name: "短视频热门运营"
            },
            {
              name: "电商运营方案落地"
            },
            {
              name: "社群运营方案落地"
            }
          ]
        }
      ]
    };
  },
  watch: {
    nowIn() {
      const _this = this;
      console.log(_this.isPc);
      if (_this.isPc && _this.nowIn == "0") {
        _this.iptWidth = { width: "25%" };
      } else if (_this.isPc && _this.nowIn != "1||2") {
        _this.iptWidth = { width: "75%" };
      } else {
        _this.iptWidth = { width: "100%" };
      }
    }
  },
  methods: {
    // 留言
    submitIt() {
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
          type: "3",
          name: this.name,
          phone: this.phone,
          comment: this.remarks
        })
          .then(res => {
            console.log(res);
            if (res.data) {
              this.$message({
                offset: "100",
                message: "提交成功，稍后会有相关人员联系您",
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
    //判断弹出框
    changeImg(val) {
      for (let i in this.imgBoxlist) {
        this.imgBoxlist[val].imga = this.imgBoxlist[val].imgSrc;
      }
    },
    backImg(val) {
      for (let i in this.imgBoxlist) {
        this.imgBoxlist[i].imga = this.imgBoxlist[i].imgs;
      }
    },
    showMore(val, idx) {
      for (let i in this.imgBoxlist) {
        if (i == idx) {
          this.imgBoxlist[i].show = !this.imgBoxlist[i].show;
        }
      }
      // this.shows = 1;
      console.log(val);
    },
    idxShow(val) {
      this.popShow = val;
    },
    tosame(val) {
      this.$router.push(val);
    },
    //视频播放获取视频
    videoCanPlay() {
      var duration = this.$refs.video.duration;
    },
    videoPlay() {
      if (this.vcIsPlay) {
        this.$refs.video.pause();
        this.vcIsPlay = false;
      } else {
        this.$refs.video.play();
        this.vcIsPlay = true;
      }
    },
    changeCourse(val) {
      this.course = val;
    }
  },

  created() {},
  mounted() {
    const _this = this;
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
    // console.log(_this.isPc);
    let myVideo = document.getElementById("media");

    myVideo.addEventListener("play", function() {
      _this.vcIsPlay = true;
    });

    myVideo.addEventListener("pause", function() {
      _this.vcIsPlay = false;
    });
  }
};
</script>

<style scoped lang='scss'>
.white {
  width: 1200px;
  margin: 0 auto;
}

.topImg {
  margin-top: 60px;
  height: 220px;
  width: 100%;
  background: url("../assets/img/tiktok.png") top left;
  background-size: 100% 100%;
}

.advantage {
  height: 620px;
  width: 80%;
  margin: 120px auto;
  background: #fff;
  .twoBox {
    display: flex;
    flex-wrap: nowrap;
    justify-self: start;
    margin: 0 auto;
  }

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
  .leftAdv {
    width: 300px;
    height: 450px;
    &:hover {
      div {
        background: #333;
        color: #fff;
        border-bottom: 3px solid #00abf5;
        h3 {
          color: #fff;
        }
      }
    }
    div {
      height: 70px;
      text-align: left;
      padding: 30px 10px;
      color: #999;
      background: #fff;
      position: relative;
      top: -6px;
      h3 {
        margin-top: 0;
        color: #333;
      }
    }
    img {
      height: 70%;
      width: 100%;
    }
  }
}
.advantageb {
  height: auto;
  width: 90%;
  margin: 50px auto;
  .twoBox {
    flex-flow: wrap;
  }
}
.training {
  margin: 60px auto 120px auto;
  .camp {
    display: flex;
    flex-wrap: nowrap;
    .fonts {
      color: #999;
      line-height: 30px;
    }
    div {
      margin: auto;
    }
  }
  .imgBox {
    height: 260px;
    &:first-child {
      border-left: none;
    }
    border-left: 1px solid #999;
    width: 350px;
    text-align: center;
    img {
      width: 140px;
      height: 160px;
    }

    p:last-child {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 37px;
      cursor: pointer;
    }
    .fonts {
      p {
        margin-top: 0;
        margin-bottom: 6px;
      }
    }
  }
  h2 {
    text-align: left;
    color: #333;
    font-size: 26px;
    padding-top: 0;
  }
  h4 {
    color: #999999;
    font-size: 14px;
    text-align: left;
    margin-bottom: 60px;
  }
}
.trainingb {
  width: 100%;
  background: #f8f8f8;
  margin: 0 auto;
  h2 {
    padding-top: 60px;
    padding-left: 5%;
  }
  h4 {
    padding-left: 5%;
  }
  .camp {
    flex-wrap: wrap;
    h4 {
      text-align: center;
      margin-bottom: 20px;
    }
    .imgBox {
      background: #fff;
      border: 0;
      height: 400px;
      border-radius: 10px;
      padding-top: 50px;
      margin-bottom: 20px;
      line-height: 30px;
      width: 46%;
      p {
        width: 60%;
        margin: 0 auto;
      }
      img {
        width: 44px;
        height: 44px;
      }
    }
  }
}
.student {
  background: url("../assets/img/studentBg.png");
  background-size: cover;
  height: 836px;
  width: 100%;
  .content {
    width: 1200px;
    margin: 0 auto;
  }
  h2 {
    text-align: left;
    color: #ebebeb;
    font-size: 26px;
    padding-top: 120px;
  }
  h4 {
    color: #999999;
    font-size: 14px;
    text-align: left;
    margin-bottom: 60px;
  }
  .imgList {
    display: flex;
    img {
      width: 358px;
      height: 330px;
      margin: auto;
    }

    + button {
      width: 130px;
      height: 40px;
      border: 2px solid rgba(255, 255, 255, 1);
      border-radius: 20px;
      background: transparent;
      color: #fff;
      margin: 120px auto 0 auto;
    }
  }
}
.studentb {
  height: 520px;
  h2 {
    padding-top: 60px;
  }
  .content {
    width: 90%;
  }
  .imgList {
    flex-wrap: nowrap;
    img {
      width: 124px;
      height: 126px;
    }
  }
}
.operate {
  height: 628px;
  padding-top: 120px;
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
  .list {
    display: flex;
    flex-wrap: wrap;
    div {
      margin: auto;
      img {
        width: 200px;
        height: 231px;
      }
    }
  }
}
.operateb {
  padding-top: 60px;
  width: 90%;
  height: 720px;
}
.tiktok {
  height: 800px;
  width: 100%;
  background: #999999;
  position: relative;
  &:hover {
    .plus {
      position: relative;
      left: -43%;
      top: -260px;
    }
    /* 产生动画（向外扩散变大）的圆圈  */
    .pulse {
      position: absolute;
      width: 320px;
      height: 320px;
      left: 2px;
      top: 2px;
      border: 2px solid rgba(255, 255, 255, 1);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      z-index: 1;
      opacity: 0;
      -webkit-animation: warn 2s ease-out;
      -moz-animation: warn 2s ease-out;
      animation: warn 2s ease-out;
      -webkit-animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      box-shadow: 1px 1px 30px #fff;
    }
    .pulse1 {
      position: absolute;
      width: 320px;
      height: 320px;
      left: 2px;
      top: 2px;
      border: 6px solid #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      z-index: 1;
      opacity: 0;
      -webkit-animation: warn1 2s ease-out;
      -moz-animation: warn1 2s ease-out;
      animation: warn1 2s ease-out;
      -webkit-animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      box-shadow: 1px 1px 30px #ffffff;
    }
  }
  .play {
    position: absolute;
    top: 310px;
    left: 45%;
    z-index: 999;
    img {
      height: 180px;
      width: 180px;
    }
  }
}
.tiktokb {
  height: 300px;
  .play {
    position: absolute;
    top: 115px;
    left: 45%;
    z-index: 999;
    img {
      height: 60px;
      width: 60px;
    }
  }
}
.team {
  width: 1200px;
  margin: 0 auto;
  height: 460px;
  display: flex;
  flex-wrap: wrap;
  div {
    &:first-child {
      margin-left: 0;
      h2 {
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 72px;
      }
    }
    &:last-child {
      margin-right: 0;
    }
    margin: auto;
  }
}
.fromIn {
  width: 1200px;
  margin: 60px auto;
  h2 {
    margin-bottom: 80px;
    margin-top: 0;
    position: relative;
    &:before {
      position: absolute;
      background: #f8f8f8;
      content: "";
      width: 300px;
      height: 2px;
      top: 50%;
      left: 10%;
    }
    &:after {
      position: absolute;
      background: #f8f8f8;
      width: 300px;
      height: 2px;
      content: "";
      top: 50%;
      right: 10%;
    }
  }
  h3 {
    text-align: left;
    margin-bottom: 30px;
  }
  .textar {
    width: 100%;
    text-align: left;
    label {
      float: left;
    }
  }
  .iptBox {
    margin-bottom: 34px;
    display: flex;
    flex-wrap: wrap;
    div {
      margin: auto;
      text-align: left;
      width: 50%;
      margin-bottom: 10px;
      input {
        width: 85%;
      }
      label {
        margin: auto;
        text-align: left;
      }
    }
  }
  .btnBox {
    clear: both;
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
    clear: both;
    &:hover {
      background: rgba(0, 171, 245, 1);
      border-radius: 20px;
      color: #fff;
      border: 0;
    }
  }
}
@keyframes warn {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.1;
  }

  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.3;
  }

  75% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes warn1 {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.1;
  }

  50% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.3;
  }

  75% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0;
  }
}
</style>

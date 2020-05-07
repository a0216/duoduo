<template>
  <el-container>
    <el-main>
      <div class="topImg">
        <img src="../assets/img/information.png" alt />
      </div>

      <div class="information" v-if="isPc">
        <h2>资讯动态</h2>
        <h4>INFORMATION TRENDS</h4>
        <div class="box-card" shadow="never">
          <div v-for="o in 4" :key="o" class="text article">
            <div class="leftTitle">
              <h3>12</h3>
              <p>5月</p>
            </div>
            <img src="../assets/img/banner.jpg" alt />
            <div class="content">
              <h5>文章标题</h5>
              <p>
                文章内容，默认展示文章前两行信息，超过用“……”表示。文章内容，默认展示文章前两行信息，超过
                用“……”表示。文章内容，默认展示文章前两行信息，超过用“……开发计划扩建符合贷款杀了对方觉得浪费了
              </p>
            </div>
            <div class="rightImg"></div>
            <!-- <img src="../assets/img/toRight.png" alt />
            <img src="../assets/img/toRightb.png" alt />-->
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>

      <div class="information informationb" v-else>
        <h2>资讯动态</h2>
        <h4>INFORMATION TRENDS</h4>
        <div class="box-card" shadow="never">
          <div v-for="o in 4" :key="o" class="text article">
            <div class="leftTitle">
              <h3>12</h3>
              <p>5月</p>
            </div>
            <img src="../assets/img/banner.jpg" alt />
            <div class="content">
              <h5>文章标题</h5>
              <p>
                文章内容，默认展示文章前两行信息，超过用“……”表示。文章内容，默认展示文章前两行信息，超过
                用“……”表示。文章内容，默认展示文章前两行信息，超过用“……开发计划扩建符合贷款杀了对方觉得浪费了
              </p>
            </div>
            <div class="rightImg" v-show="isPc"></div>
            <!-- <img src="../assets/img/toRight.png" alt />
            <img src="../assets/img/toRightb.png" alt />-->
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
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
    console.log(window.location.href);
    store.state.science == "pc" ? (_this.isPc = "true") : (_this.isPc = false);
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
  width: 100%;
  margin: 0 auto;
  .box-card{
    width: 80%;
  margin: 0 auto;

  }
  h2 {
    text-align: left;
    color: #333;
    font-size: 26px;
    margin-top: 120px;
    padding-left: 360px;
  }
  h4 {
    color: #999;
    font-size: 14px;
    text-align: left;
    margin-bottom: 60px;
    padding-left: 360px;
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
  }
  .article {
    height: 194px;
    display: flex;
    padding-left: 15%;
    &:hover {
      background: #f8f8f8;
      .rightImg {
        background: url("../assets/img/toRightb.png");
        background-size: cover;
      }
    }
    .rigth {
      width: 23px;
      height: 42px;
      font-size: 30px;
      line-height: 5;
    }
    .leftTitle {
      width: 100px;
      overflow: hidden;
      h3 {
        text-align: left;
        position: relative;
        font-size: 40px;
        margin: 0;
        top: 32px;
        &:after {
          position: absolute;
          background: red;
          content: "";
          height: 1px;
          top: 35%;
          width: 20px;
          left: 50px;
        }
        + p {
          margin-top: 32px;
        }
      }
      + img {
        width: 200px;
        height: 130px;
        margin-right: 60px;
        margin-top: 32px;
      }
    }
    .rightImg {
      width: 23px;
      height: 42px;
      margin: 75px 0px 75px 100px;
      background: url("../assets/img/toRight.png");
      background-size: cover;
    }
    .content {
      text-align: left;
      width: 700px;
      h5 {
        margin: 42px 0 0 0;
      }
      p {
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
    }
  }
  .el-pagination {
    margin: 120px auto;
  }
}
.informationb {
  h2 {
    padding-left: 30px;
  }
  h4 {
    padding-left: 30px;
  }
  .article {
    padding-left: 30px;
    .leftTitle {
      margin-right: 5px;
      width: 150px;
      h3 {
        &::after {
          background: #fff;
        }
      }
      + img {
        width: 160px;
        height: 104px;
        margin: auto;
      }
    }
    .content {
      padding: 0 10px;
    }
    .rightImg {
      margin: auto;
      width: 0.5rem;
      height: 0.3rem;
    }
  }
}
</style>

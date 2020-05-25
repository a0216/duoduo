<template>
  <el-container>
    <el-main>
      <div class="topImg">
        <!-- <img src="../assets/img/information.png" alt /> -->
      </div>

      <div class="information" v-if="isPc">
        <div class="white">
          <h2>资讯动态</h2>
          <h4>INFORMATION TRENDS</h4>
          <div class="box-card" shadow="never">
            <div v-for="item in lists" :key="item.id" class="text article">
              <div class="leftTitle">
                <h3>{{item.days}}</h3>
                <p>{{item.month}}月</p>
              </div>
              <img :src="item.head_img_url" alt />
              <div class="content">
                <h5>{{item.title}}</h5>
                <p v-html="item.content"></p>
              </div>
              <div class="rightImg"></div>
              <!-- <img src="../assets/img/toRight.png" alt />
              <img src="../assets/img/toRightb.png" alt />-->
            </div>
          </div>
          <el-pagination background layout="prev, pager, next" :total="data.total" :page-size="10"></el-pagination>
        </div>
      </div>

      <div class="information informationb" v-else>
        <h2>资讯动态</h2>
        <h4>INFORMATION TRENDS</h4>
        <div class="box-card" shadow="never">
          <div v-for="item in lists" :key="item.id" class="text article">
            <div class="leftTitle">
              <h3>{{item.month}}月{{item.days}}</h3>
              <p></p>
            </div>
            <img :src="item.head_img_url" alt />
            <div class="content">
              <h5>{{item.title}}</h5>
              <p v-html="item.content"></p>
            </div>
            <div class="rightImg"></div>
            <!-- <img src="../assets/img/toRight.png" alt />
            <img src="../assets/img/toRightb.png" alt />-->
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="data.total" :page-size="10"></el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { post, fetch, get } from "../assets/js/axios";
import store from "@/store";

export default {
  name: "brand",
  props: [""],
  components: {},
  data() {
    return {
      msg: "",
      isPc: "true",
      lists: [],
      data: {}
    };
  },

  methods: {},
  created() {
    fetch("/public/news/list", {})
      .then(res => {
        this.lists = res.data.data;
        this.data = res.data;
        for (let i in this.lists) {
          let date = new Date(this.lists[i].updated_at).valueOf();
          let days = new Date(this.lists[i].updated_at).getDate();
          let month = new Date(this.lists[i].updated_at).getMonth() + 1;
          if (days < 10) {
            days = "0" + days;
          }
          this.lists[i].days = days;
          this.lists[i].month = month;
          this.lists[i].head_img_url =
            store.state.hosts + this.lists[i].head_img_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  margin-top: 60px;
  background: url("../assets/img/information.png") top left;
  background-size: 100% 100%;
}

.information {
  width: 100%;
  margin: 0 auto;
  .white {
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
    .box-card {
      width: 100%;
      margin: 0 auto;
    }
    .article {
      height: 194px;
      display: flex;
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
            background: #00ABF5;
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
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
        }
        p {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 36px;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          height: 60px;
        }
      }
    }
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
      p {
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        height: 60px;
      }
    }
    .rightImg {
      margin: auto;
      width: 0.5rem;
      height: 0.3rem;
    }
  }
}
</style>

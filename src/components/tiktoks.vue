<template>
  <div>
    <div class="top">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">个人</el-menu-item>
        <el-menu-item index="2">网红</el-menu-item>
        <el-menu-item index="3">商业</el-menu-item>
      </el-menu>
    </div>
    <div class="showIs">
      <div class="white">
        <ul v-show="activeIndex=='1'||activeIndex=='2'">
          <li v-for="item in listA" :key="item.did">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="lefts">
                  <div class="headerImg">
                    <img :src="item.head_img" class="imgs" alt />
                    <img v-show="activeIndex=='2'" src="../assets/img/fire.png" class="fire" alt />
                  </div>
                  <div>
                    <p>{{item.name}}</p>
                    <p>{{item.did}}</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="plays">
                  <p>粉丝量:{{item.fans}}万</p>
                </div>
              </el-col>
            </el-row>
          </li>
        </ul>
        <div class="brand" v-show="activeIndex=='3'">
          <div class="friendBox">
            <div v-for="item in listA" :key="item.head_img">
              <img :src="item.head_img" alt />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.top {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  .el-menu-demo {
    width: 20%;
    margin: 80px auto 0 auto;
  }
}
.showIs {
  height: 700px;
  width: 100%;
  background: #f8f8f8;
  .white {
    width: 1200px;
    background: #f8f8f8;
    margin: 0 auto;
    ul {
      padding-top: 60px;
      margin: 0;
    }
    li {
      &:hover {
        box-shadow: 0px 6px 8px 0px rgba(153, 153, 153, 0.24);
        border-radius: 10px;
      }
      margin-top: 16px;
      height: 120px;
      width: 100%;
      border-radius: 10px;
      background: #fff;
      .el-row {
        height: 120px;
        .el-col {
          height: 120px;
        }
      }
      .lefts {
        display: flex;
        justify-content: space-between;
        .headerImg {
          position: relative;
          top: 15px;

          .imgs {
            width: 80px;
            height: 80px;
            border-radius: 100%;
            position: absolute;
            top: 0px;
            left: 50px;
          }
          .fire {
            width: 18px;
            height: 22px;
            position: absolute;
            top: 60px;
            left: 100px;
          }
          + div {
            position: relative;
            left: 50px;
            top: 15px;
          }
        }
      }
      .plays {
        line-height: 90px;
      }
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.brand {
  padding-top: 80px;
}
.friendBox {
  width: 1220px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  div {
    width: 300px;
    height: 200px;
    box-sizing: content-box;
    // border: 1px dashed #000;
    text-align: center;
    img {
      width: 230px;
      height: 150px;
      margin: 20px auto 0 auto;
      &:hover {
        box-shadow: 0px 6px 8px 0px rgba(153, 153, 153, 0.24);
      }
    }
  }
}
</style>


<script>
import { post, fetch } from "../assets/js/axios";
import store from "@/store";

export default {
  name: "tiktoks",
  data() {
    return {
      url: "",
      activeIndex: "1",
      nowIs: "1",
      listA: [],
      listB: []
    };
  },
  created() {
    // /public/news/list
    fetch("/public/infos/list", {
      size: "10",
      page: "1",
      type: 1
    })
      .then(res => {
        console.log(res);
        if (res.code == 200) {
          this.listA = res.data.data;
          for (let i in this.listA) {
            this.listA[i].head_img = store.state.hosts + this.listA[i].head_img;
          }
          // this.lists[i].head_img_url = store.state.hosts+ this.lists[i].head_img_url;
        } else {
          this.$message({
            offset: "100",
            message: "请稍后再试！",
            type: "errot"
          });
        }
      })
      .catch(res => {});
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      fetch("/public/infos/list", {
        size: "10",
        page: "1",
        type: this.activeIndex
      })
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            // if (this.activeIndex == 3) {
            // } else {
              this.listA = res.data.data;
              for (let i in this.listA) {
                this.listA[i].head_img =
                  store.state.hosts + this.listA[i].head_img;
              }
            // }
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
  mounted() {}
};
</script>
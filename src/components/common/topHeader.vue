<template>
  <div class="top">
    <el-header>
      <el-row :gutter="4" class="contain">
        <el-col :span="4" class="hidden-sm-and-down">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content imgList">
            <div class="companyName">
              <img src="../../assets/img/logo.png" alt />
            </div>
          </div>
        </el-col>
        <!-- 右侧下拉框 -->
        <el-col :span="8" class="hidden-md-and-up" :class="{fr:show}">
          <div class="grid-content">
            <div class="block">
              <el-select v-model="value" placeholder="- 首页 -" :change="bindChange">
                <el-option v-for="item in options" :key="item.label" :value="item.value"></el-option>
                <!-- <el-option key="抖音学院" value="抖音学院"></el-option>
                <el-option key="业务布局" value="业务布局"></el-option>
                <el-option key="资讯动态" value="资讯动态"></el-option>
                <el-option key="公司简介" value="公司简介"></el-option>
                <el-option key="联系方式" value="联系方式"></el-option>
                <el-option key="招商合作" value="招商合作"></el-option>-->
              </el-select>
            </div>
          </div>
        </el-col>
        <!-- //列表 -->
        <el-col :span="8" class="hidden-sm-and-down">
          <div class="rightList">
            <el-row :gutter="1">
              <el-col :span="Number(item.spacing)" v-for="item in topList" :key="item.index">
                <div class="grid-content">
                  <!-- <span>-&nbsp;</span> -->
                  <router-link
                    :to="{ path:item.name}"
                    :class="[item.index==nows?'showThis':'']"
                    v-show="item.index!='4'"
                    @click.native="changes(item.index)"
                  >{{item.nameb}}</router-link>
                  <el-select
                    v-model="values"
                    :placeholder="item.nameb"
                    style="background:transparent"
                    v-show="item.index=='4'"
                  >
                    <el-option key="1" value="公司简介"></el-option>
                    <el-option key="2" value="联系方式"></el-option>
                    <el-option key="3" value="招商合作"></el-option>
                  </el-select>
                  <!-- <span>-</span> -->
                  <!-- <router-link href="/" target>-&nbsp;首页&nbsp;-</router-link> -->
                </div>
              </el-col>
              <!-- <el-col :span="4">
                <div class="grid-content">
                  <span>-&nbsp;</span>
                  <router-link :to="{name:'INDEX',params: { now: '1' }}" class>首页</router-link>
                  <span>-</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <router-link :to="{ name: 'TIKTOK', params: { now: '2' }}">抖音学院</router-link>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <el-link href target>品牌推广</el-link>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content">
                  <el-link href target>资讯动态</el-link>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-select v-model="values" placeholder="关于" style="background:transparent">
                    <el-option key="1" value="公司简介"></el-option>
                    <el-option key="2" value="联系方式"></el-option>
                    <el-option key="3" value="招商合作"></el-option>
                  </el-select>
                </div>
              </el-col>-->
              <el-col :span="4" class="hidden-sm-and-down"></el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>
<style lang="scss" scoped>
.top {
  min-height: 80px;
  width: 100%;
  background: #171717;
  font-size: 14px;
  .contain {
    padding-top: 20px;
    color: #999;
  }
}
.showThis {
  color: #fff !important;
  font-size: 14px;
  position: relative;
  &:before {
    position: absolute;
    background: #ccc;
    content: "";
    height: 1px;
    top: 50%;
    width: 6px;
    left: -10px;
  }
  &:after {
    position: absolute;
    background: #ccc;
    content: "";
    height: 1px;
    top: 50%;
    width: 6px;
    right: -10px;
  }
}
.imgList {
  display: flex;
  flex-wrap: nowrap;

  .companyName {
    width: 283px;
    height: 44px;
    margin-left: 18px;
    img {
      width: 283px;
      height: 44px;
    }
  }
}
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.isShow {
  display: none;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  a {
    color: #999;
    text-decoration: none;
  }
}
.row-bg {
  background-color: #f9fafc;
}
.rightList {
  font-size: 14px;
  text-align: center;
  line-height: 36px;
}
</style>
<script>
export default {
  name: "topHeader",
  commopents: [],

  data() {
    return {
      nows: "0",
      topList: [
        {
          name: "/",
          nameb: "首页",
          index: "0",
          spacing: "4"
        },
        {
          name: "tiktok",
          nameb: "抖音学院",
          index: "1",
          spacing: "4"
        },
        {
          name: "brand",
          nameb: "业务布局",
          index: "2",
          spacing: "4"
        },
        {
          name: "information",
          nameb: "资讯动态",
          index: "3",
          spacing: "4"
        },
        {
          name: "about",
          nameb: "关于",
          index: "4",
          spacing: "6",
          list: [
            {
              name: "公司简介",
              indexs: 0
            },
            {
              name: "联系方式",
              indexs: 1
            },
            {
              name: "招商合作",
              indexs: 2
            }
          ]
        }
      ],
      value: "",
      values: "",
      show: "true",
      options: [
        {
          value: "抖音学院",
          label: "抖音学院"
        },
        {
          value: "品牌推广",
          label: "品牌推广"
        },
        {
          value: "资讯动态",
          label: "资讯动态"
        },
        {
          value: "公司简介",
          label: "公司简介"
        },
        {
          value: "联系方式",
          label: "联系方式"
        },
        {
          value: "招商合作",
          label: "招商合作"
        }
      ]
    };
  },
  methods: {
    bindChange(value) {
      console.log(value);
    },
    changes(idx) {
      this.nows = idx;
    }
  },
  mounted() {
    let _this = this;
    console.log(_this.$router.options.routes);
  }
};
</script>
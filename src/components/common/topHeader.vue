<template>
  <div class="top">
    <el-header>
      <el-row :gutter="4">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <!-- 右侧下拉框 -->
        <el-col :span="8" class="hidden-md-and-up">
          <div class="grid-content bg-purple">
            <div class="block">
              <el-cascader v-model="robs" :options="options" @change="handleChange"></el-cascader>
            </div>
          </div>
        </el-col>
        <!-- //列表 -->
        <el-col :span="8" class="hidden-sm-and-down">
          <div class="rightList">
            <el-row :gutter="1">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">哆哆抢客</div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">抖音学院</div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">品牌推广</div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">资讯动态</div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">关于我们</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>
<style lang="scss" scoped>
.top {
  height: 60px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
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
  data() {
    return {
      robs: ["rob"],
      options: [
        {
          value: "rob",
          label: "哆哆抢客"
        },
        {
          value: "school",
          label: "抖音学院"
        },
        {
          value: "extension",
          label: "品牌推广"
        }
        ,
        {
          value: "dynamic",
          label: "资讯动态"
        }
        ,
        {
          value: "about",
          label: "关于我们"
        }
      ]
    };
  },
  methods:{
      handleChange(value) {
        console.log(value);
      }
  },
  mounted() {
    console.log(window);
    //定义变量获取屏幕视口宽度
    var windowWidth = window.screen.availWidth;
    if (windowWidth < 640) {
      // do something
      console.log("<640");
    }
    if (windowWidth >= 640) {
      console.log(">640");

      // do something
    }
  }
};
</script>
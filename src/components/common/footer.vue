<template>
  <div class="foot">
    <div v-if="isPc">
      <div class="footerTop">
        <div class="msgs">
          <h4>业务布局</h4>
          <p>
            <span>电商业务</span>
            <span>自媒体业务</span>
            <span>品牌推广</span>
          </p>
        </div>
        <div class="msgs">
          <h4>公司信息</h4>
          <p>
            <span>公司介绍</span>
            <span>区域招商</span>
            <span>品牌入驻</span>
          </p>
        </div>
        <div class="codes">
          <div>
            <img src="../../assets/img/foota.png" alt />
            <p>扫码下载立即赚</p>
          </div>
          <div>
            <img src="../../assets/img/footb.png" alt />
            <p>哆哆抢客公众号</p>
          </div>
          <div>
            <img src="../../assets/img/footc.png" alt />
            <p>哆哆抢客官网微博</p>
          </div>
        </div>
      </div>
      <div class="address">
        <p>
          <span>备案号：11010502000501号</span>
          <span>联系电话：400-0389-369</span>
          <span>公司地址：郑州市金水区学府广场B座</span>
        </p>
      </div>
    </div>
    <div v-else>
      <div class="footerTopb">
        <div class="msgs">
          <h4>业务布局</h4>
          <p>
            <span>电商业务</span>
            <span>自媒体业务</span>
            <span>品牌推广</span>
          </p>
        </div>
        <div class="msgs">
          <h4>公司信息</h4>
          <p>
            <span>公司介绍</span>
            <span>区域招商</span>
            <span>品牌入驻</span>
          </p>
        </div>
        <div class="codes">
          <div>
            <img src="../../assets/img/foota.png" alt />
            <p>扫码下载立即赚</p>
          </div>
          <div>
            <img src="../../assets/img/footb.png" alt />
            <p>哆哆抢客公众号</p>
          </div>
          <div>
            <img src="../../assets/img/footc.png" alt />
            <p>哆哆抢客官网微博</p>
          </div>
        </div>
      </div>
      <div class="address">
          <p>备案号：11010502000501号</p>
          <p>联系电话：400-0389-369</p>
          <p>公司地址：郑州市金水区学府广场B座</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.foot {
//   height: 364px;
  width: 100%;
  background: #171717;
  .footerTop {
    height: 320px;
    padding: 0 360px;
    margin: 0 auto;
    display: flex;
    .codes {
      display: flex;
      margin-top: 90px;
      div {
        width: 134px;
        margin-right: 30px;
        color: #fff;
        img {
          width: 134px;
          height: 134px;
        }
      }
    }
    .msgs {
        margin: 125px 116px;
      h4 {
        font-size: 26px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 10px;
        text-align: left;
      }
      p {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 10px;
        width: 263px;
        text-align: left;
      }
    }
  }
  .footerTopb {
    // height: 320px;
    padding: 1px 20px;
    margin: 0 auto;
    // display: flex;
    .codes {
      display: flex;
      margin-top: 50px;
      div {
        width: 134px;
        margin-right: 30px;
        color: #fff;
        img {
          width: 134px;
          height: 134px;
        }
      }
    }
    .msgs {
      //   margin: 125px 116px;
      margin-right: 116px;
      margin-top: 50px;
      h4 {
        font-size: 26px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 10px;
        text-align: left;
      }
      p {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 10px;
        width: 263px;
        text-align: left;
      }
    }
  }
  .address {
    height: 44px;
    background: #fff;
    width: 100%;
    p {
      height: 15px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 46px;
      &:last-child {
       margin-bottom: 15px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "foot",
  props: ["isPc"],
  data() {
    return {};
  },
  methods: {
    bindChange(value) {
      console.log(value);
    }
  },
  mounted() {
    let _this = this;
    console.log(window);
    //定义变量获取屏幕视口宽度
    var windowWidth = window.screen.availWidth;
    if (windowWidth < 640) {
      // do something
      console.log("<640");
      console.log(_this);
      _this.show = "false";
    }
    if (windowWidth >= 640) {
      console.log(">640");

      // do something
    }
  }
};
</script>
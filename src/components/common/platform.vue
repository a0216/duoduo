<template>
  <div class="platform" v-if="isPc">
    <h2>平台优势</h2>
    <h4>PLATFORM ADVANTAGE</h4>
    <div class="platBox">
      <div class="platFromBox">
        <img src="../../assets/img/plata.png" alt />
        <p>丰富的商品库资源</p>
      </div>
      <div class="platFromBox">
        <img src="../../assets/img/platb.png" alt />
        <p>金牌团队解决售后问题</p>
      </div>
      <div class="platFromBox">
        <img src="../../assets/img/platc.png" alt />
        <p>知名讲师分享运营专业知识</p>
      </div>
      <div class="platFromBox">
        <img src="../../assets/img/platd.png" alt />
        <p>高质量商品推送图文</p>
      </div>
    </div>
  </div>
  <div class="platformb" v-else>
    <h2>平台优势</h2>
    <h4>PLATFORM ADVANTAGE</h4>
    <div class="platBox">
      <div class="platFromBox">
        <img src="../../assets/img/plata.png" alt />
        <p>丰富的商品库资源</p>
      </div>
      <div class="platFromBox">
        <img src="../../assets/img/platb.png" alt />
        <p>金牌团队解决售后问题</p>
      </div>
      <div class="platFromBox">
        <img src="../../assets/img/platc.png" alt />
        <p>知名讲师分享运营专业知识</p>
      </div>
      <div class="platFromBox">
        <img src="../../assets/img/platd.png" alt />
        <p>高质量商品推送图文</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.platform {
  height: 627px;
  background: url("../../assets/img/platfrom.png");
  background-size: cover;
  text-align: left;
  h2 {
    padding: 120px 0 0 360px;
    color: #fff;
    margin: 0;
  }
  h4 {
    padding-left: 360px;
    color: #999999;
    font-size: 14px;
    margin-bottom: 60px;
  }
  .platBox {
    display: flex;
    flex-wrap: nowrap;
    justify-self: start;
    width: 50%;
    margin: 0 auto;
    .platFromBox {
      width: 254px;
      height: 280px;
      background: rgba(0, 171, 245, 1);
      opacity: 0.6;
      border-radius: 10px;
      text-align: center;
      color: #fff;
      margin-right: 60px;
      img {
        width: 90px;
        height: 90px;
        margin: 68px 77px 36px 77px;
      }
    }
  }
}
.platformb {
  background: url("../../assets/img/platMobile.png");
  background-size: cover;
  text-align: left;
  color: #fff;
  padding-left: 30px;
  // padding-left: 30px;
  h2 {
    padding-top: 30px;
  }
  .platBox {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 0 30px;
    .platFromBox {
      width: 177px;
      height: 200px;
      background: rgba(0, 171, 245, 1);
      opacity: 0.6;
      border-radius: 10px;
      margin-right: 30px;
      margin-bottom: 30px;
      text-align: center;
      color: #fff;
      img {
        width: 90px;
        height: 90px;
        margin: 20px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "platform",
  data() {
    return {};
  },
  props: ["isPc"]
};
</script>
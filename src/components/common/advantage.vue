<template>
  <div class="advantage" v-if="isPc">
    <div class="white">
    <h2>核心优势</h2>
    <h4>CORE STRENGTHS</h4>
    <div class="twoBox">
      <div class="leftAdv anmtion" >
        <img src="../../assets/img/advantageb.png" alt />
        <div>
          <h3>全民抢客</h3>
          <p>
            独创抢客体系，让每位消费者都能参与购物分享体验，在聊天中找到更
            好的商品，也能够在聊天中赚取佣金。
          </p>
        </div>
      </div>
      <div class="leftAdv">
        <img src="../../assets/img/advantagea.png" alt />
        <div>
          <h3>精挑严选</h3>
          <p>严格把控商品质量，与源头厂家合作，去掉中间商差价，”低价质优”</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="advantageb" v-else>
    <h2>核心优势</h2>
    <h4>CORE STRENGTHS</h4>
    <div class="twoBox">
      <div class="leftAdv">
        <img src="../../assets/img/advantageb.png" alt />
        <div>
          <h3>全民抢客</h3>
          <p>
            独创抢客体系，让每位消费者都能参与购物分享体验，在聊天中找到更
            好的商品，也能够在聊天中赚取佣金。
          </p>
        </div>
      </div>
      <div class="leftAdv">
        <img src="../../assets/img/advantagea.png" alt />
        <div>
          <h3>精挑严选</h3>
          <p>严格把控商品质量，与源头厂家合作，去掉中间商差价，”低价质优”</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.advantage {
  height: 820px;
  padding-top: 100px;
  background: url("../../assets/img/advbg.png");
  background-size: cover;
  .white{
    width: 1200px;
    margin:0 auto;
    .twoBox {
    display: flex;
    flex-wrap: nowrap;
    justify-self: start;
    margin: 0 auto;
    width: 100%;
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
    width: 580px;
    height: 572px;
    border: 1px solid #fff;
    margin-right: 40px;
    box-shadow: 0px 14px 20px 0px rgba(102, 102, 102, 0.3);
    border-radius: 10px;
    &:hover {
      img {
        height: 437px;
        width: 580px;
      }
      div {
        height: 135px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        h3 {
          border-bottom: 1px solid #00abf5;
          padding-bottom: 10px;
        }
      }
    }
    div {
      height: 91px;
      text-align: left;
      padding: 10px 50px 0 50px;
      color: #999;
      background: #fff;
      border-radius: 10px;
      h3 {
        margin-top: 0;
        color: #333;
      }
    }
    img {
      height: 471px;
        width: 580px;

    }
  }
  }
  
}

.advantageb {
  padding-left: 30px;
  h2,
  h4 {
    text-align: left;
  }
  .leftAdv {
    text-align: center;
    margin-bottom: 20px;
    div {
      text-align: left;
      p {
        width: 85%;
      }
    }
    img {
      margin: 0 30px 0 0;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ["isPc"]
};
</script>
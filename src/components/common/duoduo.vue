<template>
  <div class="article" v-if="isPc">
    <div class="white">
      <div class="leftArt">
        <h2>哆哆抢客</h2>
        <h4>DUO DUO QIANG KE</h4>
        <P>“哆哆抢客”，是一个导购分享性社交电商平台，通过将社交与新零售融合并加以创新，开辟了一种全新的社交、购物模式。公司的创始人建立哆哆抢客的初衷是希望通过向用户提供一个透明的电商平台，让人人都能参与进商品销售的各个环节，让每一位用户都能成为任意商品的代言人，通过自己对商品的真实使用感受，为大家分享各种好物的同时又能赚取佣金。</P>
        <button @click="toSmae()">查看更多</button>
      </div>
      <div class="rightImg">
        <img src="../../assets/img/duoduo.png" alt />
      </div>
    </div>
  </div>
  <div class="articleb" v-else>
    <div class="leftArt">
      <h2>哆哆抢客</h2>
      <h4>DUO DUO QIANG KE</h4>
      <P>“哆哆抢客”，是一个导购分享性社交电商平台，通过将社交与新零售融合并加以创新，开辟了一种全新的社交、购物模式。公司的创始人建立哆哆抢客的初衷是希望通过向用户提供一个透明的电商平台，让人人都能参与进商品销售的各个环节，让每一位用户都能成为任意商品的代言人，通过自己对商品的真实使用感受，为大家分享各种好物的同时又能赚取佣金。</P>
      <button>查看更多</button>
    </div>
    <div class="rightImg">
      <img src="../../assets/img/duoduo.png" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article {
  height: 920px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .white {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    .leftArt {
      text-align: left;
      p {
        width: 535px;
        height: 196px;
        color: #171717;
        letter-spacing: 2px;
        line-height: 0.25rem;
        font-size: 16px;
        letter-spacing: 4px;
      }
      h2 {
        text-align: left;
        color: #333;
        font-size: 26px;
        margin-top: 100px;
      }
      h4 {
        color: #999;
        font-size: 14px;
        text-align: left;
        margin-bottom: 60px;
      }
      button {
        margin-top: 50px;
        width: 130px;
        height: 40px;
        background: transparent;
        border-radius: 20px;
        border: 2px solid #999;
        font-size: 14px;
        color: #999;
      }
    }
    .rightImg {
      margin: auto;
      margin-right: 0;
      margin-top: 100px;
      img {
        width: 500px;
        height: 600px;
        margin-top: 150px;
      }
    }
  }
}
.articleb {
  background: #fff;
  .leftArt {
    width: 30%;
    text-align: left;
    padding-left: 30px;
    padding-top: 30px;
    p {
      width: 435px;
      height: 196px;
      color: #171717;
      letter-spacing: 2px;
      line-height: 0.25rem;
      font-size: 16px;
      letter-spacing: 4px;
    }
    h2 {
      text-align: left;
      color: #333;
      font-size: 26px;
    }
    h4 {
      color: #999;
      font-size: 14px;
      text-align: left;
      margin-bottom: 60px;
    }
    button {
      width: 130px;
      height: 40px;
      background: transparent;
      border-radius: 20px;
      border: 2px solid #999;
      font-size: 14px;
      color: #999;
    }
  }
  .rightImg {
    width: 50%;
    img {
      width: 500px;
      height: 600px;
      margin-top: 50px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ["isPc"],
  methods:{
    toSmae(){
      this.$router.push("commpany")
    }
  }
};
</script>
<template>
  <div class="suspension" v-if="isPc&&!coope">
    <ul>
      <li class="inThis" >
        <img src="../../assets/img/susas.png" alt />
        <p>在线咨询</p>
        <button >x</button>
      </li>
      <li class v-if="idx">
        <img src="../../assets/img/susb.png" alt />
        <p>售后服务</p>
      </li>
       <li class v-else>
        <img src="../../assets/img/susb.png" alt />
        <p>立即报名</p>
      </li>
      <li>
        <img src="../../assets/img/susc.png" alt />
        <p>留言</p>
      </li>
    </ul>
  </div>
 
  <div class="suspension suspensionb" v-else-if="isPc&&coope">
    <ul>
      <li :class="[nowShow=='0'?'inThis':'']" @click="toCoop(0)">
        <p>品牌入驻</p>
      </li>
      <li :class="[nowShow=='1'?'inThis':'']" @click="toCoop(1)">
        <p>城市合伙人</p>
      </li>
      <li @click="toCoop(2)" :class="[nowShow=='2'?'inThis':'']">
        <p>区域服务商</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.suspension {
  position: fixed;
  right: 60px;
  top: 700px;
  z-index: 999;
  background: #fff;
  width: 160px;
  height: 180px;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.4);
  border-radius: 5px;
  text-align: left;
  img {
    width: 16px;
    height: 16px;
    margin: 23px 13px 0 20px;
    display: inline-block;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .inthis {
    background: #00abf5;
    color: #fff;
    position: relative;
    button {
      background: transparent;
      border: none;
      width: 14px;
      height: 14px;
      color: #fff;
      font-size: 14px;
      position: absolute;
      top: 0.21rem;
      right: 0.2rem;
    }
  }
  li {
    height: 60px;
    color: #999;
    display: flex;
    &:first-child {
      background: #00abf5;
      color: #fff;
      position: relative;
      button {
        background: transparent;
        border: none;
        width: 14px;
        height: 14px;
        color: #fff;
        font-size: 14px;
        position: absolute;
        top: 0.21rem;
        right: 0.2rem;
      }
    }
    p {
      display: inline-block;
      line-height: 1.9;
    }
  }
  .black {
    background: #f8f8f8;
  }
}
.suspensionb {
  right: 360px;
  top: 200px;
  li {
    cursor: pointer;
    p {
      text-align: center;
      width: 100%;
    }
  }
  .inThis {
    background: #00abf5;
    color: #fff;
    position: relative;
  }
}
</style>
<script>
export default {
  data() {
    return {
      nowShow: "1"
    };
  },
  props: ["isPc", "coope","idx"],
  methods: {
    toCoop: function(val) {
      // console.log(val);
      this.nowShow = val;
      this.$emit("nowShow", val);
    }
  }
};
</script>
<template>
  <div class="suspension" v-if="isPc&&!coope&&popShows!='4'">
    <ul>
      <li @click="changes(0)" :class="{ 'inThis': idxShow=='0'||idxShow=='5'}">
        <img src="../../assets/img/susas.png" alt v-if="idxShow=='0'||idxShow=='5'" />
        <img src="../../assets/img/susasb.png" alt v-else />
        <p>在线咨询</p>
        <!-- <button @click.stop="changes(5)" v-if="idxShow=='0'||idxShow=='5'">x</button> -->
        <!-- <button class="black" @click.stop="changes(5)" v-else>x</button> -->
      </li>

      <li @click="changes(1)" :class="[idxShow=='1'?'inThis':'']">
        <img src="../../assets/img/susb.png" alt v-if="idxShow!='1'" />
        <img src="../../assets/img/susba.png" alt v-else />
        <p>立即报名</p>
      </li>
      <li @click="changes(2)" :class="[idxShow=='2'?'inThis':'']">
        <img src="../../assets/img/susc.png" alt v-if="idxShow!='2'" />
        <img src="../../assets/img/suscb.png" alt v-else />
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
  top: 500px;
  z-index: 999;
  background: #fff;
  width: 160px;
  height: 180px;
  box-shadow: 0px 12px 20px 0px rgba(153, 153, 153, 0.4);
  border-radius: 5px;
  text-align: left;
  .black {
    color: #999;
  }
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
  .inThis {
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
    cursor: pointer;
    height: 60px;
    color: #999;
    display: flex;

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
  width: 200px;
  height: 210px;
  right: 360px;
  top: 200px;
  border-radius: 5px;
  overflow: hidden;
  li {
    height: 70px;
    cursor: pointer;
    p {
      text-align: center;
      width: 100%;
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 0.7;
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
      nowShow: "0",
    };
  },
  props: ["isPc", "coope", "idx", "popShows", "idxShow"],

  methods: {
    toCoop: function(val) {
      this.nowShow = val;
      this.$emit("nowShow", val);
    },
    changes(val) {
      // console.log(this.popShows);
      // console.log(this.idxShows);
      // if (this.popShows == "5") {
      //   this.idxShow = "7";
      // }
      // this.idxShow = val;
      this.$emit("idxShow", val);
    }
  },
  mounted() {}
};
</script>
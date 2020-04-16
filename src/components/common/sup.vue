<template>
  <div class="suspension" v-show="isPc">
    <ul>
      <li>
        <img src="../../assets/img/susa.png" alt />
        <p>在线咨询</p>
        <button>x</button>
      </li>
      <li>
        <img src="../../assets/img/susb.png" alt />
        <p>售后服务</p>
      </li>
      <li>
        <img src="../../assets/img/susc.png" alt />
        <p>留言</p>
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
    &:nth-child(2) {
      background: #f8f8f8;
    }
    p {
      display: inline-block;
      line-height: 1.9;
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
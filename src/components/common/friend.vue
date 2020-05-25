<template>
  <div class="friend" v-if="isPc">
    <div class="white">
      <h2>合作伙伴</h2>
      <h4>COOPERATIVE PARTNER</h4>
      <div class="friendBox">
        <div>
          <img src="../../assets/img/frienda.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friendb.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friendc.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friendd.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friende.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friendf.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friendg.png" alt />
        </div>
        <div>
          <img src="../../assets/img/friendh.png" alt />
        </div>
        <button id="lookMore"  @click="toSame()">申请入驻</button>
      </div>
    </div>
  </div>
  <div class="firendb" v-else>
    <h2>合作伙伴</h2>
    <h4>COOPERATIVE PARTNER</h4>
    <div class="friendBox">
      <div>
        <img src="../../assets/img/frienda.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friendb.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friendc.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friendd.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friende.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friendf.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friendg.png" alt />
      </div>
      <div>
        <img src="../../assets/img/friendh.png" alt />
      </div>
      <button id="lookMore" @click="toSame()">申请入驻</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.friend {
  height: 907px;
  background: #fff;
  text-align: left;
  .white {
    width: 1200px;
    margin:  0 auto;
    h4 {
      color: #999999;
    }
    h2 {
      margin: 0;
      padding-top: 120px;
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
            width: 290px;
            height: 190px;
            margin: 0;
          }
        }
      }
      button {
        outline: none;
        width: 130px;
        height: 40px;
        border: 2px solid rgba(153, 153, 153, 1);
        border-radius: 20px;
        margin: 120px auto;
        color: #999;
        background: #fff;
      }
    }
  }
}
.firendb {
  background: #fff;
  text-align: left;
  padding-left: 30px;
  h2 {
    margin: 0;
    padding-top: 30px;
  }
  .friendBox {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 310px;
    div {
      width: 150px;
      height: 100px;
      box-sizing: content-box;
      text-align: center;
      img {
        width: 140px;
        height: 100px;
      }
    }
    button {
      width: 120px;
      height: 35px;
      line-height: 1;
      border: 2px solid rgba(153, 153, 153, 1);
      border-radius: 20px;
      margin: 30px auto;
      color: #999;
      background: #fff;
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
    toSame(){
      this.$router.push("cooperation")
    }
    // cooperation
  }
};
</script>
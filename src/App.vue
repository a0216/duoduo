<template>
  <div id="app">
    <topHeader :nowPath='nowPath' @pathCh='pathCh'></topHeader>
    <router-view />
    <foot :isPc="isPc"></foot>
  </div>
</template>

<script>
import "../src/assets/css/resize.css";
import topHeader from "./components/common/topHeader";
import foot from "./components/common/footer";
import store from "@/store";
export default {
  name: "App",
  components: { topHeader, foot },
  data() {
    return {
      isPc:true,
      nowPath:'/'
    };
  },
 
  methods:{
    pathCh(path){
           return this.nowPath=path;
           console.log(this.nowPath)
    }
  },
  mounted() {
    const _this = this;
    store.state.science == "pc" ? (_this.isPc = true) : (_this.isPc = false);
        console.log(this.$route.path);
        console.log(_this);
    console.log(this.$route.name);
  }
};
</script>

<style>
input {
  border: 0 !important;
}
.el-cascader-menu {
  min-width: 1.3rem;
}
.el-input__inner {
  text-align: center;
  background: transparent;
  color: #999;
}

.el-cascader-node {
  border-bottom: 1px solid #e5e5e5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-main {
  padding: 0;
  margin: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
ul,
li {
  list-style: none;
}
</style>

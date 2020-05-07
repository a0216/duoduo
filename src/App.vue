<template>
  <div id="app">
    <topHeader :nowPath='nowPath' @pathCh='pathCh' :isIdx='isIdx'></topHeader>
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
      nowPath:'/',
      isIdx:true,
      
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
      if(_this.$route.path=='/'){
      _this.isIdx=true
    }else{
      _this.isIdx=false

    }
  }
};
</script>

<style>
button{
  cursor: pointer;
}
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
.el-card{
  border: 0;
}
ul,
li {
  list-style: none;
}
</style>

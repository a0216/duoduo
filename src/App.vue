<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 input {
  border: 0 !important;
}
.el-cascader-menu{
  min-width: 1.3rem;
}
.el-cascader-node{
  border-bottom: 1px solid #e5e5e5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
</style>

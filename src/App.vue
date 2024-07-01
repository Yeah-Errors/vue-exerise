<template>
  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<style>
body {
  background-color: antiquewhite;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

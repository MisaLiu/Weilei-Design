<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <TopHeader />
      </el-header>

      <router-view />
      <el-footer>
        <!-- TODO -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import TopHeader from './components/header.vue'

  export default {
    components: {
      TopHeader
    },
    methods: {}
  }
</script>

<style scoped>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
  }
</style>
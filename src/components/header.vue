<template>
  <div class="header">
    <span class="title">Weilei Design</span>
    <el-menu class="menu" mode="horizontal" :default-active="active" active-text-color="#00ff00"
      background-color="#ffffff00" router>
      <el-menu-item index="/" class="item">首页</el-menu-item>
      <el-menu-item index="/norm" class="item">设计准则</el-menu-item>
      <el-menu-item index="/story" class="item">背后故事</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  function changeActive() {
    console.log("changeActive")
  }
  export default {
    data: function () {
      return {
        active: ""
      };
    },
    mounted: function () {
      // console.log("mounted: ", this.$route.path);
      // this.active = this.$route.path;
      this.changeActive(this.$route.path)
    },
    watch: {
      $route(to, from) {
        // console.log("watch: ", to.path);
        // this.active = to.path;
        this.changeActive(to.path)
      }
    },
    methods: {
      changeActive: function (path) {
        if (path.substring(0, 5) == "/norm") {
          this.active = "/norm";
        } else {
          this.active = path;
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(#ff0000, #ffffff);
  }

  @media only screen and (max-width: 768px) {
    .header {
      flex-direction: column;
      height: 100px !important;
      justify-content: center;
    }
  }

  .title {
    color: #0000ff;
    text-shadow: 5px 5px 5px #494545;
    font-size: 20px;
  }

  .menu {
    background-color: rgba(255, 255, 255, 0.0) !important;

  }

  .item {
    color: #0000ff !important;
    text-shadow: 5px 5px 5px #494545;
    /* background-color:rgba(255,255,255,0.0) !important; */
  }
</style>
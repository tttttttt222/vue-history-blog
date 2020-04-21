<template>
  <el-container>
    <el-backtop>
      <div
        style="{  height: 100%;  width: 100%;  background-color: #f2f5f6;  box-shadow: 0 0 6px rgba(0,0,0, .12);  text-align: center;  line-height: 40px;  color: #1989fa;}">
        UP
      </div>
    </el-backtop>
    <el-header>
      <div id="header-background">
        <div id="header-menu" v-show="headerShow"></div>
        <el-menu :class="menuStyle" mode="horizontal" :router="true" :default-active="activePath" text-color="#000"
                 active-text-color="#4183C4">
          <el-menu-item index="/historyAdd">记录</el-menu-item>
          <el-menu-item index="/historyBrief">时间轴</el-menu-item>
          <el-menu-item index="/welcome">HOME</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        activePath: '/welcome',
        menuStyle: 'el-menu-style',
        headerShow: true,
      };
    },
    methods: {
      handleScroll() {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 100) {
          this.menuStyle = 'el-menu-style';
          this.headerShow = false;
        } else if (scroll <= 0) {
          this.menuStyle = 'el-menu-style2';
          this.headerShow = true;
        }
      },
    },
    created() {

    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="less" scoped>

  .el-menu-style {
    position: fixed;
    z-index: 999;
    width: 100%;
    box-shadow: 0px 12px 8px -12px #000;
    border-radius: 0px;
  }

  .el-menu-style2 {
    position: absolute;
    width: 100%;
    box-shadow: 0px 12px 8px -12px #000;
    border-radius: 0px;
  }

  .el-menu-item {
    margin: 0px 10px;
    float: right;
  }

  .el-main {
    margin-top: 150px;
  }

  #header-menu {
    height: 30px;
    width: 100%;
    background-color: #795da3;
    opacity: 0
  }

  #header-background {
    height: 200px;
    background: url('../assets/logo.png') center center no-repeat;
    align-content: center;
  }

  .el-header {
    margin: 0px;
    padding: 0px;
  }
</style>

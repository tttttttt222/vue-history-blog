<template>
  <el-container>
    <el-backtop>
      <div
        style="{  height: 100%;  width: 100%;  background-color: #f2f5f6;  box-shadow: 0 0 6px rgba(0,0,0, .12);  text-align: center;  line-height: 40px;  color: #1989fa;}">
        UP
      </div>
    </el-backtop>
    <el-header>
      <!--      <div id="header-background">-->
      <el-menu class="el-menu-demo" mode="horizontal" :router="true" :default-active="activePath" background-color="#CCC" text-color="#000" active-text-color="#4183C4">
        <el-menu-item index="/welcome">HOME</el-menu-item>
        <el-menu-item index="/historyBrief">时间轴</el-menu-item>
        <el-menu-item index="/historyAdd">新增</el-menu-item>
      </el-menu>
      <!--      </div>-->
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
      };
    },
    methods: {},
    created() {

    }
  }
</script>

<style lang="less" scoped>
  .el-menu {
    horiz-align: center;
    align-content: center;
    alignment: center;
    align-self: center;
    align-items: center;
  }

  #header-background {
    height: 300px;
    background-color: #3a8ee6;
    align-content: center;
  }

  .el-header {
    margin: 0px;
    padding: 0px;
  }
</style>

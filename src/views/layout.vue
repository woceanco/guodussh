<template>
  <div style="height: 800px">
    <el-container class="containter">
      <el-header class="header">
        <sapn>Vue Test</sapn>
        Header</el-header
      >
      <el-container class="body">
        <el-row class="tac">
          <el-col :span="12">
            <div class="mb-2" @click="menuCollapse">|||</div>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :unique-opened="true"
              :collapse="isCollapse"
              :router="true"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><fold /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item index="/welcome">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
                <el-sub-menu index="1-3">
                  <template #title>item four</template>
                  <el-menu-item index="1-3-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <el-icon><icon-menu /></el-icon>
                  <span>Navigator Two</span>
                </template>
                <el-sub-menu index="2-1">
                  <template #title>item four</template>
                  <el-menu-item index="6">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Tickets } from "@element-plus/icons-vue/dist/types";
export default {
  data() {
    return {
      test: "stt",
      isCollapse: false,
    };
  },
  created() {
    this.getTestMenuList();
  },
  methods: {
    getTestMenuList() {
      const data = this.$http.get("../../public/data/menu.json");
    },
    menuCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.el-aside {
  width: 200px;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container {
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-radio-group {
  float: left;
}

.mb-2 {
  background-color: #e9eef3;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}
</style>

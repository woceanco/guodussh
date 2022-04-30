<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/layout' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-row :gutter="20">
      <el-col span="8">
        <el-input>
          <template #append>
            <el-icon><serch /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col span="4">
        <el-button type="primary"></el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>
<style scoped>
.el-breadcrumb {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
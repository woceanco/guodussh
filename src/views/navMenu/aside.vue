<template>
  <template v-if="item.childen && item.childen.length === 0">
    <el-menu-item :key="item.id" :index="item.index"
      ><el-icon><edit /></el-icon> <span>{{ item.name }}</span>
    </el-menu-item>
  </template>

  <el-sub-menu v-else :index="item.index" :key="item.id">
    <template #title>
      <el-icon><edit /></el-icon>
      <span>{{ item.name }}</span>
    </template>
    <template v-for="child in item.childen">
      <a-side
        v-if="child.childen && child.childen.length > 0"
        :key="child.id"
        :item="child"
        :index="child.index"
      ></a-side>
      <el-menu-item v-else :index="child.index" :key="child.id"
        ><template #title>
          <el-icon><fold /></el-icon>
          <span>{{ child.name }}</span>
        </template></el-menu-item
      >
    </template>
  </el-sub-menu>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

export default {
  name: "aSide",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

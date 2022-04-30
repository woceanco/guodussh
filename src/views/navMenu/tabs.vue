<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/layout' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <el-input placeholder="请输入查询内容">
          <template #append>
            <el-icon :size="32"><search /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="userlist" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="姓名" prop="username"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="电话" prop="mobile"></el-table-column>
      <el-table-column label="角色" prop="role"></el-table-column>
      <el-table-column label="状态" prop="state">
        <template v-slot="scope">
          <el-switch v-model="scope.row.state"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { th } from "_element-plus@2.1.9@element-plus/lib/locale";
export default {
  data() {
    return {
      queryParam: {
        query: "",
        pagenum: 1,
        pagesize: 5,
      },
      userlist: [
        {
          id: 24,
          username: "test",
          email: "11324398@qq.com",
          mobile: "18723654328",
          role: "chaoji",
          state: true,
        },
      ],
      total: 0,
    };
  },
  created() {
    //this.getUserList();
  },
  methods: {
    getUserList() {
      const { data: res } = this.$http.get("user", { param: this.queryParam });
      if (res.meta.status == 200) {
        this.userlist = res.data.users;
        this.total = res.data.total;
      }
    },
    change(e) {
      this.$forceUpdate();
    },
  },
};
</script>
<style scoped>
.el-breadcrumb {
  height: 20px;
  margin-bottom: 15px;
}

.el-card {
  width: 100%;
  height: auto;
}

.el-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>

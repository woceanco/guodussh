<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/layout' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-row :gutter="20" class="el-row">
      <el-col :span="8">
        <el-input
          v-model="queryParam.query"
          placeholder="请输入查询内容"
          clearable
        >
          <template #append>
            <el-button @click="getUserList"
              ><el-icon><search /></el-icon
            ></el-button>
          </template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="dialogFormVisible = true"
          >添加用户</el-button
        >
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
          <el-switch
            v-model="scope.row.state"
            @change="userState(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="primary" v-model="scope.row.id" size="small"
            ><el-icon><edit /></el-icon
          ></el-button>
          <el-button type="danger" v-model="scope.row.id" size="small"
            ><el-icon><delete /></el-icon
          ></el-button>
          <el-button type="warning" v-model="scope.row.id" size="small"
            ><el-icon><setting /></el-icon
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="queryParam.pagenum"
      v-model:page-size="queryParam.pagesize"
      :page-sizes="[5, 10, 20]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog v-model="dialogFormVisible" title="Add User" width="40%">
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item
          label="username"
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addUser">添加</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      ArrowRight: ArrowRight,
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
      total: 50,
      input: "aaaaa",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
      },
      formLabelWidth: "140px",
      rules: {
        //name: [{ validator: validateName, trigger: "blur" }],
        //pass: [{ validator: validatePass, trigger: "blur" }],
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在1到10个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    //this.getUserList();
  },
  methods: {
    getUserList() {
      const { data: res } = (this as any).$http.get("user", {
        param: (this as any).queryParam,
      });
      if (res.meta.status == 200) {
        (this as any).userlist = res.data.users;
        (this as any).total = res.data.total;
      }
    },
    pageSizeChange(newSize: number) {
      //this.queryParam.pagesize=newSize;
      //this.getUserList();
      console.log(newSize);
    },
    pageNumChange(newPage: number) {
      //this.queryParam.pagenum=newPage;
      //this.getUserList();
      console.log(newPage);
    },
    userState(userInfo: object) {
      //const { data: res } = this.$http.put(`users/{userInfo.id}/state/{userInfo.state}`);
      //   if () {
      //     return this.$message.error("error");
      //   };
    },
    addUser() {
      //this.$refs.formRef.validate(valid => {} )
      console.log("add");
      (this as any).dialogFormVisible = false;
      //this.getUserList();
    },
    change(e: string) {
      (this as any).$forceUpdate();
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

.el-pagination {
  margin-top: 15px;
}
</style>

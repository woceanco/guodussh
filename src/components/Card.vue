<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/layout' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <slot name="query"></slot>
    <slot name="tables"></slot>
    <slot name="pagehelper"></slot>
    <slot name="dialogs"></slot>
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

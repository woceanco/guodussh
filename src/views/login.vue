<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="login-form"
    >
      <h4>登录</h4>
      <el-form-item prop="name">
        <el-input
          type="text"
          v-model="ruleForm.name"
          placeholder="账号"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          prefix-icon="el-icon-lock"
          autocomplete="off"
          placeholder="密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <a :href="forgate">忘记密码</a>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      console.log("name");
      console.log(value);
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        forgate: "#",
      },
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
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在6到15个字符之间",
            trigger: "blur",
          },
        ],
      },
      herf: "#",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //const { data: result } = this.$http.post("login", this.ruleForm);
          //if (result.status !== 200) return console.log("login fial");
          //window.sessionStorage.setItem(result.data.token);
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/images/mobile_wallpaper.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login-form {
  width: 400px;
  margin: 150px auto;
  background-color: rgba(90, 187, 211, 0.7);
  padding: 30px;
  border-radius: 20px;
}
.el-form-item {
  width: 85%;
}
.el-button {
  width: 100%;
}
</style>

<template>
  <div style="height: 800px">
    <el-container class="containter">
      <el-container class="body">
        <el-header class="header">header</el-header>
        <el-container>
          <el-aside :width="isCollapse ? '60px' : '200px'"
            ><div class="mb-2" @click="menuCollapse">|||</div>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :unique-opened="true"
              :collapse="isCollapse"
              :router="true"
              :default-active="activePath"
            >
              <a-side
                v-for="menu in menuList"
                :item="menu"
                :key="menu.id"
              ></a-side>
            </el-menu>
          </el-aside>
          <el-main>
            <Tabs />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Tabs from "@/views/navMenu/tabs.vue";
import aSide from "@/views/navMenu/aside.vue";

// interface IDate {
//   test: string;
//   isCollapse: boolean;
//   activePath: string;
//   menuList: Array<Map<string, object>>;
// }
export default {
  data() {
    return {
      test: "stt",
      isCollapse: false,
      activePath: "",
      menuList: [],
    };
  },
  components: {
    Tabs,
    aSide,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.getTestMenuList();
  },
  methods: {
    async getTestMenuList() {
      const { data: res } = await this.$http.get("/menu.json");
      //console.log(res);
      this.menuList = res.data;
      this.activePath = window.sessionStorage.getItem("");
    },
    menuCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setNavStatus() {
      window.sessionStorage.setItem("", "");
    },
  },
};
</script>

<style scoped>
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
  height: 100%;
  background-color: #ffffff;
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

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-radio-group {
  float: left;
}

.mb-2 {
  border-right: solid 1px #d0d7e0;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
}

.el-main {
  line-height: 0px;
}
</style>

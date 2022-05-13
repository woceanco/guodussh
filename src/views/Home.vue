<template>
  <div style="height: 800px">
    <el-container class="containter">
      <el-container class="body">
        <el-aside :width="isCollapse ? '60px' : '200px'"
          ><div class="mb-2">
            <span class="demonstration">TEST PRO</span>
          </div>

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
        <el-container>
          <el-header>
            <span @click="menuCollapse" :style="center">
              <el-icon :size="30"><fold /></el-icon>
            </span>
            <Header />
          </el-header>
          <el-main>
            <Tabs />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Tabs from "@/components/main/tabs.vue";
import aSide from "@/components/navMenu/aside.vue";
import Header from "@/components/navMenu/header.vue";

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
      url: "../assets/images/guoducard.png",
    };
  },
  components: {
    Tabs,
    aSide,
    Header,
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
  background-color: #fff;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.el-header {
  border-bottom: #e9eef3 solid 1px;
  line-height: 80px;
}

.el-aside {
  height: 100%;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
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

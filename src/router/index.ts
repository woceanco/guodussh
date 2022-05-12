import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    //component: HomeView,
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    //component: HomeView,
    component: () => import("../views/Home.vue"),
    //redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../components/main/Welcome.vue"),
      },
      {
        path: "/list",
        name: "list",
        component: () => import("../components/main/Card.vue"),
      },
      {
        path: "/tabs",
        name: "tabs",
        component: () => import("../components/main/tabs.vue"),
      },
    ],
  },
  {
    path: "/layout",
    name: "layout",
    //redirect: "/layout",
    component: () => import("../views/layout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//导航
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   if (to.path === "/login") return next();
//   const tokenStr = window.sessionStorage.getItem("token");
//   if (!tokenStr) return next("/login");
//   next();
// });

export default router;

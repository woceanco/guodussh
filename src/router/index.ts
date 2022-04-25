import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import("../views/layout.vue"),
  },
  {
    path: "/login",
    name: "login",
    //component: HomeView,
    component: () => import("../views/login.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    //component: HomeView,
    component: () => import("../views/layout.vue"),
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../views/Welcome.vue"),
      },
    ],
  },
  {
    path: "/home/home",
    name: "home",
    component: () => import("../views/navMenu/home.vue"),
  },
  {
    path: "/aside",
    name: "aside",
    component: () => import("../views/navMenu/aside.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Welcome.vue"),
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

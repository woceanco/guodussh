import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/login",
    name: "login",
    //component: HomeView,
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "layout",
    //component: HomeView,
    component: () => import("../views/layout.vue"),
  },
  {
    path: "/home/home",
    name: "home",
    component: () => import("../views/navMenu/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

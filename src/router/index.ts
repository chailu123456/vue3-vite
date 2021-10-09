import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
    meta: {
      hidden: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about.vue"),
  },
  {
    path: "/look",
    name: "Look",
    component: () => import("../views/look.jsx"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "levandat Tech Solution" },
    },
    {
      path: "/minecraft/mcserverstatus",
      name: "mcserverstatus",
      component: () => import("../views/MCServerStatus.vue"),
      meta: { title: "Minecraft Server Status" },
    },
    {
      path: "/riot/loltool",
      name: "loltool",
      component: () => import("../views/LOLTool.vue"),
      meta: { title: "League of Legends Tool" },
    },
    {
      path: "/minecraft/rgbtextgenerator",
      name: "rgbtextgenerator",
      component: () => import("../views/RGBGenerator.vue"),
      meta: { title: "RGB Text Generator" },
    },
    {
      path: "/youtube/videodislike",
      name: "videodislike",
      component: () => import("../views/ReturnDislike.vue"),
      meta: { title: "Get Video Dislike Count" },
    },
  ],
});

export default router;

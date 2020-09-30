import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // eslint-disable-next-line
    component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard")
  },
  {
    path: "/button",
    name: "Button",
    component: () => import(/* webpackChunkName: "button" */ "@/views/Button")
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "button" */ "@/views/404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

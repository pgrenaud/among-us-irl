import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

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
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/button",
    name: "Button",
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/Button.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

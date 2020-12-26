import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createaccount",
    name: "Createaccount",
    component: () =>
      import(/* webpackChunkName: "createaccount" */ "../views/Createaccount.vue")
  },
  {
    path: "/Login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

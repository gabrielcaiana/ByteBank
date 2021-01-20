import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import http from "@/http";
import store from "@/store";

Vue.use(VueRouter);
Vue.prototype.$http = http;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.public && !store.state.token) {
    return next({ path: "/" });
  } else {
    next();
  }
});

export default router;

import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import Error from "./views/Error.vue";
    
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
        path: "/404",
        redirect: "/error"
    },
    {
        path: "/error",
        component: Error,
        alias: "404"
    }
];

const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";
=======
import { createRouter } from "vue-router";
>>>>>>> a586e2f3ee82402d1097d58b11a83387030659f7
import HomeView from "../views/HomeView.vue";
import Login from "@/components/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
<<<<<<< HEAD
  history: createWebHashHistory(),
=======
//  history: createWebHistory(process.env.BASE_URL),
>>>>>>> a586e2f3ee82402d1097d58b11a83387030659f7
  routes,
});

export default router;

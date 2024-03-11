import { createRouter, createWebHashHistory } from "vue-router";
import Todo from "../views/Todo.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  //env ${process.env.VUE_APP_TITLE}
  document.title = ` Vuetify Todo - ${to.name}`;
  next();
});

export default router;

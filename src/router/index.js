import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () =>
  import(/* webpackChunkName: "setup" */ "@/components/Home.vue");
const Add = () => import(/* webpackChunkName: "base" */ "@/components/Add.vue");
const Edit = () =>
  import(/* webpackChunkName: "base" */ "@/components/Edit.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
    meta: {
      title: "Add",
    },
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
    meta: {
      title: "Edit",
    },
  },
];
const router = new VueRouter({
  routes,
});

export default router;

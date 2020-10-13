import { ApiGameExtensions } from '@/api/games/types';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [{
  path: "/",
  name: "home",
  component: () => import("@/views/home.vue"),
}, {
  path: "/library/:guid",
  name: 'library',
  component: () => import("@/views/library.vue"),
  props: true,
  children: [{
    path: "cards",
    name: `library-cards`,
    component: () => import("@/views/library/cards.vue"),
    props: true
  }, {
    path: "plugins",
    name: `library-plugins`,
    component: () => import("@/views/library/plugins.vue"),
    props: true
  }, {
    path: "folders",
    name: `library-folders`,
    component: () => import("@/views/library/folders.vue"),
    props: true
  }]
}, {
  path: "/settings",
  name: "settings",
  component: () => import("@/views/settings.vue"),
}, {
  path: "/tasks",
  name: "tasks",
  component: () => import("@/views/tasks.vue"),
}];

export const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

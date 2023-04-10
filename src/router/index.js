import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   component: () => import("../views/Select.vue"),
    // },
    {
      path: "/selectheight",
      component: () => import("../views/SelectHeight.vue"),
    },
    {
      // path: "/student-detail",
      path: "/",
      component: () => import("../views/student-detail/index.vue"),
    },
  ],
})

export default router

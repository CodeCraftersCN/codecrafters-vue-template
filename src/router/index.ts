import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/sample",
    name: "sample",
    component: () => import("@/components/sample-component/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((_from, _to, _next) => {
  // do something here
})

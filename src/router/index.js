import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: 'todo'
  // },
  // на gh-pages вылетает 404 при обновлении страницы с урлом !== "/"
  {
    // path: '/todo',
    path: '/',
    name: 'Todo',
    component: () => import('../views/Todo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

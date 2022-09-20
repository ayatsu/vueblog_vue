import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Blogs from '../views/Blogs.vue'
import Time from '../views/Time.vue'
import Login from '../views/Login.vue'
import Edit from '../views/BlogEditBymmjj.vue'
import  BlogDetail from '../views/BlogDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'base',
    redirect: { name: 'Login' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/time',
    name: 'Time',
    component: Time,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blogs/add',
    name: 'Add',
    component: Edit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      requireAuth: true
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

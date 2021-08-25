import Vue from 'vue'
import VueRouter from 'vue-router'


const E404 = () => import('@/views/error/E404')
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Shop = () => import('@/views/shop/Shop')
const Profile = () => import('@/views/profile/Profile')


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    component: E404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

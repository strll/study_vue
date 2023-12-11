import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Emp from '@/views/Emp.vue'
import Dept from '@/views/Dept.vue'
import Admin from '@/views/Admin.vue'
import Cate from '@/views/Cate.vue'
import Food from '@/views/Food.vue'
import User from '@/views/content/User.vue'
import Address from '@/views/content/Address.vue'
import Order from '@/views/content/Order.vue'
import Cart from '@/views/content/Cart.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/emp',
        name: 'Emp',
        component: Emp
      },
      {
        path: '/dept',
        name: 'Dept',
        component: Dept
      },
      {
        path: '/cate',
        name: 'Cate',
        component: Cate
      },
      {
        path: '/food',
        name: 'Food',
        component: Food
      },
      {
        path: '/user',
        name: 'User',
        component: User,
      },
      {
        path: '/address',
        name: 'Address',
        component: Address
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/admin',
        name: 'Admin',
        component: Admin
      }
    ]
  },
  //() => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

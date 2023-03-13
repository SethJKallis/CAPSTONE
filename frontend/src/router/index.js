import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'
import SignInSignup from '../views/SignInSignUp.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleProductView from '../views/SingleProduct.vue'
import UserProfile from '../views/UserProfileView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/about',
    name:'about',
    component:AboutView
  },
  {
    path: '/admin',
    name: 'admin',
    component:AdminView
  },
  {
    path:'/userSign',
    name:'sign',
    component:SignInSignup
  },
  {
    path:'/contact',
    name:'contact',
    component:ContactView
  },
  {
    path:'/products',
    name:'products',
    component:ProductsView
  },
  {
    path:'/products/category/:id',
    name:'productsCategory',
    component:ProductsView
  },
  {
    path:'/products/:id',
    name: 'product',
    component:SingleProductView
  },
  {
    path: '/user',
    name: 'user',
    component:UserProfile
  },
  {
    path:'/user/cart',
    name:'cart',
    component:CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

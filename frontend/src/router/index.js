import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'
import SignInSignup from '../views/SignInSignUp.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleProductView from '../views/SingleProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path:'/products/:id',
    name: 'product',
    component:SingleProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

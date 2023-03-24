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
// import store from '@/store'

const userLoggedIn = JSON.parse(localStorage.getItem('user'));
let user = userLoggedIn == null || userLoggedIn == undefined ? null : userLoggedIn;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path:'/about',
    name:'about',
    component:AboutView,
  },
  {
    path: '/admin',
    beforeEnter(){
      if(user == null){
        router.push({name:'login'})
      } else return
    },
    name: 'admin',
    component:AdminView
  },
  {
    path:'/login',
    name:'login',
    component:SignInSignup
  },
  {
    path:'/contact',
    beforeEnter(){
      if(user == null){
        router.push({name:'login'})
      } else return
    },
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
    path:'/product',
    beforeEnter(){
      if(user == null){
        router.push({name:'login'})
      } else return
    },
    name: 'product',
    component:SingleProductView
  },
  {
    path: '/user',
    beforeEnter(){
      if(user == null){
        router.push({name:'login'})
      } else return
    },
    name: 'user',
    component:UserProfile
  },
  {
    path:'/user/cart',
    beforeEnter(){
      if(user == null){
        router.push({name:'login'})
      } else return
    },
    name:'cart',
    component:CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

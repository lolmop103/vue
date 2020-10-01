import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlainMessagesView from '../views/PlainMessagesView.vue'
import FiredatabaseMessagesView from '../views/FiredatabaseMessagesView.vue'
import FirestoreMessagesView from '../views/FirestoreMessagesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plain-messages',
    name: 'PlainMessages',
    component: PlainMessagesView
  },
  {
    path: '/firedatabase-messages',
    name: 'FiredatabaseMessages',
    component: FiredatabaseMessagesView
  },
  {
    path: '/firestore-messages',
    name: 'FirestoreMessages',
    component: FirestoreMessagesView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

//a test change

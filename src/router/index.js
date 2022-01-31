import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Plans from '../views/Plans.vue'
import Details from '../views/Details.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

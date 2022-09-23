import { def } from '@vue/shared'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../Views/Home'
import About from '../Views/About'

const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

export default router

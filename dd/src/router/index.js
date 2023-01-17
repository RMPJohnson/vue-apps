import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from  '@/views/About'
import Contact from "@/views/Contact";
import Directory from "@/views/Directory";
import Marketplace from "@/views/Marketplace";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/directory',
    name: 'directory',
    component: Directory,
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: Marketplace,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

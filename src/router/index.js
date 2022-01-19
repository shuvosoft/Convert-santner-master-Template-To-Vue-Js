import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home'
import about from '../views/pages/About'
import service from '../views/pages/Service'
import portfolio from '../views/pages/Portfolio'
import blog from '../views/pages/Blog'
import single_blog from '../views/pages/Single_blog'
import portfolio_details from '../views/pages/Portfolio_details'
import elements_pages from '../views/pages/Elements_pages'
import contact from '../views/pages/Contract'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/service',
    name: 'service',
    component: service
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/single_blog',
    name: 'single_blog',
    component: single_blog
  },
  {
    path: '/portfolio_details',
    name: 'portfolio_details',
    component: portfolio_details
  },
  {
    path: '/elements_pages',
    name: 'elements_pages',
    component: elements_pages
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

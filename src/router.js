import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CookBook from './views/Cookbook';
import CookList from './views/CookList';
import Index from './views/Index';
import CookDetail from './views/CookDetail';
import Promote from  './views/Promote';
import Login from './views/Login';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/cookbook',
      name: 'cookbook',
      component:CookBook
    },
    {
      path:'/cookielist/:id',
      name:'cookielist',
      component:CookList
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    
    {
      path:'/cookdetail/:id',
      name:'cookdetail',
      component:CookDetail
    },
    {
      path:'/promote',
      name:'promote',
      component:Promote
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

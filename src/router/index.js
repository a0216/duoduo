import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import tiktok from '@/components/tiktok'
import brand from '@/components/brand'
import information from '@/components/information'
import about from '@/components/about'
import commpany from '@/components/commpany'
import contact from '@/components/contact'
import cooperation from '@/components/cooperation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tiktok',
      name: 'tiktok',
      component: tiktok
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/commpany',
      name: 'commpany',
      component: commpany
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
    ,
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    }
   
  ]
})

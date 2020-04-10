import Vue from 'vue'
import Router from 'vue-router'
import INDEX from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'INDEX',
      component: INDEX
    }
  ]
})

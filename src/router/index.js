import Vue from 'vue'
import Router from 'vue-router'
import 'assets/css/reset.css'
import 'assets/css/border.css'
import 'assets/css/iconfont/iconfont.css'
import Index from '@/pages/index'
import City from '@/pages/city'
import Detail from '@/pages/detail'
import List from '@/pages/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: 'list',
      name: 'List',
      component: List
    }
  ]
})

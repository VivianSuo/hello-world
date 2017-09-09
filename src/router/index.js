import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/list/goods'
import Sellers from '@/components/list/sellers'
import Ratings from '@/components/list/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
})

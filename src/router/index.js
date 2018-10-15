import Vue from 'vue'
import Router from 'vue-router'
import first from '../page/first/first'
import second from '../page/second/second'
import third from '../page/third/third'
import fourth from '../page/fourth/fourth'
import fourth1 from '../page/fourth/fourth1'
import fourth2 from '../page/fourth/fourth2'

Vue.use(Router)

export default new Router({
  mode:'history', //去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/third',
      name: 'third',
      component: third
    },
    {
      path: '/fourth',
      name: 'fourth',
      component: fourth
    },
    {
      path: '/fourth1',
      name: 'fourth1',
      component: fourth1
    },
    {
      path: '/fourth2',
      name: 'fourth2',
      component: fourth2
    }
  ]
})

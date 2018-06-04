import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import notFound from '@/components/notFound'
import busiList from '@/components/business/busiList'
import orderList from '@/components/order/orderList'
import costList from '@/components/cost/costList'
import allotLog from '@/components/data/allotLog'
import statement from '@/components/data/statement'
import firstBarList from '@/components/firstBar/firstBarList'
import busiHallFront from '@/components/busiHallFront/busiHall'
import orderListFront from '@/components/orderListFront/orderList'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                // page1
                {
                    path: '/busiList',
                    component: busiList,
                    name: 'busiList'
                },
                // page2
                {
                    path: '/orderList',
                    component: orderList,
                    name: 'orderList'
                },
                // page3
                {
                    path: '/costList',
                    component: costList,
                    name: 'costList'
                },
                // page4
                {
                    path: '/allotLog',
                    component: allotLog,
                    name: 'allotLog'
                },
                // page5
                {
                    path: '/statement',
                    component: statement,
                    name: 'statement'
                },
                // page6
                {
                    path: '/firstBarList',
                    component: firstBarList,
                    name: 'firstBarList'
                },
                // page7
                {
                    path: '/busiHallFront',
                    component: busiHallFront,
                    name: 'busiHallFront'
                },
                // page7
                {
                    path: '/orderListFront',
                    component: orderListFront,
                    name: 'orderListFront'
                },
                // 404
                {
                    path: '/notFound',
                    component: notFound,
                    name: 'notFound'
                }
            ]
        },
        {
            path: '*',
            redirect: { path: '/notFound' }
        }
    ]
})
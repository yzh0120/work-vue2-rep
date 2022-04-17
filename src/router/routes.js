let layout = () => import(/* webpackChunkName: "layout" */"@/layout/index.vue")
let blank = () => import("@/views/blank.vue")//二级菜单专属


import {status} from "./modules/status.js"
const routes = [{
    path: '/',
    redirect: '/home',
    component: layout,
    children: [{
        path: 'home',
        name: 'home',
        component: () => import('../views/realHome.vue')
      }, {
        path: 'eidtGuarantee/:id',
        name: 'eidtGuarantee',
        component: () => import('../views/1-steps.vue')
      }, {
        path: 'myGuarantee',
        name: 'myGuarantee',
        component: () => import('../views/2-myGuarantee.vue')
      }, {
        path: 'checkGuarantee',
        name: 'checkGuarantee',
        component: () => import('../views/3-checkGuarantee.vue')
      }, {
        path: 'settlementOfClaims',
        name: 'settlementOfClaims',
        component: () => import('../views/4-settlementOfClaims.vue')
      }, {
        path: 'info',
        name: 'info',
        component: () => import('../views/5-info.vue')
      }

    ]
  },
  ...status
]

export default routes

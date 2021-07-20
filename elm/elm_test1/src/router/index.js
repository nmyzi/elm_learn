import Vue from 'vue'
import Router from 'vue-router'
import header_style2 from '@/components/header2'
import city from '@/page/city'
import home1 from '@/page/home1'
import App from '@/App'
import find from '@/page/find'
import miste from '@/page/miste'
import order from '@/page/order'
import profile from '@/page/profile'
import bottom from '@/components/bottom'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:App
    },{ 
        path:'/city',
        component:city
        },{
          path:'/header2',
          component:header_style2
        },{
          path:'/home1',
          component:home1
        },{
          path:'/find',
          component:find
        },{
          path:'/miste',
          component:miste
        },{
          path:'/order',
          component:order
        },{
          path:'/profile',
          component:profile
        },{
          path:'/bottom',
          component:bottom
        }
      
    
  ]
})

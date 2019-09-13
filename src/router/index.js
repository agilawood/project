import Vue from 'vue'
import Router from 'vue-router'
// import 'fullpage.js/vendors/scrolloverflow'
// import VueFullPage from 'vue-fullpage.js'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import userLogin from '@/components/userLogin'
import home from '@/components/logistics/home'
import content from '@/components/logistics/content'
import search from '@/components/logistics/search'
import help from '@/components/logistics/help'
import Repair from '@/components/logistics/Repair'
import mineprofile from '@/components/logistics/mineprofile'
import mineDo from '@/components/logistics/mineDo'
import mineRepair from '@/components/logistics/mineRepair'
import minedetail from '@/components/logistics/minedetail'
import mineMessage from '@/components/logistics/mineMessage'
import topLead from '@/components/first/topLead'
import newstop from '@/components/news/newstop'
import news1 from '@/components/news/news1'
import news2 from '@/components/news/news2'
import news3 from '@/components/news/news3'
import news4 from '@/components/news/news4'
import news5 from '@/components/news/news5'
import news6 from '@/components/news/news6'
import news7 from '@/components/news/news7'
import news8 from '@/components/news/news8'
import news9 from '@/components/news/news9'
import news from '@/components/news/news'
import proposal1 from '@/components/proposal/proposal1'
import proposal from '@/components/proposal/proposal'
import Container from '@/components/commend/Container'
import Greening from '@/components/commend/Greening'
import Diet from '@/components/commend/Diet'
import Manager from '@/components/commend/Manager'
import Repair1 from '@/components/commend/Repair1'
import Sgreening from '@/components/commend/Sgreening'
import Sdiet from '@/components/commend/Sdiet'
import Smanager from '@/components/commend/Smanager'
import Srepair from '@/components/commend/Srepair'

import headimg from '@/components/find/headimg'
import you from '@/components/find/you'
import phone from '@/components/find/phone'
import ques from '@/components/find/ques'
import hea from '@/components/find/hea'
import younext from '@/components/find/younext'
import phonenext from '@/components/find/phonenext'
import enterpassword from '@/components/find/enterpassword'
import enterpassword2 from '@/components/find/enterpassword2'
import finish from '@/components/find/finish'
Vue.use(Router)
// Vue.use(VueFullPage)

export default new Router({
  routes: [
    { path: '/', component: login },
    { path: '/userLogin', component: userLogin },
    { path: '/register', component: register },
    { path: '/logistics/home',
      component: home,
      children: [
        {name: content, path: '/logistics/content', component: content},
        {name: search, path: '/logistics/search', component: search},
        {name: help, path: '/logistics/help', component: help},
        { name: Repair,
          path: '/logistics/Repair',
          component: Repair,
          children: [
            {name: 'mineRepair', path: '/logistics/mineRepair', component: mineRepair},
            {name: 'mineDo', path: '/logistics/mineDo', component: mineDo},
            {name: 'mineprofile', path: '/logistics/mineprofile', component: mineprofile},
            {name: 'minedetail', path: '/logistics/minedetail', component: minedetail},
            {name: 'mineMessage', path: '/logistics/mineMessage', component: mineMessage}
          ]
        }
      ]
    },
    { path: '/first/topLead',
      name: 'topLead',
      component: topLead
    },
    {
      path: '/news/newstop',
      name: 'newstop',
      component: newstop,
      children: [{path: '/news/news', name: 'news', component: news},
        {path: '/news/news1', name: 'news1', component: news1},
        {path: '/news/news2', name: 'news2', component: news2},
        {path: '/news/news3', name: 'news3', component: news3},
        {path: '/news/news4', name: 'news4', component: news4},
        {path: '/news/news5', name: 'news5', component: news5},
        {path: '/news/news6', name: 'news6', component: news6},
        {path: '/news/news7', name: 'news7', component: news7},
        {path: '/news/news8', name: 'news8', component: news8},
        {path: '/news/news9', name: 'news9', component: news9}]
    },
    {
      path: '/proposal/proposal1',
      name: 'proposal1',
      component: proposal1
    },
    {
      path: '/proposal/proposal',
      name: 'proposal',
      component: proposal

    },
    {
      name: 'Container',
      path: '/commend',
      component: Container
    },
    {
      name: 'Greening',
      path: '/commend/Greening',
      component: Greening
    },
    {
      name: 'Diet',
      path: '/commend/Diet',
      component: Diet
    },
    {
      name: 'Manager',
      path: '/commend/Manager',
      component: Manager
    },
    {
      name: 'Repair1',
      path: '/commend/Repair1',
      component: Repair1
    },
    {
      name: 'Sgreening',
      path: '/commend/Sgreening',
      component: Sgreening
    },
    {
      name: 'Sdiet',
      path: '/commend/Sdiet',
      component: Sdiet
    },
    {
      name: 'Smanager',
      path: '/commend/Smanager',
      component: Smanager
    },
    {
      name: 'Srepair',
      path: '/commend/Srepair',
      component: Srepair
    },
    {
      path: '/find/headimg',
      name: 'headimg',
      component: headimg,
      children: [
        {path: '/find/hea', name: 'hea', component: hea},
        {path: '/find/you', name: 'you', component: you},
        {path: '/find/phone', name: 'phone', component: phone},
        {path: '/find/ques', name: 'ques', component: ques},
        {path: '/find/younext', name: 'younext', component: younext},
        {path: '/find/phonenext', name: 'phonenext', component: phonenext},
        {path: '/find/enterpassword', name: 'enterpassword', component: enterpassword},
        {path: '/find/enterpassword2', name: 'enterpassword2', component: enterpassword2},
        {path: '/find/finish', name: 'finish', component: finish}
      ]
    }
  ]
})

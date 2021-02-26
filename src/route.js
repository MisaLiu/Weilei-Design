import home from './view/home.vue'
import norm from './view/norm/norm.vue'
import principle from './view/norm/principle.vue'
import Router from 'vue-router'

const router = new Router({
  routes: [{
      path: "/",
      component: home
    },
    {
      path: "/norm",
      component: norm,
      children: [{
        path: "principle",
        component: principle
      }]

    },
  ]

})

export default router;
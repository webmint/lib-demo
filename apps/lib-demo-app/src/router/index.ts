import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimpleJsView from '../views/SimpleJsView.vue'
import SimpleTsView from '../views/SimpleTsView.vue'
import CombinationView from '../views/CombinationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/simple-js',
      name: 'simpleJs',
      component: SimpleJsView
    },
    {
      path: '/simple-ts',
      name: 'simpleTs',
      component: SimpleTsView
    },
    {
      path: '/combination',
      name: 'combination',
      component: CombinationView
    },
    {
      path: '/multy-source',
        name: 'multySource',
        component: () => import('../views/MultySourceView.vue')
    },
    {
      path: '/vue-lib',
        name: 'vueLib',
        component: () => import('../views/VueLibView.vue')
    }
  ]
})

export default router

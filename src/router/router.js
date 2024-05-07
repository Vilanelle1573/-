import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/App.vue'
import TimerView from '../views/Timer.vue';
import ScheduleView from '../views/Schedule.vue';
import MineView from '../views/Mine.vue';
import AboutView from '../views/About.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/timer',
      name: 'timer',
      component: TimerView
    }, 
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/App.vue'
import TimerView from '../views/Timer.vue';
import ScheduleView from '../views/Schedule.vue';
import MineView from '../views/Mine.vue';
import AboutView from '../views/About.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TimerView from '../views/Timer.vue';
import ScheduleView from '../views/Schedule.vue';
import MineView from '../views/Mine.vue';
import AboutView from '../views/About.vue';

const routes = [
  { path: '/timer', component: TimerView },
  { path: '/schedule', component: ScheduleView },
  { path: '/mine', component: MineView },
  { path: '/about', component: AboutView }
];
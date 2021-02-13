import Vue from 'vue';
import VueRouter from 'vue-router';
import Movies from '../views/Movies.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import { globalAuthGuard } from '../guards/authGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
    meta: { authRequired: true },
  },
  {
    path: '/',
    redirect: '/movies',
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestRequired: true },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(globalAuthGuard);
export default router;

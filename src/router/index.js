import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ '../views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/about.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () =>
        import(/* webpackChunkName: "error" */ '../views/error.vue'),
    },
    {path: '*', redirect: '/error'},
  ],
})

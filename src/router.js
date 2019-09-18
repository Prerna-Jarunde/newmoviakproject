import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/homePage.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',

    component: () =>
      import ('./views/homePage.vue'),
  }, ],
});
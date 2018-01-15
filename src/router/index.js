import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import MyWorks from '@/pages/MyWorks';
import AboutMe from '@/pages/AboutMe';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyWorks',
      component: MyWorks,
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe,
    },
  ],
});

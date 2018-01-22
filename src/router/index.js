// We import Vue, the Vue/Bootstrap cross-implementation, and the vue-router dynamic router.
// We also import two web pages we created.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import MyWorks from '@/pages/MyWorks';
import AboutMe from '@/pages/AboutMe';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// We run Vue.use() on the Vue components we imported.
Vue.use(BootstrapVue);
Vue.use(Router);

// We then make and export a Router object which provides the links to our web pages.
// We give each page object within the routes array a path (the link the page is at),
// a name (what we call our web page when using interactions such as <router-link>),
// and a component (which refers to the name we give our web page when exporting it).
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

require('./bootstrap');
import App from './App.vue'
import Home from './pages/index.vue'
import About from './pages/about.vue'
import Contact from './pages/contact.vue'
import Price from './pages/price.vue'
import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router'
import Alpine from 'alpinejs';
import 'tw-elements';
window.Alpine = Alpine;
Alpine.start();

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component : Contact},
  { path: '/prices', component : Price}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0, behavior : "smooth"}
  }
})

const app = createApp(App)
app.use(router) 
app.mount(document.body)
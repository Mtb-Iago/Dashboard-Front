import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ProductsComponent from './pages/Products/ProductsComponent'
import ClientsComponent from './pages/Clients/ClientsComponent'

Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/products', name: 'products', component: ProductsComponent },
  { path: '/clients', name: 'clients', component: ClientsComponent }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

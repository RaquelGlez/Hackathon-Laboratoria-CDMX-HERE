import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Login_M from './components/Login_M.vue'
import Formulario from './components/Formulario.vue'
// import Asistencia from './components/Asistencia.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Formulario
    }
  ]
})

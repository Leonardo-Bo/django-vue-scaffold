import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import axios from 'axios'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
// import '@/assets/styles/main.scss'

// import Toast from 'mosha-vue-toastify'
// import 'mosha-vue-toastify/dist/style.css'

const pinia = createPinia()

// createApp(App).use(pinia).use(Toast).use(router, axios).mount('#app')
createApp(App).use(pinia).use(router, axios).mount('#app')

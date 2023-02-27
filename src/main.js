import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '@/pages/landingPage'

const paths = [
    {path: '/', component: landingPage}
]

const router = createRouter({
    routes: paths,
    history: createWebHistory()
})

createApp(App)
.use(router)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '@/pages/landingPage'
import submitPage from '@/pages/submitPage'
import { MotionPlugin } from '@vueuse/motion'
const paths = [
    {path: '/', component: landingPage},
    {path: '/submit', component: submitPage},
]

const router = createRouter({
    routes: paths,
    history: createWebHistory()
})

createApp(App)
.use(MotionPlugin, {
    directives: {
        'pop-bottom':{
            initial: {
                scale: 0,
                opacity: .5,
                y: 100,
            }
        }
    },
    visible:{
        scale: 1,
        opacity: 1,
        y: 0,
    }
})
.use(router)
.mount('#app')

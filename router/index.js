import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requireStaff) && store.state.user.isStaff === 'no') {
//         next('/')
//     } else {
//         next()
//     }
// })

export default router

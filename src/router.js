import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Top from './components/top/Default.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: Home,
            top: Top,
        },
    },
    {
        path: '/login',
        name: 'Login',
        components: {
            default: () => import('./Login.vue'),
            top: Top,
        },
    },
    {
        path: '/signup',
        name: 'Signup',
        components: {
            default: () => import('./SignUp.vue'),
            top: Top,
        },
    },
    {
        path: '/hello',
        name: 'Hello',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import(/* webpackChunkName: "about" */ './Hello.vue'),
            top: () =>
                import(
                    /* webpackChunkName: "about" */ './components/top/Hello.vue'
                ),
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

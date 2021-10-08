import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
        },
    },
    {
        path: '/signin',
        name: 'sign in',
        components: {
            default: () => import('./SignIn.vue'),
        },
    },
    {
        path: '/signup',
        name: 'sign up',
        components: {
            default: () => import('./SignUp.vue'),
        },
    },
    {
        path: '/hello',
        name: 'hello',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import(/* webpackChunkName: "about" */ './Hello.vue'),
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

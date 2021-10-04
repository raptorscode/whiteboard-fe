import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Top from '../top/Default.vue'
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
        path: '/hello',
        name: 'Hello',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "about" */ '../components/Hello.vue'
                ),
            top: () =>
                import(/* webpackChunkName: "about" */ '../top/Hello.vue'),
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

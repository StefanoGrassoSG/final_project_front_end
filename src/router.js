import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/register',
            name: 'register',
            //component: RegisterPage
        },
        {
            path: '/login',
            name: 'login',
           // component: LoginPage
        },
        {
           // path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
        }
    ]
});

export { router };
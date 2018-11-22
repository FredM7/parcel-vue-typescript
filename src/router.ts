import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/about',
            name: 'about',
            //Route level code-splitting generates a separate chunk which is lazy-loading...
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})

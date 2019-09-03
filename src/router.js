import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/city/:id',
            name: 'city',

            component: () =>
                import ( /* webpackChunkName: "about" */ './views/City.vue')

        }, {
            path: '/about',
            name: 'about',

            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ],
    linkActiveClass: 'my-active'
})
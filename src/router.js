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
                import('./views/City.vue')


        },

        {
            path: '/cart',
            name: 'cart',

            component: () =>
                import( /* webpackChunkName: "about" */ './views/Cart.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () =>

                import('./views/About.vue')

        }, {
            path: '/msite',
            name: 'msite',

            component: () =>
                import ('./views/Msite.vue')
        }, {
            path: '/food',
            name: 'food',

            component: () =>
                import ('./views/Food.vue')

        },
        {
            path: '/search',
            name: 'search',

            component: () =>


                import('./views/Search.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue'),
        },
        {
            path: '/profile/info',
            name: 'info',
            component: () => import('./components/profile/Info.vue')
        }

    ],
    linkActiveClass: 'my-active'
})
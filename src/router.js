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
        },
        {
            path: '/profile/info/setusername',
            name: 'setusername',
            component: () => import('./components/profile/SetUserName.vue')
        },
        {
            path: '/profile/info/address',
            name: 'address',
            component: () => import('./components/profile/Address.vue')
        },
        {
            path: '/profile/info/address/add',
            name: 'addaddress',
            component: () => import('./components/profile/AddAddress.vue')
        },
        {
            path: '/profile/info/resetpwd',
            name: 'resetpwd',
            component: () => import('./components/profile/ResetPwd.vue')
        },
        {
            path: '/profile/balance',
            name: 'balance',
            component: () => import('./components/profile/Balance.vue')
        },
        {
            path: '/profile/points',
            name: 'points',
            component: () => import('./components/profile/Points.vue')
        }

    ],
    linkActiveClass: 'my-active',
})
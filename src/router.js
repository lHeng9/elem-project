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
        path: '/description',
        name: 'description',


        component: () =>
            import( /* webpackChunkName: "about" */ './views/ShowDescription.vue')
    },
    {
        path: '/order',
        name: 'order',


        component: () =>
            import( /* webpackChunkName: "about" */ './views/Order.vue'),
    },
    {
        path: '/selectAddress',
        name: 'selectAddress',
        component: () =>
            import( /* webpackChunkName: "about" */ './views/SelectAddress.vue'),

    },
    {
        path: '/selectAddress/addAddress',
        name: 'addAddress',
        component: () =>
            import( /* webpackChunkName: "about" */ './views/AddAddress.vue'),
        children: [
            {
                path: '/selectAddress/addAddress/searchAddress',
                name: 'searchAddress',
                component: () =>
                    import( /* webpackChunkName: "about" */ './views/SearchAddress.vue')
            },
        ]
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
        },
        {
            path: '/profile/vipcard',
            name: 'vipcard',
            component: () => import('./components/profile/Vipcard.vue')
        },
        {
            path: '/profile/balance/detail',
            name: 'balance-detail',
            component: () => import('./components/profile/Balance.Detail.vue')
        },
        {
            path: '/profile/points/detail',
            name: 'points-detail',
            component: () => import('./components/profile/Points.Detail.vue')
        },
        {
            path: '/service',
            name: 'service',
            component: () => import('./components/profile/Service.vue')
        },
        {
            path: '/service/questionDetail',
            name: 'questionDetail',
            component: () => import('./components/profile/service/questionDetail.vue')
        },
        {
            path: '/download',
            name: 'download',
            component: () => import('./components/profile/download.vue')
        },
        {
            path: '/profile/vipcard/vipDescription',
            name: 'vipDescription',
            component: () => import('./components/profile/vipDescription.vue')
        },
        {
            path: '/profile/vipcard/invoiceRecord',
            name: 'invoiceRecord',
            component: () => import('./components/profile/invoiceRecord.vue')
        },
        {
            path: '/profile/vipcard/useCart',
            name: 'useCart',
            component: () => import('./components/profile/useCart.vue')
        }

    ],
    linkActiveClass: 'my-active',
})
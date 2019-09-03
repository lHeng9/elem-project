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

        }, {
            path: '/about',
            name: 'about',

            component: () =>

                import('./views/About.vue')

        }, {
            path: '/msite',
            name: 'msite',

            component: () =>

                import('./views/Msite.vue')
        },


    ],
    linkActiveClass: 'my-active'
})
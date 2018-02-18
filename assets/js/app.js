import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHighlightJS from 'vue-highlightjs'
import VueAffix from 'vue-affix';
import DatatableFactory from 'vuejs-datatable';
import axios from 'axios';

window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);
Vue.use(VueHighlightJS);
Vue.use(VueAffix);
Vue.use(DatatableFactory);

const Doc = require('../pages/doc.vue');
const Installation = { template: '<div>bar</div>' };

const routes = [
    {
        path: '/',
        component: Doc,
        props: require('../pages/examples/home.js')
    },
    {
        path: '/quick-start',
        component: Doc,
        props: require('../pages/examples/quick-start.js')
    },
    {
        path: '/installation',
        component: Doc,
        props: require('../pages/examples/installation.js')
    },
    {
        path: '/usage/minimum',
        component: Doc,
        props: require('../pages/examples/usage/minimum.js')
    },
    {
        path: '/usage/basic',
        component: Doc,
        props: require('../pages/examples/usage/basic.js')
    },
    {
        path: '/usage/custom-headers',
        component: Doc,
        props: require('../pages/examples/usage/custom-headers.js')
    },
    {
        path: '/usage/footers',
        component: Doc,
        props: require('../pages/examples/usage/footers.js')
    },
    {
        path: '/usage/ajax',
        component: Doc,
        props: require('../pages/examples/usage/ajax.js')
    },
    {
        path: '/usage/custom-templates',
        component: Doc,
        props: require('../pages/examples/usage/custom-templates.js')
    },
    {
        path: '/usage/multiple-tables',
        component: Doc,
        props: require('../pages/examples/usage/multiple-tables.js')
    },
    {
        path: '/usage/pager-styles',
        component: Doc,
        props: require('../pages/examples/usage/pager-styles.js')
    },
    {
        path: '/api/datatable',
        component: Doc,
        props: require('../pages/examples/api/datatable.js')
    },
    {
        path: '/api/pager',
        component: Doc,
        props: require('../pages/examples/api/pager.js')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.component('code-example', require('../components/code-example.vue'));

const app = new Vue({
    el: '#app',
    data: {
        show_menu: false,
        show_code: 'html',
    },
    methods: {
        updateCodeView(){
            this.$emit('view-code', this.show_code);
        }
    },
    router: router,
    created: function () {
        if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
            console.log('GA blocked because in development.');

            return
        }

        ga('set', 'page', this.$router.currentRoute.path);
        ga('send', 'pageview');

        this.$router.afterEach((to, from) => {
            ga('set', 'page', to.path);
            ga('send', 'pageview');
        });
    }
});

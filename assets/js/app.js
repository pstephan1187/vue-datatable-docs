import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHighlightJS from 'vue-highlightjs'
import VueAffix from 'vue-affix';
import DatatableFactory from 'vuejs-datatable';

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VueHighlightJS);
Vue.use(VueAffix);
Vue.use(DatatableFactory);

const Doc = require('../pages/doc.vue');
const Installation = { template: '<div>bar</div>' };

const routes = [
    {
        path: '/quick-start',
        component: Doc,
        props: require('../pages/examples/quick-start/index.js')
    },
    { path: '/installation', component: Installation }
];

const router = new VueRouter({
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
    router: router
});

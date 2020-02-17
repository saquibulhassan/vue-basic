import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./component/Home";
import SingleProduct from "./component/SingleProduct";
import ProductCatalog from "./component/ProductCatalog";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: "/", component: Home},
        {path: "/products", component: ProductCatalog},
        {path: "/product/:productId", name:'viewProduct', props: true, component: SingleProduct},
        {path: "*", component: {template: "<h1>Page Not Found</h1>"}},
    ],
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})

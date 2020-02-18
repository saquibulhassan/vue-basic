import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./component/Home";
import SingleProduct from "./component/SingleProduct";
import ProductCatalog from "./component/ProductCatalog";
import Page from "./component/Page";
import Profile from "./component/Profile";
import ProfileBasic from "./component/ProfileBasic";
import ProfileEducation from "./component/ProfileEducation";
import ProfileWork from "./component/ProfileWork";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: "/", component: Home},
        {path: "/redirect", redirect: '/'},
        {path: "/products", component: ProductCatalog},
        {path: "/product/:productId", name:'viewProduct', props: true, component: SingleProduct},
        {path: "/page/:id?", name:"page", props: true, component: Page},
        {path: "/profile", name:'profile', component: Profile, redirect: '/profile/basic', children: [
                {path: "basic", name:"profileBasic", component: ProfileBasic},
                {path: "education", name:"profileEducation", component: ProfileEducation},
                {path: "work", name:"profileWork", component: ProfileWork},
        ]},
        {path: "*", component: {template: "<h1>Page Not Found</h1>"}},
    ],
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});

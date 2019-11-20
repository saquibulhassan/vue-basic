import Vue from 'vue'
import App from './App.vue'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export const eventBus = new Vue()

Vue.component('appHome', Home);
Vue.component('appAbout', About);
Vue.component('appContact', Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})

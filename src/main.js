import Vue from 'vue'
import App from './App.vue'
import ShardsVue from 'shards-vue'
import router from './router';

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'


new Vue({
    render: h => h(App),
    router
}).$mount('#app')

Vue.use(ShardsVue);
import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

// import CourseClassCreate from '@/components/CourseClassCreate'



// Vue.config.productionTip = false



// new VueRouter({
//     routes: [{
//         path: '/course-classes/create',
//         component: CourseClassCreate
//     }]
// })
import router from './router';

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

// Vue.use(VueRouter)
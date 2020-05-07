import Vue from 'vue'
import Router from 'vue-router'
import CourseClassIndex from '@/components/course_class/CourseClassIndexPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/course-class',
        name: 'course-class.index',
        component: CourseClassIndex
    }]
})
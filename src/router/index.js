import Vue from 'vue'
import Router from 'vue-router'
import CourseClassIndex from '@/components/course_class/CourseClassIndexPage'
import CourseClassShow from '@/components/course_class/CourseClassShowPage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/course-class',
        name: 'course-class.index',
        component: CourseClassIndex
    }, {
        path: '/course-class/:id',
        name: 'course_class.show',
        component: CourseClassShow
    }]
})
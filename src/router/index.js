import Vue from 'vue'
import Router from 'vue-router'
import CourseClassIndexPage from '@/components/course_class/CourseClassIndexPage'
import CourseClassShowPage from '@/components/course_class/CourseClassShowPage'
import CourseClassCreatePage from '@/components/course_class/CourseClassCreatePage'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/course-class',
            name: 'course-class.index',
            component: CourseClassIndexPage
        },
        {
            path: '/course-class/create',
            name: 'course_class.create',
            component: CourseClassCreatePage
        },
        {
            path: '/course-class/:id',
            name: 'course_class.show',
            component: CourseClassShowPage
        }
    ]
})
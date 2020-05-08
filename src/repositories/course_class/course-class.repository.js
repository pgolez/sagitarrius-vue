import client from '@/repositories/client'
import { create } from 'domain';

export default {

    async fetchAllCourseClasses() {
        const { data } = await client.get("/course-classes");
        console.table(data)
        return data;
    },

    async fetch(id) {
        const { data } = await client.get(`/course-classes/${id}`);
        return data;
    },

    async create(courseClass) {
        const { data } = await client.post('/course-classes', courseClass);
        return data;
    },
}
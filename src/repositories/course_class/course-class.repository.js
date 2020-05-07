import client from '@/repositories/client'

export default {

    async fetchAllCourseClasses() {
        const { data } = await client.get("/course-classes");
        console.table(data)
        return data;
    },

    async fetch(id) {
        const { data } = await client.get(`/course-classes/${id}`);
        return data;
    }
}
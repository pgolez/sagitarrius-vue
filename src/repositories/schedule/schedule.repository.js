import client from '@/repositories/client.js'

export default {
    async list() {
        const { data } = await client.get('/schedules')
        return data;
    }
}
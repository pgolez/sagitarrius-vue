import client from '@/repositories/client';

export default {
    async list() {
        const { data } = await client.get("/rooms");
        return data
    }
};
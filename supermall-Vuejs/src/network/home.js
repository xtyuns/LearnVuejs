import {request} from "@/network/request";

export default {
    getHomeMultiData() {
        return request({
            url: '/home/multidata'
        });
    },
    getHomeGoods(type, page) {
        return request({
            url: '/home/data',
            params: {
                type,
                page,
            }
        });
    }
}
import axiosClient from './axiosClient';

const productApi = {
    getNewProduct: (params) => {
        const url = '/new-products/';
        return axiosClient.get(url, { params });
    },
    getTeddyBearHot: (params) => {
        const url = '/teddy-bear-hot/';
        return axiosClient.get(url, { params });
    },
    getGiftBox: (params) => {
        const url = '/gift-box-hot/';
        return axiosClient.get(url, { params });
    },
    getNailHot: (params) => {
        const url = '/nail-hot/';
        return axiosClient.get(url, { params });
    },
    getBouquetHot: (params) => {
        const url = '/bouquet-hot/';
        return axiosClient.get(url, { params });
    },
    getTeddyBear: (params) => {
        const url = '/gau-bong/';
        return axiosClient.get(url, { params });
    },
    getThuBong: (params) => {
        const url = '/thu-bong/';
        return axiosClient.get(url, { params });
    },
    getGoiBong: (params) => {
        const url = '/goi-bong/';
        return axiosClient.get(url, { params });
    },
    getTeddyBearFantasy: (params) => {
        const url = '/gau-bong-hoat-hinh/';
        return axiosClient.get(url, { params });
    },
    getDolly: (params) => {
        const url = '/bup-be/';
        return axiosClient.get(url, { params });
    },
    getHoa: (params) => {
        const url = '/hoa/';
        return axiosClient.get(url, { params });
    },
    getNail: (params) => {
        const url = '/nail/';
        return axiosClient.get(url, { params });
    },
    getHopQua: (params) => {
        const url = '/hop-qua/';
        return axiosClient.get(url, { params });
    },
    getCategory: (categoryItem) => {
        const url = `/${categoryItem}/`;
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/products/${id}/`;
        return axiosClient.get(url);
    },
};

export default productApi;

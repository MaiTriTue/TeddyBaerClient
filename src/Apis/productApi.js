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
    // New
    getHongsap: (params) => {
        const url = '/hong-sap/';
        return axiosClient.get(url, { params });
    },
    getHoaTien: (params) => {
        const url = '/hoa-tien/';
        return axiosClient.get(url, { params });
    },

    getNail: (params) => {
        const url = '/nail/';
        return axiosClient.get(url, { params });
    },
    // new
    getSon: (params) => {
        const url = '/son/';
        return axiosClient.get(url, { params });
    },
    getSocola: (params) => {
        const url = '/socola/';
        return axiosClient.get(url, { params });
    },
    getMyPham: (params) => {
        const url = '/my-pham/';
        return axiosClient.get(url, { params });
    },
    getBlogQuaTang: (params) => {
        const url = '/qua-tang/';
        return axiosClient.get(url, { params });
    },
    getBlogLamDep: (params) => {
        const url = '/lam-dep/';
        return axiosClient.get(url, { params });
    },
    getBlogChinhHang: (params) => {
        const url = '/chinh-hang/';
        return axiosClient.get(url, { params });
    },
    getBetSeller: (params) => {
        const url = '/best-seller/';
        return axiosClient.get(url, { params });
    },
    getPrice40k: (params) => {
        const url = '/price40k/';
        return axiosClient.get(url, { params });
    },
    getNameList: (params) => {
        const url = '/search-name-list/';
        return axiosClient.get(url, { params });
    },

    getCategory: (categoryItem, params) => {
        const url = `/${categoryItem}/`;
        return axiosClient.get(url, { params });
    },

    likeProduct: (params) => {
        const url = '/user/like-product/';
        return axiosClient.post(url, params);
    },

    deleteLikeProduct: (params) => {
        const url = `/user/like-product/${params}/`;
        return axiosClient.delete(url);
    },
    get: (id) => {
        const url = `/products/${id}/`;
        return axiosClient.get(url);
    },
};

export default productApi;

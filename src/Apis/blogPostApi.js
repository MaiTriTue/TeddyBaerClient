import axiosClient from './axiosClient';

const blogPostApi = {
    getListPost: (params) => {
        const url = '/blog/post/';
        return axiosClient.get(url, { params });
    },
    getPostDetail: (id) => {
        const url = `/blog/post/${id}/`;
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/products/${id}/`;
        return axiosClient.get(url);
    },
};

export default blogPostApi;

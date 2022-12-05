import axiosClient from './axiosClient';

const userApi = {
    login: (params) => {
        const url = '/user/login/';
        return axiosClient.post(url, { params });
    },
    register: (params) => {
        const url = '/user/register/';
        return axiosClient.post(url, { params });
    },
    current_user: (params) => {
        const url = '/user/register/current_user/';
        return axiosClient.get(url, { params });
    },
    get_token: (params) => {
        const url = '/o/token/';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
};

export default userApi;

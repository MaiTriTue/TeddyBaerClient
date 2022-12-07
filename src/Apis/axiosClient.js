import axios from 'axios';
import queryString from 'query-string';
import cookies from 'react-cookies';

const Token = cookies.load('teddybearbeautyful-ui::rememberedLogin')
    ? cookies.load('teddybearbeautyful-ui::rememberedLogin').access_token
    : '';

const axiosClient = axios.create({
    // baseURL: 'http://127.0.0.1:8000/',
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        Authorization: Token ? `Bearer ${Token}` : '',
    },

    paramsSerializer: (params) => queryString.stringify(params),
});

console.log('REACT_APP_API_URL: ', 'http://127.0.0.1:8000/');
// console.log('REACT_APP_API_URL: ', process.env.REACT_APP_API_URL);

axios.interceptors.request.use((config) => {
    return config;
});

axios.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        // handle error
        console.log('Error: ', error);
        throw error;
    },
);

export default axiosClient;

// import axios from 'axios';

// export let endpoints = {
//     login: '/user/login/',
//     register: '/user/register/',
//     current_user: '/user/register/current_user/',
//     get_token: '/o/token/',

//     pageCount: '/?page=',
//     products: '/products/',
//     newProduct: '/new-products/',
//     bouquetHot: '/bouquet-hot/',
//     teddyBearHot: '/teddy-bear-hot/',
//     giftBox: '/gift-box-hot/',
//     nailHot: '/nail-hot/',
//     gauBong: '/gau-bong/',
//     thuBong: '/thu-bong/',
//     goiBong: '/goi-bong/',
//     gauBongHoatHinh: '/gau-bong-hoat-hinh/',
//     bupBe: '/bup-be/',
//     phuKien: '/phu-kien/',
//     hoa: '/hoa/',
//     nail: '/nail/',
//     hopQua: '/hop-qua/',
// };

// export default axios.create({
//     // baseURL: 'http://127.0.0.1:8000',
//     baseURL: 'https://teddybearbackend.herokuapp.com',
// });

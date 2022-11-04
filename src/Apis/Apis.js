import axios from 'axios';

export let endpoints = {
    login: '/user/login/',
    register: '/user/register/',
    current_user: '/user/register/current_user/',
    get_token: '/o/token/',

    pageCount: '/?page=',
    products: '/products/',
    newProduct: '/new-products/',
    bouquetHot: '/bouquet-hot/',
    teddyBearHot: '/teddy-bear-hot/',
    giftBox: '/gift-box-hot/',
    nailHot: '/nail-hot/',
    gauBong: '/gau-bong/',
    thuBong: '/thu-bong/',
    goiBong: '/goi-bong/',
    gauBongHoatHinh: '/gau-bong-hoat-hinh/',
    bupBe: '/bup-be/',
    phuKien: '/phu-kien/',
    hoa: '/hoa/',
    nail: '/nail/',
    hopQua: '/hop-qua/',
};

export default axios.create({
    // baseURL: 'http://127.0.0.1:8000',
    baseURL: 'https://teddybearbackend.herokuapp.com',
});

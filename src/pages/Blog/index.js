import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import parse from 'html-react-parser';

import styles from './Blog.module.scss';
import images from '~/assets/images';
import blogPostApi from '~/Apis/blogPostApi';
import { ChangeToSlug } from '~/constants/Global';
import { Link } from 'react-router-dom';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function Blog() {
    const [listPost, setListPost] = useState('');
    const [BetSeller, setBetSeller] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchNewProduct = async () => {
            try {
                const params = {
                    page: 1,
                };

                const response = await blogPostApi.getListPost(params);
                setListPost(response.data.results);

                // localStorage.setItem(
                //     'teddybearbeautyful-ui::rememberedNewProduct',
                //     JSON.stringify(response.data.results),
                // );
                // console.log('fetch New product list: ', response.data);
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };
        const fetchBetSeller = async () => {
            try {
                const params = {
                    page: 1,
                };

                const response = await productApi.getBetSeller(params);
                setBetSeller(response.data.results);
                console.log('------------Bét seller: ', response.data.results);

                // localStorage.setItem(
                //     'teddybearbeautyful-ui::rememberedBetSeller',
                //     JSON.stringify(response.data.results),
                // );
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        fetchNewProduct();
        // if (localStorage.getItem('teddybearbeautyful-ui::rememberedBetSeller')) {
        //     setBetSeller(JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedBetSeller')));
        // } else {
        //     fetchBetSeller();
        // }

        fetchBetSeller();
    }, []);

    useEffect(() => {
        console.log('fetch New product list: ', listPost);
    }, [listPost]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-blog_title')}>
                <h1 className={cx('blog-title')}>GẤU BÔNG XINH BLOG</h1>
                <span className={cx('blog-slogan')}>Nơi có những món quà hoàn hảo mà bạn mong muốn</span>
            </div>
            {listPost ? (
                <div className={cx('wrapper-container')}>
                    {/*  thong tin bai viet */}
                    <div className={cx('wrapper-post_info')}>
                        <div className={cx('wrapper-post_info-title')}>
                            <span className={cx('post_info-title')}>Danh mục các bài viết</span>
                        </div>

                        {listPost &&
                            listPost.map((item, index) => {
                                if (index % 2 == 0) {
                                    return (
                                        <div className={cx('post-info_base')} key={index}>
                                            <div className={cx('post-info_base-img')}>
                                                <Link to={`/blog/${ChangeToSlug(item['name'])}/${item['id']}`}>
                                                    <img
                                                        className={cx('base-img_detail')}
                                                        src={item['image']}
                                                        alt="post-image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className={cx('post-info_base-content')}>
                                                <h2 className={cx('post-info_base-content-title')}>
                                                    <Link to={`/blog/${ChangeToSlug(item['name'])}/${item['id']}`}>
                                                        {item['name']}
                                                    </Link>
                                                </h2>
                                                <div className={cx('post-info_base-content-detail')}>
                                                    {parse(item['content'])}
                                                </div>
                                                <div className={cx('content-detail_btn')}>
                                                    <Link to={`/blog/${ChangeToSlug(item['name'])}/${item['id']}`}>
                                                        <span className={cx('content-detail_btn-title')}>
                                                            Xem chi tiết
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className={cx('post-info_base')} key={index}>
                                            <div className={cx('post-info_base-content')}>
                                                <h2 className={cx('post-info_base-content-title')}>
                                                    <Link to={`/blog/${ChangeToSlug(item['name'])}/${item['id']}`}>
                                                        {item['name']}
                                                    </Link>
                                                </h2>
                                                <div className={cx('post-info_base-content-detail')}>
                                                    {parse(item['content'])}
                                                </div>
                                                <div className={cx('content-detail_btn')}>
                                                    <Link to={`/blog/${ChangeToSlug(item['name'])}/${item['id']}`}>
                                                        <span className={cx('content-detail_btn-title')}>
                                                            Xem chi tiết
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className={cx('post-info_base-img')}>
                                                <Link to={`/blog/${ChangeToSlug(item['name'])}/${item['id']}`}>
                                                    <img
                                                        className={cx('base-img_detail')}
                                                        src={item['image']}
                                                        alt="post-image"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                    </div>

                    {/* thong tin gau bonmg */}
                    <div className={cx('wrapper-teddy_info')}>
                        <div className={cx('wrapper-teddy_info-title')}>
                            <h3 className={cx('teddy_info-title')}>Top Quà Tặng Yêu Thích</h3>
                        </div>

                        {BetSeller &&
                            BetSeller.map((item, index) => {
                                return (
                                    <div className={cx('wrapper-teddy_detail')} key={index}>
                                        <div className={cx('wrapper-teddy_detail-img')}>
                                            <img
                                                className={cx('teddy_detail-img')}
                                                src={item['image']}
                                                alt="post-image"
                                            />
                                        </div>
                                        <h3 className={cx('teddy_detail-name')}>{item['name']}</h3>
                                        <span className={cx('teddy_detail-sold')}>Đã bán: {item['amount_sold']}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ) : (
                <div className={cx('wrap-notifycation')}>
                    <h2 className={cx('notifycation-loading-data')}>ĐANG TẢI DỮ LIỆU ...</h2>
                </div>
            )}
        </div>
    );
}

export default Blog;

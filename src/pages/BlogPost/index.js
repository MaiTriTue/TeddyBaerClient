import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import { useState } from 'react';

import styles from './BlogPost.module.scss';
import blogPostApi from '~/Apis/blogPostApi';
import images from '~/assets/images';
import { Link, useParams } from 'react-router-dom';

import { calendar } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function BlogPost() {
    const [postData, setPostData] = useState('');
    const { postName, postId } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchNewProduct = async () => {
            try {
                const response = await blogPostApi.getPostDetail(postId);
                setPostData(response.data);

                // localStorage.setItem(
                //     'teddybearbeautyful-ui::rememberedNewProduct',
                //     JSON.stringify(response.data.results),
                // );
                // console.log('fetch New product list: ', response.data);
                // console.log('fetch New product list: ', postData['content']);
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        fetchNewProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-blog_title')}>
                <h1 className={cx('blog-title')}>GẤU BÔNG XINH BLOG</h1>
                <span className={cx('blog-slogan')}>Nơi có những món quà hoàn hảo mà bạn mong muốn</span>
            </div>

            <div className={cx('wrapper-post_navigate')}>
                <ul className={cx('post_navigate')}>
                    <li>
                        <Link className={cx('post_navigate-item')} to={'/'}>
                            TRANG CHỦ
                        </Link>
                        <span className={cx('post_navigate-font')}>{'>'}</span>
                    </li>
                    <li>
                        <Link className={cx('post_navigate-item')} to={'/blog'}>
                            BLOG
                        </Link>
                        <span className={cx('post_navigate-font')}>{'>'}</span>
                    </li>
                    <li>
                        <span className={cx('post_navigate-item')}>{postData['name']}</span>
                    </li>
                </ul>
            </div>
            <div className={cx('wrapper-container')}>
                {/*  thong tin bai viet */}
                <div className={cx('wrapper-post_info')}>
                    {/* <div className={cx('wrapper-post_info-title')}>
                        <span className={cx('post_info-title')}>Bài viết</span>
                    </div> */}

                    {/* bai 1 */}
                    <div className={cx('post-info_base')}>
                        <div className={cx('post-info_base-img')}>
                            <img className={cx('base-img_detail')} src={images.christmas} alt="post-image" />
                        </div>

                        <div className={cx('post-info_create')}>
                            <div className={cx('post-info_create-icon')}>
                                <img src={calendar} alt={'calendar'} />
                            </div>
                            <div className={cx('post-info_create-time')}>
                                <span>
                                    Ngày đăng: {postData['create_date'] ? postData['create_date'] : '01/01/1990'} -
                                </span>
                            </div>
                            <div className={cx('post-info_create-user')}>
                                <span>
                                    - Người đăng: {postData['createName'] ? postData['createName'] : 'Vô danh đại sư'}
                                </span>
                            </div>
                        </div>

                        <div className={cx('post-info_base-content')}>
                            <div className={cx('post-info_base-content-title')}>
                                <h2>{postData['name']}</h2>
                            </div>
                            <div className={cx('post-info_base-content-detail')}>
                                {postData && parse(postData['content'])}
                            </div>
                        </div>
                    </div>
                </div>

                {/* thong tin gau bonmg */}
                <div className={cx('wrapper-teddy_info')}>
                    <div className={cx('wrapper-teddy_info-title')}>
                        <h3 className={cx('teddy_info-title')}>Top Quà Tặng Yêu Thích</h3>
                    </div>

                    {/* chi tiet sp */}
                    <div className={cx('wrapper-teddy_detail')}>
                        <div className={cx('wrapper-teddy_detail-img')}>
                            <img className={cx('teddy_detail-img')} src={images.christmas} alt="post-image" />
                        </div>
                        <h3 className={cx('teddy_detail-name')}>Gấu lớn lông đỏ</h3>
                        <span className={cx('teddy_detail-sold')}>Đã bán: 267</span>
                    </div>

                    {/* chi tiet sp */}
                    <div className={cx('wrapper-teddy_detail')}>
                        <div className={cx('wrapper-teddy_detail-img')}>
                            <img className={cx('teddy_detail-img')} src={images.christmas} alt="post-image" />
                        </div>
                        <h3 className={cx('teddy_detail-name')}>Gấu lớn lông đỏ</h3>
                        <span className={cx('teddy_detail-sold')}>Đã bán: 267</span>
                    </div>

                    {/* chi tiet sp */}
                    <div className={cx('wrapper-teddy_detail')}>
                        <div className={cx('wrapper-teddy_detail-img')}>
                            <img className={cx('teddy_detail-img')} src={images.christmas} alt="post-image" />
                        </div>
                        <h3 className={cx('teddy_detail-name')}>Gấu lớn lông đỏ</h3>
                        <span className={cx('teddy_detail-sold')}>Đã bán: 267</span>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-title')}></div>
            <div className={cx('wrapper-title')}></div>
            <div className={cx('wrapper-title')}></div>
            {/* <h1>Blog website Gấu bông xinh !</h1> */}
        </div>
    );

    // <div className={cx('wrapper')}> {postData && parse(postData['content'])}</div>;
}

export default BlogPost;

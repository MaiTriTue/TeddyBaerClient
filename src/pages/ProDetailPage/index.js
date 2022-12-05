import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './ProDetailPage.module.scss';

import { check, delivery, money, shop, telephone } from '~/assets/iconVector';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, changeCountProduct } from '~/pages/CartPage/CartPageSlice';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function ProDetailPage() {
    const { slugPro, idPro } = useParams();
    const [countProduct, setCountProduct] = useState(1);
    const [doubleClick, setDoubleClick] = useState(false);
    const [detailPro, setDetailPro] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cartPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchDetailProduct = async () => {
            try {
                const response = await productApi.get(idPro);
                setDetailPro(response.data);
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };
        fetchDetailProduct();
    }, []);

    useEffect(() => {
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
        if (doubleClick) {
            navigate('/gio-hang');
        }
    }, [cartProduct]);

    const HandleMessage = () => {
        alert('click message !');
    };

    const HandleAddCart = (event, data) => {
        event.preventDefault();
        let proItems = [];
        if (!doubleClick) {
            dispatch(
                addCart({
                    ...data,
                    count: countProduct,
                }),
            );
        } else {
            cartProduct.forEach((item, index) => {
                if (item.id === data.id) {
                    proItems.push({
                        ...item,
                        count: item.count + 1,
                    });
                } else {
                    proItems.push(item);
                }
            });

            dispatch(changeCountProduct(proItems));
            localStorage.setItem('cartProduct', JSON.stringify(proItems));
        }

        setDoubleClick(true);
    };

    return (
        <div className={cx('wrapper')}>
            {detailPro ? (
                <div className={cx('wrapper-detail')}>
                    <div className={cx('wrapper-detail_imgs')}>
                        <img src={detailPro.image} alt={detailPro.slug} className={cx('pro-img')} />
                    </div>
                    <div className={cx('wrapper-detail_info')}>
                        <div className={cx('info-product_name')}>
                            <h3>{detailPro.name}</h3>
                        </div>
                        <div className={cx('info-product_price')}>
                            <h4>{detailPro.price}</h4>
                        </div>
                        <div className={cx('info-product_disc')}>
                            <span>{detailPro.discription}</span>
                        </div>
                        <div className={cx('info-product_btns')}>
                            <button
                                className={cx('btn-message')}
                                onClick={() => {
                                    HandleMessage();
                                }}
                            >
                                {' '}
                                Chat Facebook
                            </button>

                            <button className={cx('btn-add-cart')} onClick={(event) => HandleAddCart(event, detailPro)}>
                                Mua ngay
                            </button>
                        </div>
                        <div className={cx('info-order')}>hoặc gọi hotline để đặt hàng 0989.348.280</div>
                        <div className={cx('info-product_benefit')}>
                            <div className={cx('benefit-blog')}>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Miễn phí bọc quà
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Tặng thiệp miễn phí
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Hút chân không miễn phí
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Đổi hàng miễn phí
                                </span>
                            </div>
                            <div className={cx('benefit-blog')}>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Ko xù, ko rụng, ko phai
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Đúng hình ảnh, đúng size
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Cam kết giá luôn tốt nhất
                                </span>
                                <span>
                                    <img src={check} alt="check" className={cx('check')} />
                                    Ko đẹp hoàn tiền 100%
                                </span>
                            </div>
                        </div>
                        <div className={cx('info-product_contacts')}>
                            <div className={cx('contacts-info_blog')}>
                                <span>
                                    <img src={delivery} alt="check" className={cx('icon-contack')} />
                                    Giao hàng TQ - Nhận hàng thanh toán
                                </span>
                                <span>
                                    <img src={money} alt="check" className={cx('icon-contack')} />
                                    Tiền mặt - Chuyển khoản
                                </span>
                            </div>
                            <div className={cx('contacts-info_blog')}>
                                <span className={cx('contacts-info_blog-red')}>
                                    <img src={telephone} alt="check" className={cx('icon-contack')} />
                                    0969 024 369 - 0969 024 369 (zalo)
                                </span>
                                <span>
                                    <img src={shop} alt="check" className={cx('icon-contack')} />
                                    Cửa Hàng Gấu Bông Xinh - Minh Sơn - Triệu Sơn - Thanh Hóa
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h3>Đang load ...</h3>
            )}

            <div className={cx('wrapper-info_detail')}>
                <div className={cx('wrapper-info_title')}>
                    <h3>THÔNG TIN SẢN PHẨM</h3>
                </div>
                <div className={cx('wrapper-info_content')}></div>
            </div>
        </div>
    );
}

export default ProDetailPage;

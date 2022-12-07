import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { BillBeard, BillBeardSale, SlideCategory, TrendingProduct } from '~/components';

import { CATEGORY_DATAS } from '~/constants/Global';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function Home() {
    const [newProduct, setNewProduct] = useState('');
    const [teddyBearHotData, setTeddyBearHotData] = useState('');
    const [bouquetHotData, setBouquetHotData] = useState('');
    const [giftBoxHotData, setGiftBoxHotData] = useState('');
    const [nailHotData, setNailHotData] = useState('');
    const [checkData, setCheckData] = useState(false);
    const count = useState(1);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const fetchNewProduct = async () => {
            try {
                const params = {
                    page: 1,
                };
                const response = await productApi.getNewProduct(params);
                setNewProduct(response.data.results);

                localStorage.setItem(
                    'teddybearbeautyful-ui::rememberedNewProduct',
                    JSON.stringify(response.data.results),
                );
                // console.log('fetch New product list: ', response.data.results);
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        const fetchTeddyBearHot = async () => {
            try {
                const params = {
                    page: 1,
                };
                const response = await productApi.getTeddyBearHot(params);
                setTeddyBearHotData(response.data.results);

                localStorage.setItem(
                    'teddybearbeautyful-ui::rememberedTeddyBearHotData',
                    JSON.stringify(response.data.results),
                );
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        const fetchGiftBox = async () => {
            try {
                const params = {
                    page: 1,
                };
                const response = await productApi.getGiftBox(params);
                setGiftBoxHotData(response.data.results);

                localStorage.setItem(
                    'teddybearbeautyful-ui::rememberedGiftBoxHotData',
                    JSON.stringify(response.data.results),
                );
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        const fetchNailHot = async () => {
            try {
                const params = {
                    page: 1,
                };
                const response = await productApi.getNailHot(params);
                setNailHotData(response.data.results);

                localStorage.setItem(
                    'teddybearbeautyful-ui::rememberedNailHotData',
                    JSON.stringify(response.data.results),
                );
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        const fetchBouquetHot = async () => {
            try {
                const params = {
                    page: 1,
                };
                const response = await productApi.getBouquetHot(params);
                setBouquetHotData(response.data.results);

                localStorage.setItem(
                    'teddybearbeautyful-ui::rememberedBouquetHotData',
                    JSON.stringify(response.data.results),
                );
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };

        if (localStorage.getItem('teddybearbeautyful-ui::rememberedNewProduct')) {
            setNewProduct(JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedNewProduct')));
        } else {
            fetchNewProduct();
        }
        if (localStorage.getItem('teddybearbeautyful-ui::rememberedTeddyBearHotData')) {
            setTeddyBearHotData(JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedTeddyBearHotData')));
        } else {
            fetchTeddyBearHot();
        }
        if (localStorage.getItem('teddybearbeautyful-ui::rememberedGiftBoxHotData')) {
            setGiftBoxHotData(JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedGiftBoxHotData')));
        } else {
            fetchGiftBox();
        }
        if (localStorage.getItem('teddybearbeautyful-ui::rememberedNailHotData')) {
            setNailHotData(JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedNailHotData')));
        } else {
            fetchNailHot();
        }
        if (localStorage.getItem('teddybearbeautyful-ui::rememberedBouquetHotData')) {
            setBouquetHotData(JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedBouquetHotData')));
        } else {
            fetchBouquetHot();
        }
    }, []);

    useEffect(() => {
        setCheckData(true);
    }, [newProduct || teddyBearHotData || bouquetHotData || giftBoxHotData || nailHotData]);

    console.log('checkData: ', checkData);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard_slide')}>
                    <BillBeard />
                </div>

                <div className={cx('wrapper-billboard_banner')}>
                    <div className={cx('wrapper-billboard_banner-20')}>
                        <BillBeardSale name={''} sale={'Đồng giá 40k'} />
                    </div>
                    <div className={cx('wrapper-billboard_banner-15')}>
                        <BillBeardSale name={''} sale={'Đồng giá 40k'} />
                    </div>
                </div>
            </div>

            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="category" title="Danh mục" datas={CATEGORY_DATAS} />
                </div>
            </div>

            {checkData ? (
                <>
                    <div className={cx('wrapper-billboard')}>
                        <div className={cx('wrapper-billboard')}>
                            {newProduct && <SlideCategory type="NewProduct" title="Sản phẩm mới" datas={newProduct} />}
                        </div>
                    </div>
                    <div className={cx('wrapper-billboard')}>
                        <div className={cx('wrapper-billboard')}>
                            {teddyBearHotData && (
                                <TrendingProduct
                                    type="TrendingProduct"
                                    title="Gấu Bông Hot Nhất"
                                    data={teddyBearHotData}
                                />
                            )}
                        </div>
                    </div>

                    <div className={cx('wrapper-billboard')}>
                        <div className={cx('wrapper-billboard')}>
                            {bouquetHotData && (
                                <TrendingProduct type="BestSellingProduct" title="Hoa Hot Nhất" data={bouquetHotData} />
                            )}
                        </div>
                    </div>
                    <div className={cx('wrapper-billboard')}>
                        <div className={cx('wrapper-billboard')}>
                            {giftBoxHotData && (
                                <TrendingProduct
                                    type="BestSellingProduct"
                                    title="Hộp Quà Hot Nhất"
                                    data={giftBoxHotData}
                                />
                            )}
                        </div>
                    </div>

                    <div className={cx('wrapper-billboard')}>
                        <div className={cx('wrapper-billboard')}>
                            {bouquetHotData && (
                                <TrendingProduct type="BestSellingProduct" title="Nail Hot Nhất" data={nailHotData} />
                            )}
                        </div>
                    </div>
                    <div className={cx('wrapper-billboard')}>
                        <div className={cx('wrapper-billboard')}></div>
                    </div>
                </>
            ) : (
                <div className={cx('wrap-notifycation')}>
                    <h2 className={cx('notifycation-loading-data')}>ĐANG TẢI DỮ LIỆU ...</h2>
                </div>
            )}

            {/* <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard_slide')}>
                    <BillBeard />
                </div>
                <div className={cx('wrapper-billboard_banner')}>
                    <div className={cx('wrapper-billboard_banner-20')}>
                        <BillBeardSale />
                    </div>
                    <div className={cx('wrapper-billboard_banner-15')}>
                        <BillBeardSale />
                    </div>
                </div>
            </div>

            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="category" title="Danh mục" datas={CATEGORY_DATAS} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {newProduct && <SlideCategory type="NewProduct" title="Sản phẩm mới" datas={newProduct} />}
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {teddyBearHotData && (
                        <TrendingProduct type="TrendingProduct" title="Gấu Bông Hot Nhất" data={teddyBearHotData} />
                    )}
                </div>
            </div>

            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {bouquetHotData && (
                        <TrendingProduct type="BestSellingProduct" title="Hoa Hot Nhất" data={bouquetHotData} />
                    )}
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {giftBoxHotData && (
                        <TrendingProduct type="BestSellingProduct" title="Hộp Quà Hot Nhất" data={giftBoxHotData} />
                    )}
                </div>
            </div>

            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {bouquetHotData && (
                        <TrendingProduct type="BestSellingProduct" title="Nail Hot Nhất" data={nailHotData} />
                    )}
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}></div>
            </div> */}
        </div>
    );
}

export default Home;

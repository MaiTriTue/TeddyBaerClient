import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Apis, { endpoints } from '~/Apis/Apis';
import { BillBeard, BillBeardSale, SlideCategory, TrendingProduct } from '~/components/componentDetail';
import { CatagoryData, NewProductData } from '~/datas/datas';

const cx = classNames.bind(styles);

function Home() {
    const [newProduct, setNewProduct] = useState('');
    const [teddyBearHotData, setTeddyBearHotData] = useState('');
    const [bouquetHotData, setBouquetHotData] = useState('');
    const [giftBoxHotData, setGiftBoxHotData] = useState('');
    const [nailHotData, setNailHotData] = useState('');
    const count = useState(1);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        Apis.get(endpoints['newProduct']).then((res) => {
            // console.log(res.data.results);
            setNewProduct(res.data.results);
        });
        Apis.get(endpoints['teddyBearHot']).then((res) => {
            // console.log(res.data.results);
            setTeddyBearHotData(res.data.results);
        });
        Apis.get(endpoints['bouquetHot']).then((res) => {
            // console.log(res.data.results);
            setBouquetHotData(res.data.results);
        });
        Apis.get(endpoints['giftBox']).then((res) => {
            // console.log(res.data.results);
            setGiftBoxHotData(res.data.results);
        });
        Apis.get(endpoints['nailHot']).then((res) => {
            // console.log(res.data.results);
            setNailHotData(res.data.results);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-billboard')}>
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
                    <SlideCategory type="category" title="Danh mục" datas={CatagoryData} />
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
            </div>
        </div>
    );
}

export default Home;

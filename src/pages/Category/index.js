import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';

import styles from './Category.module.scss';

import { CATEGORY_DATAS } from '~/constants/Global';
import { TrendingProduct, SlideCategory } from '~/components';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function Category() {
    const { categoryItem } = useParams();
    const [DataProducts, setDataProducts] = useState('');
    const [CategoryTitle, setCategoryTitle] = useState('');
    const [DataProducts02, setDataProducts02] = useState('');
    const [CategoryTitle02, setCategoryTitle02] = useState('');
    const [DataProducts03, setDataProducts03] = useState('');
    const [CategoryTitle03, setCategoryTitle03] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchCategory = async () => {
            if (categoryItem === 'hoa') {
                setDataProducts02('');
                setDataProducts03('');
                try {
                    const params = {
                        page: 1,
                    };
                    const response = await productApi.getHongsap(params);
                    setDataProducts(response.data.results);
                } catch (error) {
                    console.log('Failed to fetch New product list: ', error);
                }
                try {
                    const params = {
                        page: 1,
                    };
                    const response = await productApi.getHoaTien(params);
                    setDataProducts02(response.data.results);
                } catch (error) {
                    console.log('Failed to fetch New product list: ', error);
                }
            } else if (categoryItem === 'hop-qua') {
                setDataProducts02('');
                setDataProducts03('');
                try {
                    const params = {
                        page: 1,
                    };
                    const response = await productApi.getMyPham(params);
                    setDataProducts(response.data.results);
                } catch (error) {
                    console.log('Failed to fetch New product list: ', error);
                }
                try {
                    const params = {
                        page: 1,
                    };
                    const response = await productApi.getSocola(params);
                    setDataProducts02(response.data.results);
                } catch (error) {
                    console.log('Failed to fetch New product list: ', error);
                }
                try {
                    const params = {
                        page: 1,
                    };
                    const response = await productApi.getSon(params);
                    setDataProducts03(response.data.results);
                } catch (error) {
                    console.log('Failed to fetch New product list: ', error);
                }
            } else {
                try {
                    const params = {
                        page: 1,
                    };
                    const response = await productApi.getCategory(categoryItem, params);
                    setDataProducts(response.data.results);
                    setDataProducts02('');
                    setDataProducts03('');
                } catch (error) {
                    console.log('Failed to fetch New product list: ', error);
                }
            }
        };
        fetchCategory();
        switch (categoryItem) {
            case 'hoa':
                setCategoryTitle('Hoa Hồng Sáp ( bó )');
                setCategoryTitle02('Hoa Tiền ( bó )');
                break;
            case 'thu-bong':
                setCategoryTitle('Thú Bông');
                break;
            case 'gau-bong-hoat-hinh':
                setCategoryTitle('Gấu Bông Hoạt Hình');
                break;
            case 'goi-bong':
                setCategoryTitle('Gối Bông & Phụ Kiện');
                break;
            case 'gau-bong':
                setCategoryTitle('Gấu Bông');
                break;
            case 'nail':
                setCategoryTitle('Những mẫu Nail đẹp');
                break;
            case 'hop-qua':
                setCategoryTitle('Hộp Quà Tình Yêu - Mỹ phẩm');
                setCategoryTitle02('Hộp Quà Tình Yêu - Socola');
                setCategoryTitle03('Hộp Quà Tình Yêu - Son');
                break;
            default:
                console.warn('Path does not exist !');
        }
    }, [categoryItem]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="category" title="Danh mục" datas={CATEGORY_DATAS} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {DataProducts && <TrendingProduct type="subcategory" title={CategoryTitle} data={DataProducts} />}
                </div>
            </div>

            {DataProducts02 ? (
                <div className={cx('wrapper-billboard')}>
                    <div className={cx('wrapper-billboard')}>
                        {DataProducts && (
                            <TrendingProduct type="subcategory" title={CategoryTitle02} data={DataProducts02} />
                        )}
                    </div>
                </div>
            ) : (
                ''
            )}
            {DataProducts03 ? (
                <div className={cx('wrapper-billboard')}>
                    <div className={cx('wrapper-billboard')}>
                        {DataProducts && (
                            <TrendingProduct type="subcategory" title={CategoryTitle03} data={DataProducts03} />
                        )}
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default Category;

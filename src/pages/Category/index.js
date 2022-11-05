import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';

import styles from './Category.module.scss';

import Apis, { endpoints } from '../../Apis/Apis';
import { CatagoryData } from '../../datas/datas';
import { TrendingProduct, SlideCategory } from '../../components/componentDetail';

const cx = classNames.bind(styles);

function Category() {
    const { categoryItem } = useParams();
    const [DataProducts, setDataProducts] = useState('');
    const [movieSrc, setMovieSrc] = useState('');
    const [CategoryTitle, setCategoryTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        Apis.get('/' + categoryItem + '/').then((res) => {
            setDataProducts(res.data.results);
        });
        switch (categoryItem) {
            case 'hoa':
                setCategoryTitle('Hoa Hồng Sáp ( bó )');
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
            case 'hop-qua':
                setCategoryTitle('Hộp Quà Tình Yêu');
                break;
            default:
                console.warn('Path does not exist !');
        }
    }, [categoryItem]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    <SlideCategory type="category" title="Danh mục" datas={CatagoryData} />
                </div>
            </div>
            <div className={cx('wrapper-billboard')}>
                <div className={cx('wrapper-billboard')}>
                    {DataProducts && <TrendingProduct type="subcategory" title={CategoryTitle} data={DataProducts} />}
                </div>
            </div>
        </div>
    );
}

export default Category;

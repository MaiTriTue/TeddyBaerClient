import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import styles from './TrendingProduct.module.scss';
import ProductCart from '~/components/Home/ProductCart';

const cx = classNames.bind(styles);

function TrendingProduct(props) {
    const { type, title, data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-trending-product')}>
                <div className={cx('trending-product_header')}>
                    <h2 className={cx('trending-product_header-title')}>
                        {data.length !== 0 ? title : ''}
                        {/* {title} */}
                    </h2>
                </div>
                <div className={cx('trending-product_body')}>
                    {data &&
                        data.map((item, index) => {
                            if (type === 'TrendingProduct') {
                                if (index < 12) {
                                    return (
                                        <div className={cx('product-cart')} key={index}>
                                            <ProductCart data={item} />
                                        </div>
                                    );
                                }
                            } else if (type === 'BestSellingProduct') {
                                if (index < 12) {
                                    return (
                                        <div className={cx('product-cart')} key={index}>
                                            <ProductCart data={item} />
                                        </div>
                                    );
                                }
                            } else {
                                if (index < 24) {
                                    return (
                                        <div className={cx('product-cart')} key={index}>
                                            <ProductCart data={item} />
                                        </div>
                                    );
                                }
                            }
                        })}
                </div>
            </div>
        </div>
    );
}

export default TrendingProduct;

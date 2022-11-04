import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';

import styles from './CartPage.module.scss';
import images from '~/assets/images';
import Apis, { endpoints } from '~/Apis/Apis';
import { useStore, actions } from '~/Store';
import { NewProductData } from '~/datas/datas';

const cx = classNames.bind(styles);

function CartPageProduct(props) {
    const {
        cartProductItem,
        cartProductIndex,
        handleAddCount,
        handleMinusCount,
        HandleChangeInput,
        HandleDeleteProduct,
    } = props;
    const [state, dispatch] = useStore();
    const { cartProduct } = state;

    return (
        <div className={cx('cart_product')}>
            <div className={cx('cart_product-serial')}>{cartProductIndex + 1}</div>
            <div className={cx('cart_product-detail')}>
                <div className={cx('cart_product-img')}>
                    <img src={cartProduct[cartProductIndex].image} alt={cartProduct[cartProductIndex].name} />
                </div>
                <div className={cx('cart_product-detail-handle')}>
                    <div className={cx('cart_product-info')}>
                        <div className={cx('cart_product-info-name')}>
                            <h4>{cartProduct[cartProductIndex].name}</h4>
                        </div>
                        <div className={cx('cart_product-info-count')}>
                            <div className={cx('product_count-product')}>
                                <div className={cx('btn_minus')} onClick={() => handleMinusCount(cartProductIndex)}>
                                    -
                                </div>
                                <input
                                    className={cx('product_btn-input')}
                                    value={cartProduct[cartProductIndex].count}
                                    onChange={(event) => {
                                        HandleChangeInput(event, cartProductIndex);
                                    }}
                                />

                                <span className={cx('btn_add')} onClick={() => handleAddCount(cartProductIndex)}>
                                    +
                                </span>
                            </div>
                        </div>
                        <div className={cx('cart_product-info-price')}>
                            <span>
                                {isNaN(cartProduct[cartProductIndex].price)
                                    ? 'LIÊN HỆ'
                                    : cartProduct[cartProductIndex].price * cartProduct[cartProductIndex].count +
                                      ' VND'}
                            </span>
                        </div>
                    </div>
                    <div className={cx('cart_product-delete')}>
                        <button
                            className={cx('product-delete_btn')}
                            onClick={() => {
                                HandleDeleteProduct(cartProductIndex);
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPageProduct;

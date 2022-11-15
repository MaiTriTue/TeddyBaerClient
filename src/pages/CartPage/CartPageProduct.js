import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CartPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function CartPageProduct(props) {
    const [cartProduct, setCartProduct] = useState('');
    const [countProduct, setCountProduct] = useState('');

    const {
        cartData,
        cartProductItem,
        cartProductIndex,
        handleAddCount,
        handleMinusCount,
        HandleChangeInput,
        HandleDeleteProduct,
    } = props;

    useEffect(() => {
        setCartProduct(cartData);
    }, [cartData]);

    return (
        <div className={cx('cart_product')}>
            <div className={cx('cart_product-serial')}>{cartProductIndex + 1}</div>
            <div className={cx('cart_product-detail')}>
                <div className={cx('cart_product-img')}>
                    <img
                        src={cartProduct && cartProduct[cartProductIndex].image}
                        alt={cartProduct && cartProduct[cartProductIndex].name}
                    />
                </div>
                <div className={cx('cart_product-detail-handle')}>
                    <div className={cx('cart_product-info')}>
                        <div className={cx('cart_product-info-name')}>
                            <h4>{cartProduct && cartProduct[cartProductIndex].name}</h4>
                        </div>
                        <div className={cx('cart_product-info-count')}>
                            <div className={cx('product_count-product')}>
                                <div className={cx('btn_minus')} onClick={() => handleMinusCount(cartProductIndex)}>
                                    -
                                </div>
                                <input
                                    className={cx('product_btn-input')}
                                    // value={cartProduct[cartProductIndex].count}
                                    value={
                                        isNaN(cartProduct && cartProduct[cartProductIndex].count)
                                            ? ''
                                            : cartProduct && cartProduct[cartProductIndex].count
                                    }
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
                                {isNaN(cartProduct && cartProduct[cartProductIndex].price)
                                    ? 'LIÊN HỆ'
                                    : cartProduct &&
                                      cartProduct[cartProductIndex].price * cartProduct &&
                                      cartProduct[cartProductIndex].count + ' VND'}
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

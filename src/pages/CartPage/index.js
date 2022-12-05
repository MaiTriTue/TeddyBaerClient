import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CartPage.module.scss';
import { changeCountProduct } from './CartPageSlice';
import { changeTotalPrice } from './TotalPriceSlice';
import CartPageProduct from './CartPageProduct';
import { ChangeToPrice } from '~/constants/Global';

const cx = classNames.bind(styles);

function CartPage() {
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cartPage);
    const totalPrice = useSelector((state) => state.totalPrice);
    const [CartProduct, setCartProductState] = useState('');
    const [totalPriceState, setTotalPriceState] = useState(0);
    const [CountProduct, setCountProductState] = useState('');
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const HandleTotalPrice = () => {
        let sum = 0;
        cartProduct.forEach((item, index) => {
            sum += item.curent_price * item.count;
        });
        return sum;
    };

    useEffect(() => {
        setCartProductState(cartProduct);
        dispatch(changeTotalPrice(HandleTotalPrice()));
    }, [cartProduct]);

    useEffect(() => {
        setTotalPriceState(totalPrice);
    }, [totalPrice]);

    const handleMinusCount = (indexPro) => {
        let proItems = [];

        cartProduct.forEach((item, index) => {
            if (index === indexPro && item.count > 1) {
                proItems.push({
                    ...item,
                    count: item.count - 1,
                });
            } else {
                proItems.push(item);
            }
        });

        dispatch(changeCountProduct(proItems));
        localStorage.setItem('cartProduct', JSON.stringify(proItems));
        setCartProductState(proItems);
    };
    const handleAddCount = (indexPro) => {
        let proItems = [];
        cartProduct.forEach((item, index) => {
            if (index === indexPro) {
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
        setCartProductState(proItems);
    };

    const HandleChangeInput = (event, indexPro) => {
        let proItems = [];
        cartProduct.forEach((item, index) => {
            if (index === indexPro) {
                proItems.push({
                    ...item,
                    count: parseInt(event.target.value, 10),
                });
            } else {
                proItems.push(item);
            }
        });

        dispatch(changeCountProduct(proItems));
        localStorage.setItem('cartProduct', JSON.stringify(proItems));
        setCartProductState(proItems);
    };

    const HandleDataCart = (index) => {
        let cartProductLocalStorage = JSON.parse(localStorage.getItem('cartProduct'));
        setCartProductState(JSON.parse(localStorage.getItem('cartProduct')));
        if (cartProductLocalStorage.length === 0) {
            localStorage.removeItem('cartProduct');
        }
    };
    const HandleDeleteProduct = (indexDel) => {
        let proItems = [];
        cartProduct.forEach((item, index) => {
            if (index !== indexDel) {
                proItems.push(item);
            }
        });

        dispatch(changeCountProduct(proItems));
        localStorage.setItem('cartProduct', JSON.stringify(proItems));
        setCartProductState(proItems);
        HandleDataCart();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-cart')}>
                <div className={cx('wrapper-cart_header')}>
                    <h3 className={cx('wrapper-cart_title')}>Giỏ Hàng</h3>
                    <span className={cx('wrapper-cart_count')}>
                        ( {cartProduct ? cartProduct.length : 0} Sản phẩm )
                    </span>
                </div>
                <div className={cx('wrapper-cart_detail')}>
                    <ul className={cx('wrapper-cart_products')}>
                        {CartProduct ? (
                            CartProduct &&
                            CartProduct.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <CartPageProduct
                                            cartData={CartProduct}
                                            countData={CountProduct}
                                            cartProductItem={item}
                                            cartProductIndex={index}
                                            handleAddCount={handleAddCount}
                                            handleMinusCount={handleMinusCount}
                                            HandleChangeInput={HandleChangeInput}
                                            HandleDeleteProduct={HandleDeleteProduct}
                                        />
                                    </li>
                                );
                            })
                        ) : (
                            <div className={cx('no-product')}>
                                <p>Chưa có sản phẩm nào trong giỏ hàng của bạn ! </p>
                            </div>
                        )}
                    </ul>
                    <div className={cx('wrapper-cart_infos')}>
                        <div className={cx('wrapper-cart_info-header')}>
                            <h5 className={cx('wrapper-cart_info-title')}>Chi tiết thanh toán</h5>
                        </div>
                        <div className={cx('wrapper-cart_info')}>
                            <div className={cx('wrapper-cart_info-total')}>
                                <span>Giá bán lẻ:</span>
                                <span>{ChangeToPrice(totalPriceState)} VND</span>
                            </div>
                            <div className={cx('wrapper-cart_info-total')}>
                                <span>Chiết khấu ({discount}%) :</span>
                                <span>{ChangeToPrice((totalPriceState * discount) / 100)} VND</span>
                            </div>
                        </div>
                        <div className={cx('wrapper-cart_btn')}>
                            <div className={cx('wrapper-cart_info-grand-total')}>
                                <span>Tổng cộng:</span>
                                <span>{ChangeToPrice(totalPriceState - (totalPriceState * discount) / 100)} VND </span>
                            </div>
                            <button className={cx('cart_btn-order')}>Mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;

import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CartPage.module.scss';
import { setCartProduct } from '~/pages/Home/HomeSlice';
import CartPageProduct from './CartPageProduct';

const cx = classNames.bind(styles);

function CartPage() {
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cartProduct);
    // const [countProduct, setCountProduct] = useState(1);
    const [CartProduct, setCartProductState] = useState('');
    const [discount, setDiscount] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);

    let dataLocalStorage = localStorage.getItem('cartProduct') ? JSON.parse(localStorage.getItem('cartProduct')) : [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let products = [];
        if (dataLocalStorage) {
            products.push(...dataLocalStorage);
        } else {
            products.push(...cartProduct);
            localStorage.setItem('cartProduct', JSON.stringify(products));
        }
        if (products.length !== 0) {
            setCartProductState(products);
        }
    }, []);

    const handleMinusCount = (indexPro) => {
        let items = CartProduct;
        if (items[indexPro].count > 0) {
            items[indexPro].count = items[indexPro].count - 1;
            dispatch(setCartProduct(items));
            localStorage.setItem('cartProduct', JSON.stringify(items));
            setCartProductState(items);
        }
    };
    const handleAddCount = (indexPro) => {
        let items = CartProduct;

        items[indexPro].count = items[indexPro].count + 1;
        dispatch(setCartProduct(items));
        localStorage.setItem('cartProduct', JSON.stringify(items));
        setCartProductState(items);
    };

    const HandleChangeInput = (event, indexPro) => {
        let items = CartProduct;

        items[indexPro].count = parseInt(event.target.value, 10);
        dispatch(setCartProduct(items));
        localStorage.setItem('cartProduct', JSON.stringify(items));
        setCartProductState(items);
    };

    const HandleDataCart = (index) => {
        dataLocalStorage = JSON.parse(localStorage.getItem('cartProduct'));
        setCartProductState(JSON.parse(localStorage.getItem('cartProduct')));
        if (dataLocalStorage.length == 0) {
            localStorage.removeItem('cartProduct');
        }
    };
    const HandleDeleteProduct = (indexDel) => {
        let items = cartProduct;

        items.forEach((item, index) => {
            if (index === indexDel) {
                items.splice(index, 1);
            }
        });
        dispatch(setCartProduct(items));
        localStorage.setItem('cartProduct', JSON.stringify(items));
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
                                <span>VND {priceTotal} </span>
                            </div>
                            <div className={cx('wrapper-cart_info-total')}>
                                <span>Chiết khấu ({discount}%) :</span>
                                <span>VND {(priceTotal * discount) / 100}</span>
                            </div>
                        </div>
                        <div className={cx('wrapper-cart_btn')}>
                            <div className={cx('wrapper-cart_info-grand-total')}>
                                <span>Tổng cộng:</span>
                                <span>VND {priceTotal - (priceTotal * discount) / 100} </span>
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

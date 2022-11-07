import React, { useEffect } from 'react';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { searchIcon, cartIcon, couponCode, userIcon, wishlists } from '~/assets/iconVector';

import MobileHeader from './MobileHeader';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const menus = [
    { url: '/', content: 'Trang chủ' },
    { url: '/', content: 'Cửa hàng' },
    { url: '/', content: 'Page' },
    { url: '/', content: 'Dịch vụ' },
    { url: '/', content: 'Blog' },
    { url: '/', content: 'Liên hệ' },
    { url: '/', content: 'Ưu đãi' },
];

function Header() {
    const [indexMenu, setIndexMenu] = useState(0);
    const navigate = useNavigate();
    const mobileMenuRef = useRef(null);
    const mobileHeaderRef = useRef(null);

    const cartProduct = '';
    const userLogin = '';
    const [offset, setOffset] = useState(0);
    const [offsetOdd, setOffsetOdd] = useState(0);
    let activeMenu;

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (window.innerWidth < 779) {
            if (offset > offsetOdd) {
                mobileHeaderRef.current.style.display = 'none';
            } else if (offset < offsetOdd) {
                mobileHeaderRef.current.style.display = 'block';
            }
            setOffsetOdd(offset);
        }
    }, [offset]);

    const HandleActive = (index) => {
        setIndexMenu(index);
    };
    const HandleLogin = () => {
        setIndexMenu(-1);
        navigate('/dang-nhap');
    };

    const HandleHideModel = () => {
        mobileMenuRef.current.style.display = 'none';
    };
    const HandleMobileMenu = () => {
        mobileMenuRef.current.style.display = 'block';
    };

    return (
        <div className={cx('wrapper')} ref={mobileHeaderRef}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('wrapper-header')}>
                    <div className={cx('wrapper-header_logo-search')}>
                        <div className={cx('wrapper-header_logo')}>
                            <div className={cx('wrapper-header_logo-img')}>
                                <img src={images.logoPrimary} alt="logo-shop" />
                            </div>
                        </div>
                        <div className={cx('wrapper-header_search')}>
                            <div className={cx('wrapper-header_search-selecte')}>
                                <select>
                                    <option className={cx('search-selecte_option')}>all categories</option>
                                </select>
                            </div>

                            <div className={cx('wrapper-header_search-rectangle')}></div>
                            <div className={cx('wrapper-header_search-input')}>
                                <input type="text" placeholder="Search for more than 20,000 products" />
                                <img src={searchIcon} alt="search-icon" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper-header_support-user')}>
                        <div className={cx('wrapper-header_support')}>
                            <p>For support ?</p>
                            <p>0969024369</p>
                        </div>
                        <div className={cx('wrapper-header_user-interactive')}>
                            {userLogin ? (
                                userLogin['avatar'] ? (
                                    <img
                                        src={userLogin['avatar']}
                                        alt="user-icon"
                                        className={cx('header_login-image')}
                                    />
                                ) : (
                                    <img
                                        src={images.iconDefaultUse}
                                        alt="user-icon"
                                        className={cx('header_login-image')}
                                    />
                                )
                            ) : (
                                <div className={cx('wrapper-header_login')} onClick={HandleLogin}>
                                    <img src={userIcon} alt="user-icon" />
                                </div>
                            )}

                            <div className={cx('wrapper-header_wishlists')} onClick={() => HandleActive(-1)}>
                                <img src={wishlists} alt="wishlists" />
                                <span>22</span>
                            </div>
                            <div className={cx('wrapper-header_cart')}>
                                <Link
                                    to={'/gio-hang'}
                                    className={cx('wrapper-header_cart-icon')}
                                    onClick={() => HandleActive(-1)}
                                >
                                    <img src={cartIcon} alt="cartIcon" />
                                    <span>{cartProduct.length}</span>
                                </Link>
                                <div className={cx('wrapper-header_cart-price')}>
                                    <p>your cart</p>
                                    <p>
                                        VND<span>1290000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapper-mobile_header')}>
                        <div className={cx('wrapper-mobile_header-nemu')} onClick={() => HandleMobileMenu()}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className={cx('wrapper-header_logo-img')}>
                            <img src={images.logoPrimary} alt="logo-shop" />
                        </div>
                        <div className={cx('wrapper-mobile_header-cart')}>
                            <div className={cx('wrapper-header_cart')}>
                                <Link
                                    to={'/gio-hang'}
                                    className={cx('wrapper-header_cart-icon')}
                                    onClick={() => HandleActive(-1)}
                                >
                                    <img src={cartIcon} alt="cartIcon" />
                                    <span>{cartProduct.length}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper-navbar_mobiler')} ref={mobileMenuRef} onClick={HandleHideModel}>
                    <MobileHeader menus={menus} HandleHideModel={HandleHideModel} />
                </div>
                <div className={cx('wrapper-navbar')}>
                    <div className={cx('wrapper-navbar_nav')}>
                        <select className={cx('wrapper-navbar_nav-departments')}>
                            <option>shop by departments</option>
                        </select>
                        <ul className={cx('wrapper-navbar_nav-list')}>
                            {menus &&
                                menus.map((item, index) => {
                                    activeMenu = indexMenu === index ? 'active' : '';
                                    return (
                                        <li className={cx(activeMenu)} onClick={() => HandleActive(index)} key={index}>
                                            <Link to={item.url}>{item.content}</Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <div className={cx('wrapper-navbar_coupon-code')}>
                        <div className={cx('coupon-code_img')}>
                            <img src={couponCode} alt="Get your coupon code" />
                        </div>
                        <p>Get your coupon code</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

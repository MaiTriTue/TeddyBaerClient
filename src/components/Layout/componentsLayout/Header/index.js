import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import cookies from 'react-cookies';
import Select from 'react-select';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { searchIcon, cartIcon, couponCode, userIcon, wishlists } from '~/assets/iconVector';
import { Logout } from '~/app/userSlice';
import { changeTotalPrice } from '~/pages/CartPage/TotalPriceSlice';
import MobileHeader from './MobileHeader';
import { MENUS_NAV } from '~/constants/Global';
import { ChangeToPrice, LangueOptions, categoryOption, colourStyles, ChangeToSlug } from '~/constants/Global';

import SelectBase from '~/components/common/SelectBase';
import SearchList from '~/components/Header/SearchList';
import productApi from '~/Apis/productApi';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.current);
    const totalPrice = useSelector((state) => state.totalPrice);
    const [indexMenu, setIndexMenu] = useState(0);
    const navigate = useNavigate();
    const mobileMenuRef = useRef(null);
    const mobileHeaderRef = useRef(null);
    const cartProduct = useSelector((state) => state.cartPage);
    const [userLogin, setUserLogin] = useState('');
    const [searchvalue, setsearchvalue] = useState('');
    const [nameList, setNameList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [offsetOdd, setOffsetOdd] = useState(0);
    const [count, setCount] = useState(0);
    const [likes, setLikes] = useState(0);
    const [totalPriceState, setTotalPriceState] = useState(0);
    let activeMenu;

    const HandleTotalPrice = () => {
        let sum = 0;
        cartProduct.forEach((item, index) => {
            sum += item.curent_price * item.count;
        });
        return sum;
    };

    useEffect(() => {
        // console.log(user);
        setUserLogin(user);
    }, [user]);

    useEffect(() => {
        const fetchSearchNameProduct = async () => {
            try {
                const params = {
                    page: 1,
                    value: searchvalue,
                };
                const response = await productApi.getNameList(params);
                setNameList(response.data.results);
                console.log('fetch New product list: ', response);
            } catch (error) {
                console.log('Failed to fetch New product list: ', error);
            }
        };
        if (searchvalue) {
            console.log(searchvalue);
            fetchSearchNameProduct();
        }
    }, [searchvalue]);

    useEffect(() => {
        let sum = 0;
        cartProduct.forEach((item, index) => {
            sum += item.count;
        });

        setCount(sum);
        dispatch(changeTotalPrice(HandleTotalPrice()));
    }, [cartProduct]);

    useEffect(() => {
        setTotalPriceState(totalPrice);
    }, [totalPrice]);

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
    const HandleLogout = () => {
        dispatch(Logout(''));
        cookies.save('teddybearbeautyful-ui::rememberedLogin', '');
        localStorage.setItem('teddybearbeautyful-ui::rememberedAccounts', '');
        console.log('logout');
    };

    const HandleHideModel = () => {
        mobileMenuRef.current.style.display = 'none';
    };
    const HandleMobileMenu = () => {
        mobileMenuRef.current.style.display = 'block';
    };

    const handleChangeLangue = (value) => {
        console.log('Langue: ', value);
    };

    const handleChangeCategory = (value) => {
        console.log('Langue: ', value);
        navigate(value['value']);
    };

    const handleChangeSearchInput = (event) => {
        setsearchvalue(event.target.value);
    };

    const HandleSelecterProduct = (searchListRef, value) => {
        searchListRef.current.style.display = 'none';

        navigate(`/gau-bong/${ChangeToSlug(value.name)}/${value.id}`);
    };

    return (
        <div className={cx('wrapper')} ref={mobileHeaderRef}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('wrapper-header')}>
                    <div className={cx('wrapper-header_logo-search')}>
                        <div className={cx('wrapper-header_logo')}>
                            <div className={cx('wrapper-header_logo-img')}>
                                <Link to={'/'}>
                                    <img src={images.logoPrimary} alt="logo-shop" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('wrapper-header_search')}>
                            <div className={cx('wrapper-header_search-selecte')}>
                                <SelectBase
                                    defaultValue={LangueOptions[1]}
                                    options={LangueOptions}
                                    onChange={handleChangeLangue}
                                />
                            </div>

                            <div className={cx('wrapper-header_search-rectangle')}></div>
                            <div className={cx('wrapper-header_search-input')}>
                                <input
                                    value={searchvalue}
                                    onChange={(event) => handleChangeSearchInput(event)}
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    className={cx('search-input')}
                                />
                                <div className={cx('header-search_wrap-icon')}>
                                    <img src={searchIcon} alt="search-icon" className={cx('header-search_icon')} />
                                </div>
                                <div className={cx('header-search_wrap-list')}>
                                    <SearchList
                                        searchvalue={searchvalue}
                                        nameList={nameList}
                                        HandleSelecterProduct={HandleSelecterProduct}
                                    />
                                </div>
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
                                userLogin['infoUser'] && userLogin['infoUser']['avatar'] ? (
                                    <div className={cx('wrapper-header_login')}>
                                        <img
                                            src={userLogin['infoUser']['avatar']}
                                            alt="user-icon"
                                            className={cx('header_login-image')}
                                            onClick={HandleLogout}
                                        />
                                    </div>
                                ) : (
                                    <div className={cx('wrapper-header_login')}>
                                        <img
                                            src={images.iconDefaultUse}
                                            alt="user-icon-defaule"
                                            className={cx('header_login-image')}
                                            onClick={HandleLogout}
                                        />
                                    </div>
                                )
                            ) : (
                                <div className={cx('wrapper-header_login')} onClick={HandleLogin}>
                                    <img src={userIcon} alt="user-icon" className={cx('img-default')} />
                                </div>
                            )}

                            <div className={cx('wrapper-info_user')}>
                                {/* <div className={cx('bridge_user')}></div> */}
                                <div className={cx('info_user')}>
                                    <span>
                                        <Link className={cx('info_user-content')} to={'/'}>
                                            Thông tin cá nhân
                                        </Link>
                                    </span>
                                </div>
                                <div className={cx('user_handle')}>
                                    <div className={cx('user_login-logout')}>
                                        {userLogin ? (
                                            <span onClick={HandleLogout}>
                                                <Link className={cx('user_logout-content')} to={'/'}>
                                                    Đăng xuất
                                                </Link>
                                            </span>
                                        ) : (
                                            <span onClick={HandleLogin}>
                                                <Link className={cx('user_login-content')} to={'/dang-nhap'}>
                                                    Đăng nhập
                                                </Link>
                                            </span>
                                        )}
                                    </div>
                                    <div className={cx('user_register')}>
                                        <span>
                                            <Link className={cx('user_register-content')} to={'/dang-ky'}>
                                                Đăng ký
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('wrapper-header_wishlists')} onClick={() => HandleActive(-1)}>
                                <img src={wishlists} alt="wishlists" className={cx('img-default')} />
                                <span>
                                    {userLogin ? (userLogin['infoLike'] ? userLogin['infoLike'].length : 0) : 0}
                                </span>
                            </div>
                            <div className={cx('wrapper-header_cart')}>
                                <Link
                                    to={'/gio-hang'}
                                    className={cx('wrapper-header_cart-icon')}
                                    onClick={() => HandleActive(-1)}
                                >
                                    <img src={cartIcon} alt="cartIcon" className={cx('img-default')} />
                                    <span>{count}</span>
                                </Link>
                                <div className={cx('wrapper-header_cart-price')}>
                                    <p>your cart</p>
                                    <p>
                                        {/* <span>0</span> VND */}
                                        <span>{totalPriceState && ChangeToPrice(totalPriceState)}</span> VND
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
                                    <span>{count}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper-navbar_mobiler')} ref={mobileMenuRef} onClick={HandleHideModel}>
                    <MobileHeader menus={MENUS_NAV} HandleHideModel={HandleHideModel} />
                </div>
                <div className={cx('wrapper-navbar')}>
                    <div className={cx('wrapper-navbar_nav')}>
                        <div className={cx('wrapper-navbar_nav-select')}>
                            <SelectBase
                                defaultValue={categoryOption[0]}
                                options={categoryOption}
                                onChange={handleChangeCategory}
                            />
                        </div>

                        <ul className={cx('wrapper-navbar_nav-list')}>
                            {MENUS_NAV &&
                                MENUS_NAV.map((item, index) => {
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
                        <span className={cx('coupon-code_content')}>Nhận mã giảm giá</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

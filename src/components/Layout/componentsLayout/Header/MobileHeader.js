import React from 'react';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function MobileHeader(props) {
    const userLogin = '';
    const { menus, HandleHideModel } = props;

    const HandleMenuMobile = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <div className={cx('mobile-navbar')} onClick={(event) => HandleMenuMobile(event)}>
            <ul className={cx('mobile-navbar_inner-list')}>
                <li className={cx('inner-list_user')}>
                    <div className={cx('inner-list_user-image')}>
                        {userLogin && userLogin['avatar'] ? (
                            <img src={userLogin['avatar']} alt="user-icon" className={cx('header_login-image')} />
                        ) : (
                            <img src={images.iconDefaultUse} alt="user-icon" className={cx('header_login-image')} />
                        )}
                    </div>
                    <div className={cx('inner-list_user-info')}>
                        {userLogin ? (
                            <span className={cx('user-info_name-1')}>{userLogin['name']}</span>
                        ) : (
                            <span className={cx('user-info_name-0')}>Khách hàng ẩn danh</span>
                        )}

                        <span className={cx('user-info_rank')}>Khách hàng</span>
                    </div>
                </li>

                {menus &&
                    menus.map((item, index) => {
                        return (
                            <li className={cx('menu-item')} onClick={() => HandleHideModel()} key={index}>
                                <Link to={item.url}>{item.content}</Link>
                            </li>
                        );
                    })}

                <li className={cx('navbar-item_status')}>
                    <div className={cx('navbar-item_login-logout')}>
                        {userLogin ? (
                            <Link to={'/'} className={cx('navbar-item_logout')} onClick={HandleHideModel}>
                                Đăng xuất
                            </Link>
                        ) : (
                            <Link to="/dang-nhap" className={cx('navbar-item_login')} onClick={HandleHideModel}>
                                Đăng nhập
                            </Link>
                        )}
                    </div>
                    <div className={cx('navbar-item-register')}>
                        <Link to="/dang-ky" className={cx('navbar-item_register-btn')} onClick={HandleHideModel}>
                            Đăng ký
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MobileHeader;

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import { useStore, actions } from '~/Store';
import styles from './SlideCategory.module.scss';
import { boHong, nail, teddyBear, rose, couponCode } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function CategoryNav(props) {
    const { data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper-nav')}>
            <div className={cx('wrapper-cart')}>
                <div className={cx('cart-icon')}>
                    <img src={data.icon} alt="bo hong" />
                </div>
                <div className={cx('cart-name')}>{data.name}</div>
            </div>
        </div>
    );
}

export default CategoryNav;

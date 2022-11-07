import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import { useStore, actions } from '~/Store';
import styles from './BillBeard.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ImageBanner(props) {
    const { data } = props;
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate('/');
    };

    return (
        <div className={cx('wrapper')} onClick={() => handleProduct()}>
            <div className={cx('wrapper-info')}>
                <p className={cx('wrapper-info_slogan')}>100% {data.description}</p>
                <p className={cx('wrapper-info_name')}>{data.name} & Món quà tình yêu</p>
                <p className={cx('wrapper-info_note')}>Gấu bông {data.name} được nhiều người yêu thích nhất ! </p>
                <button className={cx('wrapper-info_btn')} onClick={handleProduct}>
                    SHOP NOW
                </button>
            </div>
            <div className={cx('wrapper-img')}>
                <img src={data.image} alt="billBealt01" />
            </div>

            {/* <div className={cx('wrapper-info')}></div> */}
        </div>
    );
}

export default ImageBanner;

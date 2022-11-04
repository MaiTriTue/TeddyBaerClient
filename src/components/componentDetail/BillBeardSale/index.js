import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import { useStore, actions } from '~/Store';
import styles from './BillBeardSale.module.scss';
import images from '~/assets/images';
import ImageBannerSale from './ImageBannerSale';

const cx = classNames.bind(styles);

function BillBeardSale() {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper-sale')}>
            <ImageBannerSale />
        </div>
    );
}

export default BillBeardSale;

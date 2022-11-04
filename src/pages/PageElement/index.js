import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './PageElement.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PageElement() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <div className={cx('wrapper')}></div>;
}

export default PageElement;

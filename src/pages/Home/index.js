import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeWidthScreen } from '../Home/HomeSlice';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);
    console.log('photos: ', photos);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1>photos: {photos}</h1>
        </div>
    );
}

export default Home;

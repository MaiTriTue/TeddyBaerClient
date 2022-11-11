import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Endow.module.scss';

const cx = classNames.bind(styles);

function Endow() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1>Hiện tại cửa hàng chưa có các sản phẩm giảm giá !</h1>
        </div>
    );
}

export default Endow;

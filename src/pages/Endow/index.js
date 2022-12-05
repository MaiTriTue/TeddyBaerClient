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
            <h1>Hiện tại chương trình ưu đãi cửa hàng đang cập nhật, xin quý khách thông cảm !!! !</h1>
        </div>
    );
}

export default Endow;

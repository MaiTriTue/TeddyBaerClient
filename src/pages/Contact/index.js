import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1>Thông tin liên hệ</h1>
        </div>
    );
}

export default Contact;

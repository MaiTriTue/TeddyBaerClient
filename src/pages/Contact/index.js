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
            <div className={cx('contact-title')}>
                <h2>LIÊN HỆ CHÚNG TÔI</h2>
            </div>
            <div className={cx('contact-content')}>
                <p>Nếu bạn muốn liên lạc với chúng tôi, xin vui lòng sử dụng các chi tiết liên lạc dưới đây. </p>
            </div>
            <div className={cx('contact-info')}>
                <div className={cx('contact-info_address')}>
                    <p>Trụ sở: Shop Gấu Bông Xinh - Minh Sơn - Triệu Sơn - Thanh Hóa</p>
                </div>
                <div className={cx('contact-info_phone-email')}>
                    <p>Điện thoại: 0969024369 (Thứ Hai – Thứ Sáu 9:00 – 17:00). Email: duongvan@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

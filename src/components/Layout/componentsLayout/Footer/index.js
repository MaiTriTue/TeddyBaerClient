import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faDisplay,
    faEnvelopeOpenText,
    faGlobe,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import images from '~/assets/images';

import styles from './Footer.module.scss';
import { faAndroid, faApple, faBootstrap, faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('footer_logo')}>
                    <div className={cx('footer_logo-img')}>
                        <Link to={'/'}>
                            <img src={images.logoPrimary} alt=" logo-fpt" />
                        </Link>
                    </div>
                    <div className={cx('footer_logo-img')}>
                        <Link to={'/'}>
                            <img src={images.logoBCT} alt=" logo-BCT" />
                        </Link>
                    </div>
                    <div className={cx('footer_logo-img')}>
                        <Link to={'/'}>
                            <img src={images.logoDMCA} alt=" logo-dmca" />
                        </Link>
                    </div>
                </div>
                <div className={cx('footer_contacts')}>
                    <div className={cx('category-link')}>
                        <ul>
                            <li>
                                <Link to={'/'}>Gói combo</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Quảng cáo</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Dịch vụ</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Điều khoản</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Chính sách</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Liên hệ</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Cửa hàng</Link>
                            </li>

                            <li>
                                <img src={images.logoBrowser} alt="browses" className={cx('btnIcon')} />
                                <img src={images.logoSmarttv} alt="Smarttv" className={cx('btnIcon')} />
                                <img src={images.logoApple} alt="Apple" className={cx('btnIcon')} />
                                <img src={images.logoAndroid} alt="Android" className={cx('btnIcon')} />
                                <img src={images.logoBox} alt="Box" className={cx('btnIcon')} />
                            </li>
                        </ul>
                    </div>
                    <div className={cx('about-infomation')}>
                        <span>Shop Gấu Bông Xinh - Người đại diện: Bà Dương Thị Vân</span>

                        <span>Trụ sở: Shop Gấu Bông Xinh - Minh Sơn - Triệu Sơn - Thanh Hóa</span>

                        <span>Điện thoại: 0969024369. Email: duongvan@gmail.com</span>

                        <span>
                            Số giấy chứng nhận đăng ký kinh doanh: 0000000000 do Sở Kế Hoạch Đầu Tư Thành Phố Thanh Hóa
                            cấp vào ngày 00/00/0000
                        </span>

                        <span>
                            Giấy phép Cung cấp Dịch vụ Quà Tặng, Đồ Kỷ Niệm số 000/AA-AAAAAA cấp ngày 00/00/0000.
                        </span>
                    </div>
                </div>
                <div className={cx('footer_about')}>
                    <div className={cx('btnFacebook')}>
                        <FontAwesomeIcon icon={faFacebook} className={cx('btnFacebook-icon')} />
                    </div>
                    <div className={cx({ btnMessage: 'footer_about-message', btn: 'btn' })}>
                        <Link to={'https://hotro.fptplay.vn/hc/vi'}>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className={cx('iconMessage')} />
                            <span>Hỗ trợ</span>
                        </Link>
                    </div>
                    <div className={cx({ btnPhone: 'footer_about-fhone', btn: 'btn' })}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>0969024369</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './BillBeardSale.module.scss';
import images from '~/assets/images';
import { right } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function ImageBanner() {
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate('/');
    };

    return (
        <div className={cx('wrapper')} onClick={() => handleProduct()}>
            <div className={cx('wrapper-info')}>
                <p className={cx('wrapper-info_slogan')}>
                    Đồng giá 40k
                    <span className={cx('wrapper-info_slogan-sale')}>
                        <span className={cx('slogan-sale_retangle')}></span>
                        SALE
                    </span>
                </p>
                <p className={cx('wrapper-info_name')}>Quà tặng cho bé yêu</p>
                <button className={cx('wrapper-info_btn')}>
                    Xem chi Tiết
                    <img src={right} alt="down" />
                </button>
            </div>

            <div className={cx('wrapper-img')}>{/* <img src={images.billBeard02} alt="billBealt01" /> */}</div>
        </div>
    );
}

export default ImageBanner;

import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './BillBeard.module.scss';

const cx = classNames.bind(styles);

function ImageBanner(props) {
    const { data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-info')}>
                <p className={cx('wrapper-info_slogan')}>100% {data.description}</p>
                <p className={cx('wrapper-info_name')}>{data.name} & Món quà tình yêu</p>
                <p className={cx('wrapper-info_note')}>Gấu bông {data.name} được nhiều người yêu thích nhất ! </p>
                <Link to={'/'}>
                    <button className={cx('wrapper-info_btn')}>SHOP NOW</button>
                </Link>
            </div>
            <div className={cx('wrapper-img')}>
                <Link to={'/'}>
                    <img src={data.image} alt="billBealt01" />
                </Link>
            </div>

            {/* <div className={cx('wrapper-info')}></div> */}
        </div>
    );
}

export default ImageBanner;

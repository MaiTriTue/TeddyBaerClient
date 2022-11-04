import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './BillBeardSale.module.scss';
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

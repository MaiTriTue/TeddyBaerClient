import classNames from 'classnames/bind';

import styles from './BillBeardSale.module.scss';
import ImageBannerSale from './ImageBannerSale';

const cx = classNames.bind(styles);

function BillBeardSale() {
    return (
        <div className={cx('wrapper-sale')}>
            <ImageBannerSale />
        </div>
    );
}

export default BillBeardSale;

import classNames from 'classnames/bind';

import styles from './BillBeardSale.module.scss';
import ImageBannerSale from './ImageBannerSale';

const cx = classNames.bind(styles);

function BillBeardSale(props) {
    const { name, sale, image } = props;
    return (
        <div className={cx('wrapper-sale')}>
            <ImageBannerSale name={name} sale={sale} image={image} />
        </div>
    );
}

export default BillBeardSale;

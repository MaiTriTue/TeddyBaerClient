import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './SlideCategory.module.scss';

const cx = classNames.bind(styles);

function NewProduct(props) {
    const { data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper-new-product')}>
            <div className={cx('wrapper-cart-new-product')}>
                <div className={cx('cart-icon-new-product')}>
                    <Link to={`/gau-bong/${data.slug}/${data.id}`}>
                        <img src={data.image} alt={data.name} />
                    </Link>
                </div>
                <div className={cx('cart-info-new-product')}>
                    <Link to={`/gau-bong/${data.slug}/${data.id}`}>
                        <h3 className={cx('cart-name-new-product')}>{data.name}</h3>
                    </Link>
                    <span className={cx('cart-discription-new-product')}>{data.discription}</span>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;

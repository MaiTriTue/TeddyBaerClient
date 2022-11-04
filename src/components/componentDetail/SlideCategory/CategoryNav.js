import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './SlideCategory.module.scss';

const cx = classNames.bind(styles);

function CategoryNav(props) {
    const { data } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper-nav')}>
            <div className={cx('wrapper-cart')}>
                <div className={cx('cart-icon')}>
                    <img src={data.icon} alt="bo hong" />
                </div>
                <div className={cx('cart-name')}>{data.name}</div>
            </div>
        </div>
    );
}

export default CategoryNav;

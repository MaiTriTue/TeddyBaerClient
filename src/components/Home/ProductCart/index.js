import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faHeart, faStar, faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faKissWinkHeart } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ProductCart.module.scss';
import { heartRegule, heartSolid } from '~/assets/iconVector';
import { addCart, addCountProduct } from '~/pages/CartPage/CartPageSlice';

const cx = classNames.bind(styles);

function ProductCart(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cartPage);
    const [countProduct, setCountProduct] = useState(1);
    const [loveProduct, setLoveProduct] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    }, [cartProduct]);

    const handleMinusCount = () => {
        if (countProduct <= 1) {
            setCountProduct(1);
        } else {
            setCountProduct(countProduct - 1);
        }
    };
    const handleAddCount = () => {
        setCountProduct(countProduct + 1);
    };
    const handleAddCart = (event, data) => {
        event.preventDefault();
        dispatch(
            addCart({
                ...data,
                count: countProduct,
            }),
        );
    };
    const handleLoveProduct = (event) => {
        event.preventDefault();
        console.log('click');
        setLoveProduct(loveProduct === false ? true : false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-product')}>
                <div className={cx('product_img')}>
                    <Link to={`/gau-bong/${data.slug}/${data.id}`}>
                        <img src={data.image} alt="gau bong" className={cx('product_img-detail')} />
                    </Link>
                    <div className={cx('product_heart')} onClick={(event) => handleLoveProduct(event)}>
                        {loveProduct === true ? (
                            <img src={heartSolid} alt="12345" className={cx('product_heart-icon')} />
                        ) : (
                            <img src={heartRegule} alt="12345" className={cx('product_heart-icon')} />
                        )}
                    </div>
                </div>
                <div className={cx('product_info')}>
                    <Link to={`/gau-bong/${data.slug}/${data.id}`}>
                        <h3 className={cx('product_info-name')}>{data.name}</h3>
                    </Link>
                    <span className={cx('product_info-rating')}>
                        <FontAwesomeIcon icon={faStar} className={cx('product_info-rating-star')} />
                        <FontAwesomeIcon icon={faStar} className={cx('product_info-rating-star')} />
                        <FontAwesomeIcon icon={faStar} className={cx('product_info-rating-star')} />
                        <FontAwesomeIcon icon={faStar} className={cx('product_info-rating-star')} />
                        <FontAwesomeIcon icon={faStar} className={cx('product_info-rating-star')} />
                        <span className={cx('product_info-rating-number')}>Đã bán: {data.amount_sold}</span>
                    </span>
                    <span className={cx('product_info-price')}>{'VND: ' + data.price}</span>
                </div>
                <div className={cx('product_btn')}>
                    <div className={cx('product_count-product')}>
                        <div className={cx('btn_minus')} onClick={handleMinusCount}>
                            -
                        </div>
                        <span className={cx('product_btn-input')}>{countProduct}</span>
                        <span className={cx('btn_add')} onClick={handleAddCount}>
                            +
                        </span>
                    </div>
                    <button className={cx('btn_add-cart')} onClick={(event) => handleAddCart(event, data)}>
                        Thêm giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;

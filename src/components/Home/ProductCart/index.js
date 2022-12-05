import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'react-cookies';

import styles from './ProductCart.module.scss';
import { heartRegule, heartSolid } from '~/assets/iconVector';
import { addCart } from '~/pages/CartPage/CartPageSlice';
import { ChangeToSlug, ChangeToPrice } from '~/constants/Global';
import { changeTotalPrice } from '~/pages/CartPage/TotalPriceSlice';
import productApi from '~/Apis/productApi';
import { updateInfoLike } from '~/app/userSlice';

const cx = classNames.bind(styles);

function ProductCart(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.current);

    const cartProduct = useSelector((state) => state.cartPage);
    const [countProduct, setCountProduct] = useState(1);
    const [loveProduct, setLoveProduct] = useState(false);
    const navigate = useNavigate();

    const HandleTotalPrice = () => {
        let sum = 0;
        cartProduct.forEach((item, index) => {
            sum += item.curent_price * item.count;
        });
        return sum;
    };

    useEffect(() => {
        if (user) {
            let isCheck = user['infoLike'].some((item, index) => {
                return item['id_product'] === data.id.toString();
            });

            if (isCheck) {
                setLoveProduct(true);
            }
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
        dispatch(changeTotalPrice(HandleTotalPrice()));
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
    const handleLoveProduct = async (event, id_product) => {
        event.preventDefault();
        if (user) {
            try {
                if (!loveProduct) {
                    const response = await productApi.likeProduct(id_product);

                    let newUser = {
                        ...user,
                        infoLike: [...user['infoLike'], { id: '', id_product: data.id.toString(), user: '' }],
                    };

                    dispatch(updateInfoLike(newUser));
                    localStorage.setItem('teddybearbeautyful-ui::rememberedAccounts', JSON.stringify(newUser));
                } else {
                    const response = await productApi.deleteLikeProduct(id_product);

                    let infolike = [];
                    user['infoLike'].forEach((item, index) => {
                        if (item['id_product'] != data.id) {
                            infolike.push(item);
                        }
                    });
                    let newUser = {
                        ...user,
                        infoLike: [...infolike],
                    };

                    dispatch(updateInfoLike(newUser));
                    localStorage.setItem('teddybearbeautyful-ui::rememberedAccounts', JSON.stringify(newUser));
                }
            } catch (error) {
                console.log('Failed to fetch like product: ', error);
            }
        }
        console.log('click');
        setLoveProduct(loveProduct === false ? true : false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-product')}>
                <div className={cx('product_img')}>
                    <Link to={`/gau-bong/${ChangeToSlug(data.name)}/${data.id}`}>
                        <img src={data.image} alt="gau bong" className={cx('product_img-detail')} />
                    </Link>
                    <div className={cx('product_heart')} onClick={(event) => handleLoveProduct(event, data.id)}>
                        {loveProduct === true ? (
                            <img src={heartSolid} alt="12345" className={cx('product_heart-icon')} />
                        ) : (
                            <img src={heartRegule} alt="12345" className={cx('product_heart-icon')} />
                        )}
                    </div>
                </div>
                <div className={cx('product_info')}>
                    <Link to={`/gau-bong/${ChangeToSlug(data.name)}/${data.id}`}>
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
                    <div className={cx('product_info-price')}>
                        <span className={cx('product_info-initial-price')}>
                            {data.initial_price !== data.curent_price ? ChangeToPrice(data.initial_price) : ''}
                        </span>
                        <span className={cx('product_info-current-price')}>{ChangeToPrice(data.curent_price)}</span>
                    </div>
                    {/* <span className={cx('product_info-price')}>{'VND: ' + ChangeToPrice(data.curent_price)}</span> */}
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

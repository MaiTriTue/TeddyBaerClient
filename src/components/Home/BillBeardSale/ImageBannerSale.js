import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './BillBeardSale.module.scss';
import images from '~/assets/images';
import { right } from '~/assets/iconVector';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ImageBanner(props) {
    const { name, sale, image, movieLink } = props;
    const [content, setContent] = useState('');
    const [Sale, setSale] = useState('');
    const [MovieLink, setMovieLink] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setContent(name);
        setSale(sale);
        setMovieLink(movieLink);
    }, []);

    const handleProduct = () => {
        navigate(MovieLink);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-info')}>
                <p className={cx('wrapper-info_slogan')}>
                    {Sale ? Sale : ''}
                    {/* <span className={cx('wrapper-info_slogan-sale')}>
                        <span className={cx('slogan-sale_retangle')}></span>
                        SALE
                    </span> */}
                </p>
                <p className={cx('wrapper-info_name')}>{content ? content : ''}</p>
                {MovieLink ? (
                    <button className={cx('wrapper-info_btn')} onClick={() => handleProduct()}>
                        Chi Tiết
                        <img src={right} alt="down" />
                    </button>
                ) : (
                    ''
                )}
            </div>

            <div className={cx('wrapper-img')}>
                <img src={image ? image : ''} alt="billBealt01" />{' '}
            </div>
        </div>
    );
}

export default ImageBanner;

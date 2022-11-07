import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Apis, { endpoints } from '~/Apis/Apis';
import { useState } from 'react';

import styles from './SlideCategory.module.scss';
import CategoryNav from './CategoryNav';
import NewProduct from './NewProduct';
import { left02, right02, right, nail, teddyBear, rose } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function SlideCategory(props) {
    const { type, title, datas } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('gallery-display-area_slide')}>
                    <div className={cx('gallery-display-area_slide-name')}>
                        <h2>{datas.length !== 0 ? title : ''}</h2>
                        <div className={cx('slyde-name_interactive')}>
                            <span className={cx('slyde-name_interactive-view-all')}>
                                Xem thêm
                                <img src={right} alt="left" />
                            </span>
                            <div className={cx('slyde-name_interactive-move')}>
                                <span className={cx('slyde-name_interactive-pre')}>
                                    <img src={left02} alt="left" />
                                </span>
                                <span className={cx('slyde-name_interactive-next')}>
                                    <img src={right02} alt="left" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('gallery-display-area_slide-carts')}>
                        {datas &&
                            datas.map((item, index) => {
                                if (type === 'category') {
                                    return (
                                        <Link to={item.link} key={index} className={cx('category-carts')}>
                                            <CategoryNav data={item} />
                                        </Link>
                                    );
                                } else if (type === 'NewProduct') {
                                    return <NewProduct data={item} key={index} />;
                                }
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideCategory;

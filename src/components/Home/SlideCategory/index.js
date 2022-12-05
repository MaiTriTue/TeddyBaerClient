import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SlideCategory.module.scss';
import CategoryNav from './CategoryNav';
import NewProduct from './NewProduct';
import { left02, right02, right } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function SlideCategory(props) {
    const { type, title, datas } = props;

    const handlePre = () => {
        console.log('pre');
    };
    const handleNext = () => {
        console.log('next');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('gallery-display-area_slide')}>
                    <div className={cx('gallery-display-area_slide-name')}>
                        <h2>{datas.length !== 0 ? title : ''}</h2>
                        <div className={cx('slyde-name_interactive')}>
                            {type === 'category' ? (
                                ''
                            ) : (
                                <span className={cx('slyde-name_interactive-view-all')}>
                                    <Link to={'/'}>
                                        Xem thêm
                                        <img src={right} alt="left" />
                                    </Link>
                                </span>
                            )}

                            {type === 'category' ? (
                                ''
                            ) : (
                                <div className={cx('slyde-name_interactive-move')}>
                                    <span className={cx('slyde-name_interactive-pre')} onClick={handlePre}>
                                        <img src={left02} alt="left" />
                                    </span>
                                    <span className={cx('slyde-name_interactive-next')} onClick={handleNext}>
                                        <img src={right02} alt="left" />
                                    </span>
                                </div>
                            )}
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

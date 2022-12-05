import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styles from './SearchList.module.scss';

import { useEffect, useRef, useState } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SearchList(props) {
    const { searchvalue, nameList, HandleSelecterProduct } = props;
    const [searchValue, setSearchValue] = useState('');
    const [checkOption, setCheckOption] = useState(false);
    const [NameList, setNameList] = useState('');
    const searchListRef = useRef(null);

    useEffect(() => {
        setSearchValue(searchvalue);
        if (searchvalue) {
            searchListRef.current.style.display = 'block';
            setCheckOption(true);
        }
    }, [searchvalue]);

    useEffect(() => {
        if (checkOption) {
            if (typeof Storage !== 'undefined') {
                if (Number(localStorage.clickcount) !== 0) {
                    localStorage.clickcount = 0;
                }
            }

            window.addEventListener('click', handleWindowClick);
        }

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, [checkOption]);

    const handleWindowClick = () => {
        if (typeof Storage !== 'undefined') {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
            } else {
                localStorage.clickcount = 1;
            }

            if (Number(localStorage.clickcount) > 0) {
                searchListRef.current.style.display = 'none';
                setCheckOption(false);
            }
        }
    };

    useEffect(() => {
        setNameList(nameList);
    }, [nameList]);

    return (
        <div className={cx('wrap-search_list')} ref={searchListRef}>
            <div className={cx('search-item_wrap-content')}>
                <div className={cx('wrap-content_img')}>
                    <img src={images.iconShop} alt="icon-shop" className={cx('content_img')} />
                </div>
                <div className={cx('content_search')}>
                    <span>Tìm SP: {searchValue}</span>
                </div>
            </div>
            {NameList &&
                NameList.map((item, index) => {
                    return (
                        <div
                            className={cx('search-item')}
                            key={index}
                            onClick={() => HandleSelecterProduct(searchListRef, item)}
                        >
                            <span>{item['name']}</span>
                        </div>
                    );
                })}
        </div>
    );
}

export default SearchList;

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SelectBase.module.scss';
import { downArow } from '~/assets/iconVector';

const cx = classNames.bind(styles);

function SelectBase(props) {
    const { defaultValue, options, onChange } = props;
    const [optionData, setOptionData] = useState('');
    const [checkOption, setCheckOption] = useState(false);
    const [isSelecter, setIsSelecter] = useState('');
    const [Label, setLabel] = useState('');
    const wrapOptionRef = useRef(null);

    useEffect(() => {
        setOptionData(options);
        setIsSelecter(defaultValue['label']);
    }, [options]);

    //  Hàm đém số lần click

    // function count() {
    //     if (typeof Storage !== 'undefined') {
    //         if (localStorage.clickcount) {
    //             localStorage.clickcount = Number(localStorage.clickcount) + 1;
    //         } else {
    //             localStorage.clickcount = 1;
    //         }
    //         console.log('Bạn đã nhấn vào nút trên ' + localStorage.clickcount + ' lần.');
    //     } else {
    //         console.log('Rất tiếc, trình duyệt của bạn không hỗ trợ Local Storage...');
    //     }
    // }

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

            if (Number(localStorage.clickcount) > 1) {
                wrapOptionRef.current.style.display = 'none';
                setCheckOption(false);
            }
        }
    };

    const handleSelecter = (event) => {
        event.preventDefault();
        wrapOptionRef.current.style.display = checkOption ? 'none' : 'block';
        setCheckOption(!checkOption);
    };
    const handleOptionvalue = (event, item) => {
        event.preventDefault();
        setIsSelecter(item['label']);
        wrapOptionRef.current.style.display = 'none';
        setCheckOption(false);
        onChange(item);
    };

    return (
        <div className={cx('wrap-select')}>
            <div className={cx('wrap-select_is-selecter')} onClick={(event) => handleSelecter(event)}>
                <div className={cx('is-selecter_wrap-content')}>
                    <span className={cx('is-selecter_content')}>{isSelecter}</span>
                </div>
                <div className={cx('is-selecter_wrap-img')}>
                    <img src={downArow} alt="downArow" className={cx('is-selecter_img')} />
                </div>
            </div>
            <div className={cx('wrap-select_option')} ref={wrapOptionRef}>
                {optionData &&
                    optionData.map((item, index) => {
                        if (index !== 0) {
                            return (
                                <div
                                    key={index}
                                    className={cx('wrap-option')}
                                    onClick={(event) => handleOptionvalue(event, item)}
                                >
                                    <span className={cx('wrap-select_option-span')}>{item['label']}</span>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
    );
}

export default SelectBase;

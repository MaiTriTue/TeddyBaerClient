import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setWidthScreen } from '~/pages/Home/HomeSlice';
import styles from './BillBeard.module.scss';
import { dataBillBeard } from '~/constants/Global';
import ImageBanner from './ImageBanner';

const cx = classNames.bind(styles);

function BillBeard({ children }) {
    const dispatch = useDispatch();
    const widthScreen = useSelector((state) => state.widthScreen);
    const navigate = useNavigate();
    const ImageBannerRef = useRef(null);
    const slideGutterRef = useRef(null);
    const slideDotsRef = useRef(null);

    useEffect(() => {
        let timeId = setInterval(() => {
            if (widthScreen === ImageBannerRef.current.clientWidth * 2) {
                dispatch(setWidthScreen(0));
                handleChangeWidth(widthScreen);
            } else {
                dispatch(setWidthScreen(widthScreen + ImageBannerRef.current.clientWidth));
                handleChangeWidth(widthScreen);
            }
        }, 6000);

        return () => {
            clearInterval(timeId);
        };
    }, [widthScreen]);

    const handleChangeWidth = (number) => {
        slideGutterRef.current.style.marginLeft = '-' + number + 'px';
        if (slideGutterRef.current.style.marginLeft === '0px') {
            slideDotsRef.current.children['slide-dots_01'].className = cx('active');
            slideDotsRef.current.children['slide-dots_02'].classList.remove(cx('active'));
            slideDotsRef.current.children['slide-dots_03'].classList.remove(cx('active'));
        } else if (slideGutterRef.current.style.marginLeft === '-' + ImageBannerRef.current.clientWidth + 'px') {
            slideDotsRef.current.children['slide-dots_02'].className = cx('active');
            slideDotsRef.current.children['slide-dots_01'].classList.remove(cx('active'));
            slideDotsRef.current.children['slide-dots_03'].classList.remove(cx('active'));
        } else if (slideGutterRef.current.style.marginLeft === '-' + ImageBannerRef.current.clientWidth * 2 + 'px') {
            slideDotsRef.current.children['slide-dots_03'].className = cx('active');
            slideDotsRef.current.children['slide-dots_02'].classList.remove(cx('active'));
            slideDotsRef.current.children['slide-dots_01'].classList.remove(cx('active'));
        }
    };

    return (
        <div className={cx('wrapper-slide')}>
            <div className={cx('wrapper-slide_gutter')} ref={slideGutterRef}>
                {dataBillBeard &&
                    dataBillBeard.map((item, index) => {
                        return (
                            <div className={cx('wrapper-slide_item')} key={index} ref={ImageBannerRef}>
                                <ImageBanner data={item} />
                            </div>
                        );
                    })}
            </div>
            <div className={cx('slide-dots')} ref={slideDotsRef}>
                <span id="slide-dots_01" className={cx('active')}></span>
                <span id="slide-dots_02"></span>
                <span id="slide-dots_03"></span>
            </div>
        </div>
    );
}

export default BillBeard;

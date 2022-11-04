import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useStore, actions } from '~/Store';
import styles from './BillBeard.module.scss';
import images from '~/assets/images';
import ImageBanner from './ImageBanner';

const data = [
    {
        id: 1,
        name: ' booque',
        description: 'Bông tự nhiên',
        image: images.billBeard02,
    },
    {
        id: 2,
        name: ' booque02',
        description: 'Bông tự nhiên',
        image: images.billBeard02,
    },
    {
        id: 3,
        name: ' booque03',
        description: 'Bông tự nhiên',
        image: images.billBeard02,
    },
];

const cx = classNames.bind(styles);

function BillBeard({ children }) {
    const [state, dispatch] = useStore();
    const { changeWidth } = state;
    const navigate = useNavigate();
    const ImageBannerRef = useRef(null);
    const slideGutterRef = useRef(null);
    const slideDotsRef = useRef(null);

    useEffect(() => {
        let timeId = setInterval(() => {
            if (changeWidth === ImageBannerRef.current.clientWidth * 2) {
                dispatch(actions.setChangrWidth(0));
                handleChangeWidth(changeWidth);
            } else {
                dispatch(actions.setChangrWidth(changeWidth + ImageBannerRef.current.clientWidth));
                handleChangeWidth(changeWidth);
            }
        }, 6000);
        // console.log(slideDotsRef.current.children['slide-dots_01']);
        // console.log(ImageBannerRef.current.offsetWidth);

        return () => {
            clearInterval(timeId);
        };
    }, [changeWidth]);

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
        // console.log(slideGutterRef.current.style.marginLeft);
        // console.log(slideDotsRef.current.children['slide-dots_01'])
    };

    return (
        <div className={cx('wrapper-slide')}>
            <div className={cx('wrapper-slide_gutter')} ref={slideGutterRef}>
                {data &&
                    data.map((item, index) => {
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

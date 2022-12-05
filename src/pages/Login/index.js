import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import cookies from 'react-cookies';

import styles from './Login.module.scss';

import FormLogin from '~/components/Login/FormLogin';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '~/app/userSlice';
import { ChangeWarningLogin } from '~/pages/Login/LoginSlice';
import { WarningUserLogin } from '~/components';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.current);
    const warningLogin = useSelector((state) => state.login);
    const wrapperRef = useRef(null);
    const warningLoginRef = useRef(null);
    const navigate = useNavigate();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        console.log('warningLogin: ', warningLogin);
        if (warningLogin === true) {
            warningLoginRef.current.style.display = 'block';
        } else if (warningLogin === false) {
            warningLoginRef.current.style.display = 'none';
        }
    }, [warningLogin]);

    // const HandleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (checkUserValid && checkPassValid) {
    //         await Apis.post(endpoints['login'], {
    //             username: userName,
    //             password: password,
    //         })
    //             .then((res) => {
    //                 cookies.save('gbx-actk', res.data.access_token);
    //             })
    //             .catch(function (error) {
    //                 dispatch(actions.setWarningLogin(true));
    //                 console.log(error);
    //             });

    //         await Apis.get(endpoints['current_user'], {
    //             headers: {
    //                 Authorization: `Bearer ${cookies.load('gbx-actk')}`,
    //             },
    //         })
    //             .then((res) => {
    //                 console.log(res.data);
    //                 cookies.save('gbx-u', res.data);
    //                 dispatch(actions.setUserLogin(res.data));
    //                 navigate('/');
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    // };

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleLoginSubmit = async (values) => {
        try {
            const actionResult = await dispatch(getUser(values));
            const currentUser = unwrapResult(actionResult);

            // cookies.save('teddybearbeautyful-ui::rememberedLogin', JSON.stringify(currentUser.infoAuth));
            cookies.save('teddybearbeautyful-ui::rememberedLogin', currentUser.infoAuth);
            localStorage.setItem('teddybearbeautyful-ui::rememberedAccounts', JSON.stringify(currentUser));

            dispatch(ChangeWarningLogin(false));
            console.log('------ 01 Login user: ', currentUser.infoAuth);
            navigate('/');
        } catch (error) {
            dispatch(ChangeWarningLogin(true));
            console.log('Failed to Login: ', error.message);
        }
    };

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <div className={cx('wrapper-warning')} ref={warningLoginRef}>
                <WarningUserLogin />
            </div>
            <div className={cx('gallery-display-area')}>
                <div className={cx('gallery-wrap-title')}>
                    <h2>Đăng nhập</h2>
                </div>

                <div className={cx('gallery-wrap')}>
                    <FormLogin onSubmit={handleLoginSubmit} />

                    <div className={cx('forgot-password')}>
                        <span>
                            <Link to={'/'}>Quên mật khẩu</Link>
                        </span>
                    </div>
                    <div className={cx('wrap-or')}>
                        <div className={cx('cross')}></div>
                        <span>hoặc</span>
                    </div>

                    <div className={cx('gallery-wrap-facebook')}>
                        <div className={cx('wrap-input')}>
                            <input
                                type={'button'}
                                className={cx('login-facebook')}
                                id={'login-facebook'}
                                value={'Facebook'}
                            />
                        </div>
                    </div>
                    <div className={cx('gallery-wrap-input')}>
                        <div className={cx('wrap-input')}>
                            <input
                                type={'button'}
                                className={cx('login-google')}
                                id={'login-google'}
                                value={'Google'}
                            />
                        </div>
                    </div>

                    <div className={cx('forgot-password')}>
                        <span className={cx('quest')}>Chưa có tài khoản?</span>
                        <span>
                            <Link to={'/dang-ky'} className={cx('handle')}>
                                Đăng ký ngay
                            </Link>
                        </span>
                    </div>

                    <div className={cx('forgot-password')}>
                        <span>
                            <Link to={'/'} className={cx('handle')}>
                                Chính sách và quy định
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

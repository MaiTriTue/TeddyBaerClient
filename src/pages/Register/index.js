import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Register.module.scss';
import { FormRegister } from '~/components';
import Apis, { endpoints } from '~/Apis/Apis';
// import {
//     addLastName,
//     addFirstName,
//     addEmail,
//     addUserName,
//     addPassword,
//     setCheckFirstNameValid,
//     setCheckLastNameValid,
//     setCheckEmailValid,
//     setCheckUserValid,
//     setCheckPassValid,
//     setCheckRePassValid,
// } from './RegisterSlice';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { Formik, Form } from 'formik';

const cx = classNames.bind(styles);

function Register() {
    const dispatch = useDispatch();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('gallery-wrap-title')}>
                    <h3>Đăng ký tài khoản</h3>
                </div>

                <div className={cx('gallery-wrap')}>
                    <FormRegister />

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
                    <div className={cx('gallery-wrap-google')}>
                        <div className={cx('wrap-input')}>
                            <input
                                type={'button'}
                                className={cx('login-google')}
                                id={'login-google'}
                                value={'Google'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

// function Register() {
//     const dispatch = useDispatch();

//     const checkFirstNameValid = useSelector((state) => state.register.checkFirstNameValid);
//     const checkLastNameValid = useSelector((state) => state.register.checkLastNameValid);
//     const checkEmailValid = useSelector((state) => state.register.checkEmailValid);
//     const lastName = useSelector((state) => state.register.lastName);
//     const firstName = useSelector((state) => state.register.firstName);
//     const email = useSelector((state) => state.register.email);
//     const userName = useSelector((state) => state.register.userName);
//     const password = useSelector((state) => state.register.password);
//     const checkUserValid = useSelector((state) => state.register.checkUserValid);
//     const checkPassValid = useSelector((state) => state.register.checkPassValid);
//     const checkRePassValid = useSelector((state) => state.register.checkRePassValid);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const HandleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('submit');
//         console.log('checkUserValid: ', checkUserValid);
//         console.log('checkPassValid: ', checkPassValid);
//         console.log('checkRePassValid: ', checkRePassValid);
//         console.log('checkEmailValid: ', checkEmailValid);
//         console.log('checkLastNameValid: ', checkLastNameValid);
//         console.log('checkFirstNameValid: ', checkFirstNameValid);

//         if (
//             checkUserValid &&
//             checkPassValid &&
//             checkRePassValid &&
//             !checkEmailValid &&
//             checkLastNameValid &&
//             checkFirstNameValid
//         ) {
//             const bodyFormData = {
//                 username: userName,
//                 password: password,
//                 last_name: lastName,
//                 first_name: firstName,
//                 email: email,
//             };

//             await Apis.post(endpoints['register'], bodyFormData)
//                 .then((res) => {
//                     console.log(res);
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });

//             // await Apis.post(endpoints['register'], JSON.stringify(bodyFormData), {
//             //     headers: {
//             //         // Accept: 'application/json',
//             //         'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
//             //     },
//             // })
//             //     .then((res) => {
//             //         console.log(res);
//             //     })
//             //     .catch(function (error) {
//             //         console.log(error);
//             //     });
//             // await Apis.post(endpoints['register'], {
//             //     username: userName,
//             //     password: password,
//             //     last_name: lastName,
//             //     first_name: firstName,
//             //     email: email,
//             // })
//             //     .then((res) => {
//             //         console.log(res);
//             //     })
//             //     .catch(function (error) {
//             //         console.log(error);
//             //     });
//             // console.log(lastName);
//             // console.log(firstName);
//             // console.log(email);
//             // console.log(userName);
//             // console.log(password);
//         }
//     };

//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('gallery-display-area')}>
//                 <div className={cx('gallery-wrap-title')}>
//                     <h3>Đăng ký tài khoản</h3>
//                 </div>

//                 <div className={cx('gallery-wrap')}>
//                     <form onSubmit={(e) => HandleSubmit(e)}>
//                         <InputLastName />
//                         <InputFirstName />
//                         <InputEmail />
//                         <InputUserName />
//                         <InputPassword />
//                         <InputRePassword />

//                         <div className={cx('forgot-password')}>
//                             <span>Khi bấm vào nút đăng ký, bạn đã đồng ý với</span>
//                             <h5>
//                                 <Link to={'/'} className={cx('pass-info')}>
//                                     Chính sách và quy định
//                                 </Link>
//                             </h5>
//                         </div>
//                         <div className={cx('gallery-wrap-input')}>
//                             <div className={cx('wrap-input')}>
//                                 <input type={'submit'} className={cx('submit')} id={'submit'} value={'Đăng ký'} />
//                             </div>
//                         </div>
//                     </form>

//                     <div className={cx('wrap-or')}>
//                         <div className={cx('cross')}></div>
//                         <span>hoặc</span>
//                     </div>

//                     <div className={cx('gallery-wrap-facebook')}>
//                         <div className={cx('wrap-input')}>
//                             <input
//                                 type={'button'}
//                                 className={cx('login-facebook')}
//                                 id={'login-facebook'}
//                                 value={'Facebook'}
//                             />
//                         </div>
//                     </div>
//                     <div className={cx('gallery-wrap-google')}>
//                         <div className={cx('wrap-input')}>
//                             <input
//                                 type={'button'}
//                                 className={cx('login-google')}
//                                 id={'login-google'}
//                                 value={'Google'}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Register;

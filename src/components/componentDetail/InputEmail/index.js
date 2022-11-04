import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import styles from './InputEmail.module.scss';
import { useStore, actions } from '~/Store';
import Validator from '../CheckInput';

const cx = classNames.bind(styles);

function InputEmail() {
    const [state, dispatch] = useStore();
    const { email, checkEmailValid } = state;
    const warningUserRef = useRef(null);
    const warningIconRef = useRef(null);
    const warningPassSpecialCharacterRef = useRef(null);
    const checkIconRef = useRef(null);

    const inputRef = useRef(null);

    useEffect(() => {
        if (email.length > 0 && !Validator.validateEmail(email)) {
            dispatch(actions.setCheckEmailValid(true));
        } else {
            dispatch(actions.setCheckEmailValid(false));
        }

        if (Validator.validateEmail(email)) {
            checkIconRef.current.style.display = 'block';
            warningPassSpecialCharacterRef.current.style.display = 'none';
            warningIconRef.current.style.display = 'none';
        } else if (!Validator.validateEmail(email)) {
            checkIconRef.current.style.display = 'none';
        }

        if (email.length === 0) {
            checkIconRef.current.style.display = 'none';
            warningPassSpecialCharacterRef.current.style.display = 'none';
        }
    }, [email]);

    useEffect(() => {
        if (email.length > 0 && !Validator.validateEmail(email)) {
            dispatch(actions.setCheckEmailValid(true));
        }
    }, [checkEmailValid]);

    const HandleEmailBlur = () => {
        if (email.length === 0) {
            warningUserRef.current.style.display = 'block';
            warningIconRef.current.style.display = 'block';
            checkIconRef.current.style.display = 'none';
        }
        if (!Validator.validateEmail(email)) {
            checkIconRef.current.style.display = 'none';
            warningIconRef.current.style.display = 'block';
            warningPassSpecialCharacterRef.current.style.display = 'block';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('gallery-wrap')}>
                    <div className={cx('gallery-wrap-input')}>
                        <div className={cx('wrap-input')}>
                            <input
                                ref={inputRef}
                                type={'text'}
                                className={cx('email')}
                                id={'email'}
                                value={email}
                                onChange={(event) => {
                                    dispatch(actions.setEmailInput(event.target.value));
                                }}
                                onBlur={(e) => HandleEmailBlur(e)}
                                placeholder={'example@gmail.com'}
                            />
                            <div className={cx('wrap-warning-icon')} ref={warningIconRef}>
                                <FontAwesomeIcon icon={faCircleExclamation} className={cx('warning-icon')} />
                            </div>
                            <div className={cx('wrap-check-icon')} ref={checkIconRef}>
                                <FontAwesomeIcon icon={faCheck} className={cx('check-icon')} />
                            </div>
                        </div>

                        <div className={cx('warning-input')}>
                            <span ref={warningUserRef} className={cx('warning-username-input')}>
                                Vui lòng điền Email của bạn
                            </span>
                            <span ref={warningPassSpecialCharacterRef} className={cx('warning-password-input')}>
                                Đây có thể không phải là một Email hợp lệ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputEmail;

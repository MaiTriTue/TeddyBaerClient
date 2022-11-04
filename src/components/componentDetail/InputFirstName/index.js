import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import styles from './InputFirstName.module.scss';
import { useStore, actions } from '~/Store';
import Validator from '../CheckInput';

const cx = classNames.bind(styles);

function InputFirstName() {
    const [state, dispatch] = useStore();
    const { firstName, checkFirstNameValid } = state;
    const warningUserRef = useRef(null);
    const warningIconRef = useRef(null);
    const warningPassSpecialCharacterRef = useRef(null);
    const checkIconRef = useRef(null);

    const inputRef = useRef(null);

    useEffect(() => {
        if (firstName.length > 0 && !Validator.CheckSpecialCharacter(firstName)) {
            dispatch(actions.setCheckFirstNameValid(true));
        } else {
            dispatch(actions.setCheckFirstNameValid(false));
        }
        if (firstName.length > 0) {
            warningUserRef.current.style.display = 'none';
            warningIconRef.current.style.display = 'none';
            checkIconRef.current.style.display = 'block';
        }

        if (Validator.CheckSpecialCharacter(firstName)) {
            checkIconRef.current.style.display = 'none';
            warningPassSpecialCharacterRef.current.style.display = 'block';
            warningIconRef.current.style.display = 'block';
        } else if (!Validator.CheckSpecialCharacter(firstName)) {
            checkIconRef.current.style.display = 'block';
            warningPassSpecialCharacterRef.current.style.display = 'none';
            warningIconRef.current.style.display = 'none';
        }
        if (firstName.length === 0) {
            checkIconRef.current.style.display = 'none';
        }
    }, [firstName]);

    useEffect(() => {
        if (firstName.length > 0 && !Validator.CheckSpecialCharacter(firstName)) {
            dispatch(actions.setCheckFirstNameValid(true));
        }
    }, [checkFirstNameValid]);

    const HandlefirstNameBlur = () => {
        if (firstName.length === 0) {
            warningUserRef.current.style.display = 'block';
            warningIconRef.current.style.display = 'block';
            checkIconRef.current.style.display = 'none';
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
                                className={cx('username')}
                                id={'firstname'}
                                value={firstName}
                                onChange={(event) => {
                                    dispatch(actions.setFirstNameInput(event.target.value));
                                }}
                                onBlur={(e) => HandlefirstNameBlur(e)}
                                placeholder={'Tên'}
                            />
                            <div className={cx('wrap-warning-icon')} ref={warningIconRef}>
                                <FontAwesomeIcon icon={faCircleExclamation} className={cx('warning-icon')} />
                            </div>
                            <div className={cx('wrap-check-icon')} ref={checkIconRef}>
                                <FontAwesomeIcon icon={faCheck} className={cx('check-icon')} />
                            </div>
                        </div>

                        <div className={cx('warning-input')}>
                            <span ref={warningUserRef} className={cx('warning-firstname-input')}>
                                Vui lòng điền Tên của bạn
                            </span>
                            <span ref={warningPassSpecialCharacterRef} className={cx('warning-password-input')}>
                                Tên của bạn không thể chứa các kí tự đặc biệt
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputFirstName;

import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import styles from './InputLastName.module.scss';
import { useStore, actions } from '../../../Store';
import Validator from '../CheckInput';

const cx = classNames.bind(styles);

function InputLastName() {
    const [state, dispatch] = useStore();
    const { lastName, checkLastNameValid } = state;
    const warningUserRef = useRef(null);
    const warningIconRef = useRef(null);
    const warningPassSpecialCharacterRef = useRef(null);
    const checkIconRef = useRef(null);

    const inputRef = useRef(null);

    useEffect(() => {
        if (lastName.length > 0 && !Validator.CheckSpecialCharacter(lastName)) {
            dispatch(actions.setCheckLastNameValid(true));
        } else {
            dispatch(actions.setCheckLastNameValid(false));
        }
        if (lastName.length > 0) {
            warningUserRef.current.style.display = 'none';
            warningIconRef.current.style.display = 'none';
            checkIconRef.current.style.display = 'block';
        }

        if (Validator.CheckSpecialCharacter(lastName)) {
            checkIconRef.current.style.display = 'none';
            warningPassSpecialCharacterRef.current.style.display = 'block';
            warningIconRef.current.style.display = 'block';
        } else if (!Validator.CheckSpecialCharacter(lastName)) {
            checkIconRef.current.style.display = 'block';
            warningPassSpecialCharacterRef.current.style.display = 'none';
            warningIconRef.current.style.display = 'none';
        }
        if (lastName.length === 0) {
            checkIconRef.current.style.display = 'none';
        }
    }, [lastName]);

    useEffect(() => {
        if (lastName.length > 0 && !Validator.CheckSpecialCharacter(lastName)) {
            dispatch(actions.setCheckLastNameValid(true));
        }
    }, [checkLastNameValid]);

    const HandlelastNameBlur = () => {
        if (lastName.length === 0) {
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
                                id={'lastname'}
                                value={lastName}
                                onChange={(event) => {
                                    dispatch(actions.setLastNameInput(event.target.value));
                                }}
                                onBlur={(e) => HandlelastNameBlur(e)}
                                placeholder={'Họ'}
                            />
                            <div className={cx('wrap-warning-icon')} ref={warningIconRef}>
                                <FontAwesomeIcon icon={faCircleExclamation} className={cx('warning-icon')} />
                            </div>
                            <div className={cx('wrap-check-icon')} ref={checkIconRef}>
                                <FontAwesomeIcon icon={faCheck} className={cx('check-icon')} />
                            </div>
                        </div>

                        <div className={cx('warning-input')}>
                            <span ref={warningUserRef} className={cx('warning-lastname-input')}>
                                Vui lòng nhập Họ của bạn
                            </span>
                            <span ref={warningPassSpecialCharacterRef} className={cx('warning-password-input')}>
                                Họ của bạn không thể chứa các kí tự đặc biệt
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputLastName;

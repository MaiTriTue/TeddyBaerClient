import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeWarningLogin } from '~/pages/Login/LoginSlice';

import styles from './Warning.module.scss';

const cx = classNames.bind(styles);

function WarningUserLogin({ children }) {
    const dispatch = useDispatch();
    const warningLogin = useSelector((state) => state.login);

    const handleWarningLogin = () => {
        dispatch(ChangeWarningLogin(false));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery-display-area')}>
                <div className={cx('gallery-wrap')}>
                    <div className={cx('warning-login_header')}>
                        Thông báo
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={cx('warning-login_header-icon')}
                            onClick={handleWarningLogin}
                        />
                    </div>
                    <div className={cx('warning-login_body')}>Tên đăng nhập hoặc mật khẩu không đúng !</div>
                    <div className={cx('warning-login_footer')}>
                        <button className={cx('btn-warning_login')} onClick={handleWarningLogin}>
                            Thử lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WarningUserLogin;

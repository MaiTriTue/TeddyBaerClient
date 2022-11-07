import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FormRegister.module.scss';

import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { Formik, Form, FastField } from 'formik';
import { InputField } from '~/custom-field';

const cx = classNames.bind(styles);

function FormRegister() {
    const dispatch = useDispatch();
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    };

    return (
        <Formik initialValues={initialValues}>
            {(formikProp) => {
                //  do something here...
                const { values, errors, touched } = formikProp;
                console.log(values, errors, touched);

                return (
                    <Form>
                        <FastField name={'firstName'} components={InputField} label={''} placeholder={'Họ'} />
                        <FastField name={'lastName'} components={InputField} label={''} placeholder={'Tên'} />
                        <FastField name={'email'} components={InputField} label={''} placeholder={'@gmail.com'} />
                        <FastField name={'username'} components={InputField} label={''} placeholder={'Tên đăng nhập'} />
                        <FastField name={'password'} components={InputField} label={''} placeholder={'Mật khẩu'} />

                        <div className={cx('forgot-password')}>
                            <span>Khi bấm vào nút đăng ký, bạn đã đồng ý với</span>
                            <h5>
                                <Link to={'/'} className={cx('pass-info')}>
                                    Chính sách và quy định
                                </Link>
                            </h5>
                        </div>

                        <FormGroup>
                            <Button color="primary">Đăng ký</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default FormRegister;

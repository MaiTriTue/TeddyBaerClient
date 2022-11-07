import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FormLogin.module.scss';

import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { Formik, Form, FastField } from 'formik';
import { InputField } from '~/custom-field';

const cx = classNames.bind(styles);

function FormLogin() {
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
                        <FastField name={'username'} components={InputField} label={''} placeholder={'Tên đăng nhập'} />
                        <FastField name={'password'} components={InputField} label={''} placeholder={'Mật khẩu'} />

                        <FormGroup>
                            <Button color="primary">Đăng Nhập</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default FormLogin;

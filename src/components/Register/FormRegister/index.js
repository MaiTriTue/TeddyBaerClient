import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styles from './FormRegister.module.scss';

import { Button, FormGroup } from 'reactstrap';
// import Select from 'react-select';
import { Formik, Form, FastField } from 'formik';
import { InputField, ReactDatePickerField } from '~/custom-field';
import * as Yup from 'yup';

FormRegister.propTypes = {
    onSubmit: PropTypes.func,
};

FormRegister.defaultProps = {
    onSubmit: null,
};

let validationSchema = Yup.object().shape({
    first_name: Yup.string().required('This field is required.'),
    last_name: Yup.string().required('This field is required.'),
    username: Yup.string()
        .min(2, 'Username needs to be between 6 and 32 characters !')
        .max(50, 'Username needs to be between 6 and 32 characters !')
        .required('This field is required.'),
    password: Yup.string()
        .min(6, 'Password needs to be between 6 and 32 characters')
        .max(32, 'Password needs to be between 6 and 32 characters!')
        .required('This field is required.'),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),

    email: Yup.string().email('This field is required.'),
    // website: Yup.string().url(),
    birthday: Yup.string().required('This field is required.'),
});

const cx = classNames.bind(styles);

function FormRegister(props) {
    // const dispatch = useDispatch();
    const initialValues = {
        first_name: '',
        last_name: '',
        birthday: '',
        email: '',
        username: '',
        password: '',
        rePassword: '',
    };

    return (
        <Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
            {(formikProp) => {
                //  do something here...
                const { values, errors, touched } = formikProp;
                // console.log(values, errors, touched);

                return (
                    <Form>
                        <FastField
                            name={'first_name'}
                            component={InputField}
                            label={'firstName'}
                            placeholder={'Ho??'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'last_name'}
                            component={InputField}
                            label={'lastName'}
                            placeholder={'T??n'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'birthday'}
                            component={ReactDatePickerField}
                            label={'N??m sinh'}
                            placeholder={'Nga??y tha??ng n??m sinh'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'email'}
                            component={InputField}
                            label={'Email'}
                            placeholder={'@gmail.com'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'username'}
                            component={InputField}
                            label={'Username'}
                            placeholder={'T??n ????ng nh????p'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'password'}
                            component={InputField}
                            type="password"
                            label={'Password'}
                            placeholder={'M????t kh????u'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'rePassword'}
                            component={InputField}
                            type="password"
                            label={'Repassword'}
                            placeholder={'Nh????p la??i m????t kh????u'}
                            className={'inputField'}
                        />

                        <div className={cx('forgot-password')}>
                            <span>Khi b???m v??o n??t ????ng k??, b???n ???? ?????ng ?? v???i</span>
                            <h5>
                                <Link to={'/'} className={cx('pass-info')}>
                                    Ch??nh s??ch v?? quy ?????nh
                                </Link>
                            </h5>
                        </div>

                        <FormGroup>
                            <Button type="submit" className="buttonField" color="primary">
                                ????ng ky??
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default FormRegister;

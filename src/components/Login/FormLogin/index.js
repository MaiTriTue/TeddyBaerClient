import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormGroup } from 'reactstrap';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';

import styles from './FormLogin.module.scss';
import { InputField } from '~/custom-field';

FormLogin.propTypes = {
    onSubmit: PropTypes.func,
};

FormLogin.defaultProps = {
    onSubmit: null,
};

let validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required.'),
    password: Yup.string().required('This field is required.'),
});

const cx = classNames.bind(styles);

function FormLogin(props) {
    const dispatch = useDispatch();
    const initialValues = {
        username: '',
        password: '',
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
                            name={'username'}
                            component={InputField}
                            label={''}
                            placeholder={'Tên đăng nhập'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'password'}
                            component={InputField}
                            type="password"
                            label={''}
                            placeholder={'Mật khẩu'}
                            className={'inputField'}
                        />
                        <FormGroup>
                            <Button type="submit" color="primary" className="buttonField">
                                Đăng Nhập
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default FormLogin;

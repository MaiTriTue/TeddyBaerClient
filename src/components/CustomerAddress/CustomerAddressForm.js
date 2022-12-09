import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './CustomerAddress.module.scss';
import { Button, FormGroup } from 'reactstrap';

import { Formik, Form, FastField } from 'formik';
import { InputField, ReactDatePickerField } from '~/custom-field';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

CustomerAddressForm.propTypes = {
    onSubmit: PropTypes.func,
};

CustomerAddressForm.defaultProps = {
    onSubmit: null,
};

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let validationSchema = Yup.object().shape({
    first_name: Yup.string().required('This field is required.'),
    last_name: Yup.string().required('This field is required.'),
    phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('This field is required.'),
    address: Yup.string().required('This field is required.'),
    note: Yup.string().min(0).max(999).nullable(true),
});

const cx = classNames.bind(styles);

function CustomerAddressForm(props) {
    const { ChangeInputFirstName, ChangeInputLastName, ChangeInputPhoneNumber, ChangeInputAddress } = props;

    // const dispatch = useDispatch();
    const initialValues = {
        first_name: '',
        last_name: '',
        phone_number: '',
        address: '',
        note: '',
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
                            placeholder={'Họ'}
                            className={'inputField'}
                        />
                        <FastField
                            name={'last_name'}
                            component={InputField}
                            label={'lastName'}
                            placeholder={'Tên'}
                            className={'inputField'}
                        />

                        <FastField
                            name={'phone_number'}
                            component={InputField}
                            label={'Số điện Thoại'}
                            placeholder={'0354******'}
                            className={'inputField'}
                        />

                        {/* <div className={cx('wrapper-header_search-selecte')}>
                            <SelectBase
                                defaultValue={LangueOptions[1]}
                                options={LangueOptions}
                                onChange={handleChangeLangue}
                            />
                        </div> */}
                        <FastField
                            name={'address'}
                            component={InputField}
                            label={'Địa chỉ giao hàng'}
                            placeholder={''}
                            className={'inputField'}
                        />
                        <FastField
                            name={'note'}
                            component={InputField}
                            type="password"
                            label={'Ghi chú'}
                            placeholder={''}
                            className={'inputField'}
                        />

                        <div className={cx('forgot-password')}>
                            <span>Khi bấm vào nút đăng ký, bạn đã đồng ý với</span>
                            <h5>
                                <Link to={'/'} className={cx('pass-info')}>
                                    Chính sách và quy định
                                </Link>
                            </h5>
                        </div>

                        <FormGroup>
                            <Button type="submit" className="buttonField" color="primary">
                                Đăng ký
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default CustomerAddressForm;

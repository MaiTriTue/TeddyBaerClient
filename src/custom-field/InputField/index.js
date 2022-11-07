import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './InputField.module.scss';

import { FormGroup, Input, Label } from 'reactstrap';

const cx = classNames.bind(styles);

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

function InputField(props) {
    const { field, form, type, label, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field;
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                isDisabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    );
}

export default InputField;

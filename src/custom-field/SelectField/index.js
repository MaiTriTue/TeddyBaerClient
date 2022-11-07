import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './SelectField.module.scss';

import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

const cx = classNames.bind(styles);

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
};

function SelectField(props) {
    const { field, form, options, label, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field;

    const selectedOption = options.find((option) => option.value === value);

    const handleSelectedOptionChange = () => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                isDisabled={disabled}
                placeholder={placeholder}
                options={options}
            />
        </FormGroup>
    );
}

export default SelectField;

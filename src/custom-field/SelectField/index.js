import PropTypes from 'prop-types';
import React from 'react';

// import styles from './SelectField.module.scss';

import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    className: PropTypes.string,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
    className: '',
};

function SelectField(props) {
    const { field, form, options, label, placeholder, disabled, className } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

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
                className={showError ? `${className} is-invalid` : className}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;

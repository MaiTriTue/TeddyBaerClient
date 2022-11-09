import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';
import 'react-datepicker/dist/react-datepicker.css';

import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

ReactDatePickerField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

ReactDatePickerField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    className: '',
};

function ReactDatePickerField(props) {
    const [startDate, setStartDate] = useState(new Date());
    const { field, form, type, label, placeholder, disabled, className } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const handleSelectedOptionChange = (date) => {
        // const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: date,
            },
        };
        field.onChange(changeEvent);
    };
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <DatePicker
                id={name}
                {...field}
                dateFormat="dd/MM/yyyy"
                selected={value}
                // selected={startDate}
                onChange={(date) => handleSelectedOptionChange(date)}
                // onChange={(date) => setStartDate(date)}
                onBlur={onBlur}
                disabled={disabled}
                placeholderText={placeholder}
                className={className}
                // className={showError ? `${className} is-invalid` : className}
            />

            {/* <DatePicker
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                isDisabled={disabled}
                placeholderText={placeholder}
                selected={value}
                className={showError ? `${className} is-invalid` : className}
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div
                        style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {'<'}
                        </button>
                        <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                        >
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {'>'}
                        </button>
                    </div>
                )}
            /> */}

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default ReactDatePickerField;

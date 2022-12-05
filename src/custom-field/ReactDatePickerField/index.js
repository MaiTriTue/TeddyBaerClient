import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import range from 'lodash/range';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import SelectField from './SelectField';
import {
    //   ColourOption,
    colourOptions,
    //   FlavourOption,
    //   GroupedOption,
    groupedOptions,
} from '~/constants/Global';

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

    const [day, setDay] = useState({value: '01', label: '01'});
    const [month, setmonth] = useState({value: '01', label: '01'});
    const [year, setyear] = useState({value: '1900', label: '1900'});
    const [date, setdate] = useState('');


    useEffect(() => {
        setdate(year['value'] + '-' +  month['value'] + '-' + day['value'])  ;
           
    }, [day]);

    useEffect(() => {
        setdate(year['value'] + '-' +  month['value'] + '-' + day['value'])  ;
        
    }, [month]);

    useEffect(() => {
        setdate(year['value'] + '-' +  month['value'] + '-' + day['value'])  ;
                
    }, [year]);

    useEffect(() => {
        
        // let date = new Date(day['value'] + '/' + month['value'] + '/' + year['value']);
        console.log('--------------- ok ', date);
        const changeEvent = {
            target: {
                name: name,
                value: date,
            },
        };
        field.onChange(changeEvent);
        
        
    },[date]);

    const handleChangeDay = (value) => {
        console.log('dayValue:', value);
        setDay(value);

    };
    const handleChangeMonth = (value) => {
        console.log('monthValue: ', value);
        setmonth(value);
    };
    const handleChangeYear = (value) => {
        console.log('yearValue: ', value);
        setyear(value);
    };

    return (
        <FormGroup className={'register-form-group'}>
            {label && (
                <Label className={'register-select-label'} for={name}>
                    {label}
                </Label>
            )}

            <SelectField
                handleChangeDay={handleChangeDay}
                handleChangeMonth={handleChangeMonth}
                handleChangeYear={handleChangeYear}
            />

            {/* <DatePicker
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
            /> */}

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default ReactDatePickerField;

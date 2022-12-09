import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import styles from './AddressField.module.scss';
import AddressSelectField from './AddressSelectField';
import {
    //   ColourOption,
    colourOptions,
    //   FlavourOption,
    //   GroupedOption,
    groupedOptions,
} from '~/constants/Global';

import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const cx = classNames.bind(styles);

function AddressField(props) {
    const [startDate, setStartDate] = useState(new Date());
    const { field, form, type, label, placeholder, disabled, className } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const [day, setDay] = useState({ value: '01', label: '01' });
    const [month, setmonth] = useState({ value: '01', label: '01' });
    const [year, setyear] = useState({ value: '1900', label: '1900' });
    const [date, setdate] = useState('');

    useEffect(() => {
        setdate(year['value'] + '-' + month['value'] + '-' + day['value']);
    }, [day]);

    useEffect(() => {
        setdate(year['value'] + '-' + month['value'] + '-' + day['value']);
    }, [month]);

    useEffect(() => {
        setdate(year['value'] + '-' + month['value'] + '-' + day['value']);
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
    }, [date]);

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
        <FormGroup className={'Address-form-group'}>
            {label && (
                <Label className={'Address-select-label'} for={name}>
                    {label}
                </Label>
            )}

            <AddressSelectField
                handleChangeVillage={handleChangeVillage}
                handleChangeCommune={handleChangeCommune}
                handleChangeDistrict={handleChangeDistrict}
                handleChangeProvince={handleChangeProvince}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default AddressField;

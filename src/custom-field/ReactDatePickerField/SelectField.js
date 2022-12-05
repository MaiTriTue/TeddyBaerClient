import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { getYear } from 'date-fns';
import range from 'lodash/range';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './InputField.module.scss';
import Select from 'react-select';
import { dayOptions, monthsOptions, yearOptions } from '~/constants/Global';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function SelectField(props) {
    const { handleChangeDay, handleChangeMonth, handleChangeYear } = props;
    const [startYearOptions, setStartYearOptions] = useState('');
    const YearOptions = useSelector((state) => state.register.year);

    useEffect(() => {
        setStartYearOptions(YearOptions);
    }, [YearOptions]);

    
    return (
        <div className={cx('register-selects')}>
            <Select
                defaultValue={dayOptions[0]}
                options={dayOptions}
                onChange={(value) => handleChangeDay(value)}
                className={cx('register-select-date')}
            />
            <Select
                defaultValue={monthsOptions[0]}
                options={monthsOptions}
                onChange={(value) => handleChangeMonth(value)}
                className={cx('register-select-date')}
            />
            <Select
                // defaultValue={monthsOptions[0]}
                defaultValue={YearOptions[0]}
                options={startYearOptions}
                onChange={(value) => handleChangeYear(value)}
                className={cx('register-select-date')}
            />
        </div>
    );
}

export default SelectField;

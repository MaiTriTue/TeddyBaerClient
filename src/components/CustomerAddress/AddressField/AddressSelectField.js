import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import styles from './AddressField.module.scss';

import { dayOptions, monthsOptions, yearOptions } from '~/constants/Global';
import { useDispatch, useSelector } from 'react-redux';
import SelectBase from '~/components/common/SelectBase';

const cx = classNames.bind(styles);

function AddressSelectField(props) {
    const { handleChangeVillage, handleChangeCommune, handleChangeDistrict, handleChangeProvince } = props;
    const [startYearOptions, setStartYearOptions] = useState('');
    const YearOptions = useSelector((state) => state.register.year);

    useEffect(() => {
        setStartYearOptions(YearOptions);
    }, [YearOptions]);

    return (
        <div className={cx('address-selects')}>
            <SelectBase
                // defaultValue={monthsOptions[0]}
                defaultValue={YearOptions[0]}
                options={startYearOptions}
                onChange={(value) => handleChangeProvince(value)}
                className={cx('register-select-date')}
            />
            <SelectBase
                defaultValue={monthsOptions[0]}
                options={monthsOptions}
                onChange={(value) => handleChangeDistrict(value)}
                className={cx('register-select-date')}
            />
            <SelectBase
                defaultValue={dayOptions[0]}
                options={dayOptions}
                onChange={(value) => handleChangeCommune(value)}
                className={cx('register-select-date')}
            />
            <SelectBase
                defaultValue={dayOptions[0]}
                options={dayOptions}
                onChange={(value) => handleChangeVillage(value)}
                className={cx('register-select-date')}
            />
        </div>
    );
}

export default AddressSelectField;

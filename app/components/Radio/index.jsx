import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { GetValue, Map } from 'helpers';

const MuiRadioButton = (props) => {
  const { defaultValue, items = [], valueField = 'value', labelField = 'label', control, name, onChange, label, checked } = props;
  return (
    <RadioGroup defaultValue={defaultValue}>
      {items && Map(items, (option, index) => (
        <FormControlLabel
          key={index}
          label={GetValue(option, labelField) || label}
          value={GetValue(option, valueField)}
          control={control || <Radio />}
          name={name || 'MuiRadio'}
          onChange={onChange}
          checked={checked}
        />
      ))}
    </RadioGroup>
  );
};

MuiRadioButton.propTypes = {
  defaultValue: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.array,
  valueField: PropTypes.string,
  labelField: PropTypes.string,
  control: PropTypes.element,
  label: PropTypes.node,
  checked: PropTypes.bool
};

export default MuiRadioButton;

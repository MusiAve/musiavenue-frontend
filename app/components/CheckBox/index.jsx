import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const MuiCheckBox = (props) => {
  const { disabled, checked, label, ...restProps } = props;
  return (
    <FormGroup sx={{
      '& .MuiFormControlLabel-root': {
        margin: '0 8px 0 0'
      },
      '& .MuiCheckbox-root': {
        padding: 0,
      }
    }}>
      <FormControlLabel
        disabled={disabled}
        {...restProps}
        control={<Checkbox />}
        label={label}
      />
    </FormGroup>
  );
};

MuiCheckBox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default MuiCheckBox;

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const MuiCheckBox = (props) => {
  const { disabled, checked, label, ...restProps } = props;
  return (
    <FormGroup>
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

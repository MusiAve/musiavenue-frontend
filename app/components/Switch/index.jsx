import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@mui/material';

const MuiSwitchButton = (props) => {
  const label = { inputProps: { 'aria-label': 'MuiSwitch' } };
  return (
    <Switch {...label} {...props} />
  );
};

MuiSwitchButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default MuiSwitchButton;

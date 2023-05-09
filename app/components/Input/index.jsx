import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const MuiInputField = (props) => {
  const { fullWidth, ...rest } = props;
  return <TextField {...rest} fullWidth={fullWidth || true} />;
};

MuiInputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default MuiInputField;

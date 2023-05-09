import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@mui/material';
import { GetValue, Map } from 'helpers';

const MuiListField = (props) => {
  const {
    items = [],
    fullWidth,
    valueField = 'value',
    labelField = 'label',
    defaultValue,
    defaultChecked,
    multiple = false,
    ...restProps
  } = props;
  return (
    <TextField
      SelectProps={{ multiple }}
      {...restProps}
      select
      fullWidth={fullWidth || true}
    >
      {items && items.length > 0 ? (
        Map(items, (option, index) => (
          <MenuItem
            key={index}
            defaultValue={defaultValue || ''}
            defaultChecked={defaultChecked || true}
            value={GetValue(option, valueField) || ''}
          >
            {GetValue(option, labelField)}
          </MenuItem>
        ))
      ) : (
        <MenuItem sx={{ pointerEvents: 'none', color: '#000' }} disabled>
          No data found
        </MenuItem>
      )}
    </TextField>
  );
};

MuiListField.propTypes = {
  fullWidth: PropTypes.bool,
  items: PropTypes.array,
  valueField: PropTypes.string,
  labelField: PropTypes.string,
  defaultValue: PropTypes.any,
  defaultChecked: PropTypes.bool,
  multiple: PropTypes.bool,
};

export default MuiListField;

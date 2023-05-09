import React, { useState } from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { VisibilityIcon, VisibilityOffIcon } from 'helpers/Icons';

const MuiPasswordInput = (props) => {
  const { label, placeholder, InputProps, fullWidth, showText, hideText, ...rest } = props;

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShow((prevState) => !prevState);
  };

  return (
    <TextField
      {...rest}
      placeholder={placeholder}
      autoComplete='new-password'
      label={label}
      type={isPasswordShow ? 'text' : 'password'}
      fullWidth={fullWidth || true}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position='end'>
            {showText && hideText ?
              <Box onClick={handleShowPassword}>
                {isPasswordShow ? hideText : showText}
              </Box>
              : <IconButton onClick={handleShowPassword}>
                {isPasswordShow ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>}
          </InputAdornment>
        ),
      }}
      sx={[
        (theme) => ({
          marginBottom: '16px',
          [theme.breakpoints.down('lg')]: {
            '& .MuiInputBase-root': {
              paddingRight: 0,
            },
          },
        }),
      ]}
    />
  );
};

MuiPasswordInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
  showText: PropTypes.string,
  hideText: PropTypes.string
};

export default MuiPasswordInput;

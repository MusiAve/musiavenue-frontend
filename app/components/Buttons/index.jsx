import React from 'react';
import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';

function MuiButton(props) {
  const { variant, loadingPosition, children, ...restProps } = props;
  return (
    <LoadingButton
      {...restProps}
      loadingPosition={loadingPosition}
      variant={variant || 'contained'}
      sx={{
        backgroundColor: 'primary.main !important',
        fontSize: 15,
        padding: '8px 20px',
        fontWeight: 400,
        '& .MuiLoadingButton-loadingIndicator': {
          color: '#fff',
        }
      }}
    >{children}</LoadingButton>
  );
};

MuiButton.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loadingPosition: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.any
};

export default MuiButton;

import React from 'react';
import { MuiIconButton } from 'components';
import PropTypes from 'prop-types';
import { CloseIcon } from 'helpers/Icons';

class Toast {
	toast = {
		enqueueSnackbar: () => { },
		closeSnackbar: () => { },
	};
	options = { anchorOrigin: { horizontal: 'right', vertical: 'top' }, autoHideDuration: 3000, action: (key) => <CloseButton onClose={() => this.toast.closeSnackbar(key)} /> };

	setSnackBar(enqueueSnackbar, closeSnackbar) {
		this.toast.enqueueSnackbar = enqueueSnackbar;
		this.toast.closeSnackbar = closeSnackbar;
	}

	success(msg, options = this.options) {
		return this.toast.enqueueSnackbar(msg, { ...options, variant: 'success' });
	}
	warning(msg, options = this.options) {
		return this.toast.enqueueSnackbar(msg, { ...options, variant: 'warning' });
	}
	info(msg, options = this.options) {
		return this.toast.enqueueSnackbar(msg, { ...options, variant: 'info' });
	}
	error(msg, options = this.options) {
		return this.toast.enqueueSnackbar(msg, { ...options, variant: 'error' });
	}
	default(msg, options = this.options) {
		return this.toast.enqueueSnackbar(msg, { ...options, variant: 'default' });
	}
	closeSnackbar(key) {
		this.toast.closeSnackbar(key);
	}
}

export default new Toast();

const CloseButton = (props) => {
	const { onClose } = props;
	return (
		<MuiIconButton aria-label="Close notification" color="inherit" onClick={() => onClose()}>
			<CloseIcon fontSize="small" />
		</MuiIconButton>
	);
};

CloseButton.propTypes = {
	onClose: PropTypes.func
};

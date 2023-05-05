import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { MuiButton, MuiDiaLog, MuiDialogActions, MuiDialogContent, MuiDialogContentText, MuiDialogTitle } from 'components';

const CustomAlert = (props) => {
	const { title = '', description = '', giveAnswer, options = {} } = props;
	return (
		<MuiDiaLog open aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
			<MuiDialogTitle>{title}</MuiDialogTitle>
			<MuiDialogContent>
				<MuiDialogContentText>{description}</MuiDialogContentText>
			</MuiDialogContent>
			<MuiDialogActions>
				<MuiButton onClick={() => giveAnswer(false)}>{options.negativeButton || 'No'}</MuiButton>
				<MuiButton onClick={() => giveAnswer(true)}>{options.postiveButton || 'Yes'}</MuiButton>
			</MuiDialogActions>
		</MuiDiaLog>
	);
};

const Alert = (props) => {
	const confirmRoot = document.createElement('div');
	const root = ReactDOM.createRoot(confirmRoot);
	const { title = '', description = '', options = {} } = props;
	return new Promise((res) => {
		const giveAnswer = (answer) => {
			res(answer);
			confirmRoot.remove();
			root.unmount();
		};
		root.render(<CustomAlert title={title} description={description} options={options} giveAnswer={giveAnswer} />);
	});
};

CustomAlert.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	giveAnswer: PropTypes.func,
	options: PropTypes.object
};
Alert.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	options: PropTypes.object
};

export default Alert;

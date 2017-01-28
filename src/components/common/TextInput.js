import React, {PropTypes} from 'react';
import classnames from 'classnames';

const TextInput = ({name, label, onChange, onBlur, placeholder, value, error, type}) => {
	return (
		<div className={classnames('form-group', {'has-error' : error})}>
			<label htmlFor={name} className="control-label">{label}</label>
			<input
				type={type}
				name={name}
				className="form-control"
				value={value}
        onBlur={onBlur}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
  onBlur: PropTypes.func
};

TextInput.defaultProps = {
	type: 'text'
};

export default TextInput;

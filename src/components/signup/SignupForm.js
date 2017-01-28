// import React, {PropTypes} from 'react';
// import { connect } from 'react-redux';
// import { map } from 'lodash';
// import classnames from 'classnames';
//
// import TextInput from '../common/TextInput';
// import timezones from '../../data/timezones';
// import validateInput from '../../../server/shared/validations/signup';
//
// class SignupForm extends React.Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			username: '',
// 			email: '',
// 			password: '',
// 			passwordConfirmation: '',
// 			timezone: '',
// 			invalid: false,
// 			isLoading: false,
// 			errors: {}
// 		};
//
// 		this.onChange = this.onChange.bind(this);
// 		this.onSubmit = this.onSubmit.bind(this);
// 		this.checkUserExists = this.checkUserExists.bind(this);
// 	}
//
// 	onChange(e) {
// 		this.setState({
// 			[e.target.name]: e.target.value
// 		});
// 	}
//
// 	isValid() {
// 		const { errors, isValid } = validateInput(this.state);
//
// 		if(!isValid) {
// 			this.setState({ errors });
// 		}
//
// 		return isValid;
// 	}
//
// 	checkUserExists(e) {
// 		const field = e.target.name;
// 		const val = e.target.value;
// 		if(val !== '') {
// 			this.props.isUserExists(val).then(res => {
//
// 			});
// 		}
// 	}
//
// 	onSubmit(e) {
// 		e.preventDefault();
//
// 		if(this.isValid()) {
// 			this.setState({errors: {}, isLoading: true});
// 			this.props.userSignupRequest(this.state).then(
// 				() => {
// 					this.props.addFlashMessage({
// 						type: 'success',
// 						text: 'You signed up successfully. Welcome!'
// 					});
// 					this.context.router.push('/');
//
// 				},
// 				(err) => {
// 					this.setState({ errors: err.response.data, isLoading: false });
// 				}
// 			);
// 		}
// 	}
//
// 	render() {
// 		const { errors } = this.state;
// 		const options = map(timezones, (val, key) =>
// 			<option key={val} value={val}>{key}</option>
// 		);
// 		return (
// 			<form onSubmit={this.onSubmit}>
// 				<h1>Join our community!</h1>
// 				<TextInput
// 					error={errors.username}
// 					label="Username"
// 					checkUserExists={this.checkUserExists}
// 					onChange={this.onChange}
// 					value={this.state.username}
// 					name="username"
// 				/>
// 				<TextInput
// 					error={errors.email}
// 					label="Email"
// 					onChange={this.onChange}
// 					value={this.state.email}
// 					name="email"
// 				/>
// 				<TextInput
// 					error={errors.password}
// 					label="Password"
// 					onChange={this.onChange}
// 					value={this.state.password}
// 					name="password"
// 					type="password"
// 				/>
// 				<TextInput
// 					error={errors.passwordConfirmation}
// 					label="Password Confirmation"
// 					onChange={this.onChange}
// 					value={this.state.passwordConfirmation}
// 					name="passwordConfirmation"
// 					type="password"
// 				/>
// 				<div className={classnames('form-group', {'has-error' : errors.timezone})}>
// 					<label className="control-label">Timezone</label>
// 					<select
// 						name="timezone"
// 						className="form-control"
// 						value={this.state.timezone}
// 						onChange={this.onChange}
// 					>
// 						<option value="" disabled>- Choose</option>
// 						{options}
// 					</select>
// 					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
// 				</div>
// 				<div className="form-group">
// 					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
// 						Sign up
// 					</button>
// 				</div>
// 			</form>
// 		);
// 	}
// }
//
// SignupForm.propTypes = {
// 	userSignupRequest: PropTypes.func.isRequired,
// 	addFlashMessage: PropTypes.func.isRequired,
// 	isUserExists: PropTypes.func.isRequired
// };
//
// SignupForm.contextTypes = {
// 	router: React.PropTypes.object.isRequired
// };
//
// export default connect(null, { userSignupRequest, addFlashMessage })(SignupForm);

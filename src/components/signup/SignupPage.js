import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignupForm2 from './SignupForm2';
import * as signupActions from '../../actions/signupActions';
import validateInput from '../../../server/shared/validations/signup';

class SignupPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: Object.assign({}, this.props.user),
      invalid: false,
      isLoading: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    // console.log(e);
    // this.setState({
    //   [e.target.name]: e.target.value
    // });

    const field = e.target.name;
    let user = this.state.user;
    user[field] = e.target.value;
    return this.setState({user});
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExists(e) {
    const val = e.target.value;
    if(val !== '') {
      // this.props.actions.isUserExists(val).then(res => {
      //
      // });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({errors: {}, isLoading: true});
      this.props.actions.userSignupRequest(this.state).then(
        () => {
          this.props.actions.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/');
        },
        (err) => {
          this.setState({ errors: err.response.data, isLoading: false });
        }
      );
    }
  }

	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm2
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            checkUserExists={this.checkUserExists}
            errors={this.state.errors}
            user={this.state.user}
          />
				</div>
			</div>
		);
	}
}

SignupPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

SignupPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let user = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    timezone: ''
  };
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signupActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);

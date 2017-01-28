import React, {PropTypes} from 'react';
import classnames from 'classnames';
import { map } from 'lodash';

import TextInput from '../common/TextInput';
import timezones from '../../data/timezones';

const SignupForm2 = ({ onChange, checkUserExists, onSubmit, errors, user }) => {
  const options = map(timezones, (val, key) =>
    <option key={val} value={val}>{key}</option>
  );

	return (
    <form onSubmit={onSubmit}>
      <h1>Join our community!</h1>
      <TextInput
        error={errors.username}
        label="Username"
        onBlur={checkUserExists}
        onChange={onChange}
        value={user.username}
        name="username"
      />
      <TextInput
        error={errors.email}
        label="Email"
        onChange={onChange}
        value={user.email}
        name="email"
      />
      <TextInput
        error={errors.password}
        label="Password"
        onChange={onChange}
        value={user.password}
        name="password"
        type="password"
      />
      <TextInput
        error={errors.passwordConfirmation}
        label="Password Confirmation"
        onChange={onChange}
        value={user.passwordConfirmation}
        name="passwordConfirmation"
        type="password"
      />
      <div className={classnames('form-group', {'has-error' : errors.timezone})}>
        <label className="control-label">Timezone</label>
        <select
          name="timezone"
          className="form-control"
          value={user.timezone}
          onChange={onChange}
        >
          <option value="" disabled>- Choose</option>
          {options}
        </select>
        {errors.timezone && <span className="help-block">{errors.timezone}</span>}
      </div>
      <div className="form-group">
        <button disabled={user.isLoading} className="btn btn-primary btn-lg">
          Sign up
        </button>
      </div>
    </form>
	);
};

SignupForm2.propTypes = {
	onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func.isRequired,
  errors: PropTypes.object,
  user: PropTypes.object.isRequired
};

export default SignupForm2;

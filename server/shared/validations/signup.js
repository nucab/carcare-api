import Validator from 'validator';
import { isEmpty } from 'lodash';

export default function validateInput(data) {

  const { user } = data;
  let errors = {};

  if(Validator.isEmpty(user.username)) {
    errors.username = 'This field is required';
  }
  if(Validator.isEmpty(user.email)) {
    errors.email = 'This field is required';
  } else {
    if(!Validator.isEmail(user.email)) {
      errors.email = 'Email is invalid';
    }
  }

  if(Validator.isEmpty(user.password)) {
    errors.password = 'This field is required';
  }

  if(Validator.isEmpty(user.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }

  if(!Validator.equals(user.password, user.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if(Validator.isEmpty(user.timezone)) {
    errors.timezone = 'This field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

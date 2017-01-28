import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import commonValidations from '../shared/validations/signup';
import { isEmpty } from 'lodash';

import User from '../models/user';

let app = express();
let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  const { email, username } = data.user;

  return User.query({
    where: { email },
    orWhere: { username }
  }).fetch().then(user => {
    if(user) {
      if(user.get('username') === username) {
        errors.username = 'Username not available';
      }
      if(user.get('email') === email) {
        errors.email = 'Email not available';
      }
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }
  })
}

router.post('/', (req, res) => {

  validateInput(req.body, commonValidations).then(( { errors, isValid}) => {
    if(isValid) {
      const { username, password, timezone, email } = req.body.user;
      const password_digest = bcrypt.hashSync(password);

      User.forge({
        username, timezone, email, password: password_digest
      }, {hasTimestamps: true}).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));
    } else {
      res.status(400).json(errors);
    }
  });
});

router.get('/test', (req, res) => {
  console.log(app.get('env'));
  res.send({ env: app.get('env'), app: false });
});

export default router;

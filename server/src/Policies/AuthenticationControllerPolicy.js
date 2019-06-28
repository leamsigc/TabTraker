const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      name: Joi.string(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,50}$')),
    };
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please enter a valid email',
          });
          break;
        case 'name':
          res.status(400).send({
            error: 'Please enter your name correctly',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the fallowing rules:
            <br>
            1. It must contain ONLY the fallowing characters : lower case , upper case, numerics.
            <br>
            2. Must be at least 8 characters in length and not longer than 50 character in length.
            `,
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid Registration information',
          });
      }
    } else {
      next();
    }
  },
};

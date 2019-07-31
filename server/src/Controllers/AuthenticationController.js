// CREATE A NEW USER RECORD AND STORAGE TO DATABASE
const { User } = require('../Models');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(400).send({
        error: 'This Email Account is already in use',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'Login information was incorrect ',
        });
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return req.status(403).send({
          error: 'Please check your password',
        });
      }
      return res.send({
        user: user.toJSON(),
      });
    } catch (err) {
      return res.status(500).send({
        error: 'Login information was incorrect... ',
      });
    }
  },
};

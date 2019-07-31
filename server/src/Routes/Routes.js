const AuthenticationController = require('../Controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('../Policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      hello: 'Hello from the app',
    });
  });
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationController.login);
};

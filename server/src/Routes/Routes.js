const AuthenticationController = require('../Controllers/AuthenticationController');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      hello: 'Hello from the app',
    });
  });
  app.post('/register', AuthenticationController.register);
};

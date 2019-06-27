module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      hello: 'Hello from the app',
    });
  });
  app.post('/register', (req, res) => {
    res.send({
      message: `hello ${req.body.name}${req.body.email}have register have fun `,
    });
  });
};

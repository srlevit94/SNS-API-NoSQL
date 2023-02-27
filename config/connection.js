const { connect, connection } = require('mongoose');

connect('mongodb://localhost/sns_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
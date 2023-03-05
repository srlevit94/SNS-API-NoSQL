const { connect, connection } = require('mongoose');

// Connect to Mongo and assign DB name
connect('mongodb://localhost/sns_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
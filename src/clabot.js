(function() {
  'use strict';
  var app, config, options, port, signees;

  config = require('./config');
  options = config.options;

  signees = require('./lib/signees');
  options.getContractors = signees.getSignees;
  options.addContractor = signees.addSignee

  app = require('clabot').createApp(options);

  port = options.port || 1337;

  app.listen(port);

  console.log("Listening on " + port);

}).call(this);

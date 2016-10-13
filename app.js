var express = require('express');
var app = module.exports = express();

require('./config/environment.js')(app, express);
require('./config/routes.js')(app);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening for connections on port 3000...');
});

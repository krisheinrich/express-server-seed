var morgan = require('morgan');
var errorHandler = require('errorhandler');

module.exports = function(app, express) {

    app.use(morgan('combined'));

    var env = process.env.NODE_ENV || 'development';
    if ('development' == env) {
        app.use(errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    } else if ('production'== env) {
        app.use(errorHandler());
    }
};

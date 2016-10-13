module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('This server is working properly and ready for some content!');
    });
};

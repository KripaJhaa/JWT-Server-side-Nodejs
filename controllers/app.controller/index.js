const controller = require('./controller').MainController;

class MainClass {

    init(app) {
        app.route('/login').post(controller.login);
        //for each route/api after getting auth token I verify the user
        app.route('/check').post(this.verifyToken, controller.check);
    }

    verifyToken(req, res, next) {
        // Get auth header value
        const bearerHeader = req.headers['authorization'];
        // Check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            // Next middleware
            next();
        } else {
            // Forbidden
            res.sendStatus(403);
        }

    }
}

module.exports.MainClass = new MainClass();
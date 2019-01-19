const mongoUrl = require('./Config/mongoUrl').mongoUrl;
const mongoose = require("mongoose");

module.exports = function (app) {

    mongoose.connect(mongoUrl, {
        useNewUrlParser: true
    }, (err, db) => {
        if (!err) {
            console.log('mongoose connected...')
            return db;
        } else {
            console.log('mongoose not connected')
        }

    });
    mongoose.Promise = global.Promise;

    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);

    if (app) {
        app.set("mongoose", mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}
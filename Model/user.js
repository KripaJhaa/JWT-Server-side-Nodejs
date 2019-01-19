const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var user = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    count: {
        type: Number
    }
})
module.exports = mongoose.model("user", user);
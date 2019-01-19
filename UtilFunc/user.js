const user = require('../Model/user')

const update = (data) => {
    user.findByIdAndUpdate({
        _id: data._id
    }, {
        $inc: {
            count: 1
        }
    }, (err, user) => {
        return user;
    })
}

module.exports = {
    update
};
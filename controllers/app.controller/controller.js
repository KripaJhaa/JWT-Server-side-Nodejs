const jwt = require('jsonwebtoken');
const secretkey = require('../../Config/secretkey').secretKey;
const utilfunc = require('../../UtilFunc/user');

module.exports.MainController = {

    async login(req, res) {
        //mock user
        const user = {
            _id: 1,
            _username: "kripa shankar",
            _email: "kripashankarjha9@gmail.com",
            count: 0
        }

        jwt.sign({
                user
            },
            secretkey, {
                expiresIn: 60 * 60
            }, (err, token) => {
                if (!err) {
                    res.json({
                        token
                    })
                } else {
                    res.sendStatus(403);
                }
            })
    },
    async check(req, res) {
        jwt.verify(req.token, secretkey, (err, authData) => {
            if (!err) {
                //It can update the counter here since user is authanticated
                try {
                    utilfunc.update(authData);
                    res.json({
                        "message": "Increament counter",
                        authData
                    })
                } catch (err) {
                    res.send(err).status(402);
                }

            } else {
                res.sendStatus(403);
            }
        })

    }
};
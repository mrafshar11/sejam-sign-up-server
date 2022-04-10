const SejamModel = require("../model/user")
const mailer = require('../utils/mailer')


let registerCode;

exports.registerStep1 = (req, res) => {
    const { email } = req.body;
    registerCode = parseInt(Math.random() * 90000 + 10000);
    mailer.sendEmail(email, registerCode);
    console.log(`${email} ${registerCode}`)
    res.json({ regState: "fullStep1" })
}

exports.registerStep2 = async (req, res, next) => {
    const { verifyCode, nationalCode, costumerType } = req.body;
    try {
        if (registerCode != verifyCode) {
            const error = new Error('not match verify code')
            error.statusCode = 401;
            console.log(error)
            throw error;
        }
        res.status(200).json({ regState2: "fullStep2" })

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}
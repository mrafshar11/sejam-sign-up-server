const bcrypt = require('bcrypt')

const { schema, schema2 } = require('./yupValidation1')
const SejamModel = require("../model/user")

let fields;

exports.mainRegister1 = async (req, res, next) => {


    try {
        const result = await schema.validate(req.body);
        fields = result;
        res.status(200).json({ regState3: "fullStep3" });

    } catch (err) {
        err.statusCode = 401;
        next(err)
    }


}

exports.mainRegister2 = (req, res) => {

    schema2.validate(req.body).then(async result => {

        let picUrl = `images/${req.file.filename}`;


        let {
            province,
            city,
            region,
            bankName,
            accountNumber,
            sheba,
        } = result

        let {
            cName,
            fatherName,
            certificateCode,
            lastName,
            birthPlace,
            certificatePlace,
            gender,
            nationalCode,
            certificateSerial1,
            certificateSerial2,
            certificateSerial3,
        } = fields

        let hashedNationalCode = await bcrypt.hash(nationalCode, 12);

        const sejamUser = new SejamModel({
            province,
            city,
            region,
            bankName,
            accountNumber,
            sheba,
            cName,
            fatherName,
            certificateCode,
            lastName,
            birthPlace,
            certificatePlace,
            gender,
            hashedNationalCode,
            certificateSerial1,
            certificateSerial2,
            certificateSerial3,
            picUrl
        })

        await sejamUser.save();

        res.json({ regState4: "fullAllSteps" })
    }).catch(err => {
        console.log(err)
        res.json({ errors: err.errors, regState4: "notFull" })
    })
}




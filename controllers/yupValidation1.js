const Yup = require('yup');

exports.schema = Yup.object().shape({
    cName: Yup.string().required().min(2).max(20),
    fatherName: Yup.string().required().min(2).max(20),
    lastName: Yup.string().required().min(2).max(25),
    birthPlace: Yup.string().required().min(2).max(20),
    certificateCode: Yup.string().required().min(2).max(10),
    nationalCode: Yup.string().required().length(10),
    certificatePlace: Yup.string().required().min(2).max(20),
    gender: Yup.string().required(),
    certificateSerial1: Yup.string().required(),
    certificateSerial2: Yup.string().required(),
    certificateSerial3: Yup.string().required()
})


exports.schema2 = Yup.object().shape({
    province: Yup.number().required().min(1).max(5),
    city: Yup.number().required().min(1).max(25),
    region: Yup.number().required().min(1),
    bankName: Yup.number().required().min(1).max(5),
    accountNumber: Yup.string().required().matches(/[1-5][1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9]/),
    sheba: Yup.string().required().length(10),
    
    
})


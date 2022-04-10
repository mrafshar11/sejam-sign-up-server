const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({

    cName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    certificateCode: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthPlace: {
        type: String,
        required: true
    },
    certificatePlace: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hashedNationalCode: {
        type: String,
        required: true,
        unique: true
    },
    certificateSerial1: {
        type: String,
        required: true
    },
    certificateSerial2: {
        type: String,
        required: true
    },
    certificateSerial3: {
        type: String,
        required: true
    },
    province: {
        type: Number,
        required: true
    },
    city: {
        type: Number,
        required: true
    },
    region: {
        type: Number,
        required: true
    },
    bankName: {
        type: Number,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    sheba: {
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("SejamUser", userSchema)
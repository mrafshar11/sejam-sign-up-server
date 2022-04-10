
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mysejamtestok@gmail.com',
    pass: '80121390'
  }
});

const mailOptions = {
  from: 'hadiansari1779@gmail.com',
  to: 'farafaraz192@gmail.com',
  subject: 'متن تست سابجکت',
  text: 'متن تست ایمیل'
};


exports.sendEmail = (email, registerCode) => {
  transporter.sendMail({
    from: 'mysejamtestok@gmail.com',
    to: email,
    subject: 'کد تایید اعتیار',
    html: `${registerCode}`
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}


const captchapng = require('captchapng');

let CAPTCHA_NUM;

exports.getCaptcha = (req, res) => {
    CAPTCHA_NUM = parseInt(Math.random() * 90000 + 10000);
    const p = new captchapng(80, 30, CAPTCHA_NUM);
    p.color(60, 116, 60, .9);
    p.color(221, 86, 45);
    const img = p.getBase64();
    const imageBase64 = Buffer.from(img, "base64");
    res.send(imageBase64);
    exports.cap = CAPTCHA_NUM;
}


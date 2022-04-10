const { Router } = require('express');

const captchaController = require('../controllers/captchaController')

const router = new Router();


router.get("/captcha.png", captchaController.getCaptcha);

router.get("/cap", (req, res) => {
    const captcha = captchaController.cap;
    res.json({ captcha: captcha })
})

module.exports = router;
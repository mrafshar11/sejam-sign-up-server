const { Router } = require('express');

const registerController = require('../controllers/registerController')


const router = new Router();


router.post("/step1", registerController.registerStep1);

router.post("/step2", registerController.registerStep2);




module.exports = router;
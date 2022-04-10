const { Router } = require('express');

const upload = require('../utils/multer')
const mainRegisterController = require('../controllers/mainRegisterController')
//const mainRegisterController = require('../controllers/mainRegisterController')


const router = new Router();


router.post("/step1", mainRegisterController.mainRegister1)

router.post("/step2",upload.single('picUrl'), mainRegisterController.mainRegister2)


module.exports = router;
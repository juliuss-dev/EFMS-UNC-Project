const express = require('express')
const router = express.Router();
//middleware
const {signupValidator, signinValidator, validatorResult} = require("../middleware/validator")
//controller
const {singupController, signinController} = require("../controller/auth");
const { authenticateJWT } = require('../middleware/authenticator');

router.post("/signup", signupValidator, validatorResult, singupController)
// router.put("/:accountId", signupValidator, validatorResult, signupControllerUpdate)
router.post("/signin", signinValidator, validatorResult, signinController)


module.exports = router;

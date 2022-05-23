const express = require("express");
const router = express.Router();
//middleware
const {
  signupValidator,
  signinValidator,
  validatorResult,
} = require("../middleware/validator");
//controller
const {
  singupController,
  signinController,
  GetUsers,
  GetUser,
  DeleteUser,
  GetReservations,
} = require("../controller/auth");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/signup", signupValidator, validatorResult, singupController);
// router.put("/:accountId", signupValidator, validatorResult, signupControllerUpdate)
router.post("/signin", signinValidator, validatorResult, signinController);

router.get("/users", GetUsers);
router.get("/signup/:userId", GetUser);
router.delete("/delete/:userId", DeleteUser);
// router.get("/users/:username/reservation", GetReservations);
module.exports = router;

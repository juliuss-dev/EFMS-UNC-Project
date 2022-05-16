const express = require("express");
const router = express.Router();

const Departments = require("../controller/Departments");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", Departments.create);

module.exports = router;

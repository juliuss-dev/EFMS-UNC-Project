const express = require("express");
const router = express.Router();

const IctDepartmentInventory = require("../controller/IctDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", IctDepartmentInventory.create);

module.exports = router;

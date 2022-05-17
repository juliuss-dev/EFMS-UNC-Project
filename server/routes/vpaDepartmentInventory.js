const express = require("express");
const router = express.Router();

const VpaDepartmentInventory = require("../controller/VpaDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", VpaDepartmentInventory.create);

module.exports = router;

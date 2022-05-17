const express = require("express");
const router = express.Router();

const ImcDepartmentInventory = require("../controller/ImcDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", ImcDepartmentInventory.create);

module.exports = router;

const express = require("express");
const router = express.Router();

const ImcDepartmentInventory = require("../controller/ImcDepartmentInventory");
const { authenticateJWT } = require("../middleware/authenticator");

router.post("/", ImcDepartmentInventory.create);
router.get("/", ImcDepartmentInventory.readAll);

module.exports = router;
